/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/shared-array-buffer
 */

import { uncurryGetter } from "./_internal.ts";

const SharedArrayBufferPrototypeGetByteLength = uncurryGetter(
  typeof globalThis.SharedArrayBuffer === "undefined"
    ? {
      get byteLength() {
        throw new ReferenceError("SharedArrayBuffer is not supported");
      },
    }
    : globalThis.SharedArrayBuffer.prototype,
  "byteLength",
)!;

/**
 * Returns `true` if {@linkcode it} is a `SharedArrayBuffer`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `SharedArrayBuffer`, `false` otherwise.
 * @example
 * ```ts
 * import { isSharedArrayBuffer } from "jsr:@nick/is/shared-array-buffer";
 *
 * const buffer = new ArrayBuffer(8);
 * const shared = new SharedArrayBuffer(8);
 *
 * isSharedArrayBuffer(buffer); // false
 * isSharedArrayBuffer(shared); // true
 * ```
 * @category Binary Data Structures
 * @module shared-array-buffer
 */
export function isSharedArrayBuffer(it: unknown): it is SharedArrayBuffer {
  try {
    SharedArrayBufferPrototypeGetByteLength(it as SharedArrayBuffer);
    return true;
  } catch {
    return false;
  }
}

export default isSharedArrayBuffer;
