/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/int8
 */

/**
 * @module int8
 *
 * Checks if a given value is a signed 8-bit integer (a.k.a. `int8` or `byte`).
 *
 * @example
 * ```ts
 * import { isInt8 } from "jsr:@nick/is/number/int8";
 *
 * isInt8(1); // true
 * isInt8(1.0); // false
 * isInt8(1.1); // false
 * isInt8(1.00001e1); // false
 * ```
 * @category Numbers
 */
import { isInteger } from "./integer.ts";
import type { Cast, INT8, MAYBE_INT8 } from "./types.ts";

/**
 * Casts a value into a signed 8-bit integer type.
 *
 * @example
 * ```ts
 * import { isInt8, type Int8 } from "@nick/is/int8";
 *
 * let i = 1 as Int8, y = 0;
 *
 * if (isInt8(i)) {
 *   console.log(i);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * i = 1.5; // <- TS2322 Type '1.5' is not assignable to type 'Int8'.
 * ```
 * @category Numbers
 * @category Types
 * @tags int8, number
 * @module int8
 */
export type Int8<N = number> = Cast<N, INT8>;

/**
 * Casts a value into a partial signed 8-bit integer type.
 *
 * @example
 * ```ts
 * import { isInt8, type MaybeInt8 } from "@nick/is/int8";
 *
 * let i = 1 as MaybeInt8, y = 0;
 *
 * if (isInt8(i)) {
 *   console.log(i);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Int8`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, int8, number
 */
export type MaybeInt8<N = number> = Cast<N, MAYBE_INT8>;

/**
 * Checks if a given value is a signed 8-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a signed 8-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt8 } from "@nick/is/int8";
 *
 * isInt8(1); // true
 * isInt8(1.0); // false
 * isInt8(1.1); // false
 * isInt8(1.00001e1); // false
 * ```
 * @category Numbers
 */
export function isInt8<const N = number>(it: N): it is Int8<N>;

/**
 * Checks if a given value is a signed 8-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a signed 8-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt8 } from "@nick/is/int8";
 *
 * console.log(isInt8(1)); // true
 * console.log(isInt8(1.0)); // false
 * console.log(isInt8(1.1)); // false
 * console.log(isInt8(1.00001e1)); // false
 * ```
 * @category Numbers
 */
export function isInt8(it: unknown): it is Int8;

/** @ignore */
export function isInt8(it: unknown): it is Int8 {
  return isInteger(it) && it >= -128 && it <= 127;
}

/** @ignore */
export default isInt8;
