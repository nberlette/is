/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/non-empty-array
 */
/**
 * This module provides the {@linkcode isNonEmptyArray} predicate, which
 * checks if a given value is an array with at least one element, and
 * optionally verifies the type of each element in the array using a
 * custom type guard.
 *
 * @module non-empty-array
 */
import { isArray } from "./array.ts";
import type { Predicate } from "./type/predicate.ts";
import type { unknowns } from "./_internal/types.ts";

type MaybeArray<T> = { [index: number]: T; length: number } | T[] | unknowns;
/**
 * Checks if the given value is an array with at least one element of a
 * specific type.
 *
 * @param it The value to check.
 * @param [test] The type guard to check the type of the array elements.
 * @returns `true` if the value is an array with at least one element of the
 * specific type (if a `test` predicate is provided), `false` otherwise.
 * @example
 * ```ts
 * import { isNonEmptyArray } from "jsr:@nick/is/array";
 *
 * console.log(isNonEmptyArray([])); // false
 * console.log(isNonEmptyArray([1, 2, 3])); // true
 * console.log(isNonEmptyArray({})); // false
 * ```
 * @example
 * ```ts
 * import { isNonEmptyArray } from "jsr:@nick/is/array";
 * import { isString } from "jsr:@nick/is/string";
 * import { isNumber } from "jsr:@nick/is/number";
 * import { expectType } from "jsr:@nick/is/type/expect";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 *
 * if (isNonEmptyArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: readonly [string, ...string[]]
 *   expectType<readonly [string, ...string[]]>(arr);
 * } else if (isNonEmptyArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: readonly [number, ...number[]]
 *   expectType<readonly [number, ...number[]]>(arr);
 * } else {
 *   console.log(arr, "is not an array of strings or numbers");
 *   //           ^? const arr: readonly unknown[]
 *   expectType<readonly unknown[]>(arr);
 * }
 * ```
 * @category Indexed Collections
 */
export function isNonEmptyArray<T>(
  a: MaybeArray<T>,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
export function isNonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
/** @internal */
export function isNonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T> {
  return isArray(a, test) && a.length > 0;
}

/**
 * Represents an array with 1 or more element of the specific type `T`.
 *
 * @category Indexed Collections
 */
export type NonEmptyArray<T = unknown> = [T, ...T[]];

export default isNonEmptyArray;
