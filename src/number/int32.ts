/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/int32
 */

/**
 * @module int32
 *
 * This module provides a runtime function and a compile-time branded types to
 * check if a given value is a signed 32-bit integer. It is similar to other
 * modules in the `@nick/is/number` namespace, but is specifically designed to
 * handle 32-bit signed integers.
 *
 * @example
 * ```ts
 * import { isInt32, type Int32, type MaybeInt32 } from "jsr:@type/number/int32";
 *
 * let value = 1 as Int32;
 *
 * const setValue = (newValue: MaybeInt32) => {
 *   if (!isInt32(newValue)) {
 *     throw new RangeError("Expected a 32-bit signed integer.");
 *   }
 *   value = newValue;
 * };
 *
 * setValue(0x7FFFFFFF); // <- No error!
 * console.log(value); // <- 2147483647
 *
 * // This will raise a TypeScript compiler error, even though the value is
 * // within the 32-bit signed integer range:
 * value = -214748; // <- TS2322 Type '-214748' is not assignable to type 'Int32'.
 *
 * // This will throw a runtime RangeError, because the value is outside the
 * // 32-bit signed integer range:
 * setValue(0x80000000); // <- RangeError: Expected a 32-bit signed integer.
 * ```
 * @category Numbers
 * @tags int32, number
 */
import { isInteger } from "./integer.ts";
import type { Cast, INT32, MAYBE_INT32 } from "./types.ts";

/**
 * Casts a value into a signed 32-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isInt32, type Int32 } from "jsr:@type/number/int32";
 *
 * let value = 1 as Int32;
 *
 * const setValue = (newValue: Int32) => {
 *   if (isInt32(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFFFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
 * ```
 * @category Numbers
 * @category Types
 * @tags int32, number
 */
export type Int32<N = number> = Cast<N, INT32>;

/**
 * Casts a value into a partial signed 32-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isInt32, type MaybeInt32 } from "jsr:@type/number/int32";
 *
 * let value = 1 as MaybeInt32;
 *
 * const setValue = (newValue: MaybeInt32) => {
 *   if (isInt32(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFFFFFF); // <- No error!
 * value = -2147483649; // <- No error! (this is the main difference from `Int32`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, int32, number
 */
export type MaybeInt32<N = number> = Cast<N, MAYBE_INT32>;

/**
 * Checks if a given value is a signed 32-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if `it` is a signed 32-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt32, type Int32, type MaybeInt32 } from "jsr:@type/number/int32";
 *
 * let value = 1 as Int32;
 *
 * const setValue = (newValue: MaybeInt32) => {
 *  if (isInt32(newValue)) value = newValue;
 * };
 *
 * setValue(0x7FFFFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
 * ```
 * @category Numbers
 * @tags int32, number
 */
export function isInt32<const N = number>(it: N): it is Int32<N>;

/**
 * Checks if a given value is a signed 32-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if `it` is a signed 32-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInt32 } from "jsr:@type/number/int32";
 *
 * console.log(isInt32(0x7FFFFFFF)); // <- true
 * console.log(isInt32(-2147483649)); // <- false
 * ```
 * @category Numbers
 * @tags int32, number
 */
export function isInt32(it: unknown): it is Int32;

/** @ignore */
export function isInt32(it: unknown): it is Int32 {
  return isInteger(it) && it >= -2147483648 && it <= 2147483647;
}

/** @ignore */
export default isInt32;
