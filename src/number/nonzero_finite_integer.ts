import { isFiniteInteger } from "./finite_integer.ts";
import type { Cast, FINITE, INTEGER, NON_ZERO } from "./types.ts";

/**
 * Casts a value into a nonzero finite integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type NonZeroFiniteInteger<N = number> = Cast<
  N,
  NON_ZERO & FINITE & INTEGER
>;

/**
 * Checks if a given value is a nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroFiniteInteger(0)); // false
 * console.log(isNonZeroFiniteInteger(1)); // true
 * console.log(isNonZeroFiniteInteger(-1)); // true
 * console.log(isNonZeroFiniteInteger(1.5)); // false
 * console.log(isNonZeroFiniteInteger(NaN)); // false
 * console.log(isNonZeroFiniteInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroFiniteInteger<const N = number>(
  it: N,
): it is NonZeroFiniteInteger<N>;

/**
 * Checks if a given value is a nonzero finite integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero finite integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroFiniteInteger(0)); // false
 * console.log(isNonZeroFiniteInteger(1)); // true
 * console.log(isNonZeroFiniteInteger(-1)); // true
 * console.log(isNonZeroFiniteInteger(1.5)); // false
 * console.log(isNonZeroFiniteInteger(NaN)); // false
 * console.log(isNonZeroFiniteInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroFiniteInteger(it: unknown): it is NonZeroFiniteInteger;

/** @ignore */
export function isNonZeroFiniteInteger(
  it: unknown,
): it is NonZeroFiniteInteger {
  return isFiniteInteger(it) && +it !== 0;
}

/** @ignore */
export default isNonZeroFiniteInteger;
