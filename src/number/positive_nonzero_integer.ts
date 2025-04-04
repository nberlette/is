/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/positive-nonzero-integer
 */

import type { Cast, INTEGER, NON_ZERO, POSITIVE } from "./types.ts";
import { isPositiveInteger } from "./positive_integer.ts";

/**
 * Casts a value into a positive nonzero integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type PositiveNonZeroInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & INTEGER
>;

/**
 * Checks if a given value is a positive nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroInteger(0)); // false
 * console.log(isPositiveNonZeroInteger(1)); // true
 * console.log(isPositiveNonZeroInteger(-1)); // false
 * console.log(isPositiveNonZeroInteger(1.5)); // false
 * console.log(isPositiveNonZeroInteger(NaN)); // false
 * console.log(isPositiveNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroInteger<const N = number>(
  it: N,
): it is PositiveNonZeroInteger<N>;

/**
 * Checks if a given value is a positive nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroInteger(0)); // false
 * console.log(isPositiveNonZeroInteger(1)); // true
 * console.log(isPositiveNonZeroInteger(-1)); // false
 * console.log(isPositiveNonZeroInteger(1.5)); // false
 * console.log(isPositiveNonZeroInteger(NaN)); // false
 * console.log(isPositiveNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroInteger(
  it: unknown,
): it is PositiveNonZeroInteger;

/** @ignore */
export function isPositiveNonZeroInteger(
  it: unknown,
): it is PositiveNonZeroInteger {
  return isPositiveInteger(it) && +it !== 0;
}

/** @ignore */
export default isPositiveNonZeroInteger;
