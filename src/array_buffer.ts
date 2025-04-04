/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/array-buffer
 */

/**
 * Returns `true` if {@linkcode it} is an `ArrayBuffer`. This does not include
 * instances of the `SharedArrayBuffer`, which has its own type guard. To check
 * for either type, use {@linkcode isArrayBufferLike}.
 *
 * @example
 * ```ts
 * import { isArrayBuffer } from "jsr:@nick/is/array-buffer";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBuffer(buffer); // true
 * isArrayBuffer(shared); // false
 * isArrayBuffer(array); // false
 * isArrayBuffer(array.buffer); // true
 * ```
 * @category Binary Data Structures
 * @module array-buffer
 */

const ArrayBufferPrototypeGetByteLength = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  "byteLength",
)?.get;

/**
 * Returns `true` if {@linkcode it} is an `ArrayBuffer`. This does not include
 * instances of the `SharedArrayBuffer`, which has its own type guard. To check
 * for either type, use {@linkcode isArrayBufferLike}.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `ArrayBuffer`, `false` otherwise.
 * @example
 * ```ts
 * import { isArrayBuffer } from "jsr:@nick/is/array-buffer";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 * const array = new Uint8Array(buffer);
 *
 * isArrayBuffer(buffer); // true
 * isArrayBuffer(shared); // false
 * isArrayBuffer(array); // false
 * isArrayBuffer(array.buffer); // true
 * ```
 * @category Binary Data Structures
 */
export function isArrayBuffer(it: unknown): it is ArrayBuffer {
  try {
    ArrayBufferPrototypeGetByteLength?.call(it);
    return true;
  } catch {
    return false;
  }
}

export default isArrayBuffer;
