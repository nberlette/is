import { isFinite } from "./finite.ts";
import type { Cast, MAYBE_NON_ZERO_FINITE, NON_ZERO_FINITE } from "./types.ts";

// #endregion NegativeFinite
// #region NonZeroFinite
/**
 * Casts a value into a nonzero finite type. If the value is not a number, it
 * will resolve to `never`.
 *
 * @category Numbers
 */
export type NonZeroFinite<N = number> = Cast<N, NON_ZERO_FINITE>;

/**
 * Casts a value into a partial nonzero finite type. If the value is not a
 * number, it will resolve to `never`.
 */
export type MaybeNonZeroFinite<N = number> = Cast<N, MAYBE_NON_ZERO_FINITE>;

/**
 * Checks if a given value is a nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroFiniteNumber(0)); // false
 * console.log(isNonZeroFiniteNumber(1)); // true
 * console.log(isNonZeroFiniteNumber(-1)); // true
 * console.log(isNonZeroFiniteNumber(1.5)); // true
 * console.log(isNonZeroFiniteNumber(NaN)); // false
 * console.log(isNonZeroFiniteNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroFiniteNumber<const N = number>(
  it: N,
): it is NonZeroFinite<N>;

/**
 * Checks if a given value is a nonzero finite number.
 *
 * @param it The value to check.
 * @returns `true` if the value is a nonzero finite number, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";
 *
 * console.log(isNonZeroFiniteNumber(0)); // false
 * console.log(isNonZeroFiniteNumber(1)); // true
 * console.log(isNonZeroFiniteNumber(-1)); // true
 * console.log(isNonZeroFiniteNumber(1.5)); // true
 * console.log(isNonZeroFiniteNumber(NaN)); // false
 * console.log(isNonZeroFiniteNumber(Infinity)); // true
 * ```
 * @category Numbers
 */
export function isNonZeroFiniteNumber(it: unknown): it is NonZeroFinite;

/** @ignore */
export function isNonZeroFiniteNumber(it: unknown): it is NonZeroFinite {
  return isFinite(it) && +it !== 0;
}

/** @ignore */
export default isNonZeroFiniteNumber;
