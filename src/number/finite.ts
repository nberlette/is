/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/finite
 */

import { isNumber } from "./number.ts";
import type { Cast, FINITE, MAYBE_FINITE } from "./types.ts";

// #region Finite
/**
 * Casts a value into a finite type. If the value is not a number, it will
 * resolve to `never`.
 *
 * @category Numbers
 */
export type Finite<N = number> = Cast<N, FINITE>;

/**
 * Casts a value into a partial finite type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybeFinite<N = number> = Cast<N, MAYBE_FINITE>;

/**
 * Checks if a given value is a finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a finite number, `false` otherwise.
 * @example
 * ```ts
 * import { isFinite } from "jsr:@nick/is/integer";
 *
 * console.log(isFinite(0)); // true
 * console.log(isFinite(1)); // true
 * console.log(isFinite(-1)); // true
 * console.log(isFinite(1.5)); // true
 * console.log(isFinite(NaN)); // false
 * console.log(isFinite(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isFinite<const N = number>(
  it: N,
): it is Finite<N>;

/**
 * Checks if a given value is a finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a finite number, `false` otherwise.
 * @example
 * ```ts
 * import { isFinite } from "jsr:@nick/is/integer";
 *
 * console.log(isFinite(0)); // true
 * console.log(isFinite(1)); // true
 * console.log(isFinite(-1)); // true
 * console.log(isFinite(1.5)); // true
 * console.log(isFinite(NaN)); // false
 * console.log(isFinite(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isFinite(it: unknown): it is Finite;

/** @ignore */
export function isFinite(it: unknown): it is Finite {
  return isNumber(it) && Number.isFinite(it);
}

/** @ignore */
export default isFinite;
