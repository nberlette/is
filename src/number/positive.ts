/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/positive
 */

import type { Cast, MAYBE_POSITIVE, POSITIVE } from "./types.ts";

/**
 * Casts a value into a positive type. If the value is not a number, it will
 * resolve to `never`.
 *
 * @example
 * ```ts
 * import { isPositive, type Positive } from "jsr:@type/number";
 *
 * let x = 1 as Positive, y = 0;
 *
 * if (isPositive(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 0; // <- TS2322 Type '0' is not assignable to type 'Positive'.
 * ```
 * @category Numbers
 * @category Types
 * @tags positive, number
 * @module positive
 */
export type Positive<N = number> = Cast<N, POSITIVE>;

/**
 * Casts a value into a partial positive type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isPositive, type MaybePositive } from "jsr:@type/number";
 *
 * let x = 1 as MaybePositive, y = 0;
 *
 * if (isPositive(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Positive`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, positive, number
 */
export type MaybePositive<N = number> = Cast<N, MAYBE_POSITIVE>;

/**
 * Checks if a given value is a positive number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive number, `false` otherwise.
 * @example
 * ```ts
 * import { isPositive } from "jsr:@nick/is/integer";
 *
 * console.log(isPositive(0)); // true
 * console.log(isPositive(1)); // true
 * console.log(isPositive(-1)); // false
 * console.log(isPositive(1.5)); // true
 * console.log(isPositive(NaN)); // false
 * console.log(isPositive(Infinity)); // true
 * ```
 * @category Numbers
 * @tags positive, number
 */
export function isPositive<const N = number>(
  it: N,
): it is Positive<N>;

/**
 * Checks if a given value is a positive number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive number, `false` otherwise.
 * @example
 * ```ts
 * import { isPositive } from "jsr:@nick/is/integer";
 *
 * console.log(isPositive(0)); // true
 * console.log(isPositive(1)); // true
 * console.log(isPositive(-1)); // false
 * console.log(isPositive(1.5)); // true
 * console.log(isPositive(NaN)); // false
 * console.log(isPositive(Infinity)); // true
 * ```
 * @category Numbers
 * @tags positive, number
 */
export function isPositive(it: unknown): it is Positive;

/** @ignore */
export function isPositive(it: unknown): it is Positive {
  return typeof it === "number" && !isNaN(it) && it >= 0 && !Object.is(it, -0);
}

/** @ignore */
export default isPositive;
