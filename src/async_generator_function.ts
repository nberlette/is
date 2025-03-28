/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/async-generator-function
 */

import { isTagged } from "./tagged.ts";

/**
 * Checks if a given value is an async generator function, which is a function
 * that returns an async generator object when called, and was created with the
 * `async function*() { ... }` syntax.
 *
 * To check if a value is an async generator object, use `isAsyncGenerator`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an async generator function, `false` otherwise.
 * @example
 * ```ts
 * import {
 *   isAsyncGeneratorFunction,
 * } from "jsr:@nick/is/async-generator-function";
 *
 * const genFnAsync = async function*() { yield 1; };
 * isAsyncGeneratorFunction(genFnAsync); // true
 *
 * const genObjAsync = genFnAsync();
 * isAsyncGeneratorFunction(genObjAsync); // false
 *
 * const genFn = function*() { yield 1; };
 * isAsyncGeneratorFunction(genFn); // false
 *
 * const genObj = genFn();
 * isAsyncGeneratorFunction(genObj); // false
 * ```
 * @category Generators
 * @module async-generator-function
 */
export function isAsyncGeneratorFunction(
  it: unknown,
): it is AsyncGeneratorFunction {
  return typeof it === "function" && isTagged(it, "AsyncGeneratorFunction");
}

export default isAsyncGeneratorFunction;
