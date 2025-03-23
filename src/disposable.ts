/**
 * @module disposable
 *
 * Checks if a given value implements the `Disposable` API, defined in the
 * TC39 Proposal for Explicit Resource Management as an object with a
 * `[Symbol.dispose]` method.
 *
 * The `Disposable` API is used to define objects that hold resources
 * temporarily that need to be explicitly released when they are no longer
 * needed.  Objects that implement this interface can be used with the `using`
 * and `await using` statements to automatically dispose of their resources
 * when they are no longer needed.
 *
 * **Note**: If the environment this function is run in does not support the
 * Explicit Resource Management proposal (i.e. does not include the necessary
 * well-known symbols), this function will simply return `false`.
 *
 * @example
 * ```ts
 * import { isDisposable } from "@nick/is/disposable";
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
 * isDisposable(disposable); // true
 * isDisposable(asyncDisposable); // false
 * ```
 * @category Explicit Resource Management
 */

declare const SymbolForDispose: unique symbol;

type SymbolForDispose = typeof SymbolForDispose;

declare const SymbolDispose: SymbolDispose;

type SymbolDispose = typeof Symbol extends {
  readonly dispose: infer TDispose extends symbol;
} ? TDispose
  : SymbolForDispose;

/**
 * Checks if a value is an object that implements the `Disposable` API.
 *
 * @param it The value to check.
 * @returns `true` if the value is an object that implements the `Disposable`
 * API, or `false` otherwise.
 * @example
 * ```ts
 * import { isDisposable } from "@nick/is/disposable";
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
 * isDisposable(disposable); // true
 * isDisposable(asyncDisposable); // false
 * ```
 * @category Explicit Resource Management
 */
export function isDisposable(it: unknown): it is Disposable {
  const SymbolDispose: SymbolDispose = (
    typeof Symbol === "function"
      ? Symbol.dispose ?? Symbol.for?.("Symbol.dispose") ??
        Symbol("Symbol.dispose")
      : "@@dispose"
  ) as never;

  return it != null && (typeof it === "object" || typeof it === "function") &&
    SymbolDispose in it && typeof it[SymbolDispose] === "function";
}

/** @ignore */
export default isDisposable;

/**
 * An object that can have its resources explicitly released when it is no
 * longer needed.  Objects that implement this interface can be used with the
 * `using` and `await using` statements, which automatically dispose of their
 * resources when they are no longer needed.
 * @category Explicit Resource Management
 */
export interface Disposable {
  /** Releases the resources held by this object. */
  [SymbolDispose](): void;
}
