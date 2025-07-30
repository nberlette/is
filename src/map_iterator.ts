// deno-lint-ignore-file no-explicit-any
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/map-iterator
 */

/**
 * Check if the given value is a map iterator, which is an iterable iterator
 * that yields key-value pairs from a Map object. This is the type of object
 * returned by the `Map.prototype.entries` and `Map.prototype[Symbol.iterator]`
 * methods.
 *
 * @example
 * ```ts
 * import { isMapEntriesIterator } from "jsr:@nick/is/map-iterator";
 *
 * const map = new Map([["foo", 1], ["bar", 2]]);
 * const iterator = map.entries();
 * console.log(isMapEntriesIterator(iterator)); // true
 * console.log(isMapEntriesIterator(map)); // false
 * ```
 * @category Iteration
 * @module map-iterator
 */
import { SymbolIterator } from "./internal/primordials.ts";
import { isIterableIterator } from "./iterable_iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Represents a map iterator, which is an iterable iterator that either yields
 * keys, values, or key-value pairs from a native `Map` object. Iterators of
 * this type are not user-defined, but instead are produced by the JS runtime.
 *
 * @see {@linkcode isMapIterator} for a type guard that checks for this.
 *
 * @template [TKey] The type of the keys in the map.
 * @template [TValue] The type of the values in the map.
 * @template {TKey|TValue|[TKey,TValue]} [TYield=[TKey,TValue]] The type of
 * value yielded by the iterator. This can either be individual keys/values, or
 * a tuple consisting of both the key and value.
 * @template [TReturn] The type of value returned by the iterator, either when
 * it is exhausted, or when its `return` method is called, which immediately
 * terminates the iterator.
 * @template [TNext] The type of value that can be passed to the iterator's
 * `next` method, which is used to advance the iterator.
 * @category Iteration
 * @tags Map Iterator
 */
export interface MapIterator<
  TKey = any,
  TValue = any,
  TYield extends TKey | TValue | [TKey, TValue] = [TKey, TValue],
  TReturn = BuiltinIteratorReturn,
  TNext = unknown,
> extends IteratorObject<TYield, TReturn, TNext> {
  [Symbol.iterator](): MapIterator<TKey, TValue, TYield, TReturn, TNext>;

  readonly [Symbol.toStringTag]: "Map Iterator";
}

/**
 * Check if the given value is a map iterator, which is an iterable iterator
 * that either yields keys or values from a Map object. This is the type of
 * object returned by the `Map.prototype.keys` and `Map.prototype.values`
 * methods.
 *
 * @template K The type of the keys in the map.
 * @template V The type of the values in the map.
 * @param it The value to check.
 * @returns `true` if the value is a map iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isMapIterator } from "jsr:@nick/is/map-iterator";
 *
 * const map = new Map([["foo", 1], ["bar", 2]]);
 * const iterator = map.keys();
 * console.log(isMapIterator(iterator)); // true
 * console.log(isMapIterator(map)); // false
 * ```
 * @category Iteration
 */
export function isMapIterator<K = any, V = any>(
  it: unknown,
): it is MapIterator<K, V> {
  return isIterableIterator(it) && it[SymbolIterator]() === it &&
    isTagged(it, "Map Iterator");
}

export default isMapIterator;
