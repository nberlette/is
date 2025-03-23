/**
 * Checks if a given value is an asynchronous Writer, which is an object that
 * implements a `write` method as per Deno's `Writer` interface.
 *
 * @param it The value to check.
 * @returns `true` if the value is an asynchronous Writer, `false` otherwise.
 * @example
 * ```ts
 * import { isWriter } from "jsr:@nick/is/writer";
 *
 * isWriter(Deno.stdout); // true
 * isWriter(Deno.stderr); // true
 * isWriter(Deno.stdin); // false
 * ```
 * @category I/O
 * @module writer
 */
export function isWriter(it: unknown): it is Writer {
  return typeof it === "object" && it !== null && "write" in it &&
    typeof it.write === "function";
}

export default isWriter;

/**
 * An abstract interface which when implemented provides an interface to write
 * bytes from an array buffer to a file/resource asynchronously.
 *
 * @category I/O
 */
export interface Writer {
  /**
   * Writes `p.byteLength` bytes from `p` to the underlying data stream. It
   * resolves to the number of bytes written from `p` (`0` <= `n` <=
   * `p.byteLength`) or reject with the error encountered that caused the
   * write to stop early. `write()` must reject with a non-null error if would
   * resolve to `n` < `p.byteLength`. `write()` must not modify the slice
   * data, even temporarily.
   *
   * This function is one of the lowest level APIs and most users should not
   * work with this directly, but rather use
   * [`writeAll()`](https://deno.land/std/streams/write_all.ts?s=writeAll)
   * from `std/streams/write_all.ts` instead.
   *
   * Implementations should not retain a reference to `p`.
   */
  write(p: Uint8Array): Promise<number>;
}
