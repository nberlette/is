import { tryValueOf } from "./_internal.ts";

/**
 * Checks if the given value is a string.
 *
 * @param it The value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 * @example
 * ```ts
 * import { isString } from "jsr:@nick/is/string";
 *
 * const x: unknown = "hello";
 * if (isString(x)) {
 *   console.log(x.toUpperCase());
 *   //          ^? const x: string
 * }
 * ```
 * @category Primitives
 * @module string
 */
export function isString(it: unknown): it is string {
  return tryValueOf(String.prototype, it);
}

export default isString;
