/**
 * Provides a type guard function, {@linkcode isIterator}, that checks if a
 * given value appears to be an `Iterator` object, that is, an object with a
 * `.next` method and optionally a `.return` and/or `.throw` method as well.
 *
 * **Note**: this function does not perform any checks on the value returned or
 * yielded by the iterator's `.next` method, and as such, it is not capable of
 * distinguishing between asynchronous or synchronous iterators.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isIterator } from "jsr:@nick/is/iterator";
 *
 * const iterable = [1, 2, 3];
 * const iterator = iterable[Symbol.iterator]();
 * console.log(isIterator(iterator)); // true
 * console.log(isIterator(iterable)); // false
 * ```
 * @module iterator
 */

/**
 * Check if the given value is an iterator object. This includes arrays, maps,
 * sets, and any other value with a `.next` method.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isIterator } from "jsr:@nick/is/iterator";
 *
 * const iterable = [1, 2, 3];
 * const iterator = iterable[Symbol.iterator]();
 * console.log(isIterator(iterator)); // true
 * console.log(isIterator(iterable)); // false
 * ```
 * @category Iterables
 */
export function isIterator<T>(it: unknown): it is Iterator<T> {
  if (typeof it === "object" && it !== null || typeof it === "function") {
    return (
      ("next" in it && typeof it.next === "function") &&
      (!("return" in it) || typeof it.return === "function" ||
        typeof it.return === "undefined") &&
      (!("throw" in it) || typeof it.throw === "function" ||
        typeof it.throw === "undefined")
    );
  }
  return false;
}

export default isIterator;
