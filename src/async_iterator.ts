/**
 * Check if the given value is an async iterator, which is an object that has a
 * `"next"` method that returns a promise for an iterator result.
 *
 * @param it The value to check.
 * @returns `true` if the value is an async iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncIterator } from "jsr:@nick/is/async-iterator";
 *
 * const iter = (async function*() { yield 1; })();
 * console.log(isAsyncIterator(iter)); // true
 * console.log(isAsyncIterator(iter[Symbol.asyncIterator]())); // true
 * ```
 * @category Iterables
 * @module async-iterator
 */
export function isAsyncIterator<T>(it: unknown): it is AsyncIterator<T> {
  return it != null && Reflect.has(Object(it), Symbol.asyncIterator) &&
    typeof (it as AsyncIterator<T>).next === "function";
}

export default isAsyncIterator;
