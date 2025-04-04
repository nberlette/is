/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/float16-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Float16Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Float16Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isFloat16Array } from "jsr:@nick/is/float16array";
 *
 * const arr = new Float16Array(8);
 * isFloat16Array(arr); // true
 * isFloat16Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module float16array
 */
export function isFloat16Array(it: unknown): it is Float16Array {
  return isTypedArray(it, "Float16Array");
}

export default isFloat16Array;
