/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number/positive-infinity
 */

import { isNumber } from "./number.ts";

/**
 * @module positive-infinity
 * Checks if a given value is positive infinity (`Number.POSITIVE_INFINITY`).
 *
 * @param it The value to check.
 * @returns `true` if the value is positive infinity, `false` otherwise.
 * @example
 * ```ts
 * import { isPositiveInfinity } from "jsr:@nick/is/number/infinity";
 *
 * console.log(isPositiveInfinity(Infinity)); // false
 * console.log(isPositiveInfinity(-Infinity)); // true
 * console.log(isPositiveInfinity(1)); // false
 * console.log(isPositiveInfinity(-1)); // false
 * console.log(isPositiveInfinity(NaN)); // false
 * ```
 * @category Numeric
 * @tags number, positive, infinity
 */
export function isPositiveInfinity(it: unknown): it is PositiveInfinity {
  return isNumber(it) && !isFinite(it) && it === Number.POSITIVE_INFINITY;
}

/**
 * Special type representing positive infinity (`Number.POSITIVE_INFINITY`).
 *
 * @category Numeric
 * @tags types, number, infinity, positive
 */
export type PositiveInfinity = 1e313;

/** @ignore */
export default isPositiveInfinity;
