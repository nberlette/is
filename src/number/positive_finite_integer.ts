/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/positive-finite-integer
 */

import { isFiniteInteger } from "./finite_integer.ts";
import type { Cast, FINITE, INTEGER, POSITIVE } from "./types.ts";

/**
 * Casts a value into a positive finite integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type PositiveFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & FINITE & INTEGER
>;

/**
 * Checks if a given value is a positive finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveFiniteInteger(0)); // false
 * console.log(isPositiveFiniteInteger(1)); // true
 * console.log(isPositiveFiniteInteger(-1)); // false
 * console.log(isPositiveFiniteInteger(1.5)); // false
 * console.log(isPositiveFiniteInteger(NaN)); // false
 * console.log(isPositiveFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveFiniteInteger<const N = number>(
  it: N,
): it is PositiveFiniteInteger<N>;

/**
 * Checks if a given value is a positive finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveFiniteInteger(0)); // false
 * console.log(isPositiveFiniteInteger(1)); // true
 * console.log(isPositiveFiniteInteger(-1)); // false
 * console.log(isPositiveFiniteInteger(1.5)); // false
 * console.log(isPositiveFiniteInteger(NaN)); // false
 * console.log(isPositiveFiniteInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveFiniteInteger(
  it: unknown,
): it is PositiveFiniteInteger;

/** @ignore */
export function isPositiveFiniteInteger(
  it: unknown,
): it is PositiveFiniteInteger {
  // ensure it is a finite integer or 0, but not -0
  return isFiniteInteger(it) && (it = +it) > 0 || (it === 0 && 1 / it > 0);
}

/** @ignore */
export default isPositiveFiniteInteger;
