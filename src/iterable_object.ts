/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/iterable-object
 */

/**
 * This module provides a type guard function, {@linkcode isIterableObject},
 *
 * @example
 * ```ts
 * import { isIterableObject } from "jsr:@nick/is/iterable-object";
 *
 * console.log(isIterableObject([1, 2])); // true
 * console.log(isIterableObject(new Map())); // true
 * console.log(isIterableObject(new Set())); // true
 * console.log(isIterableObject({ [Symbol.iterator]: () => {} })); // true
 * console.log(isIterableObject("foo")); // false
 * ```
 * @module iterable-object
 */
import { isIterable } from "./iterable.ts";

/**
 * Checks if a given value is an iterable object. This includes arrays, maps,
 * and sets, but not strings or other non-object iterables.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterable object, `false` otherwise.
 * @example
 * ```ts
 * import { isIterableObject } from "jsr:@nick/is/iterable-object";
 *
 * console.log(isIterableObject([1, 2])); // true
 * console.log(isIterableObject(new Map())); // true
 * console.log(isIterableObject(new Set())); // true
 * console.log(isIterableObject({ [Symbol.iterator]: () => {} })); // true
 * console.log(isIterableObject("foo")); // false
 * ```
 * @category Iterables
 * @module iterable-object
 */
export function isIterableObject<T>(it: unknown): it is IterableObject<T> {
  return (
    (typeof it === "object" && it !== null) || typeof it === "function"
  ) && isIterable(it);
}

/**
 * Represents an object that is also an iterable. This is the type of arrays,
 * maps, sets, and objects with a Symbol.iterator method. It is a subtype of
 * both `Iterable` and `object`. This is also the type that the function
 * {@link isIterableObject} narrows its inputs to.
 *
 * @category Iterables
 */
export type IterableObject<T = unknown> = Iterable<T> & object;

/** @ignore */
export default isIterableObject;
