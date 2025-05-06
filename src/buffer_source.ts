/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/buffer-source
 */

import { isArrayBufferView } from "./array_buffer_view.ts";
import { isArrayBufferLike } from "./array_buffer_like.ts";

/**
 * Returns `true` if {@linkcode it} is an `ArrayBuffer`, `SharedArrayBuffer`,
 * or an `ArrayBufferView`, which includes `TypedArray`s and `DataView`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a BufferSource object, `false` otherwise.
 * @example
 * ```ts
 * import { isBufferSource } from "jsr:@nick/is/buffer-source";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * const array = new Uint8Array(buffer);
 *
 * isBufferSource(buffer); // true
 * isBufferSource(view); // true
 * isBufferSource(array); // true
 * ```
 * @category Binary Data Structures
 */
export function isBufferSource(it: unknown): it is BufferSource {
  return isArrayBufferLike(it) || isArrayBufferView(it);
}

export default isBufferSource;
