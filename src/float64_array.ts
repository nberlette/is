/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/float64-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Float64Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Float64Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat64Array } from "jsr:@nick/is/float64array";
 *
 * const arr = new Float64Array(8);
 * isFloat64Array(arr); // true
 * isFloat64Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module float64array
 */
export function isFloat64Array(it: unknown): it is Float64Array {
  return isTypedArray(it, "Float64Array");
}

export default isFloat64Array;
