/**
 * Checks if the value is an integer.
 *
 * The `integer` submodule of `@nick/is` includes a number of type guards and
 * casts for working with integtral numbers in a type-safe manner, whether it's
 * on the runtime (value-level) or compile-time (type-level).
 *
 * @example
 * ```ts
 * import { isInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isInteger(0)); // true
 * console.log(isInteger(1)); // true
 * console.log(isInteger(-1)); // true
 * console.log(isInteger(1.5)); // false
 * console.log(isInteger(NaN)); // false
 * ```
 * @example
 * ```ts
 * import { isInteger, isPositiveInteger } from "jsr:@nick/is/integer";
 * import type {
 *   Integer,
 *   PositiveInteger,
 *   MaybeInteger,
 * } from "jsr:@nick/is/integer";
 *
 * function double(it: Integer): Integer {
 *   return (it * 2) as Integer;
 * }
 *
 * function increment(it: PositiveInteger): PositiveInteger {
 *   return (it + 1) as PositiveInteger;
 * }
 *
 * const value = 1 as const;
 * if (isInteger(value)) {
 *   const v2 = double(value);
 *   //                 ^? const value: Integer<1>
 *   console.log(v2);
 *   //          ^? const v2: Integer
 * } else {
 *   console.log(value);
 *   //           ^? const value: 1
 * }
 * ```
 * @category Numbers
 * @tags integer
 * @module integer
 */

import { isNaN } from "./nan.ts";
import type {
  CastInt,
  INTEGER,
  MAYBE_INTEGER,
  NEGATIVE,
  POSITIVE,
} from "./types.ts";

export type { Cast, Unwrap } from "./types.ts";

// #region BigInteger
/**
 * Casts a value into a big integer type (which is really just a bigint). If
 * the value is not a bigint or a string containing a valid integer, it will
 * resolve to `never`.
 * @category Numbers
 */
export type BigInteger<N = bigint> = CastInt<N, INTEGER>;
// #endregion BigInteger

// #region PositiveBigInteger
/**
 * Casts a value into a positive big integer type. If the value is not a
 * bigint or a string containing a valid integer, it will resolve to `never`.
 * @category Numbers
 */
export type PositiveBigInteger<N = bigint> = CastInt<N, POSITIVE & INTEGER>;
// #endregion PositiveBigInteger

// #region NegativeBigInteger
/**
 * Casts a value into a negative big integer type. If the value is not a
 * bigint or a string containing a valid integer, it will resolve to `never`.
 * @category Numbers
 */
export type NegativeBigInteger<N = bigint> = CastInt<N, NEGATIVE & INTEGER>;
// #endregion NegativeBigInteger

/**
 * Casts a value into an integer type. If the value is not an number, or is a
 * non-integral number like 3.14, it will resolve to `never`.
 *
 * **Note**: once a value is cast to a type with this narrow of a constraint,
 * TypeScript's compiler will refuse any assignment to it that is not
 * _exactly_ compatible with the type. If you find yourself encountering
 * errors about incompatible types, try using the {@link MaybeInteger} type
 * instead.
 *
 * @example
 * ```ts
 * import { isInteger, type Integer } from "jsr:@type/number";
 *
 * function add(a: Integer, b: Integer) {
 *   return (a + b) as Integer;
 * }
 *
 * let x = 1 as Integer, y = 2 as Integer, z = 3;
 *
 * if (isInteger(z)) {
 *   console.log(add(add(x, y), z));
 * } else {
 *   console.log(add(x, y));
 * }
 *
 * // These will raise TypeScript compiler errors:
 * add(x, z);
 * add(y, 3);
 *
 * // This level of strictness can be a bit silly in the wrong application:
 * x = 1; // <- TS4321 (`MaybeInteger` would be a better choice here)
 * ```
 * @category Numbers
 */
export type Integer<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & Integer<I>
  : never
  : N extends number ? number extends N ? N & INTEGER
    : `${N}` extends `${bigint}` ? N & INTEGER
    : never
  : never;

/**
 * Casts a value into a partial integer type. If the value is not an number,
 * or is a non-integral number like 3.14, it will resolve to `never`. This
 * type is nearly identical to {@link Integer}, except it allows assignment of
 * values that are not precisely compatible with the type, while still
 * providing an extra level of type safety over the base `number` type.
 *
 * Once a value is cast to a type of this constraint, TypeScript's compiler
 * will refuse any incompatible assignment to it. To demonstrate, consider
 * this example:
 *
 * @example
 * ```ts
 * import { isInteger, type MaybeInteger, type MaybeFloat } from "jsr:@type/number";
 *
 * function add(a: MaybeInteger, b: MaybeInteger) {
 *  return (a + b) as MaybeInteger;
 * }
 *
 * let x = 1 as MaybeInteger, y = 2 as MaybeInteger, z = 3;
 * let xx = 1.1 as MaybeFloat, yy = 2.2 as MaybeFloat, zz = 3.3;
 *
 * if (isInteger(z)) {
 *   console.log(add(add(x, y), z));
 * } else {
 *   console.log(add(x, y));
 * }
 *
 * // These will raise TypeScript compiler errors:
 * add(x, yy); // <- TS2345 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.
 * y = yy; // <- TS2322 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.
 *
 * y = 2; // <- No error! (this is the main difference from `Integer`)
 * ```
 * @category Numbers
 */
export type MaybeInteger<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & MaybeInteger<I>
  : never
  : N extends number ? number extends N ? N & MAYBE_INTEGER
    : `${N}` extends `${bigint}` ? N & MAYBE_INTEGER
    : never
  : never;

/**
 * Checks if a given value is an integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is an integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isInteger(0)); // true
 * console.log(isInteger(1)); // true
 * console.log(isInteger(-1)); // true
 * console.log(isInteger(1.5)); // false
 * console.log(isInteger(NaN)); // false
 * console.log(isInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isInteger<const N = number>(it: N): it is Integer<N>;

/**
 * Checks if a given value is an integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is an integer, `false` otherwise.
 * @example
 * ```ts
 * import { isInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isInteger(0)); // true
 * console.log(isInteger(1)); // true
 * console.log(isInteger(-1)); // true
 * console.log(isInteger(1.5)); // false
 * console.log(isInteger(NaN)); // false
 * console.log(isInteger(Infinity)); // false
 * ```
 * @category Numbers
 */
export function isInteger(it: unknown): it is Integer;

/** @ignore */
export function isInteger(it: unknown): it is Integer {
  const ok = typeof it === "number" && !isNaN(it) && isFinite(it);
  if (typeof Number.isInteger === "function") {
    return ok && Number.isInteger(it);
  }
  return ok && it % 1 === 0;
}

/** @ignore */
export default isInteger;
