// deno-lint-ignore-file no-explicit-any
import { AsyncResource } from "node:async_hooks";
import { extname, relative } from "node:path";
import denoJson from "../deno.json" with { type: "json" };

/**
 * Computes the module name from a file path.
 *
 * @param filePath The file path.
 * @param slugOnly Whether to return a short module name.
 * @returns The computed module name.
 */
export function computeModuleName(
  filePath: string,
  slugOnly?: boolean,
  srcDir: string = "./src",
  pkg: { name: string; [key: string]: any } = denoJson,
): string {
  if (!filePath) return "";
  let rel = relative(srcDir, filePath);
  rel = rel.replace(new RegExp(`${extname(rel)}$`), "");
  const modulePath = rel
    .split(/[\\\/]/)
    .filter((p) => p && p !== ".")
    .join("/")
    .replace(/(?<=\w)_/g, "-");
  let path = modulePath.replace(/^(?:(?:\.{1,2}\/)+)?src\//, "");
  path = path.replace(new RegExp(`^(?:${pkg.name}|\\./src)/`, "ig"), "");
  path = path.replace(/[_.-](test|bench|spec)$/, "");
  if (slugOnly) return path === "mod" ? "" : path.replace(/.*?\//, "");
  return path === "mod" ? pkg.name : `${pkg.name}/${path}`;
}

/**
 * Recursively interpolates template expressions.
 *
 * @param input The template text.
 * @param context A record mapping keys to a tuple of [RegExp, replacement].
 * @returns The interpolated text.
 */
export function interpolate<
  const T extends Record<string, readonly [RegExp, string]>,
>(
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

interface BaseDiagnostic<S extends string = string> {
  severity: S;
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

export type Diagnostic =
  | BaseDiagnostic<"info">
  | BaseDiagnostic<"warning">
  | BaseDiagnostic<"error">
  | BaseDiagnostic<"debug">
  | BaseDiagnostic<"info" | "warning"> & WithChanges;

export interface JsrConfig {
  name: string;
  version: string;
  [key: string]: any;
}

export interface BaseArgs {
  verbose: boolean;
  debug: boolean;
  silent: boolean;
  files: string[];
  cwd: string;
}
/**
 * Pretty-prints the aggregated diagnostics.
 *
 * @param diags Array of diagnostics.
 */
export function printDiagnostics(diags: Diagnostic[], args: BaseArgs): void {
  if (diags.length === 0) {
    if (!args.silent) {
      console.error("All files checked successfully with no issues.");
    }
    return;
  }

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
    const nonDebugItems = items.filter((d) => d.severity !== "debug");
    if (items.length === 0 && !args.verbose) continue;
    if (nonDebugItems.length === 0 && !args.debug) continue;
    if (args.silent) continue;
    console.error(
      `\n\x1b[94m ╓╴\x1b[96m${file}\x1b[39;94m╶${
        "─".repeat(Math.max(0, 100 - file.length - 2))
      }╮\x1b[0m`,
    );
    console.error(`\x1b[94m ║\x1b[0m`);
    const divider = `\x1b[94m ╟\x1b[2m${"╌".repeat(100)}\x1b[0m`;
    for (let i = 0; i < items.length; i++) {
      const d = items[i];
      if (d.severity === "debug" && !args.debug) continue;
      const colors = { info: 35, warning: 33, error: 31, debug: 2 } as const;
      if (i > 0) console.error(divider);
      console.error(
        `\x1b[94m ╟╴\x1b[0m \x1b[${colors[d.severity] ?? "31"}m[${
          d.severity ?? "error"
        }]\x1b[0m ${
          d.message.split(/\r?\n/).map((s, i) =>
            i > 0 ? `\x1b[94m ║\x1b[0m  ${s}` : s
          ).join("\n")
        }`,
      );
      console.error(divider);
      if (d.snippet) {
        console.error(
          d.snippet
            .trim()
            .split(/\r?\n/)
            .map((s) => `\x1b[94m ║\x1b[2m  ${s}\x1b[0m`)
            .join("\n"), //+ `\n\x1b[94m │\x1b[0m`,
        );
      }
    }
    console.error(`\x1b[94m ╙${"─".repeat(100)}╯\x1b[0m`);
  }
}

/**
 * Checks if a string is in kebab-case.
 *
 * @param str The string to check.
 * @returns True if kebab-case, else false.
 */
export function isKebabCase(str: string): boolean {
  return /^[a-z]+(?:-[a-z0-9]+)*$/.test(str);
}

/* ------------------------- Async Mutex ------------------------- */

/**
 * Simple asynchronous mutex implementation.
 */
export class AtomicMutex {
  static #global: AtomicMutex | undefined;
  static get(): AtomicMutex {
    return this.#global ??= new AtomicMutex();
  }

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

export { AsyncResource, AsyncResource as AtomicLock };
