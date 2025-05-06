/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/array-like
 */

import { isInteger } from "./number/integer.ts";

/**
 * This module provides a type guard for checking if a value is an `ArrayLike`
 * value, which is defined as any non-function value with an own property named
 * `length` that is an integer >= `0` and  <= `Number.MAX_SAFE_INTEGER`.
 *
 * This condition includes strings. If you'd like to check specifically for
 * `ArrayLike` _objects_, see {@linkcode isArrayLikeObject} instead.
 *
 * @module array-like
 */

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
 */
export function isArrayLike<T>(it: unknown): it is ArrayLike<T> {
  return it != null && typeof it !== "function" &&
    "length" in (it = Object(it)) && typeof it.length === "number" &&
    !isNaN(it.length) && isInteger(it.length) &&
    it.length >= 0 && it.length <= Number.MAX_SAFE_INTEGER;
}

/** @ignore */
export default isArrayLike;
