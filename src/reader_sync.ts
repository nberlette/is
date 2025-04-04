/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/reader-sync
 */

/**
 * Checks if a given value is a synchronous reader, which is an object that
 * implements the `readSync` method as per Deno's `ReaderSync` interface.
 *
 * @param it The value to check.
 * @returns `true` if the value is a synchronous Reader, `false` otherwise.
 * @example
 * ```ts
 * import { isReaderSync } from "jsr:@nick/is/reader-sync";
 *
 * const file = Deno.openSync("file.txt");
 * isReaderSync(file); // true
 *
 * const socket = new WebSocket("ws://example.com");
 * isReaderSync(socket); // false
 * ```
 * @category I/O
 * @module reader-sync
 */
export function isReaderSync(it: unknown): it is ReaderSync {
  return typeof it === "object" && it !== null && "readSync" in it &&
    typeof it.readSync === "function";
}

export default isReaderSync;

/**
 * An abstract interface which when implemented provides an interface to read
 * bytes into an array buffer synchronously.
 *
 * @category I/O */
export interface ReaderSync {
  /** Reads up to `p.byteLength` bytes into `p`. It resolves to the number of
   * bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
   * encountered. Even if `readSync()` returns `n` < `p.byteLength`, it may
   * use all of `p` as scratch space during the call. If some data is
   * available but not `p.byteLength` bytes, `readSync()` conventionally
   * returns what is available instead of waiting for more.
   *
   * When `readSync()` encounters end-of-file condition, it returns EOF
   * (`null`).
   *
   * When `readSync()` encounters an error, it throws with an error.
   *
   * Callers should always process the `n` > `0` bytes returned before
   * considering the EOF (`null`). Doing so correctly handles I/O errors that
   * happen after reading some bytes and also both of the allowed EOF
   * behaviors.
   *
   * Implementations should not retain a reference to `p`.
   */
  readSync(p: Uint8Array): number | null;
}
