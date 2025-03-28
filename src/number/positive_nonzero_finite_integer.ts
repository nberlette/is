/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-nonzero-finite-integer
 */

import type { Cast, FINITE, INTEGER, NON_ZERO, POSITIVE } from "./types.ts";
import { isNonZeroFiniteInteger } from "./nonzero_finite_integer.ts";

/**
 * Casts a value into a positive nonzero finite integer type. If the value is
 * not a number, it will resolve to `never`.s
 *
 * @category Numbers
 */
export type PositiveNonZeroFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & FINITE & INTEGER
>;

/**
 * Checks if a given value is a positive nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroFiniteInteger(0)); // false
 * console.log(isPositiveNonZeroFiniteInteger(1)); // true
 * console.log(isPositiveNonZeroFiniteInteger(-1)); // false
 * console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
 * console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
 * console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroFiniteInteger<const N = number>(
  it: N,
): it is PositiveNonZeroFiniteInteger<N>;

/**
 * Checks if a given value is a positive nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroFiniteInteger(0)); // false
 * console.log(isPositiveNonZeroFiniteInteger(1)); // true
 * console.log(isPositiveNonZeroFiniteInteger(-1)); // false
 * console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
 * console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
 * console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroFiniteInteger(
  it: unknown,
): it is PositiveNonZeroFiniteInteger;

/** @ignore */
export function isPositiveNonZeroFiniteInteger(
  it: unknown,
): it is PositiveNonZeroFiniteInteger {
  return isNonZeroFiniteInteger(it) && +it > 0;
}

/** @ignore */
export default isPositiveNonZeroFiniteInteger;
