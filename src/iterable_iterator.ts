/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/iterable-iterator
 */

import { isIterable } from "./iterable.ts";
import { isIterator } from "./iterator.ts";

/**
 * Checks if a given value is an `IterableIterator`, which is an iterator object
 * that also has a `Symbol.iterator` method that returns a reference to itself.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `IterableIterator`, `false` otherwise.
 * @example
 * ```ts
 * import { isIterableIterator } from "jsr:@nick/is/iterable-iterator";
 *
 * const iter = [1, 2][Symbol.iterator](); // Array iterator
 * console.log(isIterableIterator(iter)); // true
 * console.log(isIterableIterator(iter[Symbol.iterator]())); // true
 * console.log(isIterableIterator("foo"[Symbol.iterator]())); // false
 * ```
 * @category Iterables
 * @module iterable-iterator
 */
export function isIterableIterator<T>(it: unknown): it is IterableIterator<T> {
  return isIterator(it) && isIterable(it);
}

export default isIterableIterator;
