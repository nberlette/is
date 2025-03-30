/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/negative-finite
 */

import { isFinite } from "./finite.ts";
import type { Cast, MAYBE_NEGATIVE_FINITE, NEGATIVE_FINITE } from "./types.ts";

// #endregion PositiveFinite
// #region NegativeFinite
/**
 * Casts a value into a negative finite type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeFinite<N = number> = Cast<N, NEGATIVE_FINITE>;

/**
 * Casts a value into a partial negative finite type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybeNegativeFinite<N = number> = Cast<N, MAYBE_NEGATIVE_FINITE>;

/**
 * Checks if a given value is a negative finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeFiniteNumber(0)); // false
 * console.log(isNegativeFiniteNumber(1)); // false
 * console.log(isNegativeFiniteNumber(-1)); // true
 * console.log(isNegativeFiniteNumber(1.5)); // false
 * console.log(isNegativeFiniteNumber(NaN)); // false
 * console.log(isNegativeFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeFiniteNumber<const N = number>(
  it: N,
): it is NegativeFinite<N>;

/**
 * Checks if a given value is a negative finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeFiniteNumber(0)); // false
 * console.log(isNegativeFiniteNumber(1)); // false
 * console.log(isNegativeFiniteNumber(-1)); // true
 * console.log(isNegativeFiniteNumber(1.5)); // false
 * console.log(isNegativeFiniteNumber(NaN)); // false
 * console.log(isNegativeFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isNegativeFiniteNumber(it: unknown): it is NegativeFinite;

/** @ignore */
export function isNegativeFiniteNumber(it: unknown): it is NegativeFinite {
  return isFinite(it) && +it < 0;
}

/** @ignore */
export default isNegativeFiniteNumber;
