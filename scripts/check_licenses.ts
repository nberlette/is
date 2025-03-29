#!/usr/bin/env -S deno run --allow-read --allow-write

// deno-lint-ignore-file no-inner-declarations

/**
 * check_license_header.ts
 *
 * This script checks all .ts files in the repository for an up-to-date
 * copyright header. It will insert or update headers as needed.
 *
 * File-processing work is offloaded to a worker pool (using
 * node:worker_threads) while the template is precompiled in a dedicated
 * worker.
 *
 * Usage: node ./check_license_header.ts [--dry-run]
 *   --template=path/to/template.txt [--exclude="pattern1,pattern2" ...]
 *
 * The external template supports these placeholders:
 *   - {{ MODULE }}    : computed module name (e.g. @nick/is/array-buffer)
 *   - {{ YEAR_INIT }} : the initial copyright year (e.g. 2024)
 *   - {{ YEAR }}      : the current year (e.g. 2025)
 */

import {
  isMainThread,
  parentPort,
  Worker,
  workerData,
} from "node:worker_threads";
import { readFile, writeFile } from "node:fs/promises";
import { extname, relative, resolve } from "node:path";
import process from "node:process";

import { parseArgs } from "jsr:@std/cli@1/parse-args";
import { expandGlob } from "jsr:@std/fs@1/expand-glob";

import { AtomicMutex, type BaseArgs, printDiagnostics } from "./_utils.ts";
import pkg from "../deno.json" with { type: "json" };

/* ----------------------------- Configuration ----------------------------- */

const DEFAULT_TEMPLATE_PATH = resolve(
  new URL("./copyright-template.tpl", import.meta.url).pathname,
);
const DEFAULT_EXCLUDE = [
  "node_modules",
  ".git",
  "build",
  "docs",
  "?coverage",
  "scripts",
  "*.test.*",
  "**/*.bench.*",
];
const SOURCE_EXT = ".ts";
const SOURCE_DIR = ".";
const DEFAULT_YEAR_INIT = 2024;

/* --------------------------- Shared Types --------------------------- */

interface BaseDiagnostic {
  severity: string;
  file: string;
  message: string;
  line?: number;
  column?: number;
  snippet?: string;
  hasChanges?: boolean;
}

interface WithChanges {
  hasChanges: true;
  oldContent: string;
  newContent: string;
}

type Diagnostic =
  | (BaseDiagnostic & { severity: "info" })
  | (BaseDiagnostic & { severity: "warning" })
  | (BaseDiagnostic & { severity: "error" })
  | (BaseDiagnostic & { severity: "debug" })
  | (BaseDiagnostic & WithChanges & { severity: "info" | "warning" });

/**
 * The structure of the precompiled template.
 */
interface CompiledTemplate {
  templateText: string;
  patterns: {
    docs: string;
    pkg: string;
    version: string;
    start: string;
    end: string;
    short_module: string;
    full_module: string;
  };
  constants: {
    docs: string;
    pkg: string;
    version: string;
    start: string;
    end: string;
  };
}

/* ------------------------- Utility Functions ------------------------- */

/**
 * Recursively interpolates template expressions.
 *
 * @param input The template text.
 * @param context A record mapping keys to a tuple of [RegExp, replacement].
 * @returns The interpolated text.
 */
function interpolate<const T extends Record<string, readonly [RegExp, string]>>(
  input: string,
  context: T,
): string {
  let result = input;
  let replaced = false;
  let iteration = 0;
  const MAX_ITERATIONS = 100;
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  if (input.trim() === "" || Object.keys(context).length === 0) return result;
  do {
    replaced = false;
    for (const [_, [regex, value]] of Object.entries(context)) {
      result = result.replace(regex, (match, fallback) => {
        let replacement = value;
        if (
          replacement === "" && typeof fallback === "string" &&
          fallback.trim() !== ""
        ) {
          const fallbackValue = fallback.trim().replace(/^["']|["']$/g, "");
          replacement = interpolate(fallbackValue, context);
        }
        if (replacement !== match) replaced = true;
        return replacement;
      });
    }
    iteration++;
  } while (
    replaced && iteration < MAX_ITERATIONS && /\{\{.*?\}\}/.test(result)
  );
  return result;
}

/**
 * Computes the module name from a file path.
 *
 * @param filePath The file path.
 * @param slugOnly Whether to return a short module name.
 * @returns The computed module name.
 */
function computeModuleName(filePath: string, slugOnly?: boolean): string {
  if (!filePath) return "";
  let rel = relative(SOURCE_DIR, filePath);
  rel = rel.replace(new RegExp(`${extname(rel)}$`), "");
  const modulePath = rel
    .split(/[\\\/]/)
    .filter((p) => p && p !== ".")
    .join("/")
    .replace(/(?<=\w)_/g, "-");
  let pathStr = modulePath.replace(/^(?:(?:\.{1,2}\/)+)?src\//, "");
  pathStr = pathStr.replace(/[_.-](test|bench|spec)$/, "");
  if (slugOnly) return pathStr === "mod" ? "" : pathStr.replace(/.*\//, "");
  return pathStr === "mod" ? pkg.name : `${pkg.name}/${pathStr}`;
}

/**
 * Generates the expected header text for a given module using the precompiled template.
 *
 * @param moduleName The module name.
 * @returns The generated header text.
 */
function generateHeader(moduleName: string): string {
  if (!globalThis.template) {
    throw new Error("Template not initialized in worker.");
  }
  const ct: CompiledTemplate = globalThis.template;
  const patterns = {
    docs: [
      new RegExp(ct.patterns.docs, "gi"),
      ct.constants.docs,
    ] as const,
    pkg: [new RegExp(ct.patterns.pkg, "gi"), ct.constants.pkg] as const,
    version: [
      new RegExp(ct.patterns.version, "gi"),
      ct.constants.version,
    ] as const,
    start: [
      new RegExp(ct.patterns.start, "gi"),
      ct.constants.start,
    ] as const,
    end: [new RegExp(ct.patterns.end, "gi"), ct.constants.end] as const,
    short_module: [
      new RegExp(ct.patterns.short_module, "gi"),
      computeModuleName(moduleName, true),
    ] as const,
    full_module: [
      new RegExp(ct.patterns.full_module, "gi"),
      computeModuleName(moduleName, false),
    ] as const,
  };
  return interpolate(ct.templateText, patterns);
}

// shared singleton mutex instance

/* ------------------------ Command-line Parsing ------------------------ */

interface ParsedArgs extends BaseArgs {
  template: string;
  exclude: string[];
  dryRun: boolean;
  rest: Record<string, unknown>;

  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

function getParsedArgs<
  T extends Omit<ParsedArgs, "dryRun" | "rest" | "files"> & {
    "dry-run": boolean;
    files?: string[];
    rest?: Record<string, unknown>;
    _?: (string | number)[];
  },
>(args: T): ParsedArgs {
  const {
    template,
    exclude,
    help,
    silent,
    verbose,
    version,
    cwd,
    debug,
    "dry-run": dryRun,
    _,
    ...rest
  } = args;
  const files = [...args.files ?? [], ..._ ?? []].filter(Boolean).map(String);
  return {
    version,
    help,
    cwd,
    template,
    exclude,
    dryRun,
    files,
    silent,
    verbose,
    debug,
    rest,
  };
}

const parsedArgs = parseArgs(process.argv.slice(2), {
  string: ["template", "exclude", "cwd"],
  collect: ["exclude"],
  boolean: ["dry-run", "debug", "verbose", "help", "silent"],
  alias: {
    template: ["t", "tpl", "file", "path", "f"],
    exclude: ["e", "x", "ignore", "excluded"],
    cwd: ["C", "dir", "root"],
    "dry-run": ["d", "n"],
    debug: ["b", "dbg"],
    verbose: ["V"],
    version: ["v"],
    silent: ["s", "S", "quiet", "q"],
    help: ["h", "H", "?", "info", "usage"],
  },
  default: {
    template: DEFAULT_TEMPLATE_PATH,
    exclude: DEFAULT_EXCLUDE,
    cwd: SOURCE_DIR,
    "dry-run": false,
    debug: false,
    verbose: false,
    version: false,
    silent: false,
    help: false,
  },
});
const args = getParsedArgs(parsedArgs);
if (args.version) {
  console.log(pkg.version);
  process.exit(0);
}
if (args.help) {
  console.error(`
Usage

  ./check_license_header.ts [--template=<path>] [--exclude=<glob>...] [flags]

  ./check_license_header.ts [--help] [--version]

Flags

  -t, --template=<path>   Path to the license header template file.
  -e, --exclude=<glob>    Exclude files matching the glob pattern.
  -d, --dry-run           Perform a dry run without modifying files.
  -V, --verbose           Enable verbose output.
  -s, --silent            Suppress all output.
  -b, --debug             Enable debug output.
  -h, -?, --help          Show this help message.
  -v, --version           Show the version of the script.

`);
  process.exit(0);
}
const templatePath = resolve(
  new URL(args.template, import.meta.url).pathname,
);

const DEFAULT_TEMPLATE_TEXT = `
/*!
 * Copyright (c) {{ start }}-{{ end }} ${pkg.author.name}. All rights reserved.
 * @license MIT (https://nick.mit-license.org/{{ start }})
 * @see https://jsr.io/{{ pkg }}@{{ version }}/doc/{{ module }}
 */
`.trim();

/* ------------------------ Worker Mode Selection ------------------------ */

declare global {
  // eslint-disable-next-line no-var
  var template: CompiledTemplate | undefined;
}

/* ---------------------------- Main Thread ---------------------------- */

if (isMainThread) {
  // 1. Spawn the template worker to read and precompile the template.
  const templateWorker = new Worker(new URL(import.meta.url), {
    workerData: { type: "template", templatePath },
  });
  const template: CompiledTemplate = await new Promise(
    (resolve) => {
      templateWorker.on("message", (msg) => {
        if (msg.type === "compiled") resolve(msg.template);
      });
    },
  );
  templateWorker.terminate();

  // 2. Gather file entries.
  const fileEntries: string[] = [];
  const pattern = `${SOURCE_DIR}/**/*${SOURCE_EXT}`;
  for await (
    const entry of expandGlob(pattern, {
      exclude: args.exclude,
      includeDirs: false,
    })
  ) {
    if (!entry.isFile) continue;
    if (args.exclude.some((p) => entry.path.includes(p))) continue;
    if (entry.path.includes("node_modules")) continue;
    if (entry.path === new URL(import.meta.url).pathname) continue;
    if (entry.path === templatePath) continue;
    fileEntries.push(entry.path);
  }

  // 3. Create a worker pool for file processing.
  const concurrencyLimit = 8;
  const taskQueue = fileEntries.slice();
  const diagnosticsAggregate: Diagnostic[] = [];
  let finishedWorkers = 0;
  const workers: Worker[] = [];
  function assignTask(worker: Worker) {
    if (taskQueue.length > 0) {
      const filePath = taskQueue.shift()!;
      worker.postMessage({ type: "task", filePath, dryRun: args.dryRun });
    } else {
      worker.postMessage({ type: "exit" });
    }
  }

  for (let i = 0; i < concurrencyLimit; i++) {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: { type: "process", template },
    });
    worker.on("message", (msg) => {
      if (msg.type === "request") {
        assignTask(worker);
      } else if (msg.type === "result") {
        diagnosticsAggregate.push(...msg.diagnostics);
      }
    });
    worker.on("exit", () => {
      if (++finishedWorkers >= concurrencyLimit) process.exit(0);
    });
    workers.push(worker);
  }

  process.on("SIGINT", () => {
    console.error("\nReceived SIGINT. Exiting...");
    for (const worker of workers) {
      worker.postMessage({ type: "exit" });
      worker.terminate();
    }
    process.exit(0);
  });

  process.on("beforeExit", () => printDiagnostics(diagnosticsAggregate, args));
} else {
  // In a worker thread.
  if (workerData.type === "template") {
    // Template precompilation worker.
    let templateText = DEFAULT_TEMPLATE_TEXT;
    try {
      templateText = await readFile(workerData.templatePath, "utf8");
    } catch { /* ignore */ }
    // Build the compiled template.
    const compiled: CompiledTemplate = {
      templateText,
      patterns: {
        docs:
          "\\{\\{\\s*(?:(?:docs_url|documentation|api|docs)|(?:docs|api)_(?:link|path|page))(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        pkg:
          "\\{\\{\\s*(?:package|pkg|library|lib|project)(?:_?(?:name|id|slug))?(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        version: "\\{\\{\\s*version(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        start:
          "\\{\\{\\s*(?:start|(?:year_)?(?:launched|published|created|pushed|init(?:ialized)?|from)(?:_?(?:at|year))?)(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        end:
          "\\{\\{\\s*(?:end|now|present|(?:year_)?(?:current|now|present|end))(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        short_module:
          "\\{\\{\\s*(?:module|mod|submodule)(?:_?(name|id|slug))?(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
        full_module:
          "\\{\\{\\s*(?:(?:long|full)_?name|specifier)?(?:\\s*\\|\\|\\s*(.+?))?\\s*\\}\\}",
      },
      constants: {
        docs: `https://jsr.io/${pkg.name}/${pkg.version}/doc/{{ module }}`,
        pkg: pkg.name,
        version: pkg.version,
        start: DEFAULT_YEAR_INIT.toString(),
        end: new Date().getFullYear().toString(),
      },
    };
    parentPort?.postMessage({
      type: "compiled",
      template: compiled,
    });
  } else if (workerData.type === "process") {
    // File processor worker.
    globalThis.template = workerData.template;
    parentPort?.on("message", async (msg) => {
      if (msg.type === "task") {
        const { filePath, dryRun } = msg;
        try {
          const diagnostics = await processFile(filePath, dryRun);
          parentPort?.postMessage({ type: "result", diagnostics });
        } catch (e) {
          parentPort?.postMessage({
            type: "result",
            diagnostics: [{
              file: filePath,
              message: `Worker error: ${(e as Error).message}`,
              severity: "error",
            }],
          });
        }
        parentPort?.postMessage({ type: "request" });
      } else if (msg.type === "exit") {
        process.exit(0);
      }
    });
    parentPort?.postMessage({ type: "request" });

    /* -------------------------- File Processing -------------------------- */

    /**
     * Processes a single file: checks for an existing header, updates or inserts it as needed.
     *
     * @param filePath The file path.
     * @param dryRun Whether to perform a dry-run.
     * @returns An array of diagnostics.
     */
    async function processFile(
      filePath: string,
      dryRun: boolean,
    ): Promise<Diagnostic[]> {
      const mutex = new AtomicMutex(); // one per file
      const diagnostics: Diagnostic[] = [];
      let content = "";
      const lock = await mutex.acquire();
      try {
        try {
          await lock.runInAsyncScope(async () => {
            content = await readFile(filePath, "utf8");
          });
        } catch (e) {
          diagnostics.push({
            file: filePath,
            message: `Failed to read file: ${(e as Error).message}`,
            severity: "error",
          });
          return diagnostics;
        }
        const lines = content.split("\n");
        const directiveRegex =
          /^(#!.*|\/\/\s*(deno-(?:fmt|lint)-ignore(?:-file)?|(?:eslint|@ts|dprint|prettier)-ignore).*)$/;
        const headerStartRegex = /^\s*\/\*!/;
        const headerEndRegex = /\*\/\s*$/;

        // Determine the insertion index (after any directive lines)
        let insertIndex = 0;
        while (
          insertIndex < lines.length && directiveRegex.test(lines[insertIndex])
        ) insertIndex++;

        // Look for an existing header block.
        let headerStartIndex: number | null = null;
        let headerEndIndex: number | null = null;
        if (insertIndex < lines.length) {
          // headerStartIndex = insertIndex;
          headerStartIndex = lines.findIndex((s) => headerStartRegex.test(s));
          if (headerStartIndex === -1) {
            headerStartIndex = headerEndIndex = null;
          } else {
            for (let i = headerStartIndex; i < lines.length; i++) {
              if (headerEndRegex.test(lines[i])) {
                headerEndIndex = i;
                break;
              }
            }
            if (headerEndIndex === null) {
              diagnostics.push({
                file: filePath,
                message:
                  "Header block start detected but no closing '*/' found.",
                severity: "error",
                line: headerStartIndex + 1,
              });
              return diagnostics;
            }
          }
        }

        const expectedHeader = generateHeader(filePath);
        if (headerStartIndex !== null && headerEndIndex !== null) {
          const existingHeader = lines.slice(
            headerStartIndex,
            headerEndIndex + 1,
          ).join("\n").trim();

          if (headerStartIndex !== insertIndex) {
            diagnostics.push({
              file: filePath,
              message:
                `Invalid header location! Expected at line ${
                  insertIndex + 1
                }, but found on ${headerStartIndex + 1}.\n\n` +
                `\x1b[1;4;95mhelp\x1b[0m Header blocks can only be preceded by directive comments or a shebang, such\n` +
                `     as \x1b[92m${"`"}// deno-lint-ignore-file${"`"}\x1b[39m or \x1b[92m${"`"}#!/usr/bin/env -S deno run -A${"`"}\x1b[0m. All other\n` +
                `     lines must be placed \x1b[4mafter\x1b[0m the header comment.\n`,
              severity: "error",
              line: headerStartIndex + 1,
              snippet: [
                "\x1b[2m" +
                (lines.at(Math.max(0, headerStartIndex - 1)) ?? "") + "\x1b[0m",
                lines.slice(headerStartIndex, headerEndIndex + 1).map((line) =>
                  `\x1b[1;91m${line}\x1b[0m`
                ).join("\n"),
                "\x1b[2m" + (lines.at(headerEndIndex + 1) ?? "") + "\x1b[0m",
              ].join("\n"),
            });
            return diagnostics;
          }

          if (existingHeader !== expectedHeader) {
            const oldContent = content;
            const newContent = [
              ...lines.slice(0, headerStartIndex),
              expectedHeader,
              ...lines.slice(headerEndIndex + 1),
            ].join("\n");
            diagnostics.push({
              file: filePath,
              message:
                "Updating outdated header block with latest copyright info.",
              severity: "warning",
              line: headerStartIndex + 1,
              snippet: existingHeader.split("\n").slice(0, 5).join("\n"),
              hasChanges: true,
              oldContent,
              newContent,
            });
            content = newContent;
            if (content !== oldContent) {
              if (dryRun) {
                diagnostics.push({
                  file: filePath,
                  message: "Dry run mode. No changes made.",
                  severity: "debug",
                });
                return diagnostics;
              } else {
                try {
                  await lock.runInAsyncScope(async () => {
                    await writeFile(filePath, content);
                  });
                  diagnostics.push({
                    file: filePath,
                    message: "File updated successfully.",
                    severity: "info",
                    hasChanges: true,
                    oldContent,
                    newContent,
                  });
                } catch (e) {
                  diagnostics.push({
                    file: filePath,
                    message: `Failed to write updated file: ${
                      (e as Error).message
                    }`,
                    severity: "error",
                  });
                }
              }
            }
          } else {
            diagnostics.push({
              file: filePath,
              message: "Header is up-to-date, no changes needed.",
              severity: "debug",
              line: headerStartIndex + 1,
            });
          }
        } else {
          const oldContent = content;
          const newContent = [
            ...lines.slice(0, insertIndex),
            expectedHeader,
            ...lines.slice(insertIndex),
          ].join("\n");
          diagnostics.push({
            file: filePath,
            message: `No header block found. Inserting ${
              expectedHeader.split(/\n/).length
            } lines at line ${insertIndex + 1}.`,
            severity: "warning",
            line: insertIndex + 1,
            snippet: lines.slice(Math.max(0, insertIndex - 1), insertIndex + 6)
              .join(
                "\n",
              ),
            hasChanges: true,
            oldContent,
            newContent,
          });
          content = newContent;
          if (content !== oldContent) {
            if (dryRun) {
              diagnostics.push({
                file: filePath,
                message: "Dry run mode. No changes made.",
                severity: "debug",
              });
              return diagnostics;
            } else {
              try {
                await lock.runInAsyncScope(async () => {
                  await writeFile(filePath, content);
                });
                diagnostics.push({
                  file: filePath,
                  message: "File updated successfully.",
                  severity: "info",
                  hasChanges: true,
                  oldContent,
                  newContent,
                });
              } catch (e) {
                diagnostics.push({
                  file: filePath,
                  message: `Failed to write updated file contents: ${
                    (e as Error).message
                  }`,
                  severity: "error",
                });
              }
            }
          }
        }

        return diagnostics;
      } finally {
        mutex.release();
      }
    }
  }
}
