/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/nonzero-integer
 */

import type { Cast, INTEGER, NON_ZERO } from "./types.ts";
import { isInteger } from "./integer.ts";

/**
 * Casts a value into a nonzero integer type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @category Numbers
 */
export type NonZeroInteger<N = number> = Cast<N, NON_ZERO & INTEGER>;

/**
 * Checks if a given value is a nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero integer, `false` otherwise.
 * @example
 * ```ts
 * import { isNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroInteger(0)); // false
 * console.log(isNonZeroInteger(1)); // true
 * console.log(isNonZeroInteger(-1)); // true
 * console.log(isNonZeroInteger(1.5)); // false
 * console.log(isNonZeroInteger(NaN)); // false
 * console.log(isNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroInteger<const N = number>(
  it: N,
): it is NonZeroInteger<N>;

/**
 * Checks if a given value is a nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero integer, `false` otherwise.
 * @example
 * ```ts
 * import { isNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroInteger(0)); // false
 * console.log(isNonZeroInteger(1)); // true
 * console.log(isNonZeroInteger(-1)); // true
 * console.log(isNonZeroInteger(1.5)); // false
 * console.log(isNonZeroInteger(NaN)); // false
 * console.log(isNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroInteger(it: unknown): it is NonZeroInteger;

/** @ignore */
export function isNonZeroInteger(it: unknown): it is NonZeroInteger {
  return isInteger(it) && it !== 0;
}

/** @ignore */
export default isNonZeroInteger;
