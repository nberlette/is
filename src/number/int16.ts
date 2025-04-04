/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/int16
 */

/**
 * @module int16
 *
 * Checks if a value is a 16-bit integer (between -32768 and 32767).
 *
 * To check for an **unsigned** 16-bit integer (0-65535), use {@link isUint16}.
 *
 * @param it The value to check.
 * @returns `true` if `it` is a 16-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt16, type Int16, type MaybeInt16 } from "@nick/is/number";
 *
 * let value = 1 as Int16;
 *
 * const setValue = (newValue: MaybeInt16) => {
 *  if (isInt16(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
 * ```
 * @category Numbers
 * @tags int16, number
 */

import { isInteger } from "./integer.ts";
import type { Cast, INT16, MAYBE_INT16 } from "./types.ts";

/**
 * Casts a value into a signed 16-bit integer type.
 *
 * @example
 * ```ts
 * import { isInt16, type Int16, type MaybeInt16 } from "@nick/is/int16";
 *
 * let value = 1 as Int16;
 *
 * const setValue = (newValue: MaybeInt16) => {
 *   if (isInt16(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
 * ```
 * @category Numbers
 * @category Types
 * @tags int16, number
 */
export type Int16<N = number> = Cast<N, INT16>;

/**
 * Casts a value into a partial signed 16-bit integer type.
 *
 * @example
 * ```ts
 * import { isInt16, type Int16, type MaybeInt16 } from "@nick/is/int16";
 *
 * let value = 1 as Int16;
 *
 * const setValue = (newValue: MaybeInt16) => {
 *   if (isInt16(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFF); // <- No error!
 *
 * value = -32769;  // Error: Type '-32769' is not assignable to type 'Int16'.
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, int16, number
 */
export type MaybeInt16<N = number> = Cast<N, MAYBE_INT16>;

/**
 * Checks if a value is a 16-bit integer (between -32768 and 32767).
 *
 * To check for an **unsigned** 16-bit integer (0-65535), use {@link isUint16}.
 *
 * @param it The value to check.
 * @returns `true` if `it` is a 16-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt16, type Int16, type MaybeInt16 } from "@nick/is/number";
 *
 * let value = 1 as Int16;
 *
 * const setValue = (newValue: MaybeInt16) => {
 *  if (isInt16(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
 * ```
 * @category Numbers
 * @tags int16, number
 */
export function isInt16<const N = number>(it: unknown): it is Int16<N>;

/**
 * Checks if a value is a 16-bit integer (between -32768 and 32767).
 *
 * To check for an **unsigned** 16-bit integer (0-65535), use {@link isUint16}.
 *
 * @param it The value to check.
 * @returns `true` if `it` is a 16-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt16 } from "@nick/is/number";
 *
 * isInt16(32768); // false
 * isInt16(-32769); // false
 * isInt16(1); // true
 * isInt16(32767); // true
 * isInt16(-32768); // true
 * ```
 * @category Numbers
 */
export function isInt16(it: unknown): it is Int16;

/** @ignore */
export function isInt16(it: unknown): it is Int16 {
  return isInteger(it) && it >= -32768 && it <= 32767;
}

/** @ignore */
export default isInt16;
