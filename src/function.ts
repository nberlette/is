/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/function
 */

/**
 * Check if the given value is a function.
 *
 * @param it The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 * @example
 * ```ts
 * import { isFunction } from "jsr:@nick/is/function";
 *
 * console.log(isFunction(() => {})); // true
 * console.log(isFunction(function() {})); // true
 * console.log(isFunction(class {})); // true
 * console.log(isFunction(new Function())); // true
 * console.log(isFunction({})); // false
 * console.log(isFunction(1)); // false
 * ```
 * @category Standard
 */
export function isFunction<
  T = never,
  // deno-lint-ignore no-explicit-any
  A extends readonly unknown[] = any[],
  R = unknown,
>(
  it: unknown,
): it is [T] extends [never] ? (...args: A) => R : (this: T, ...args: A) => R {
  return typeof it === "function";
}

export default isFunction;
