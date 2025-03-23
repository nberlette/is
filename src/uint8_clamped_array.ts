import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Uint8ClampedArray` instance.
 *
 * @example
 * ```ts
 * import { isUint8ClampedArray } from "jsr:@nick/is/uint8clampedarray";
 *
 * const arr = new Uint8ClampedArray(8);
 * isUint8ClampedArray(arr); // true
 * isUint8ClampedArray(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module uint8-clamped-array
 */

/**
 * Check if the given value is a `Uint8ClampedArray` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Uint8ClampedArray` instance, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isUint8ClampedArray } from "jsr:@nick/is/uint8clampedarray";
 *
 * const arr = new Uint8ClampedArray(8);
 * isUint8ClampedArray(arr); // true
 * isUint8ClampedArray(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 */
export function isUint8ClampedArray(it: unknown): it is Uint8ClampedArray {
  return isTypedArray(it, "Uint8ClampedArray");
}

export default isUint8ClampedArray;
