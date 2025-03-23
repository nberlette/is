import { isAsyncIterable } from "./async_iterable.ts";
import { isAsyncIterator } from "./async_iterator.ts";

/**
 * Checks if a value is an `AsyncIterableIterator`, which is an `AsyncIterator`
 * with a `Symbol.asyncIterator` method that returns a reference to itself.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `AsyncIterableIterator`, `false` otherwise.
 * @example
 * ```ts
 * import isAsyncIterableIterator from "jsr:@nick/is/async-iterable-iterator";
 *
 * const iter = (async function*() { yield 1; })();
 * console.log(isAsyncIterableIterator(iter)); // true
 * console.log(isAsyncIterableIterator(iter[Symbol.asyncIterator]())); // true
 * ```
 * @category Iterables
 * @module async-iterable-iterator
 */
export function isAsyncIterableIterator<T>(
  it: unknown,
): it is AsyncIterableIterator<T> {
  return isAsyncIterator(it) && isAsyncIterable(it);
}

export default isAsyncIterableIterator;
