/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/promise
 */

import { isTaggedNative } from "./_internal.ts";

/**
 * Checks if a given value is a native `Promise` instance. This is a more
 * reliable alternative to `it instanceof Promise` because it also works across
 * different realms (e.g., iframes, workers, etc.).
 *
 * Note: This guard does not consider custom promise-like objects with `.then`
 * methods to be promises. If your use case requires that, use `isPromiseLike`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Promise`, `false` otherwise.
 * @example
 * ```ts
 * import { isPromise } from "jsr:@nick/is/promise";
 *
 * console.log(isPromise(Promise.resolve())); // true
 * console.log(isPromise({ then: () => {} })); // false
 * console.log(isPromise({})); // false
 * ```
 * @category Async/Await
 * @module promise
 */
export function isPromise<T>(it: unknown): it is Promise<T> {
  try {
    return typeof it === "object" && it !== null &&
      isTaggedNative(it, "Promise", true) && "then" in it &&
      typeof it.then === "function" && "catch" in it &&
      typeof it.catch === "function" && "finally" in it &&
      typeof it.finally === "function";
  } catch {
    return false;
  }
}

export default isPromise;
