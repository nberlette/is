/**
 * Check if a given value is missing, which is either `null` or `undefined`.
 *
 * @example
 * ```ts
 * import { isMissing } from "jsr:@nick/is/missing";
 *
 * isMissing(null); // true
 * isMissing(undefined); // true
 * isMissing(0); // false
 * isMissing(''); // false
 * isMissing(false); // false
 * ```
 * @category Primitives
 * @module missing
 */

/**
 * Check if a given value is missing, which is either `null` or `undefined`.
 * @param it The value to check.
 * @returns `true` if the value is `null` or `undefined`, or `false` otherwise.
 * @example
 * ```ts
 * import { isMissing } from "jsr:@nick/is/missing";
 *
 * isMissing(null); // true
 * isMissing(undefined); // true
 * isMissing(0); // false
 * isMissing(''); // false
 * isMissing(false); // false
 * ```
 * @category Primitives
 */
export function isMissing(it: unknown): it is null | undefined {
  return it === null || it === undefined;
}

export default isMissing;
