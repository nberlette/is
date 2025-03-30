/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/infinity
 */

/**
 * @module infinity
 *
 * Checks if a given value is a non-finite number (`Infinity` or `-Infinity`).
 *
 * @example
 * ```ts
 * import { isInfinity } from "jsr:@nick/is/number/infinity";
 *
 * console.log(isInfinity(Infinity)); // true
 * console.log(isInfinity(-Infinity)); // true
 * console.log(isInfinity(1)); // false
 * console.log(isInfinity(-1)); // false
 * console.log(isInfinity(NaN)); // false
 * console.log(isInfinity())
 * ```
 * @category Numbers
 */
import { isNumber } from "./number.ts";
import type { PositiveInfinity } from "./positive_infinity.ts";
import type { NegativeInfinity } from "./negative_infinity.ts";

export * from "./positive_infinity.ts";
export * from "./negative_infinity.ts";

/**
 * Special type representing either positive or negative infinity.
 *
 * @category Numbers
 * @tags types, number, infinity
 */
export type Infinity = PositiveInfinity | NegativeInfinity;

/**
 * Checks if a given value is a non-finite number (`Infinity` or `-Infinity`).
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-finite number, `false` otherwise.
 * @example
 * ```ts
 * import { isInfinity } from "@nick/is/number/infinity";
 *
 * console.log(isInfinity(Infinity)); // true
 * console.log(isInfinity(-Infinity)); // true
 * console.log(isInfinity(1)); // false
 * console.log(isInfinity(-1)); // false
 * console.log(isInfinity(NaN)); // false
 * ```
 * @category Numbers
 */
export function isInfinity(it: unknown): it is Infinity {
  return isNumber(it) && !isFinite(it);
}

/** @ignore */
export default isInfinity;
