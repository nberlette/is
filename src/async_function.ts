/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/async-function
 */

/**
 * Check if the given value is an async function.
 *
 * @param it The value to check.
 * @returns `true` if the value is an async function, `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncFunction } from "jsr:@nick/is/async-function";
 *
 * console.log(isAsyncFunction(async () => {})); // true
 * console.log(isAsyncFunction(async function() {})); // true
 * console.log(isAsyncFunction(async function*() {})); // false
 * console.log(isAsyncFunction(() => {})); // false
 * console.log(isAsyncFunction(function() {})); // false
 * console.log(isAsyncFunction(class {})); // false
 * console.log(isAsyncFunction(new Function())); // false
 * console.log(isAsyncFunction({})); // false
 * console.log(isAsyncFunction(1)); // false
 * ```
 * @category Async/Await
 * @module async-function
 */

import isTagged from "./tagged.ts";

// deno-lint-ignore no-explicit-any
export function isAsyncFunction<T = any>(it: unknown): it is AsyncFunction<T> {
  return typeof it === "function" && isTagged(it, "AsyncFunction");
}

export default isAsyncFunction;

// deno-lint-ignore no-explicit-any
export interface AsyncFunction<TReturn = any> {
  // deno-lint-ignore no-explicit-any
  <T extends TReturn = TReturn>(...args: any[]): Promise<T>;
  readonly [Symbol.toStringTag]: "AsyncFunction";
}
