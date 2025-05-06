/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/map-iterator
 */

import { isIterator } from "./iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Check if the given value is a map iterator, which is an iterable iterator
 * that yields key-value pairs from a Map object. This is the type of object
 * returned by the `Map.prototype.entries` and `Map.prototype[Symbol.iterator]`
 * methods.
 *
 * @param it The value to check.
 * @returns `true` if the value is a map iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isMapIterator } from "jsr:@nick/is/map-iterator";
 *
 * const map = new Map([["foo", 1], ["bar", 2]]);
 * const iterator = map.entries();
 * console.log(isMapIterator(iterator)); // true
 * console.log(isMapIterator(map)); // false
 * ```
 * @category Iterables
 * @module map-iterator
 */
export function isMapIterator<K, V>(it: unknown): it is MapIterator<K, V> {
  return isIterator(it) &&
    (isTagged(it, "Map Iterator") || isTagged(it, "Map Entries"));
}

export default isMapIterator;

/** Represents a map iterator. */
export interface MapIterator<K, V> extends IterableIterator<[K, V]> {
  readonly [Symbol.toStringTag]: "Map Iterator" | "Map Entries";
}
