/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number/negative-nonzero-integer
 */

import type { Cast, INTEGER, NEGATIVE, NON_ZERO } from "./types.ts";
import { isNonZeroFiniteInteger } from "./nonzero_finite_integer.ts";

/**
 * Casts a value into a negative nonzero integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numeric
 */
export type NegativeNonZeroInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & INTEGER
>;

/**
 * Checks if a given value is a negative nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroInteger(0)); // false
 * console.log(isNegativeNonZeroInteger(1)); // false
 * console.log(isNegativeNonZeroInteger(-1)); // true
 * console.log(isNegativeNonZeroInteger(1.5)); // false
 * console.log(isNegativeNonZeroInteger(NaN)); // false
 * console.log(isNegativeNonZeroInteger(Infinity)); // true
 * ```
 * @category Numeric
 */
export function isNegativeNonZeroInteger<const N = number>(
  it: N,
): it is NegativeNonZeroInteger<N>;

/**
 * Checks if a given value is a negative nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroInteger(0)); // false
 * console.log(isNegativeNonZeroInteger(1)); // false
 * console.log(isNegativeNonZeroInteger(-1)); // true
 * console.log(isNegativeNonZeroInteger(1.5)); // false
 * console.log(isNegativeNonZeroInteger(NaN)); // false
 * console.log(isNegativeNonZeroInteger(Infinity)); // true
 * ```
 * @category Numeric
 */
export function isNegativeNonZeroInteger(
  it: unknown,
): it is NegativeNonZeroInteger;

/** @ignore */
export function isNegativeNonZeroInteger(
  it: unknown,
): it is NegativeNonZeroInteger {
  return isNonZeroFiniteInteger(it) && +it < 0;
}

/** @ignore */
export default isNegativeNonZeroInteger;
