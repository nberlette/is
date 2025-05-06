/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/biguint64-array
 */

import { isTypedArray } from "./typed_array.ts";

/**
 * Check if the given value is a `BigUint64Array` instance.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `BigUint64Array` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isBigUint64Array } from "jsr:@nick/is/biguint64array";
 *
 * const arr = new BigUint64Array(8);
 * isBigUint64Array(arr); // true
 * isBigUint64Array(arr.buffer); // false
 * ```
 * @category Binary Data Structures
 * @module biguint64array
 */
export function isBigUint64Array(it: unknown): it is BigUint64Array {
  return isTypedArray(it, "BigUint64Array");
}

export default isBigUint64Array;
