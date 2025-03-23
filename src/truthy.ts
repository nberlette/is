import type { Falsy } from "./falsy.ts";

/**
 * @module truthy
 *
 * This module provides a type guard for checking if a given value is truthy,
 * which is any value that JavaScript implicitly coerces into a boolean value
 * of `true` when it is used in a boolean/conditional/comparison context.
 *
 * @param it The value to check.
 * @returns `true` if the value is truthy, `false` otherwise.
 * @example
 * ```ts
 * import { isTruthy } from "jsr:@nick/is/truthy";
 *
 * isTruthy(1); // true
 * isTruthy("foo"); // true
 * isTruthy(true); // true
 * isTruthy({}); // true
 *
 * isTruthy(0); // false
 * isTruthy(""); // false
 * isTruthy(false); // false
 * isTruthy(null); // false
 * isTruthy(undefined); // false
 * ```
 * @category Primitives
 */
export function isTruthy<U>(it: U): it is Exclude<U, Falsy> {
  return Boolean(it);
}

/** @ignore */
export default isTruthy;

isTruthy(true);
