/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/float32-array
 */

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
