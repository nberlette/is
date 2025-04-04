/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/positive-finite
 */

import { isFinite } from "./finite.ts";
import type { Cast, MAYBE_POSITIVE_FINITE, POSITIVE_FINITE } from "./types.ts";

/**
 * Casts a value into a positive finite type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numbers
 */
export type PositiveFinite<N = number> = Cast<N, POSITIVE_FINITE>;

/**
 * Casts a value into a partial positive finite type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybePositiveFinite<N = number> = Cast<N, MAYBE_POSITIVE_FINITE>;

/**
 * Checks if a given value is a positive finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveFiniteNumber(0)); // false
 * console.log(isPositiveFiniteNumber(1)); // true
 * console.log(isPositiveFiniteNumber(-1)); // false
 * console.log(isPositiveFiniteNumber(1.5)); // true
 * console.log(isPositiveFiniteNumber(NaN)); // false
 * console.log(isPositiveFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveFiniteNumber<const N = number>(
  it: N,
): it is PositiveFinite<N>;

/**
 * Checks if a given value is a positive finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveFiniteNumber(0)); // false
 * console.log(isPositiveFiniteNumber(1)); // true
 * console.log(isPositiveFiniteNumber(-1)); // false
 * console.log(isPositiveFiniteNumber(1.5)); // true
 * console.log(isPositiveFiniteNumber(NaN)); // false
 * console.log(isPositiveFiniteNumber(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isPositiveFiniteNumber(it: unknown): it is PositiveFinite;

/** @ignore */
export function isPositiveFiniteNumber(it: unknown): it is PositiveFinite {
  return isFinite(it) && +it >= 0;
}

/** @ignore */
export default isPositiveFiniteNumber;
