/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/negative-nonzero
 */

import { isNegative } from "./negative.ts";
import type {
  Cast,
  MAYBE_NEGATIVE,
  MAYBE_NON_ZERO,
  NEGATIVE,
  NON_ZERO,
} from "./types.ts";

// #endregion PositiveNonZero
// #region NegativeNonZero
/**
 * Casts a value into a negative nonzero type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeNonZero<N = number> = Cast<N, NEGATIVE & NON_ZERO>;

/**
 * Casts a value into a partial negative nonzero type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybeNegativeNonZero<N = number> = Cast<
  N,
  MAYBE_NEGATIVE & MAYBE_NON_ZERO
>;

/**
 * Checks if a given value is a negative nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroNumber(0)); // false
 * console.log(isNegativeNonZeroNumber(1)); // false
 * console.log(isNegativeNonZeroNumber(-1)); // true
 * console.log(isNegativeNonZeroNumber(1.5)); // false
 * console.log(isNegativeNonZeroNumber(NaN)); // false
 * console.log(isNegativeNonZeroNumber(Infinity)); // false
 * ```
 */
export function isNegativeNonZeroNumber<const N = number>(
  it: N,
): it is NegativeNonZero<N>;

/**
 * Checks if a given value is a negative nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroNumber(0)); // false
 * console.log(isNegativeNonZeroNumber(1)); // false
 * console.log(isNegativeNonZeroNumber(-1)); // true
 * console.log(isNegativeNonZeroNumber(1.5)); // false
 * console.log(isNegativeNonZeroNumber(NaN)); // false
 * console.log(isNegativeNonZeroNumber(Infinity)); // false
 * ```
 */
export function isNegativeNonZeroNumber(it: unknown): it is NegativeNonZero;

/** @ignore */
export function isNegativeNonZeroNumber(it: unknown): it is NegativeNonZero {
  return isNegative(it) && +it !== 0;
}

/** @ignore */
export default isNegativeNonZeroNumber;
