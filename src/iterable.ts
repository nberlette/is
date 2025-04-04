/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/iterable
 */

/**
 * Checks if a given value is an iterable. This includes arrays, strings, maps,
 * sets, and any other value with a `Symbol.iterator` method. If you need to
 * check for iterable objects specifically, use `isIterableObject`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterable, `false` otherwise.
 * @example
 * ```ts
 * import { isIterable } from "jsr:@nick/is/iterable";
 *
 * console.log(isIterable([1, 2])); // true
 * console.log(isIterable("foo")); // true
 * console.log(isIterable(new Map())); // true
 * console.log(isIterable(new Set())); // true
 * console.log(isIterable({ [Symbol.iterator]: () => {} })); // true
 * console.log(isIterable({})); // false
 * ```
 * @category Iterables
 * @module iterable
 */
const SymbolIterator: typeof globalThis.Symbol.iterator =
  typeof globalThis.Symbol === "function"
    ? globalThis.Symbol.iterator
    : "@@iterator" as never;

/**
 * Checks if a given value is an iterable. This includes arrays, strings, maps,
 * sets, and any other value with a `Symbol.iterator` method. If you need to
 * check for iterable objects specifically, use `isIterableObject`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an iterable, `false` otherwise.
 * @example
 * ```ts
 * import { isIterable } from "jsr:@nick/is/iterable";
 *
 * console.log(isIterable([1, 2])); // true
 * console.log(isIterable("foo")); // true
 * console.log(isIterable(new Map())); // true
 * console.log(isIterable(new Set())); // true
 * console.log(isIterable({ [Symbol.iterator]: () => {} })); // true
 * console.log(isIterable({})); // false
 * ```
 * @category Iterables
 * @module iterable
 */
export function isIterable<T>(it: unknown): it is Iterable<T> {
  return typeof Object(it)[SymbolIterator] === "function";
}

export default isIterable;
