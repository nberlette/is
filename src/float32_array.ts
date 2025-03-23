import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Float32Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Float32Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat32Array } from "jsr:@nick/is/float32array";
 *
 * const arr = new Float32Array(8);
 * isFloat32Array(arr); // true
 * isFloat32Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module float32array
 */
export function isFloat32Array(it: unknown): it is Float32Array {
  return isTypedArray(it, "Float32Array");
}

export default isFloat32Array;
