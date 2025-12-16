/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number/float32
 */

/**
 * Checks if a given number is a floating-point number. Returns `true` if the
 * value is a number and **not** an integer, otherwise `false`.
 *
 * The {@linkcode isFloat32} function is designed to work with single-precision
 * and double-precision floating-point numbers, and will return `true` for both
 * types of floating-point numbers.
 *
 * - For single precision floating-points, try {@link isFloat32} instead.
 * - For double precision, see {@link isFloat64} (alias {@link isDouble}).
 *
 * @example
 * ```ts
 * import { isFloat32 } from "jsr:@nick/is/float32";
 *
 * console.assert(isFloat32(1.1)); // true
 * console.assert(isFloat32(1.00001e1)); // true
 * console.assert(!isFloat32(1)); // false
 * console.assert(!isFloat32(1.0)); // false
 * ```
 * @module float32
 */
import { isFloat } from "./float.ts";
import type { Float32 } from "@nick/math/types";
import { roundFloat32 } from "@nick/math/float32";

/**
 * Casts a value into a floating-point type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat32, type Float32 } from "jsr:@nick/is/float32";
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
 * @category Types
 * @tags float32, number
 * @module float32
 */
export type { Float32 } from "@nick/math/types";

/**
 * Casts a value into a partial floating-point type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat32, type MaybeFloat32 } from "jsr:@nick/is/float32";
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
 * @category Numeric
 * @category Types
 * @tags maybe, float32, number
 */
export type MaybeFloat32<N extends number = number> = N & Partial<Float32<N>>;

/**
 * Checks if the value is a floating-point number. Supports single-precision
 * floating-point numbers.
 *
 * @param it The value to check.
 * @returns `true` if the value is a single-precision floating-point number,
 * otherwise `false`.
 * @example
 * ```ts
 * import { isFloat32 } from "jsr:@nick/is/float32";
 *
 * isFloat32(1); // false
 * isFloat32(1.0); // false
 * isFloat32(1.1); // true
 * isFloat32(1.00001e1); // true
 * ```
 * @category Numeric
 */
export function isFloat32<const N extends number>(it: N): it is Float32<N>;

/**
 * Checks if the value is a floating-point number. Supports single-precision
 * floating-point numbers.
 *
 * @param it The value to check.
 * @returns `true` if the value is a single-precision floating-point number,
 * otherwise `false`.
 * @example
 * ```ts
 * import { isFloat32 } from "jsr:@nick/is/float32";
 *
 * isFloat32(1); // false
 * isFloat32(1.0); // false
 * isFloat32(1.1); // true
 * isFloat32(1.00001e1); // true
 * ```
 * @category Numeric
 */
export function isFloat32(it: unknown): it is Float32;

/** @ignore */
export function isFloat32(it: unknown): it is Float32 {
  return isFloat(it) && it === roundFloat32(it);
}

/** @ignore */
export default isFloat32;
