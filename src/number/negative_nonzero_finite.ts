/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/negative-nonzero-finite
 */

import { isNonZeroFiniteNumber } from "./nonzero_finite.ts";
import type {
  Cast,
  MAYBE_NEGATIVE_NON_ZERO_FINITE,
  NEGATIVE_NON_ZERO_FINITE,
} from "./types.ts";

/**
 * Casts a value into a negative nonzero finite type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeNonZeroFinite<N = number> = Cast<
  N,
  NEGATIVE_NON_ZERO_FINITE
>;

/**
 * Casts a value into a partial negative nonzero finite type. If the value is
 * not a number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybeNegativeNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_NEGATIVE_NON_ZERO_FINITE
>;

/**
 * Checks if a given value is a negative nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroFiniteNumber(0)); // false
 * console.log(isNegativeNonZeroFiniteNumber(1)); // false
 * console.log(isNegativeNonZeroFiniteNumber(-1)); // true
 * console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
 * console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
 * console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroFiniteNumber<const N = number>(
  it: N,
): it is NegativeNonZeroFinite<N>;

/**
 * Checks if a given value is a negative nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroFiniteNumber(0)); // false
 * console.log(isNegativeNonZeroFiniteNumber(1)); // false
 * console.log(isNegativeNonZeroFiniteNumber(-1)); // true
 * console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
 * console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
 * console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroFiniteNumber(
  it: unknown,
): it is NegativeNonZeroFinite;

/** @ignore */
export function isNegativeNonZeroFiniteNumber(
  it: unknown,
): it is NegativeNonZeroFinite {
  return isNonZeroFiniteNumber(it) && +it < 0;
}

/** @ignore */
export default isNegativeNonZeroFiniteNumber;
