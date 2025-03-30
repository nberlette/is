/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/set-like
 */

import { hasMethods } from "./_internal.ts";
import { isConstructor } from "./constructor.ts";
import { isIterableObject } from "./iterable_object.ts";
import { isObject } from "./object.ts";

/**
 * Set-like objects are collections of unique values (each value may only occur
 * once). The `ReadonlyCollection` interface defines the bare minimum requirements for
 * an object to be considered "set-like" in JavaScript; that is, it must have:
 *
 *  - a `has` method, which tests whether a given value is present in the set,
 *    returning a boolean value indicating the result.
 *  - a `keys` method, which returns an `IterableIterator` for the keys present
 *    in the set. Since set collections are keyed by their values, the `keys`
 *    method actually iterates over the **_values_** in the set.
 *  - a read-only `size` property (getter), which returns the number of values
 *    in the set at any given time.
 *
 * This interface the base for the `SetLike` interface (hence its name), which
 * extends it with additional methods like `add`, `delete`, `clear`, `forEach`,
 * `values`, and `entries` to provide a more complete API for working with Set-
 * like collections in JavaScript. Prior to the TC39 Proposal for Set Methods,
 * the `SetLike` interface was the shape of the native `Set` API in JavaScript.
 *
 * Following the introduction of the TC39 Proposal for Set Methods, the methods
 * for set composition (`union`, `intersection`, `difference`, etc.) were added
 * to the `Set` API, which necessitated the creation of the `ExtendedSetLike`
 * interface to represent the full API for set-like collections in JavaScript.
 *
 * Those methods require their arguments to implement the {@link ReadonlyCollection}
 * interface, rather than the full {@link SetLike} or {@link ExtendedSetLike}.
 * This means you can call `Set.prototype.union` with a `Set`, `Map`, or even
 * an `IterableWeakSet` object, since they all implement the `ReadonlyCollection` API.
 *
 * @template T The type of elements in the set.
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects
 */
export interface ReadonlyCollection<T = unknown> {
  /** @returns The number of elements in the collection. */
  readonly size: number;

  /**
   * Tests whether a given value is present in the collection.
   * @param value The value to lookup.
   * @returns `true` if the value is in the collection; otherwise, `false`.
   * @see
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
   */
  has(value: T): boolean;

  /**
   * Gets an `IterableIterator` for the keys present in the collection.
   * @returns An iterator of the keys in the collection.
   * @see
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys
   */
  keys(): IterableIterator<T>;
}

/**
 * Represents a constructor function for a {@link ReadonlyCollection} object, which
 * is the base implementation of a {@link ExtendedSetLike} object, without any
 * of the additional composition methods like `union` or `intersection`.
 *
 * @see {@linkcode ExtendedSetLike} for the full interface with composition
 * methods.
 * @see {@linkcode SetLike} for the core interface without composition
 * methods.
 */
export interface ReadonlyCollectionConstructor {
  new <T>(iterable?: Iterable<T>): ReadonlyCollection<T>;

  readonly prototype: ReadonlyCollection<unknown>;
}

/**
 * Represents the core functionality of a `SetLike` object, which is the base
 * implementation of a {@link ExtendedSetLike} object, without any additional
 * composition methods (`union`, `intersection`, `difference`, etc). This was
 * the native `Set` API prior to the TC39 Set Methods Proposal's introduction.
 *
 * @template T The type of elements in the set.
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @see {@linkcode ExtendedSetLike} for the full interface with composition
 * methods.
 * @see {@linkcode SetLikeConstructor} for the constructor interface.
 */
export interface SetLike<T = unknown>
  extends Iterable<T>, ReadonlyCollection<T> {
  /** @returns The number of elements in the collection. */
  readonly size: number;

  /**
   * Adds the given value to the collection, if it does not already exist.
   *
   * @param value The value to add.
   * @returns The collection.
   */
  add(value: T): this;

  /**
   * Tests whether a key is present in the collection.
   *
   * @param value The key to lookup.
   * @returns `true` if the value is in the collection; otherwise, `false`.
   */
  has(value: T): boolean;

  /** Removes all values from the collection. */
  clear(): void;

  /**
   * Removes a value from the collection.
   *
   * @param value The vakue to remove.
   * @returns `true` if the operation was successful; otherwise, `false`.
   */
  delete(value: T): boolean;

  /**
   * Executes a provided function once per each entry in the collection. The
   * callback is invoked with the current value for both the first and second
   * arguments (to maintain a similar signature as `forEach` on other iterable
   * objects like `Map` and `Array`).
   *
   * @param cb The callback to execute.
   * @param [thisArg] The value to use as `this` when executing the callback.
   * @returns {void} Nothing.
   */
  forEach<This = void>(
    cb: (this: This, value: T, value2: T, set: this) => void,
    thisArg?: This,
  ): void;

  /**
   * @returns an Iterable of the values in the collection.
   * @generator
   */
  keys(): IterableIterator<T>;

  /**
   * @returns an `IterableIterator` for the values present in the collection.
   * @generator
   */
  values(): IterableIterator<T>;

  /**
   * @returns an `IterableIterator` of the entries present in the collection.
   * Each entry is a tuple containing the key and value for each element.
   * @generator
   */
  entries(): IterableIterator<[T, T]>;

  /** Returns an iterator of the {@linkcode values} in the set. */
  [Symbol.iterator](): IterableIterator<T>;

  readonly [Symbol.toStringTag]: string;
}

/**
 * Represents a constructor function for a {@link SetLike} object, which is
 * the base implementation of a {@linkcode ExtendedSetLike} object, without any
 * of the additional composition methods like `union` or `intersection`.
 *
 * @see {@linkcode ExtendedSetLike} for the full interface with composition
 * methods.
 * @see {@linkcode SetLike} for the core interface without composition
 * methods.
 */
export interface SetLikeConstructor {
  new <T>(iterable?: Iterable<T>): SetLike<T>;

  // deno-lint-ignore no-explicit-any
  readonly prototype: SetLike<any>;
}

/**
 * A `ExtendedSetLike` object is a collection of values, where each value may
 * only occur once. The values in a `ExtendedSetLike` can be either primitive
 * values or object references. The keys of a `ExtendedSetLike` are the same as
 * the values.
 *
 * @template T The type of elements in the set.
 */
export interface ExtendedSetLike<T = unknown> extends SetLike<T> {
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to merge with this one.
   * @returns a new {@linkcode ExtendedSetLike} object containing all the
   * elements in this {@linkcode ExtendedSetLike} object and also all the
   * elements in the {@linkcode other}.
   */
  union<U>(other: ReadonlyCollection<U>): ExtendedSetLike<T | U>;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to intersect with this one.
   * @returns a new {@linkcode ExtendedSetLike} object containing all the
   * elements which are both in this {@linkcode ExtendedSetLike} object and in
   * the {@linkcode other}.
   */
  intersection<U>(other: ReadonlyCollection<U>): ExtendedSetLike<T & U>;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to compare with this one.
   * @returns a new {@linkcode ExtendedSetLike} object containing all the
   * elements in this {@linkcode ExtendedSetLike} object which are not also in
   * the {@linkcode other}.
   */
  difference<U>(other: ReadonlyCollection<U>): ExtendedSetLike<T>;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to compare with this one.
   * @returns a new ExtendedSetLike object containing all the elements which
   * are in either this {@linkcode ExtendedSetLike} object or in the
   * {@linkcode other}, but not in both.
   */
  symmetricDifference<U>(other: ReadonlyCollection<U>): ExtendedSetLike<T | U>;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to compare with this one.
   * @returns a boolean indicating whether all the elements in this
   * {@linkcode ExtendedSetLike} object are also in the {@linkcode other}.
   */
  isSubsetOf<U>(other: ReadonlyCollection<U>): boolean;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to compare with this one.
   * @returns a boolean indicating whether all the elements in the
   * {@linkcode other} are also in this {@linkcode ExtendedSetLike} object.
   */
  isSupersetOf<U>(other: ReadonlyCollection<U>): boolean;
  /**
   * @template U The type of elements in the other set.
   * @param other The other set-like object to compare with this one.
   * @returns a boolean indicating whether this {@linkcode ExtendedSetLike}
   * object has no elements in common with the {@linkcode other}.
   */
  isDisjointFrom<U>(other: ReadonlyCollection<U>): boolean;
}

/**
 * Represents a constructor function for a {@link ExtendedSetLike} object,
 * which is required for the composition methods of the `IterableWeakSet`
 * class.
 */
export interface ExtendedSetLikeConstructor {
  new <T>(iterable?: Iterable<T>): ExtendedSetLike<T>;

  // deno-lint-ignore no-explicit-any
  readonly prototype: ExtendedSetLike<any>;
}

/**
 * This type represents either the full {@link ExtendedSetLike} interface, or
 * the {@link SetLike} interface, depending on whether the current environment
 * supports composition methods introduced by the TC39 Set Methods Proposal.
 *
 * If the current environment supports the composition methods, this type will
 * resolve to the {@link ExtendedSetLike} interface. Otherwise, it will resolve
 * to the {@link SetLike} interface.
 *
 * @template T The type of elements in the set.
 * @see {@link SupportedSetLikeConstructor} for a similar type that represents
 * the constructor function for the supported set-like object.
 */
export type SupportedSetLike<T = unknown> =
  Exclude<keyof ExtendedSetLike<T>, keyof SetLike<T>> extends
    keyof globalThis.Set<T> ? ExtendedSetLike<T>
    : SetLike<T>;

/**
 * This type represents either the full {@link ExtendedSetLikeConstructor}
 * interface, or the {@link SetLikeConstructor} interface, depending on whether
 * the current environment supports composition methods introduced by the TC39
 * Set Methods Proposal.
 *
 * If the current environment supports the composition methods, this type will
 * resolve to the {@link ExtendedSetLikeConstructor} interface. Otherwise, it
 * will resolve to the {@link SetLikeConstructor} interface.
 *
 * @see {@link SupportedSetLike} for a similar type that represents the full
 * set-like object.
 */
export type SupportedSetLikeConstructor =
  Exclude<keyof ExtendedSetLikeConstructor, keyof SetLikeConstructor> extends
    keyof globalThis.SetConstructor ? ExtendedSetLikeConstructor
    : SetLikeConstructor;

/**
 * Checks whether the provided value is a {@link ReadonlyCollection} object. The
 * `ReadonlyCollection` interface is the minimum requirement for a value to be used
 * in the composition methods found in `ExtendedSetLike` implementations, such
 * as `union`, `intersection`, `difference`, and `symmetricDifference`.
 *
 * This type is the **bare minimal** requirement for a value to be considered
 * a "set-like" object in JavaScript, and only requires the `has`, `keys`, and
 * `size` members to be present. As such, native `Set` objects and also native
 * `Map` objects both qualify as `ReadonlyCollection` objects. For a more specific
 * check, see {@linkcode isSetLike} or {@linkcode isExtendedSetLike}, which
 * check for the full API of a Set object, with or without the composition
 * methods added by the TC39 proposal, respectively.
 *
 * @template T The type of elements in the set.
 * @param it The value to check.
 * @returns {it is ReadonlyCollection<T>} `true` if the value is a
 * {@link ReadonlyCollection} object; otherwise, `false`.
 * @category Guards
 */
export function isReadonlyCollection<T>(
  it: unknown,
): it is ReadonlyCollection<T> {
  return isObject(it) && hasMethods(it, "has", "keys") && "size" in it;
}

/**
 * Checks whether the provided value is a {@link SetLike} object. The
 * `SetLike` interface is the base implementation of a `ExtendedSetLike`
 * object, without any additional composition methods like `union` or
 * `intersection`.
 *
 * This type is the shape of the native `Set` object in JavaScript **prior**
 * to the introduction of the TC39 Proposal for Set Methods, which added the
 * composition methods to the API.
 *
 * @template T The type of elements in the set.
 * @param it The value to check.
 * @returns {it is SetLike<T>} `true` if the value is a {@link SetLike}
 * object; otherwise, `false`.
 * @category Guards
 */
export function isSetLike<T>(it: unknown): it is SetLike<T> {
  return isReadonlyCollection<T>(it) && isIterableObject(it) &&
    hasMethods(it, "add", "delete", "clear", "values", "entries", "forEach");
}

/**
 * Checks whether the provided value is a {@link ExtendedSetLike} object. The
 * `ExtendedSetLike` interface is the full implementation of a `ExtendedSetLike`
 * object, including all the composition methods like `union`, `intersection`,
 * `difference`, and `symmetricDifference`.
 *
 * The `ExtendedSetLike` type is the shape of the native `Set` object in
 * JavaScript **after** the introduction of the TC39 Proposal for Set Methods,
 * which added the composition methods to the API.
 *
 * @template T The type of elements in the set.
 * @param it The value to check.
 * @returns {it is ExtendedSetLike<T>} `true` if the value is a
 * {@link ExtendedSetLike} object; otherwise, `false`.
 * @category Guards
 */
export function isExtendedSetLike<T>(it: unknown): it is ExtendedSetLike<T> {
  return isSetLike<T>(it) &&
    hasMethods(
      it,
      "union",
      "intersection",
      "difference",
      "symmetricDifference",
      "isDisjointFrom",
      "isSubsetOf",
      "isSupersetOf",
    );
}

/**
 * Checks if a given value appears to be a {@link ReadonlyCollectionConstructor}
 * function, including a `prototype` property that appears to be a
 * {@link ReadonlyCollection} object.
 *
 * @param it The value to check.
 * @returns {it is ReadonlyCollectionConstructor} `true` if the value appears to be a
 * {@link ReadonlyCollectionConstructor} function; otherwise, `false`.
 * @category Guards
 */
export function isReadonlyCollectionConstructor(
  it: unknown,
): it is ReadonlyCollectionConstructor {
  return isConstructor(it) && isReadonlyCollection(it.prototype);
}

/**
 * Checks if a given value appears to be a {@link SetLikeConstructor}
 * function, including a `prototype` property that appears to be a
 * {@link SetLike} object.
 *
 * @param it The value to check.
 * @returns {it is SetLikeConstructor} `true` if the value is a
 * {@link SetLikeConstructor} function; otherwise, `false`.
 * @category Guards
 */
export function isSetLikeConstructor(
  it: unknown,
): it is SetLikeConstructor {
  return isConstructor(it) && isSetLike(it.prototype);
}

/**
 * Checks if a given value appears to be a {@link ExtendedSetLikeConstructor}
 * function, including a `prototype` property that appears to be a
 * {@link ExtendedSetLike} object.
 *
 * @param it The value to check.
 * @returns {it is ExtendedSetLikeConstructor} `true` if the value is a
 * {@link ExtendedSetLikeConstructor} function; otherwise, `false`.
 * @category Guards
 */
export function isExtendedSetLikeConstructor(
  it: unknown,
): it is ExtendedSetLikeConstructor {
  return isConstructor(it) && isExtendedSetLike(it.prototype);
}
