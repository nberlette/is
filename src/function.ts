// deno-lint-ignore-file no-explicit-any ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/function
 */

import type { unknowns } from "./_internal.ts";
import type { Constructor } from "./constructor.ts";

export type Fn<T = any, A extends readonly any[] = any[]> = (...args: A) => T;

export type ThisFn<
  T = any,
  A extends readonly any[] = any[],
  R = any,
> = (this: T, ...args: A) => R;

export type FunctionOrConstructor<
  T = any,
  A extends readonly any[] = any[],
  R = void,
> = Constructor<R, A> | Fn<R, A> | ThisFn<T, A, R> | Function;

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
// the 1 type parameter overload infers the type of the function from the
// argument, if possible. This is useful for preserving type information about
// a function signature and its arguments.
export function isFunction<T extends FunctionOrConstructor>(
  it: T | unknowns,
): it is FunctionOrConstructor<any, any, any> extends T ? Function : T;

// the 2 type parameter overload allows args + return types to be specified
export function isFunction<T = any, A extends readonly any[] = any[]>(
  it: Fn<T, A> | unknowns,
): it is Fn<T, A>;

// the 3 type parameter overload also allows the `this` type to be specified
export function isFunction<T = any, A extends readonly any[] = any[], R = any>(
  it: ThisFn<T, A, R> | unknowns,
): it is ThisFn<T, A, R>;

// default/fallback overload provides the least type safety, and behaves the
// same as the built-in `typeof it === "function"` operator in terms of type
// narrowing. included to try to avoid breaking projects of innocent users
export function isFunction(it: unknown): it is Function;

/** @internal */
export function isFunction(it: unknown): it is FunctionOrConstructor {
  return typeof it === "function";
}

export default isFunction;
