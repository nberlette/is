/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/negative-integer
 */

import type { Cast, INTEGER, NEGATIVE } from "./types.ts";
import { isInteger } from "./integer.ts";

// #region NegativeInteger
/**
 * Casts a value into a negative integer type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeInteger<N = number> = Cast<N, NEGATIVE & INTEGER>;

/**
 * Checks if a given value is a negative integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative integer, `false` otherwise.
 * @example
 * ```ts
 * import { isNegativeInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeInteger(0)); // false
 * console.log(isNegativeInteger(1)); // false
 * console.log(isNegativeInteger(-1)); // true
 * console.log(isNegativeInteger(1.5)); // false
 * console.log(isNegativeInteger(NaN)); // false
 * console.log(isNegativeInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeInteger<const N = number>(
  it: N,
): it is NegativeInteger<N>;

/**
 * Checks if a given value is a negative integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative integer, `false` otherwise.
 * @example
 * ```ts
 * import { isNegativeInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeInteger(0)); // false
 * console.log(isNegativeInteger(1)); // false
 * console.log(isNegativeInteger(-1)); // true
 * console.log(isNegativeInteger(1.5)); // false
 * console.log(isNegativeInteger(NaN)); // false
 * console.log(isNegativeInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeInteger(it: unknown): it is NegativeInteger<number>;

/** @ignore */
export function isNegativeInteger(it: unknown): it is NegativeInteger<number> {
  return isInteger(it) && it < 0;
}

/** @ignore */
export default isNegativeInteger;
