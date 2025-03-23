import type { Cast, MAYBE_NAN, NAN } from "./mod.ts";

/**
 * Casts a value into a branded type that represents the special numeric value
 * `NaN` (not a number). This is a very strict type, and it prevents any other
 * type from being assigned unless they pass the {@linkcode isNaN} type guard.
 * If the value is not a subtype of `number`, this will resolve to `never`.
 *
 * @example
 * ```ts
 * import { isNan, type NaN } from "jsr:@type/number";
 *
 * let x = NaN as NaN, y = 0;
 *
 * if (isNan(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * // This will raise a TypeScript compiler error:
 * x = 0; // <- TS2322 Type '0' is not assignable to type 'NaN'.
 * ```
 * @category Numbers
 * @tags number, NaN
 */
export type NaN<N = number> = Cast<N, NAN>;

/**
 * Casts a value into a partial `NaN` type. This is a more forgiving form of
 * the {@linkcode NaN} type, which allows for the assignment of other numeric
 * values, but still retains the ability to distinguish itself from generic
 * numbers. This is often called a "Flavored" type, whereas the stricter
 * {@linkcode NaN} is known as a "Branded" type.
 *
 * @example
 * ```ts
 * import { isNaN, type MaybeNaN } from "jsr:@type/number";
 *
 * let x = NaN as MaybeNaN, y = 0;
 *
 * if (isNaN(x)) {
 *   console.log(x);
 * } else {
 *   console.log(y);
 * }
 *
 * y = NaN; // <- No error! (this is the main difference from `NaN`)
 * ```
 * @category Numbers
 * @tags number, NaN
 */
export type MaybeNaN<N = number> = Cast<N, MAYBE_NAN>;

/**
 * Checks if a given value is `NaN` (not a number). This is a type-safe alias
 * of the global `isNaN` function,
 *
 * @param it The value to check.
 * @returns `true` if the value is `NaN`, `false` otherwise.
 * @example
 * ```ts
 * import { isNaN } from "jsr:@type/number";
 *
 * console.log(isNaN(0)); // false
 * console.log(isNaN(1)); // false
 * console.log(isNaN(1.5)); // false
 * console.log(isNaN(NaN)); // true
 * console.log(isNaN(Infinity)); // false
 * ```
 * @category Numbers
 * @tags number, NaN
 */
export function isNaN<const N = number>(
  it: N,
): it is NaN<N>;

/**
 * Checks if a given value is `NaN` (not a number). This is a type-safe alias
 * of the global `isNaN` function,
 *
 * @param it The value to check.
 * @returns `true` if the value is `NaN`, `false` otherwise.
 * @example
 * ```ts
 * import { isNaN } from "jsr:@type/number";
 *
 * console.log(isNaN(0)); // false
 * console.log(isNaN(1)); // false
 * console.log(isNaN(1.5)); // false
 * console.log(isNaN(NaN)); // true
 * console.log(isNaN(Infinity)); // false
 * ```
 * @category Numbers
 * @tags number, NaN
 */
export function isNaN(it: unknown): it is NaN;

/** @ignore */
export function isNaN(it: unknown): it is NaN {
  return (typeof it === "string" || typeof it === "number") && +it !== +it;
}

/** @ignore */
export default isNaN;
