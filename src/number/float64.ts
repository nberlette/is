/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/float64
 */

/**
 * @module float64
 *
 * This module provides a set of type guards for working with
 * float64-precision floating-point numbers. It includes a runtime type guard
 * function and a compile-time type alias for TypeScript, allowing you to
 * perform strict type checks and utilize strict type annotations in your code
 * with minimal effort.
 *
 * @example
 * ```ts
 * import { isFloat64, type Float64 } from "jsr:@type/number/float64";
 *
 * let x = 1.5, y = 0;
 *
 * let z = 2.5 as Float64;
 *
 * if (isFloat64(x)) z = x;
 * ```
 *
 * @category Numbers
 */
import { isFloat } from "./float.ts";
import type { Cast, FLOAT64, MAYBE_FLOAT64 } from "./types.ts";

/**
 * Casts a value into a float64-precision floating-point type. If the value is
 * not a number, it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat64, type Float64 } from "jsr:@type/number/float64";
 *
 * let x = 1.5 as Float64, y = 0;
 *
 * if (isFloat64(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 1; // <- TS2322 Type '1' is not assignable to type 'Float64'.
 * ```
 * @category Numbers
 * @category Types
 * @tags float64, number
 * @module float64
 */
export type Float64<N = number> = Cast<N, FLOAT64>;

/**
 * Casts a value into a partial float64-precision floating-point type. If the
 * value is not a number, it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat64, type MaybeFloat64 } from "jsr:@type/number/float64";
 *
 * let x = 1.5 as MaybeFloat64, y = 0;
 *
 * if (isFloat64(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Float64`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, float64, number
 */
export type MaybeFloat64<N = number> = Cast<N, MAYBE_FLOAT64>;

/**
 * Checks if the value is a float64-precision floating-point number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a float64-precision floating-point number,
 * `false` otherwise.
 * @example
 * ```ts
 * import { isFloat64 } from "jsr:@nick/is/float64";
 *
 * console.log(isFloat64(1.5)); // true
 * console.log(isFloat64(0)); // false
 * console.log(isFloat64(1)); // false
 * console.log(isFloat64(-1)); // false
 * console.log(isFloat64(NaN)); // false
 * console.log(isFloat64(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isFloat64<const N = number>(it: N): it is Float64<N>;

/**
 * Checks if the value is a float64-precision floating-point number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a float64-precision floating-point number,
 * `false` otherwise.
 * @example
 * ```ts
 * import { isFloat64 } from "jsr:@nick/is/float64";
 *
 * console.log(isFloat64(1.5)); // true
 * console.log(isFloat64(0)); // false
 * console.log(isFloat64(1)); // false
 * console.log(isFloat64(-1)); // false
 * console.log(isFloat64(NaN)); // false
 * console.log(isFloat64(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isFloat64(it: unknown): it is Float64;

/** @ignore */
export function isFloat64(it: unknown): it is Float64 {
  if (isFloat(it)) {
    // we always prefer to use Float64Array, if available
    if (typeof Float64Array === "function") {
      const float64Array = new Float64Array(1);
      float64Array[0] = +it;
      return float64Array[0] === +it;
    } else {
      // if Float64Array is unavailable (what runtime ARE you running?!),
      // we'll use an alternate approach to check if it is a float64.
      return fromFloat64Bits(toFloat64Bits(+it)) === +it;
    }
  }
  return false;
}

/**
 * Converts a JavaScript number to IEEE 754 64-bit double-precision float
 * (Float64) using a manual approach with bit manipulation.
 *
 * @param it The JavaScript number to convert.
 * @returns The equivalent double-precision float bit pattern as a 64-bit
 * unsigned integer (bigint).
 * @internal
 */
function toFloat64Bits(value: number): bigint {
  if (!Number.isFinite(value)) {
    if (value === Infinity) return 0x7FF0000000000000n;
    if (value === -Infinity) return 0xFFF0000000000000n;
    return 0x7FF8000000000000n; // NaN
  }
  const sign = value < 0 ? 1n : 0n;
  value = Math.abs(value);
  if (value === 0) return sign << 63n;
  let expo = Math.floor(Math.log2(value));
  let mant = value / Math.pow(2, expo);
  if (mant < 1) mant *= 2, expo -= 1;
  expo += 1023;
  mant = Math.floor((mant - 1) * Math.pow(2, 52));

  return (sign << 63n) | (BigInt(expo) << 52n) | BigInt(mant);
}

/**
 * Reconstructs a JavaScript number from an IEEE 754 64-bit double-precision
 * float (Float64) bit pattern (bigint). This conversion uses a manual approach
 * with bit manipulation to support environments without Float64Array support.
 *
 * @param bits The 64-bit bit pattern.
 * @returns {number} The reconstructed JavaScript number.
 * @internal
 */
function fromFloat64Bits(bits: bigint): number {
  const sign = ((bits >> 63n) & 0x1n) ? -1 : 1;
  const expo = (bits >> 52n) & 0x7FFn;
  const mant = bits & 0xFFFFFFFFFFFFFn;
  if (expo === 0x7FFn) return mant ? NaN : sign * Infinity;
  const e = (expo ? Number(expo) : 1) - 1023;
  const m = (expo ? 2 ** 52 : 0) + Number(mant);
  return sign * m * (2 ** (e - 52));
}

/** @ignore */
export default isFloat64;
