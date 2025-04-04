/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/positive-nonzero-finite
 */

import { isNonZeroFiniteNumber } from "./nonzero_finite.ts";
import type {
  Cast,
  MAYBE_POSITIVE_NON_ZERO_FINITE,
  POSITIVE_NON_ZERO_FINITE,
} from "./types.ts";

// #endregion NonZeroFinite
// #region PositiveNonZeroFinite
/**
 * Casts a value into a positive nonzero finite type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type PositiveNonZeroFinite<N = number> = Cast<
  N,
  POSITIVE_NON_ZERO_FINITE
>;
/**
 * Casts a value into a partial positive nonzero finite type. If the value is
 * not a number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybePositiveNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_POSITIVE_NON_ZERO_FINITE
>;
/**
 * Checks if a given value is a positive nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroFiniteNumber(0)); // false
 * console.log(isPositiveNonZeroFiniteNumber(1)); // true
 * console.log(isPositiveNonZeroFiniteNumber(-1)); // false
 * console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
 * console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
 * console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroFiniteNumber<const N = number>(
  it: N,
): it is PositiveNonZeroFinite<N>;

/**
 * Checks if a given value is a positive nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroFiniteNumber(0)); // false
 * console.log(isPositiveNonZeroFiniteNumber(1)); // true
 * console.log(isPositiveNonZeroFiniteNumber(-1)); // false
 * console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
 * console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
 * console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroFiniteNumber(
  it: unknown,
): it is PositiveNonZeroFinite;

/** @ignore */
export function isPositiveNonZeroFiniteNumber(
  it: unknown,
): it is PositiveNonZeroFinite {
  return isNonZeroFiniteNumber(it) && +it > 0;
}

/** @ignore */
export default isPositiveNonZeroFiniteNumber;
