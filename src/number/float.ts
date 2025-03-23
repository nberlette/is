/**
 * @module float
 *
 * Checks if a given number is a floating-point number. Returns `true` if the
 * value is a number and **not** an integer, otherwise `false`.
 *
 * The {@linkcode isFloat} function is designed to work with single-precision
 * and double-precision floating-point numbers, and will return `true` for both
 * types of floating-point numbers.
 *
 * - For single precision floating-points, try {@link isFloat32} instead.
 * - For double precision, see {@link isFloat64} (alias {@link isDouble}).
 */
import type { Cast, FLOAT, MAYBE_FLOAT } from "./types.ts";

/**
 * Casts a value into a floating-point type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat, type Float } from "@nick/is/float";
 *
 * let x = 1.5 as Float, y = 0;
 *
 * if (isFloat(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 1; // <- TS2322 Type '1' is not assignable to type 'Float'.
 * ```
 * @category Numbers
 * @category Types
 * @tags float, number
 * @module float
 */
export type Float<N = number> = Cast<N, FLOAT>;

/**
 * Casts a value into a partial floating-point type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isFloat, type MaybeFloat } from "@nick/is/float";
 *
 * let x = 1.5 as MaybeFloat, y = 0;
 *
 * if (isFloat(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = 1; // <- No error! (this is the main difference from `Float`)
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, float, number
 */
export type MaybeFloat<N = number> = Cast<N, MAYBE_FLOAT>;

/**
 * Checks if the value is a floating-point number. Supports both single and
 * double precision floating-point numbers.
 *
 * @param it The value to check.
 * @returns `true` if the value is a floating-point number, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat } from "@nick/is/float";
 *
 * isFloat(1); // false
 * isFloat(1.0); // false
 * isFloat(1.1); // true
 * isFloat(1.00001e1); // true
 * ```
 * @category Numbers
 */
export function isFloat<const N = number>(it: N): it is Float<N>;

/**
 * Checks if the value is a floating-point number. Supports both single and
 * double precision floating-point numbers.
 *
 * ## Rules for what is (and isn't) seen as a floating-point number
 *
 * - `0`, `-0` are considered valid floating-point numbers, and return `true`.
 * - `1`, `-1` and other integers (or _"non-floating"_ values) return `false`.
 * - Special cases like `Infinity`, `-Infinity`, and `NaN` return `false`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a floating-point number, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat } from "@nick/is/float";
 *
 * isFloat(0); // true
 * isFloat(1); // false
 * isFloat(1.0); // false
 * isFloat(1.1); // true
 * isFloat(1.00001e1); // true
 * ```
 * @category Numbers
 */
export function isFloat(it: unknown): it is Float;

/** @ignore */
// deno-lint-ignore no-explicit-any
export function isFloat(it: any): it is Float {
  return (
    (typeof it === "number" || typeof it === "string") &&
    (it = +it) === it && // coerce to number, check against NaN
    (it !== 1 / 0) && // check against +Infinity
    (it !== -1 / 0) && // check against -Infinity
    (it % 1 !== 0 || it === 0) // allow 0/-0, but no integers!
  );
}

/** @ignore */
export default isFloat;
