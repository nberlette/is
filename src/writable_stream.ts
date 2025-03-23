import { isObject } from "./object.ts";

/**
 * Checks if {@link it} is a `WritableStream` object.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `WritableStream`, `false` otherwise.
 * @example
 * ```ts
 * import { isWritableStream } from "jsr:@nick/is/writable-stream";
 * a
 * const stream = new WritableStream();
 * isWritableStream(stream); // true
 *
 * const stream2 = new TransformStream();
 * isWritableStream(stream2); // false
 *
 * const stream3 = new ReadableStream();
 * isWritableStream(stream3); // false
 * ```
 * @category Streams
 * @module writable-stream
 */
export function isWritableStream<W>(it: unknown): it is WritableStream<W> {
  if (isObject(it)) {
    try {
      const WritableStreamPrototypeGetLocked = Reflect.getOwnPropertyDescriptor(
        WritableStream?.prototype ?? {},
        "locked",
      )?.get;

      const locked = WritableStreamPrototypeGetLocked?.call(it);
      return typeof locked === "boolean";
    } catch { /* fallthrough */ }
  }
  return false;
}

export default isWritableStream;
