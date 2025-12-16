/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number/zero
 */

// #region Zero

import type { Cast, MAYBE_ZERO, ZERO } from "./types.ts";

/**
 * Casts a value into a zero type. If the value is not a number, it will
 * resolve to `never`.
 *
 * @example
 * ```ts
 * import { isZero, type Zero } from "jsr:@nick/is/number/zero";
 *
 * let x = 0 as Zero, y = 1;
 *
 * if (isZero(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 1; // <- TS2322 Type '1' is not assignable to type 'Zero'.
 * ```
 * @category Numeric
 * @module zero
 */
export type Zero<N = number> = Cast<N, ZERO>;

/**
 * Casts a value into a partial zero type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isZero, type MaybeZero } from "jsr:@nick/is/number";
 *
 * let x = 0 as MaybeZero, y = 1;
 *
 * if (isZero(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 0; // <- No error! (this is the main difference from `Zero`)
 * ```
 * @category Numeric
 */
export type MaybeZero<N = number> = Cast<N, MAYBE_ZERO>;

/**
 * Checks if a given value is a zero number. This includes both positive and
 * negative zero. It also supports numbers and numeric strings.
 * - To check exclusively for `-0`, use {@link isNegativeZero} instead.
 * - To check exclusively for `+0` (meaning zero, but **not** negative zero),
 *   use {@link isPositiveZero} instead.
 * @category Numeric
 */
export function isZero<const N = number>(it: N): it is Zero<N>;

/**
 * Checks if a given value is a zero number. This includes both positive and
 * negative zero. It also supports numbers and numeric strings.
 * - To check exclusively for `-0`, use {@link isNegativeZero} instead.
 * - To check exclusively for `+0` (meaning zero, but **not** negative zero),
 *   use {@link isPositiveZero} instead.
 * @category Numeric
 */
export function isZero(it: unknown): it is Zero;

/** @ignore */
export function isZero(it: unknown): it is Zero {
  return String(it) === "0";
}

/** @ignore */
export default isZero;
