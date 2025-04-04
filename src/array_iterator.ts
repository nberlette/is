/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/array-iterator
 */

import { isIterator } from "./iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Check if the given value is an array iterator, which is an iterable iterator
 * that yields key-value pairs from an Array. This is the type of value that is
 * returned by `Array.prototype.values` and `Array.prototype[Symbol.iterator]`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a array iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isArrayIterator } from "jsr:@nick/is/array-iterator";
 *
 * const array = ["foo", "bar", "foo"];
 * const iter = array[Symbol.iterator]();
 * console.log(isArrayIterator(iterator)); // true
 * console.log(isArrayIterator(array)); // false
 * ```
 * @category Iterables
 * @module array-iterator
 */
export function isArrayIterator<T>(it: unknown): it is ArrayIterator<T> {
  return isIterator(it) && isTagged(it, "Array Iterator");
}

export default isArrayIterator;

/** Represents a array iterator. */
export interface ArrayIterator<T = unknown> extends IterableIterator<T> {
  readonly [Symbol.toStringTag]: "Array Iterator";
}
