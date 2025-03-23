import { isFunction } from "./function.ts";
import { isObjectLike } from "./object_like.ts";

/**
 * Check if the given value is a `PromiseLike` type, which includes both native
 * `Promise` instances and custom promise-like objects with a `.then` method
 * (sometimes referred to as "thenables").
 *
 * @param it The value to check.
 * @returns `true` if the value is a `PromiseLike`, `false` otherwise.
 * @example
 * ```ts
 * import { isPromiseLike } from "jsr:@nick/is/promise-like";
 *
 * console.log(isPromiseLike(Promise.resolve())); // true
 * console.log(isPromiseLike({ then: () => {} })); // true
 * console.log(isPromiseLike({})); // false
 * ```
 * @category Async/Await
 * @module promise-like
 */
export function isPromiseLike<T>(it: unknown): it is PromiseLike<T> {
  return isObjectLike(it) && isFunction((it as PromiseLike<T>).then);
}

export default isPromiseLike;
