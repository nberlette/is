/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/uint8
 */

/**
 * @module uint8
 *
 * Checks if a given value is an unsigned 8-bit integer (0 to 255).
 *
 * @example
 * ```ts
 * import { isUint8 } from "jsr:@nick/is/number/uint8";
 *
 * isUint8(1); // true
 * isUint8(128); // true
 * isUint8(0xFF); // true
 * isUint8(-1); // false
 * isUint8(420); // false
 * ```
 * @category Numbers
 * @tags uint8, number
 * @module uint8
 */
import { isInteger } from "./integer.ts";
import type { Cast, MAYBE_UINT8, UINT8 } from "./types.ts";

/**
 * Casts a value into an unsigned 8-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint8, type Uint8 } from "@nick/is/uint8";
 *
 * let i = 1 as Uint8, y = 0;
 *
 * if (isUint8(i)) {
 *   console.log(i);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * i = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint8'.
 * ```
 * @category Numbers
 * @category Types
 * @tags unsigned, integer
 */
export type Uint8<N = number> = Cast<N, UINT8>;

/**
 * Casts a value into a partial unsigned 8-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint8, type MaybeUint8 } from "@nick/is/uint8";
 *
 * let i = 1 as MaybeUint8, y = 0;
 *
 * if (isUint8(i)) {
 *   console.log(i);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Uint8`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, unsigned, integer
 */
export type MaybeUint8<N = number> = Cast<N, MAYBE_UINT8>;

/**
 * Checks if a given value is an unsigned 8-bit integer.
 *
 * @template N The type of the value to check.
 * @param it The value to check.
 * @returns {it is Uint8<N>} `true` if `it` is an unsigned 8-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint8 } from "jsr:@nick/is/uint8";
 *
 * isUint8(1); // true
 * isUint8(128); // true
 * isUint8(0xFF); // true
 * isUint8(-1); // false
 * isUint8(420); // false
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint8<const N = number>(it: N): it is Uint8<N>;

/**
 * Checks if a given value is an unsigned 8-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if `it` is an unsigned 8-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint8 } from "jsr:@nick/is/uint8";
 *
 * isUint8(1); // true
 * isUint8(128); // true
 * isUint8(0xFF); // true
 * isUint8(-1); // false
 * isUint8(420); // false
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint8(it: unknown): it is Uint8<number>;

/** @ignore */
export function isUint8(it: unknown): it is number {
  return isInteger(it) && it >= 0 && it <= 255;
}

/** @ignore */
export default isUint8;
