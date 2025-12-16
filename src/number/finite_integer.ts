/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number/finite-integer
 */

/**
 * Checks if a given value is a finite integer.
 *
 * @example
 * ```ts
 * import { isFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isFiniteInteger(0)); // true
 * console.log(isFiniteInteger(1)); // true
 * console.log(isFiniteInteger(-1)); // true
 * console.log(isFiniteInteger(1.5)); // false
 * console.log(isFiniteInteger(NaN)); // false
 * console.log(isFiniteInteger(Infinity)); // false
 * ```
 * @category Numeric
 * @module finite-integer
 */
import type { Cast, FINITE, INTEGER } from "./types.ts";
import { isInteger } from "./integer.ts";

/**
 * Checks if a given value is a finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a finite integer, `false` otherwise.
 * @example
 * ```ts
 * import { isFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isFiniteInteger(0)); // true
 * console.log(isFiniteInteger(1)); // true
 * console.log(isFiniteInteger(-1)); // true
 * console.log(isFiniteInteger(1.5)); // false
 * console.log(isFiniteInteger(NaN)); // false
 * console.log(isFiniteInteger(Infinity)); // false
 * ```
 * @category Numeric
 */
export function isFiniteInteger<const N = number>(
  it: N,
): it is FiniteInteger<N>;

/**
 * Checks if a given value is a finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a finite integer, `false` otherwise.
 * @example
 * ```ts
 * import { isFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isFiniteInteger(0)); // true
 * console.log(isFiniteInteger(1)); // true
 * console.log(isFiniteInteger(-1)); // true
 * console.log(isFiniteInteger(1.5)); // false
 * console.log(isFiniteInteger(NaN)); // false
 * console.log(isFiniteInteger(Infinity)); // false
 * ```
 * @category Numeric
 */
export function isFiniteInteger(it: unknown): it is FiniteInteger;

/** @ignore */
export function isFiniteInteger(it: unknown): it is FiniteInteger {
  return isInteger(it) && Number.isFinite(it);
}

/**
 * Casts a value into a finite integer type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numeric
 */
export type FiniteInteger<N = number> = Cast<N, FINITE & INTEGER>;

/** @ignore */
export default isFiniteInteger;
