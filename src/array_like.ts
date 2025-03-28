/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/array-like
 */

import { isObjectLike } from "./object_like.ts";
import { isInteger } from "./number/integer.ts";

/**
 * Checks if a given value is `ArrayLike`, which is defined as `any
 * non-function value with an own property named 'length' that is an integer,
 * and where 'length' >= '0' and <= 'Number.MAX_SAFE_INTEGER'`.
 *
 * This condition includes strings. If you'd like to check specifically for
 * `ArrayLike` _objects_, see {@linkcode isArrayLikeObject} instead.
 *
 * @param it The value to check.
 * @returns `true` if it is an ArrayLike value
 * @example
 * ```ts
 * import { isArrayLike } from "jsr:@nick/is/array-like";
 *
 * isArrayLike([]); // true
 * isArrayLike("abc"); // true
 * isArrayLike({ length: 0 }); // true
 * isArrayLike({ length: 1, 0: "a" }); // true
 * isArrayLike({ length: Infinity }); // false
 * isArrayLike({ length: -1 }); // false
 * ```
 * @category Indexed Collections
 * @module array-like
 */
export function isArrayLike<T>(it: unknown): it is ArrayLike<T> {
  return it != null && typeof it !== "function" &&
    "length" in (it = Object(it)) && typeof it.length === "number" &&
    !isNaN(it.length) && isInteger(it.length) &&
    it.length >= 0 && it.length <= Number.MAX_SAFE_INTEGER;
}

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
 * @see {@link isArrayLike} for a version that includes strings and other
 * primitive values.
 * @category Indexed Collections
 */
export function isArrayLikeObject<T>(it: unknown): it is ArrayLikeObject<T> {
  return isArrayLike(it) && isObjectLike(it);
}

/**
 * Represents an object that has a `length` property that is a finite unsigned
 * integer, and where the object is not a function. This is the type that the
 * function {@link isArrayLikeObject} narrows its inputs to.
 *
 * @category Indexed Collections
 */
export type ArrayLikeObject<T = unknown> = ArrayLike<T> & object;

/** @ignore */
export default isArrayLike;
