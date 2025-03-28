/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/uint32-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `Uint32Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Uint32Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isUint32Array } from "jsr:@nick/is/uint32array";
 *
 * const arr = new Uint32Array(8);
 * isUint32Array(arr); // true
 * isUint32Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module uint32array
 */
export function isUint32Array(it: unknown): it is Uint32Array {
  return isTypedArray(it, "Uint32Array");
}

export default isUint32Array;
