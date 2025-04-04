/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/float16
 */

/**
 * Checks if a given number is a 16-bit half-precision floating-point number,
 * also known as `float16` or `binary16`, as defined by the IEEE 754 standard.
 *
 * @example
 * ```ts
 * import { isFloat16 } from "jsr:@nick/is/float16";
 *
 * isFloat16(1); // true
 * isFloat16(1.5); // true
 * isFloat16(3.140625); // true
 * isFloat16(NaN); // false
 * isFloat16(1.1); // false
 * isFloat16(Math.PI); // false
 * isFloat16(Infinity); // false
 * ```
 * @module float16
 */
import { isFloat } from "./float.ts";
import { f16round } from "@nick/math/f16round";
import type { Cast, FLOAT16, MAYBE_FLOAT16 } from "./types.ts";

/**
 * Casts a value into a 16-bit floating-point type (half-precision).
 *
 * @example
 * ```ts
 * import { isFloat16, type Float16 } from "@nick/is/float16";
 *
 * let i = 1.5 as Float16, y = 0;
 *
 * if (isFloat16(i)) {
 *   console.log(i);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * i = 1; // <- TS2322 Type '1' is not assignable to type 'Float16'.
 * ```
 * @category Numbers
 * @category Types
 * @tags float16, number
 * @module float16
 */
export type Float16<N = number> = Cast<N, FLOAT16>;

/**
 * Casts a value into a partial 16-bit floating-point type (half-precision).
 *
 * @category Numbers
 * @category Types
 * @tags maybe, float16, number
 */
export type MaybeFloat16<N = number> = Cast<N, MAYBE_FLOAT16>;

/**
 * Checks if a value is a 16-bit half-precision floating-point number, also
 * known as `float16` or `binary16`, as defined by the IEEE 754 standard.
 *
 * @param it The value to check.
 * @returns `true` if the value is a half-precision floating-point number.
 * Otherwise `false`.
 * @example
 * ```ts
 * import { isFloat16 } from "@nick/is/float16";
 *
 * isFloat16(1); // true
 * isFloat16(1.5); // true
 * isFloat16(3.140625); // true
 * isFloat16(NaN); // false
 * isFloat16(1.1); // false
 * isFloat16(Math.PI); // false
 * isFloat16(Infinity); // false
 * ```
 * @category Numbers
 */
export function isFloat16<const N = number>(it: N): it is Float16<N>;

/**
 * Checks if a value is a 16-bit half-precision floating-point number, also
 * known as `float16` or `binary16`, as defined by the IEEE 754 standard.
 *
 * @param it The value to check.
 * @returns `true` if the value is a half-precision floating-point number.
 * Otherwise `false`.
 * @category Numbers
 */
export function isFloat16(it: unknown): it is Float16;

/** @internal */
// deno-lint-ignore no-explicit-any
export function isFloat16(it: any): it is Float16 {
  return isFloat(it) && +it === f16round(+it);
}

// /**
//  * Converts a JavaScript number to IEEE 754 16-bit half-precision float (Float16).
//  * This conversion uses a manual approach with bit manipulation.
//  *
//  * @param value The JavaScript number to convert.
//  * @returns {number} The equivalent half-precision float bit pattern as a 16-bit unsigned integer.
//  * @internal
//  */
// function toFloat16Bits(value: number): number {
//   // Handle special cases for NaN and Infinity
//   if (!Number.isFinite(value)) {
//     if (value === Infinity) return 0x7C00; // Positive Infinity
//     if (value === -Infinity) return 0xFC00; // Negative Infinity
//     return 0x7E00; // NaN
//   }
//   const sign = (value < 0 ? 1 : 0) << 15;
//   value = Math.abs(value);
//   if (value === 0) return sign;
//   let expo = Math.floor(Math.log2(value));
//   let mant = value / Math.pow(2, expo);
//   if (mant < 1) mant *= 2, expo -= 1;
//   expo += 15;
//   if (expo <= 0) { // Subnormal numbers
//     return sign | Math.round(mant * Math.pow(2, 10 + expo));
//   }
//   if (expo >= 31) return sign | 0x7C00;
//   mant = Math.round((mant - 1) * Math.pow(2, 10));
//   return sign | (expo << 10) | mant;
// }

// /**
//  * Reconstructs a JavaScript number from an IEEE 754 16-bit half-precision
//  * float (Float16).
//  *
//  * @param bits The 16-bit bit pattern.
//  * @returns The reconstructed JavaScript number.
//  * @internal
//  */
// function fromFloat16Bits(bits: number): number {
//   const sign = ((bits >> 15) & 0x1) ? -1 : 1;
//   const expo = (bits >> 10) & 0x1F;
//   const mant = bits & 0x3FF;
//   if (expo === 0x1F) return mant ? NaN : sign * Infinity;
//   const [e, m] = expo ? [expo - 15, mant + 0x400] : [-14, mant];
//   return sign * m * Math.pow(2, e - 10);
// }

/** @ignore */
export default isFloat16;
