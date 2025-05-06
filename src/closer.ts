/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/closer
 */

/**
 * Checks if a given value implments the `Deno.Closer` interface, which means
 * it has a `close` method that can be called to release associated resources.
 *
 * @param it The value to check.
 * @returns `true` if the value implements `Deno.Closer`, `false` otherwise.
 * @example
 * ```ts
 * import { isCloser } from "jsr:@nick/is/closer";
 *
 * const file = await Deno.open("file.txt");
 * isCloser(file); // true
 *
 * const socket = new WebSocket("ws://example.com");
 * isCloser(socket); // true
 * ```
 * @category I/O
 * @module closer
 */
export function isCloser(it: unknown): it is Closer {
  return typeof it === "object" && it !== null && "close" in it &&
    typeof it.close === "function";
}

export default isCloser;

/**
 * An abstract interface which when implemented provides an interface to close
 * files/resources that were previously opened.
 *
 * @category I/O
 */
export interface Closer {
  /** Closes the resource, "freeing" the backing file/resource. */
  close(): void;
}
