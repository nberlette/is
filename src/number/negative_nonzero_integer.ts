import type { Cast, INTEGER, NEGATIVE, NON_ZERO } from "./types.ts";
import { isNonZeroFiniteInteger } from "./nonzero_finite_integer.ts";

/**
 * Casts a value into a negative nonzero integer type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type NegativeNonZeroInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & INTEGER
>;

/**
 * Checks if a given value is a negative nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroInteger(0)); // false
 * console.log(isNegativeNonZeroInteger(1)); // false
 * console.log(isNegativeNonZeroInteger(-1)); // true
 * console.log(isNegativeNonZeroInteger(1.5)); // false
 * console.log(isNegativeNonZeroInteger(NaN)); // false
 * console.log(isNegativeNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroInteger<const N = number>(
  it: N,
): it is NegativeNonZeroInteger<N>;

/**
 * Checks if a given value is a negative nonzero integer.
 *
 * @param it The value to check.
 * @returns `true` if the value is a negative nonzero integer, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";
 *
 * console.log(isNegativeNonZeroInteger(0)); // false
 * console.log(isNegativeNonZeroInteger(1)); // false
 * console.log(isNegativeNonZeroInteger(-1)); // true
 * console.log(isNegativeNonZeroInteger(1.5)); // false
 * console.log(isNegativeNonZeroInteger(NaN)); // false
 * console.log(isNegativeNonZeroInteger(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNegativeNonZeroInteger(
  it: unknown,
): it is NegativeNonZeroInteger;

/** @ignore */
export function isNegativeNonZeroInteger(
  it: unknown,
): it is NegativeNonZeroInteger {
  return isNonZeroFiniteInteger(it) && +it < 0;
}

/** @ignore */
export default isNegativeNonZeroInteger;
