/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/int32-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Int32Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Int32Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isInt32Array } from "jsr:@nick/is/int32array";
 *
 * const arr = new Int32Array(8);
 * isInt32Array(arr); // true
 * isInt32Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module int32array
 */
export function isInt32Array(it: unknown): it is Int32Array {
  return isTypedArray(it, "Int32Array");
}

export default isInt32Array;
