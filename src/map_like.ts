/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/map-like
 */

import { isReadonlyCollection } from "./set_like.ts";
import { hasMethods } from "./has_methods.ts";
import { isConstructor } from "./constructor.ts";
import { isIterableObject } from "./iterable_object.ts";

/**
 * Map-like objects are collections of keys and values, where each key may only
 * appear once in the collection.
 *
 * @template K The type of keys in the collection.
 * @template V The type of values in the collection.
 * @category Types
 */
export interface MapLike<K, V> extends Iterable<[K, V]> {
  /** Gets the number of elements in the collection. */
  readonly size: number;

  /**
   * Tests whether a key is present in the collection.
   * @param key The key to lookup.
   * @returns `true` if the key is present in the collection; otherwise,
   * `false`.
   */
  has(key: K): boolean;

  /**
   * Gets the value associated with the provided key, if it exists.
   * @param key The key to lookup.
   * @returns The value associated with the provided key, or `undefined`.
   */
  get(key: K): V | undefined;

  /**
   * Sets the value in the collection associated with the provided key.
   * @param key The key to set.
   * @param value The value to set.
   * @returns The collection.
   */
  set(key: K, value: V): this;

  /** Removes all entries from the collection. */
  clear(): void;

  /**
   * Removes a key from the collection.
   *
   * @param key The key to remove.
   * @returns `true` if the delete operation was successful, otherwise `false`.
   */
  delete(key: K): boolean;

  /**
   * Returns an `IterableIterator` for the keys present in the collection.
   */
  keys(): IterableIterator<K>;

  /**
   * Returns an `IterableIterator` for the values present in the collection.
   */
  values(): IterableIterator<V>;

  /**
   * Returns an `IterableIterator` for the entries present in the collection.
   * Each entry is a tuple containing the key and value for each element.
   * @generator
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * Executes a provided function once per each key/value pair in the
   * collection.
   *
   * @template [This=void] The type of `this` for the callback.
   * @param cb The callback to execute.
   * @param [thisArg] The value to use as `this` when executing the
   * callback.
   * @returns Nothing.
   */
  forEach<This = void>(
    cb: (this: This, value: V, key: K, map: MapLike<K, V>) => void,
    thisArg?: This,
  ): void;

  /**
   * Returns an `IterableIterator` for the entries present in the collection.
   * @generator
   */
  [Symbol.iterator](): IterableIterator<[K, V]>;

  readonly [Symbol.toStringTag]: string;
}

/**
 * A constructor function for creating new `MapLike` objects.
 * @category Types
 */
export interface MapLikeConstructor {
  new <K, V>(iterable?: Iterable<[K, V]>): MapLike<K, V>;

  readonly prototype: MapLike<unknown, unknown>;
}

/**
 * Checks whether a given value is a {@linkcode MapLike} object.
 *
 * @template K The type of keys in the map.
 * @template V The type of values in the map.
 * @param it The value to check.
 * @returns  `true` if the value is a `MapLike` object; otherwise, `false`.
 */
export function isMapLike<K, V>(it: unknown): it is MapLike<K, V> {
  return (
    isReadonlyCollection(it) &&
    isIterableObject(it) &&
    "size" in it &&
    hasMethods(
      it,
      "get",
      "set",
      "delete",
      "clear",
      "has",
      "keys",
      "values",
      "entries",
      "forEach",
    )
  );
}

/**
 * Checks whether a given value is a {@linkcode MapLikeConstructor} function,
 * which is defined as a constructor function with a `prototype` property that
 * appears to be a {@linkcode MapLike} object.
 * @param it The value to check.
 * @returns `true` if the value is a {@linkcode MapLikeConstructor}; otherwise,
 * `false`.
 * @category Guards
 */
export function isMapLikeConstructor(it: unknown): it is MapLikeConstructor {
  return isConstructor(it) && isMapLike(it.prototype);
}

export default isMapLike;
