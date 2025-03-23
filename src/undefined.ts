/**
 * Checks if the value is `undefined`, and nothing else.
 *
 * @example
 * ```ts
 * import { isUndefined } from "jsr:@nick/is/undefined";
 *
 * isUndefined(null); // false
 * isUndefined(undefined); // true
 * isUndefined(0); // false
 * isUndefined(void 0); // true
 * isUndefined(''); // false
 * ```
 * @example
 * ```ts
 * import { isUndefined } from "jsr:@nick/is/undefined";
 *
 * let value: number | undefined;
 * if (isUndefined(value)) {
 *   value;
 *   // ^? let value: undefined
 *   value = 0;
 *   // ^? let value: number | undefined
 * } else {
 *   value += 1;
 *   // ^? let value: number
 * }
 * ```
 * @category Primitives
 * @module undefined
 */

/**
 * Checks if the value is `undefined`, and nothing else.
 *
 * @param it The value to check.
 * @returns `true` if the value is `undefined`, or `false` otherwise.
 * @example
 * ```ts
 * import { isUndefined } from "jsr:@nick/is/undefined";
 *
 * isUndefined(null); // false
 * isUndefined(undefined); // true
 * isUndefined(0); // false
 * isUndefined(void 0); // true
 * isUndefined(''); // false
 * ```
 * @example
 * ```ts
 * import { isUndefined } from "jsr:@nick/is/undefined";
 *
 * let value: number | undefined;
 * if (isUndefined(value)) {
 *   value;
 *   // ^? let value: undefined
 *   value = 0;
 *   // ^? let value: number | undefined
 * } else {
 *   value += 1;
 *   // ^? let value: number
 * }
 * ```
 * @category Primitives
 */
export function isUndefined(it: unknown): it is undefined {
  return it === undefined;
}

export default isUndefined;
