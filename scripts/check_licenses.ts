#!/usr/bin/env -S deno run --allow-read --allow-write

// deno-lint-ignore-file no-inner-declarations

/**
 * check_license_header.ts
 *
 * This script checks all .ts files in the repository for an up-to-date copyright header.
 * It will insert or update headers as needed.
 *
 * File-processing work is offloaded to a worker pool (using node:worker_threads) while
 * the template is precompiled in a dedicated worker.
 *
 * Usage:
 *   node ./check_license_header.ts [--dry-run] --template=path/to/template.txt [--exclude="pattern1,pattern2" ...]
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
import { AsyncResource } from "node:async_hooks";
import { extname, relative, resolve } from "node:path";
import { parseArgs } from "jsr:@std/cli@1/parse-args";
import { expandGlob } from "jsr:@std/fs@1/expand-glob";
import pkg from "../src/deno.json" with { type: "json" };
import process from "node:process";

/* ----------------------------- Configuration ----------------------------- */

const DEFAULT_TEMPLATE_PATH = resolve(
  new URL("./copyright-template.tpl", import.meta.url).pathname,
);
const _DEFAULT_EXCLUDE = [
  "node_modules",
  ".git",
  "build",
  "docs",
  "?coverage",
  "scripts",
  "**/*.test.*",
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
  patternRegexes: {
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
  if (!globalThis.compiledTemplate) {
    throw new Error("Template not initialized in worker.");
  }
  const ct: CompiledTemplate = globalThis.compiledTemplate;
  const patterns = {
    docs: [
      new RegExp(ct.patternRegexes.docs, "gi"),
      ct.constants.docs,
    ] as const,
    pkg: [new RegExp(ct.patternRegexes.pkg, "gi"), ct.constants.pkg] as const,
    version: [
      new RegExp(ct.patternRegexes.version, "gi"),
      ct.constants.version,
    ] as const,
    start: [
      new RegExp(ct.patternRegexes.start, "gi"),
      ct.constants.start,
    ] as const,
    end: [new RegExp(ct.patternRegexes.end, "gi"), ct.constants.end] as const,
    short_module: [
      new RegExp(ct.patternRegexes.short_module, "gi"),
      computeModuleName(moduleName, true),
    ] as const,
    full_module: [
      new RegExp(ct.patternRegexes.full_module, "gi"),
      computeModuleName(moduleName, false),
    ] as const,
  };
  return interpolate(ct.templateText, patterns);
}

/**
 * A simple async mutex.
 */
class AtomicMutex<T> {
  #locked = false;
  #waiting: Array<() => void> = [];

  acquire(): Promise<AsyncResource> {
    return new Promise((resolve) => {
      if (!this.#locked) {
        this.#locked = true;
        resolve(new AsyncResource("Mutex"));
      } else {
        this.#waiting.push(() => resolve(new AsyncResource("Mutex")));
      }
    });
  }

  release(): void {
    if (this.#waiting.length > 0) {
      const next = this.#waiting.shift()!;
      next();
    } else {
      this.#locked = false;
    }
  }
}

const mutex = new AtomicMutex();

/* ------------------------ Command-line Parsing ------------------------ */

interface ParsedArgs {
  template: string;
  exclude: string[];
  dryRun: boolean;
  help: boolean;
  silent: boolean;
  verbose: boolean;
  debug: boolean;
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
    debug,
    "dry-run": dryRun,
    _: files,
    ...rest
  } = args;
  return {
    template,
    exclude,
    dryRun,
    files,
    help,
    silent,
    verbose,
    debug,
    rest,
  };
}

const parsedArgs = parseArgs(process.argv.slice(2), {
  string: ["template", "exclude"],
  collect: ["exclude"],
  boolean: ["dry-run", "debug", "verbose", "help", "silent"],
  alias: {
    template: ["t", "tpl", "file", "path", "f"],
    exclude: ["e", "x", "ignore", "excluded"],
    "dry-run": ["d", "n"],
    debug: ["d", "dbg"],
    verbose: ["v", "V"],
    silent: ["s", "S", "quiet", "q"],
    help: ["h", "H", "?", "info", "usage"],
  },
  default: {
    template: DEFAULT_TEMPLATE_PATH,
    exclude: ["node_modules", ".git", "build", "docs", "?coverage", "scripts"],
    "dry-run": false,
    debug: false,
    verbose: false,
    silent: false,
  },
});
const argsGlobal = getParsedArgs(parsedArgs);
const templatePath = resolve(
  new URL(argsGlobal.template, import.meta.url).pathname,
);

/* ------------------------ Worker Mode Selection ------------------------ */

declare global {
  // eslint-disable-next-line no-var
  var compiledTemplate: CompiledTemplate | undefined;
}

/* ---------------------------- Main Thread ---------------------------- */

if (isMainThread) {
  // 1. Spawn the template worker to read and precompile the template.
  const templateWorker = new Worker(new URL(import.meta.url), {
    workerData: { type: "template", templatePath },
  });
  const compiledTemplate: CompiledTemplate = await new Promise(
    (resolveTemplate) => {
      templateWorker.on("message", (msg) => {
        if (msg.type === "templateCompiled") {
          resolveTemplate(msg.compiledTemplate);
        }
      });
    },
  );
  templateWorker.terminate();

  // 2. Gather file entries.
  const fileEntries: string[] = [];
  const pattern = `${SOURCE_DIR}/**/*${SOURCE_EXT}`;
  for await (
    const entry of expandGlob(pattern, {
      exclude: argsGlobal.exclude,
      includeDirs: false,
    })
  ) {
    if (!entry.isFile) continue;
    if (argsGlobal.exclude.some((p) => entry.path.includes(p))) continue;
    if (entry.path.includes("node_modules")) continue;
    if (entry.path === new URL(import.meta.url).pathname) continue;
    if (entry.path === templatePath) continue;
    fileEntries.push(entry.path);
  }

  // 3. Create a worker pool for file processing.
  const concurrencyLimit = 32;
  const taskQueue = fileEntries.slice();
  const diagnosticsAggregate: Diagnostic[] = [];
  let finishedWorkers = 0;
  const workers: Worker[] = [];
  function assignTask(worker: Worker) {
    if (taskQueue.length > 0) {
      const filePath = taskQueue.shift()!;
      worker.postMessage({ type: "task", filePath, dryRun: argsGlobal.dryRun });
    } else {
      worker.postMessage({ type: "exit" });
    }
  }

  for (let i = 0; i < concurrencyLimit; i++) {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: { type: "fileProcessor", compiledTemplate },
    });
    worker.on("message", (msg) => {
      if (msg.type === "requestTask") {
        assignTask(worker);
      } else if (msg.type === "result") {
        diagnosticsAggregate.push(...msg.diagnostics);
      }
    });
    worker.on("exit", () => {
      finishedWorkers++;
      if (finishedWorkers === concurrencyLimit) {
        process.exit(0);
      }
    });
    workers.push(worker);
  }

  process.on("SIGINT", () => {
    console.log("\nReceived SIGINT. Exiting...");
    for (const worker of workers) {
      worker.postMessage({ type: "exit" });
      worker.terminate();
    }
    process.exit(0);
  });

  process.on("beforeExit", () => {
    printDiagnostics(diagnosticsAggregate);
  });

  /**
   * Pretty-prints the aggregated diagnostics.
   *
   * @param diags Array of diagnostics.
   */
  function printDiagnostics(diags: Diagnostic[]): void {
    if (diags.length === 0) {
      console.log("All files processed successfully with no issues.");
      return;
    }
    console.log("Diagnostics Report:");

    const grouped = Map.groupBy(diags, ({ file }) => file);
    const sorted = [...grouped].sort(([a, va], [b, vb]) => {
      // sort first by the number of diagnostics in each file (those with more
      // come first), then by file name, and finally by line number (ascending)
      const aCount = va.length, bCount = vb.length;
      if (aCount !== bCount) return bCount - aCount;
      if (a !== b) return a.localeCompare(b);
      const aLine = va[0].line ?? 0, bLine = vb[0].line ?? 0;
      return aLine - bLine;
    });
    for (const [file, items] of sorted) {
      if (items.length === 0 || argsGlobal.silent) continue;
      const hasChanges = items.some((d) => d.hasChanges);
      const hasErrors = items.some((d) => d.severity === "error");
      const hasWarnings = items.some((d) => d.severity === "warning");
      const hasInfos = items.some((d) => d.severity === "info");
      const hasDebug = items.some((d) => d.severity === "debug");
      const hasAny = hasChanges || hasErrors || hasWarnings || hasInfos ||
        hasDebug;
      if (!hasAny && !argsGlobal.verbose) continue;
      console.log(
        `\n\x1b[94m ┌╴\x1b[96m${file}\x1b[39;94m╶${
          "─".repeat(Math.max(0, 100 - file.length - 2))
        }┐\x1b[0m`,
      );
      for (let i = 0; i < items.length; i++) {
        const d = items[i];
        if (
          d.severity === "debug" && !d.hasChanges && !argsGlobal.verbose &&
          !argsGlobal.debug
        ) continue;
        console.log(`\x1b[94m │\x1b[0m`);
        const colors = { info: 35, warning: 33, error: 31, debug: 2 } as const;
        console.log(
          `\x1b[94m ├╴\x1b[0m \x1b[${
            colors[d.severity ?? "error"]
          }m[${d.severity}]\x1b[0m ${d.message.trim()}\n\x1b[94m │\x1b[0m`,
        );
        if (d.snippet) {
          console.log(
            d.snippet
              .trim()
              .split(/\r?\n/)
              .map((s) => `\x1b[94m │\x1b[2m  ${s}\x1b[0m`)
              .join("\n"), //+ `\n\x1b[94m │\x1b[0m`,
          );
        }
        if (i < items.length - 1) {
          console.log(`\x1b[94m ├\x1b[2m${"╌".repeat(100)}\x1b[0m`);
        }
      }
      console.log(`\x1b[94m └${"─".repeat(100)}┘\x1b[0m`);
    }
  }
} else {
  // In a worker thread.
  if (workerData.type === "template") {
    // Template precompilation worker.
    let templateText: string;
    try {
      templateText = await readFile(workerData.templatePath, "utf8");
    } catch {
      templateText = `
/*!
 * Copyright (c) {{ start }}-{{ end }} ${pkg.author.name}. All rights reserved.
 * @license MIT (https://nick.mit-license.org/{{ start }})
 * @see https://jsr.io/{{ pkg }}@{{ version }}/doc/{{ module_id }}
 */
`.trim();
    }
    // Build the compiled template.
    const compiled: CompiledTemplate = {
      templateText,
      patternRegexes: {
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
    parentPort!.postMessage({
      type: "templateCompiled",
      compiledTemplate: compiled,
    });
  } else if (workerData.type === "fileProcessor") {
    // File processor worker.
    globalThis.compiledTemplate = workerData.compiledTemplate;
    parentPort!.on("message", async (msg) => {
      if (msg.type === "task") {
        const { filePath, dryRun } = msg;
        try {
          const diagnostics = await processFile(filePath, dryRun);
          parentPort!.postMessage({ type: "result", diagnostics });
        } catch (e) {
          parentPort!.postMessage({
            type: "result",
            diagnostics: [{
              file: filePath,
              message: `Worker error: ${(e as Error).message}`,
              severity: "error",
            }],
          });
        }
        parentPort!.postMessage({ type: "requestTask" });
      } else if (msg.type === "exit") {
        process.exit(0);
      }
    });
    parentPort!.postMessage({ type: "requestTask" });

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
        if (
          insertIndex < lines.length &&
          headerStartRegex.test(lines[insertIndex])
        ) {
          headerStartIndex = insertIndex;
          for (let i = headerStartIndex; i < lines.length; i++) {
            if (headerEndRegex.test(lines[i])) {
              headerEndIndex = i;
              break;
            }
          }
          if (headerEndIndex === null) {
            diagnostics.push({
              file: filePath,
              message: "Header block start detected but no closing '*/' found.",
              severity: "error",
              line: headerStartIndex + 1,
            });
            return diagnostics;
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
                `Invalid header block location! It should start at line ${
                  insertIndex + 1
                }, but was found on ${headerStartIndex + 1}.\n\n` +
                `\x1b[95mhelp\x1b[0;2m The only lines that may precede a header block are directive\n` +
                `lines like \x1b[92m${"`"}// deno-lint-ignore-file${"`"}\x1b[39m or \x1b[92m${"`"}// @ts-nocheck${"`"}\x1b[39m,\n` +
                `or a shebang line like \x1b[92m${"`"}#!/usr/bin/env -S deno run -A${"`"}\x1b[39m.\x1b[0m\n`,
              severity: "error",
              line: headerStartIndex + 1,
              snippet: [
                "\x1b[2m" +
                (lines.at(Math.max(0, headerStartIndex - 1)) ?? "") + "\x1b[0m",
                "\x1b[91m" +
                lines.slice(headerStartIndex, headerEndIndex + 1).join("\n") +
                "\x1b[0m",
                "\x1b[2m" + (lines.at(headerEndIndex + 1) ?? "") + "\x1b[0m",
              ].join("\n"),
            });
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
            if (content !== oldContent && !dryRun) {
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
          if (!dryRun && content !== oldContent) {
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
      } finally {
        mutex.release();
      }
      return diagnostics;
    }
  }
}
