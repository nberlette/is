/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/array-like-object
 */

/**
 * This module provides a function to check if a value is an `ArrayLikeObject`,
 * which is defined as any object with an own property named `length` that is a
 * finite unsigned integer (>= `0` and <= `Number.MAX_SAFE_INTEGER`), and where
 * the object is not a function.
 *
 * This is a stricter form of {@linkcode isArrayLike} and does not include
 * primitive strings in the check. If you'd like to check for strings as well,
 * use {@linkcode isArrayLike} instead.
 *
 * @module array-like-object
 */
import { isArrayLike } from "./array_like.ts";
import { isObject } from "./object.ts";

/**
 * Checks if a given value is an `ArrayLike` object. This is a stricter form of
 * the {@linkcode isArrayLike} check that only returns `true` if a value is an
 * **_object_** that also meets all of the `ArrayLike` conditions:
 * - it is not a function
 * - it has an own property named `length` that is a finite unsigned integer:
 *   - an integer between `0` and `Number.MAX_SAFE_INTEGER`
 *   - it is non-negative, `NaN`, `Infinity`, nor `-Infinity`
 *
 * @param it The value to check.
 * @returns `true` if the value is an object that meets all of the `ArrayLike`
 * conditions, otherwise `false`.
 * @example
 * ```ts
 * import { isArrayLikeObject } from "jsr:@nick/is/array-like";
 *
 * isArrayLikeObject([]); // true
 * isArrayLikeObject({ length: 0 }); // true
 * isArrayLikeObject({ length: 1, 0: "a" }); // true
 *
 * // strings are not considered ArrayLike objects
 * isArrayLikeObject("abc"); // false
 *
 * // length must be a finite unsigned integer
 * isArrayLikeObject({ length: Infinity }); // false
 *
 * // length must be non-negative
 * isArrayLikeObject({ length: -1 }); // false
 *
 * // length cannot be a non-number or NaN
 * isArrayLikeObject({ length: "a" }); // false
 * isArrayLikeObject({ length: NaN }); // false
 *
 * // functions are not considered ArrayLike objects, despite meeting the
 * // requirements for the 'length' property. this is because they are not
 * // indexed collections like an array or string.
 * isArrayLikeObject(() => {});
 * ```
 * @see {@linkcode isArrayLike} for a version that allows for non-object values
 * such as strings (but not functions).
 * @category Indexed Collections
 */
export function isArrayLikeObject<T>(it: unknown): it is ArrayLikeObject<T> {
  return isArrayLike(it) && isObject(it);
}

/**
 * Represents an object that has a `length` property that is a finite unsigned
 * integer, and where the object is not a function. This is the type that the
 * function {@linkcode isArrayLikeObject} narrows its inputs to.
 *
 * @category Indexed Collections
 */
export type ArrayLikeObject<T = unknown> = ArrayLike<T> & object;

/** @ignore */
export default isArrayLikeObject;
