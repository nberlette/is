import { tryValueOf } from "./_internal.ts";

/**
 * Checks if the given value is a boolean.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boolean, `false` otherwise.
 * @example
 * ```ts
 * import { isBoolean } from "jsr:@nick/is/boolean";
 * isBoolean("true"); // false
 * isBoolean(true); // true
 * ```
 * @category Primitives
 */
export function isBoolean(it: unknown): it is boolean {
  return tryValueOf(Boolean.prototype, it);
}

export default isBoolean;
