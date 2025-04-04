/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/readable-stream
 */

import { isObject } from "./object.ts";

/**
 * Checks if {@link it} is a `ReadableStream` object.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `ReadableStream`, `false` otherwise.
 * @example
 * ```ts
 * import { isReadableStream } from "jsr:@nick/is/readable-stream";
 *
 * const stream = new ReadableStream();
 * isReadableStream(stream); // true
 *
 * const stream2 = new TransformStream();
 * isReadableStream(stream2); // false
 *
 * const stream3 = new WritableStream();
 * isReadableStream(stream3); // false
 * ```
 * @category Streams
 * @module readable-stream
 */
export function isReadableStream<R>(it: unknown): it is ReadableStream<R> {
  if (isObject(it)) {
    try {
      const ReadableStreamPrototypeGetLocked = Reflect.getOwnPropertyDescriptor(
        ReadableStream?.prototype ?? {},
        "locked",
      )?.get;
      const locked = ReadableStreamPrototypeGetLocked?.call(it);
      return typeof locked === "boolean";
    } catch { /* fallthrough */ }
  }
  return false;
}

export default isReadableStream;
