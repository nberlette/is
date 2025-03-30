/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/int8-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Int8Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Int8Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isInt8Array } from "jsr:@nick/is/int8array";
 *
 * const arr = new Int8Array(8);
 * isInt8Array(arr); // true
 * isInt8Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module int8array
 */
export function isInt8Array(it: unknown): it is Int8Array {
  return isTypedArray(it, "Int8Array");
}

export default isInt8Array;
