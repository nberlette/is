/**
 * @module async-disposable
 *
 * Checks if a given value implements the `AsyncDisposable` API, defined in the
 * TC39 Proposal for Explicit Resource Management as an object with an
 * asynchronous `[Symbol.asyncDispose]` method. The `AsyncDispose` API allows
 * one to define custom cleanup logic to close, remove, or otherwise dispose of
 * any resources that the associated disposed object no longer requires.
 *
 * **Note**: If the environment this function is run in does not support the
 * Explicit Resource Management proposal (i.e. does not include the necessary
 * well-known symbols), this function will simply return `false`.
 *
 * @example
 * ```ts
 * import { isAsyncDisposable } from "@nick/is/async_disposable";
 *
 * const disposable = {
 *   [Symbol.dispose]() {
 *     return;
 *   },
 * };
 *
 * const asyncDisposable = {
 *   async [Symbol.asyncDispose]() {
 *     await Promise.resolve();
 *   },
 * };
 *
 * isAsyncDisposable(disposable); // false
 * isAsyncDisposable(asyncDisposable); // true
 * ```
 * @category Explicit Resource Management
 */

/**
 * Checks if a value is an object that implements the `AsyncDisposable` API.
 *
 * @param it The value to check.
 * @returns `true` if the value is an object that implements the
 * `AsyncDisposable` API, or `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncDisposable } from "@nick/is/async_disposable";
 *
 * const disposable = {
 *   [Symbol.dispose]() {
 *     return;
 *   },
 * };
 *
 * const asyncDisposable = {
 *   async [Symbol.asyncDispose]() {
 *     await Promise.resolve();
 *   },
 * };
 *
 * isAsyncDisposable(disposable); // false
 * isAsyncDisposable(asyncDisposable); // true
 * ```
 * @category Explicit Resource Management
 */
export function isAsyncDisposable(it: unknown): it is AsyncDisposable {
  const SymbolAsyncDispose: SymbolAsyncDispose = (
    typeof Symbol === "function"
      ? Symbol.asyncDispose ?? Symbol.for?.("Symbol.asyncDispose") ??
        Symbol("Symbol.asyncDispose")
      : "@@asyncDispose"
  ) as never;
  return (
    (typeof it === "object" || typeof it === "function") && it !== null &&
    SymbolAsyncDispose in it && typeof it[SymbolAsyncDispose] === "function"
  );
}

/** @ignore */
export default isAsyncDisposable;

declare const SymbolForAsyncDispose: unique symbol;
type SymbolForAsyncDispose = typeof SymbolForAsyncDispose;

declare const SymbolAsyncDispose: SymbolAsyncDispose;

// deno-fmt-ignore
type SymbolAsyncDispose = typeof Symbol extends {
  readonly asyncDispose: infer T extends symbol;
} ? T : SymbolForAsyncDispose;

/**
 * Represents an object that can be asynchronously disposed of.
 *
 * @category Explicit Resource Management
 */
export interface AsyncDisposable {
  /** Asynchronously disposes of the resources held by this object. */
  [SymbolAsyncDispose](): Promise<void>;
}
