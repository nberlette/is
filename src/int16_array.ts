import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Int16Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Int16Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isInt16Array } from "jsr:@nick/is/int16array";
 *
 * const arr = new Int16Array(8);
 * isInt16Array(arr); // true
 * isInt16Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module int16array
 */
export function isInt16Array(it: unknown): it is Int16Array {
  return isTypedArray(it, "Int16Array");
}

export default isInt16Array;
