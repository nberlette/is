/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/float32
 */

/**
 * @module float32
 *
 * Checks if a given number is a floating-point number. Returns `true` if the
 * value is a number and **not** an integer, otherwise `false`.
 *
 * The {@linkcode isFloat32} function is designed to work with single-precision
 * and double-precision floating-point numbers, and will return `true` for both
 * types of floating-point numbers.
 *
 * - For single precision floating-points, try {@link isFloat32} instead.
 * - For double precision, see {@link isFloat64} (alias {@link isDouble}).
 */
import { isFloat } from "./float.ts";
import { fround } from "@nick/math/fround";
import type { Cast, FLOAT32, MAYBE_FLOAT32 } from "./types.ts";

/**
 * Casts a value into a floating-point type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat32, type Float32 } from "@nick/is/float32";
 *
 * let x = 1.5 as Float32, y = 0;
 *
 * if (isFloat32(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 1; // <- TS2322 Type '1' is not assignable to type 'Float32'.
 * ```
 * @category Numbers
 * @category Types
 * @tags float32, number
 * @module float32
 */
export type Float32<N = number> = Cast<N, FLOAT32>;

/**
 * Casts a value into a partial floating-point type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat32, type MaybeFloat32 } from "@nick/is/float32";
 *
 * let x = 1.5 as MaybeFloat32, y = 0;
 *
 * if (isFloat32(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Float32`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, float32, number
 */
export type MaybeFloat32<N = number> = Cast<N, MAYBE_FLOAT32>;

/**
 * Checks if the value is a floating-point number. Supports single-precision
 * floating-point numbers.
 *
 * @param it The value to check.
 * @returns `true` if the value is a single-precision floating-point number,
 * otherwise `false`.
 * @example
 * ```ts
 * import { isFloat32 } from "@nick/is/float32";
 *
 * isFloat32(1); // false
 * isFloat32(1.0); // false
 * isFloat32(1.1); // true
 * isFloat32(1.00001e1); // true
 * ```
 * @category Numbers
 */
export function isFloat32<const N = number>(it: N): it is Float32<N>;

/**
 * Checks if the value is a floating-point number. Supports single-precision
 * floating-point numbers.
 *
 * @param it The value to check.
 * @returns `true` if the value is a single-precision floating-point number,
 * otherwise `false`.
 * @example
 * ```ts
 * import { isFloat32 } from "@nick/is/float32";
 *
 * isFloat32(1); // false
 * isFloat32(1.0); // false
 * isFloat32(1.1); // true
 * isFloat32(1.00001e1); // true
 * ```
 * @category Numbers
 */
export function isFloat32(it: unknown): it is Float32;

/** @ignore */
export function isFloat32(it: unknown): it is Float32 {
  return isFloat(it) && it === fround(it);
}

/** @ignore */
export default isFloat32;
