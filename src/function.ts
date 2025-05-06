// deno-lint-ignore-file no-explicit-any ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/function
 */

/**
 * This
 * @module function
 */
import type { unknowns } from "./_internal.ts";
import type { Constructor } from "./constructor.ts";

/**
 * Represents a function that takes a variable number of arguments with the
 * tuple signature of type `A`, and returns a value of type `T`.
 *
 * This type of function does not have a specific `this` context; if you need
 * to specify a custom `this` binding (e.g. for methods or functions that will
 * be called via the `.call` or `.apply`), use {@linkcode ThisFn} instead.
 *
 * @template [T] The return type of the function. Defaults to `any`.
 * @template {readonly any[]} [A=any[]] The argument type signature for the
 * function, represented as a literal tuple or array. Defaults to `any[]`.
 * @category Types
 * @tags Function
 */
export type Fn<T = any, A extends readonly any[] = any[]> = (...args: A) => T;

/**
 * Represents a function that can be called with a specific `this` context.
 *
 * This type is useful for defining functions that are intended to be used as
 * methods of a class or object, where the `this` context is important, or
 * those that are not bound to a specific context.
 *
 * @template [T] The type of `this` context. Defaults to `any`.
 * @template {readonly any[]} [A=any[]] The argument type signature for the
 * function, represented as a literal tuple or array. Defaults to `any[]`.
 * @template [R] The return type of the function. Defaults to `any`.
 * @category Types
 * @tags Function
 */
export type ThisFn<
  T = any,
  A extends readonly any[] = any[],
  R = any,
> = (this: T, ...args: A) => R;

/**
 * Union of all function-like types that can be used in JavaScript, including
 * constructors, regular functions, and methods. This type is useful for
 * defining forgiving API interfaces that can accept any function-like value.
 *
 * @template [T] The type of `this` context. Defaults to `any`. This is only
 * relevant for the {@linkcode ThisFn} constituent type in the union; all other
 * types do not use this type parameter.
 * @template {readonly any[]} [A=any[]] The argument type signature for the
 * function, represented as a literal tuple or array. Defaults to `any[]`.
 * @template [R] The return type of the function. Defaults to `any`. This is
 * used as the instance type for the {@linkcode Constructor} constituent type
 * in the union.
 * @category Types
 * @tags Function
 */
export type FunctionLikeTypes<
  T = any,
  A extends readonly any[] = any[],
  R = void,
> = Constructor<R, A> | Fn<R, A> | ThisFn<T, A, R>;

export type FunctionLike<
  T = any,
  A extends readonly any[] = any[],
  R = void,
> = Constructor<R, A> & Fn<R, A> & ThisFn<T, A, R>;

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
export function isFunction<T extends FunctionLike>(
  it: T | unknowns,
): it is FunctionLike<any, any, any> extends T ? Function : T;

// the 2 type parameter overload allows args + return types to be specified
export function isFunction<R, A extends readonly any[]>(
  it: Fn<R, A> | unknowns,
): it is Fn<R, A>;

// the 3 type parameter overload also allows the `this` type to be specified
export function isFunction<T, A extends readonly any[], R>(
  it: ThisFn<T, A, R> | unknowns,
): it is ThisFn<T, A, R>;

// default/fallback overload provides the least type safety, and behaves the
// same as the built-in `typeof it === "function"` operator in terms of type
// narrowing. included to try to avoid breaking projects of innocent users
export function isFunction(it: unknown): it is Function;

/** @internal */
export function isFunction(it: unknown): it is FunctionLike {
  return typeof it === "function";
}

export default isFunction;
