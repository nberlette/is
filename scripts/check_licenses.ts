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
 * Usage: node ./check_licenses.ts [--dry-run]
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
import { colors } from "jsr:@can/si@0.1.0-rc.1/colors";

import {
  AtomicMutex,
  type BaseArgs,
  computeModuleName,
  interpolate,
  printDiagnostics,
} from "./_utils.ts";
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

const SCRIPT = `./${new URL(import.meta.url).pathname.split(/[\\\/]/).pop()}`;

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
      computeModuleName(moduleName, true, args.cwd, pkg),
    ] as const,
    full_module: [
      new RegExp(ct.patterns.full_module, "gi"),
      computeModuleName(moduleName, false, args.cwd, pkg),
    ] as const,
  };
  return interpolate(ct.templateText, patterns);
}

// shared singleton mutex instance

/* ------------------------ Command-line Parsing ------------------------ */

interface ParsedArgs extends BaseArgs {
  template: string;
  exclude: string[];
  fix: boolean;
  dryRun: boolean;
  rest: Record<string, unknown>;

  // deno-lint-ignore no-explicit-any
  [key: string]: any;
}

function getParsedArgs<
  T extends Omit<ParsedArgs, "dryRun" | "rest" | "files"> & {
    fix: boolean;
    "dry-run"?: boolean;
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
    fix,
    "dry-run": dryRun = !fix,
    _,
    ...rest
  } = args;
  const files = [...(args.files ?? []), ...(_ ?? [])].filter(Boolean).map(
    String,
  );
  return {
    version,
    help,
    cwd,
    template,
    exclude,
    fix,
    // Respect explicit dryRun flag; if not provided, default to !fix.
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
  boolean: ["fix", "dry-run", "debug", "verbose", "help", "silent", "version"],
  alias: {
    template: ["t", "tpl", "file", "path"],
    exclude: ["e", "x", "ignore", "excluded"],
    cwd: ["C", "dir", "root"],
    fix: ["f"],
    "dry-run": ["d"],
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
    fix: false,
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
${colors.bold.underline.blue("Usage")}

  ${colors.gray.italic("Check if the license header is up-to-date:")}
    ${colors.bold.brightWhite(SCRIPT)}  ${colors.bold.dim.cyan("[options]")}  ${
    colors.gray("[files...]")
  }

  ${colors.gray.italic("Fix the license header if outdated:")}
    ${colors.bold.brightWhite(SCRIPT)}  ${colors.brightGreen("--fix")}  ${
    colors.brightYellow("[--dry-run]")
  }  ${colors.bold.dim.cyan("[options]")}  ${colors.gray("[files...]")}

${colors.bold.underline.blue("Options")}

  ${
    colors.cyan(`-t, --template${colors.dim("=<path>")}`)
  }   Path to the license header template file.
  ${
    colors.cyan(`-e, --exclude${colors.dim("=<glob>")}`)
  }    Exclude files matching the glob pattern.
  ${
    colors.cyan(`-C, --cwd${colors.dim("=<path>")}`)
  }        Path to the source directory.
  ${colors.cyan("-f, --fix")}               Fix the license header in the files.
  ${
    colors.cyan("-d, --dry-run")
  }           Perform a dry run without modifying files.
  ${colors.cyan("-V, --verbose")}           Enable verbose output.
  ${colors.cyan("-s, --silent")}            Suppress all output.
  ${colors.cyan("-b, --debug")}             Enable debug output.
  ${colors.cyan("-h, --help")}              Show this help message.
  ${colors.cyan("-v, --version")}           Show the version of the script.

${colors.dim.gray("┄".repeat(70))}

  ${
    colors.brightBlack(
      `Copyright (c) \x1b]8;;https://github.com/nberlette\x07${
        colors.bold.underline.blue(pkg.author.name)
      }\x1b]8;;\x07. All rights reserved. \x1b]8;;https://nick.mit-license.org/\x07${
        colors.bold.underline("MIT License")
      }\x1b]8;;\x07.`,
    )
  }
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

  // 2. Prepare file entries using async iterator from expandGlob.
  let fileCount = 0;
  const pattern = `${args.cwd}/**/*${SOURCE_EXT}`;
  const filesIterator = (async function* () {
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
      fileCount++;
      yield entry.path;
    }
  })();

  const iteratorMutex = new AtomicMutex();

  async function assignTask(worker: Worker) {
    const lock = await iteratorMutex.acquire();
    await lock.runInAsyncScope(async () => {
      const result = await filesIterator.next();
      if (!result.done) {
        worker.postMessage({
          type: "task",
          filePath: result.value,
          dryRun: args.dryRun,
        });
      } else {
        worker.postMessage({ type: "exit" });
      }
    }).finally(() => iteratorMutex.release());
  }

  // 3. Create a worker pool for file processing.
  const concurrencyLimit = navigator.hardwareConcurrency ?? 4;
  let finishedWorkers = 0;
  const workers: Worker[] = [];
  const diagnostics: Diagnostic[] = [];

  for (let i = 0; i < concurrencyLimit; i++) {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: { type: "process", template },
    });

    worker.on("message", (msg) => {
      if (msg.type === "request") {
        assignTask(worker);
      } else if (msg.type === "result") {
        if (!args.silent && msg.diagnostics.length) {
          printDiagnostics(msg.diagnostics, args);
        }
        diagnostics.push(...msg.diagnostics);
      }
    });

    worker.on("exit", () => {
      if (++finishedWorkers >= concurrencyLimit) {
        // Print diagnostics here before exiting.
        if (diagnostics.length > 0) {
          if (!args.silent) {
            console.error(
              `${colors.red("✘")} ${fileCount} file${
                fileCount > 1 ? "s" : ""
              } processed with ${
                diagnostics.filter((d) =>
                  d.severity === "error" || d.hasChanges
                ).length
              } issues.`,
            );
          }
          if (diagnostics.some((d) => d.severity === "error")) {
            process.exitCode = 1;
          } else if (!args.fix && diagnostics.some((d) => d.hasChanges)) {
            process.exitCode = 2;
          }
        }
        if (args.verbose && !args.silent) {
          console.error("✔︎ All workers finished processing.");
        }
        process.exit();
      }
    });
    workers.push(worker);
  }

  process.on("SIGINT", () => {
    console.error("\nReceived SIGINT. Exiting...");
    for (const worker of workers) {
      worker.postMessage({ type: "exit" });
      worker.terminate();
    }
    if (args.verbose && !args.silent) {
      console.error("✔︎ All workers terminated.");
    }
    if (diagnostics.length > 0) {
      if (!args.silent) {
        printDiagnostics(diagnostics, args);
      }
      if (diagnostics.some((d) => d.severity === "error")) {
        process.exitCode = 3;
      } else if (!args.fix && diagnostics.some((d) => d.hasChanges)) {
        process.exitCode = 4;
      }
    }
    process.exit();
  });
} else {
  // In a worker thread.
  if (workerData.type === "template") {
    let templateText = DEFAULT_TEMPLATE_TEXT;
    try {
      templateText = await readFile(workerData.templatePath, "utf8");
    } catch { /* ignore */ }
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

    async function processFile(
      filePath: string,
      dryRun: boolean,
    ): Promise<Diagnostic[]> {
      const mutex = new AtomicMutex();
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
          /^(#!.*|\/\/\s*(?:eslint|@ts|dprint|prettier|deno-(?:fmt|lint))-(?:ignore(?:-file)?|nocheck|disable)).*$/;
        const headerStartRegex = /^\s*\/\*!/;
        const headerEndRegex = /\*\/\s*$/;

        let insertIndex = 0;
        while (
          insertIndex < lines.length && directiveRegex.test(lines[insertIndex])
        ) insertIndex++;

        let headerStartIndex: number | null = null;
        let headerEndIndex: number | null = null;
        if (insertIndex < lines.length) {
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
              .join("\n"),
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
