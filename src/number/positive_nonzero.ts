import type {
  Cast,
  MAYBE_NON_ZERO,
  MAYBE_POSITIVE,
  NON_ZERO,
  POSITIVE,
} from "./types.ts";
import { isPositive } from "./positive.ts";

// #region PositiveNonZero
/**
 * Casts a value into a positive nonzero type. If the value is not a number,
 * it will resolve to `never`.
 *
 * @category Numbers
 */

export type PositiveNonZero<N = number> = Cast<N, POSITIVE & NON_ZERO>;
/**
 * Casts a value into a partial positive nonzero type. If the value is not a
 * number, it will resolve to `never`.
 *
 * @category Numbers
 */
export type MaybePositiveNonZero<N = number> = Cast<
  N,
  MAYBE_POSITIVE & MAYBE_NON_ZERO
>;

/**
 * Checks if a given value is a positive nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroNumber(0)); // false
 * console.log(isPositiveNonZeroNumber(1)); // true
 * console.log(isPositiveNonZeroNumber(-1)); // false
 * console.log(isPositiveNonZeroNumber(1.5)); // true
 * console.log(isPositiveNonZeroNumber(NaN)); // false
 * console.log(isPositiveNonZeroNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroNumber<const N = number>(
  it: N,
): it is PositiveNonZero<N>;

/**
 * Checks if a given value is a positive nonzero number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a positive nonzero number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isPositiveNonZeroNumber(0)); // false
 * console.log(isPositiveNonZeroNumber(1)); // true
 * console.log(isPositiveNonZeroNumber(-1)); // false
 * console.log(isPositiveNonZeroNumber(1.5)); // true
 * console.log(isPositiveNonZeroNumber(NaN)); // false
 * console.log(isPositiveNonZeroNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero;
export function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero {
  return isPositive(it) && +it !== 0;
}

/** @ignore */
export default isPositiveNonZeroNumber;
