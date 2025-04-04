/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/negative
 */

import type { Cast, MAYBE_NEGATIVE, NEGATIVE } from "./types.ts";

/**
 * Casts a value into a negative type. If the value is not a number, it will
 * resolve to `never`.
 *
 * @example
 * ```ts
 * import { isNegative, type Negative } from "jsr:@type/number";
 *
 * let x = -1 as Negative, y = 0;
 *
 * if (isNegative(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 0; // <- TS2322 Type '0' is not assignable to type 'Negative'.
 * ```
 * @category Numbers
 * @category Types
 * @tags negative, number
 * @module negative
 */
export type Negative<N = number> = Cast<N, NEGATIVE>;

/**
 * Casts a value into a partial negative type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isNegative, type MaybeNegative } from "jsr:@type/number";
 *
 * let x = -1 as MaybeNegative, y = 0;
 *
 * if (isNegative(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = -1; // <- No error! (this is the main difference from `Negative`)
 * ```
 * @category Types
 * @category Numbers
 * @tags maybe, negative, number
 */
export type MaybeNegative<N = number> = Cast<N, MAYBE_NEGATIVE>;

/**
 * Checks if a given value is a negative number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative number, `false` otherwise.
 * @example
 * ```ts
 * import { isNegative } from "jsr:@nick/is/integer";
 *
 * console.log(isNegative(0)); // false
 * console.log(isNegative(1)); // false
 * console.log(isNegative(1.5)); // false
 * console.log(isNegative(NaN)); // false
 * console.log(isNegative(Infinity)); // false
 *
 * console.log(isNegative(-0)); // true
 * console.log(isNegative(-1)); // true
 * console.log(isNegative(-Infinity)); // true
 * ```
 * @category Numbers
 * @tags negative
 */
export function isNegative<const N = number>(
  it: N,
): it is Negative<N>;

/**
 * Checks if a given value is a negative number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative number, `false` otherwise.
 * @example
 * ```ts
 * import { isNegative } from "jsr:@nick/is/integer";
 *
 * console.log(isNegative(0)); // false
 * console.log(isNegative(1)); // false
 * console.log(isNegative(1.5)); // false
 * console.log(isNegative(NaN)); // false
 * console.log(isNegative(Infinity)); // false
 *
 * console.log(isNegative(-0)); // true
 * console.log(isNegative(-1)); // true
 * console.log(isNegative(-Infinity)); // true
 * ```
 * @category Numbers
 * @tags negative
 */
export function isNegative(it: unknown): it is Negative<number>;

/** @ignore */
export function isNegative(it: unknown): it is Negative {
  return typeof it === "number" && !isNaN(it) && (
    // return true for *all* negative numbers, including -0
    +it < 0 || Object.is(it, -0)
  );
}

/** @ignore */
export default isNegative;
