/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/async-iterable-object
 */

import { isObjectLike } from "./object_like.ts";
import { isAsyncIterable } from "./async_iterable.ts";

/**
 * An object that implements the `AsyncIterable` interface. This is the type
 * that the {@link isAsyncIterableObject} function checks for and (narrows to).
 * @template T The type of elements yielded by the async iterable.
 * @category Iterables
 */
export type AsyncIterableObject<T> = AsyncIterable<T> & object;

/**
 * Checks if a given value is an `AsyncIterable` object.
 *
 * Similar to its synchronous counterpart, `isIterableObject`, this function
 * requires the value to be a non-primitive (and non-null) object, and also
 * implement a `[Symbol.asyncIterator]` method as per the `AsyncIterable` API.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterable object, `false` otherwise.
 * @example
 * ```ts
 * import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";
 *
 * // synchronous iterables will not pass
 * console.log(isAsyncIterableObject([1, 2])); // false
 * console.log(isAsyncIterableObject(new Map())); // false
 * console.log(isAsyncIterableObject(new Set())); // false
 *
 * // non-object iterables will not pass
 * console.log(isAsyncIterableObject("foo")); // false
 *
 * // only asynchronous iterable objects will pass
 * const iter = {
 *   async *[Symbol.asyncIterator]() {
 *     yield await Promise.resolve(1);
 *   }
 * };
 * console.log(isAsyncIterableObject(iter)); // true
 * ```
 * @example
 * ```ts
 * import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";
 *
 * const kv = await Deno.openKv();
 * console.log(isAsyncIterableObject(kv)); // false
 *
 * const iter = kv.list({ prefix: [] });
 * console.log(isAsyncIterableObject(iter)); // true
 *
 * kv.close();
 * ```
 * @category Iterables
 * @module async-iterable-object
 */
export function isAsyncIterableObject<T>(
  it: unknown,
): it is AsyncIterableObject<T> {
  return isObjectLike(it) && isAsyncIterable(it);
}

export default isAsyncIterableObject;
