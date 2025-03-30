// deno-lint-ignore-file no-explicit-any ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/function
 */

import type { unknowns } from "./_internal.ts";
import type { Constructor } from "./constructor.ts";

export type Fn<T = any, A extends readonly unknown[] = any[]> = (
  ...args: A
) => T;

export type ThisFn<
  T = any,
  A extends readonly unknown[] = any[],
  R = any,
> = (this: T, ...args: A) => R;

export type FunctionOrConstructor<
  T = any,
  A extends readonly unknown[] = any[],
  This = void,
> = Constructor<T, A> | Fn<T, A> | ThisFn<This, A, T> | Function;

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
export function isFunction<T extends FunctionOrConstructor>(
  it: T | unknowns,
): it is T;
export function isFunction<T = any, A extends readonly unknown[] = any[]>(
  it: unknown,
): it is FunctionOrConstructor<T, A>;
export function isFunction(it: unknown): it is Function;
/** @internal */
export function isFunction(it: unknown): it is FunctionOrConstructor {
  return typeof it === "function";
}

export default isFunction;
