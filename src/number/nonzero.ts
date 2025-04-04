/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/nonzero
 */

/**
 * This module provides type guards for checking for nonzero numbers, as well
 * as purely type-level utilities for casting values into a nonzero type.
 *
 * @example
 * ```ts
 * import { isNonZero, type NonZero } from "jsr:@type/number";
 *
 * let x = 1 as NonZero, y = 0;
 *
 * if (isNonZero(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 0; // <- TS2322 Type '0' is not assignable to type 'NonZero'.
 * ```
 * @module nonzero
 */
import type { Cast, MAYBE_NON_ZERO, NON_ZERO } from "./types.ts";
import { isNumber } from "./number.ts";

/**
 * Casts a value into a nonzero type. If the value is not a number, it will
 * resolve to `never`.
 *
 * @example
 * ```ts
 * import { isNonZero, type NonZero } from "jsr:@type/number";
 *
 * let x = 1 as NonZero, y = 0;
 *
 * if (isNonZero(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 0; // <- TS2322 Type '0' is not assignable to type 'NonZero'.
 * ```
 * @category Numbers
 * @module nonzero
 */
export type NonZero<N = number> = Cast<N, NON_ZERO>;

/**
 * Casts a value into a partial nonzero type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isNonZero, type MaybeNonZero } from "jsr:@type/number";
 *
 * let x = 1 as MaybeNonZero, y = 0;
 *
 * if (isNonZero(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `NonZero`)
 * ```
 * @category Numbers
 */
export type MaybeNonZero<N = number> = Cast<N, MAYBE_NON_ZERO>;

/**
 * Checks if a given value is a nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero number, `false` otherwise.
 * @example
 * ```ts
 * import { isNonZero } from "jsr:@nick/is/number/nonzero";
 *
 * console.log(isNonZero(1)); // true
 * console.log(isNonZero(-1)); // true
 * console.log(isNonZero(1.5)); // true
 *
 * console.log(isNonZero(0)); // false
 * console.log(isNonZero(-0)); // false
 * console.log(isNonZero(NaN)); // false
 * console.log(isNonZero(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZero<const N = number>(
  it: N,
): it is NonZero<N>;

/**
 * Checks if a given value is a nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero number, `false` otherwise.
 * @example
 * ```ts
 * import { isNonZero } from "jsr:@nick/is/number/nonzero";
 *
 * console.log(isNonZero(1)); // true
 * console.log(isNonZero(-1)); // true
 * console.log(isNonZero(1.5)); // true
 *
 * console.log(isNonZero(0)); // false
 * console.log(isNonZero(-0)); // false
 * console.log(isNonZero(NaN)); // false
 * console.log(isNonZero(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZero(it: unknown): it is NonZero;

/** @ignore */
export function isNonZero(it: unknown): it is NonZero {
  return isNumber(it) && !isNaN(it) && +it !== 0;
}

/** @ignore */
export default isNonZero;
