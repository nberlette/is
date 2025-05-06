/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/generator-function
 */

import { isTagged } from "./tagged.ts";

/**
 * Checks if a given value is a generator function, which is a function that
 * uses a distinct syntax and returns a generator object when called.
 *
 * To check if a value is a generator object (the actual iterable iterator that
 * is typically used within `for..of` loops), use {@link isGenerator} instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a generator function, `false` otherwise.
 * @example
 * ```ts
 * import { isGeneratorFunction } from "jsr:@nick/is/generator-function";
 *
 * function* gen() { yield 1; }
 * const iter = gen();
 *
 * console.log(isGeneratorFunction(gen)); // true
 * console.log(isGeneratorFunction(iter)); // false
 * ```
 *
 * Another example, highlighting the differences between a generator function
 * and a generator object, using a custom iterable class:
 *
 * @example
 * ```ts
 * import { isIterable, isGenerator, isGeneratorFunction } from "jsr:@nick/is";
 *
 * class Foo {
 *   *delegate() {
 *     return yield* this; // <- thanks to the [Symbol.iterator] method below
 *   }
 *
 *   *[Symbol.iterator](): IterableIterator<number> {
 *     for (let i = 0; i < 10; i++) yield i;
 *   }
 * }
 *
 * const foo = new Foo();
 *
 * // Since Foo.prototype has a [Symbol.iterator] method, it is iterable:
 * if (isIterable(foo)) {
 *   // This will log the numbers 1 through 10
 *   for (const value of foo) console.log(value);
 * }
 *
 * // However, it is _not_ a generator not generator function:
 * isGenerator(foo); // false
 * isGeneratorFunction(foo); // false
 *
 * // It's delegate and [Symbol.iterator] methods _are_ generator functions:
 * isGeneratorFunction(foo.delegate); // true
 * isGeneratorFunction(foo[Symbol.iterator]); // true
 *
 * // And they _return_ generator objects...:
 * const iter1 = foo.delegate();
 * const iter2 = foo[Symbol.iterator]();
 * isGenerator(iter1); // true
 * isGenerator(iter2); // true
 *
 * // ...which are also iterable:
 * isIterable(iter1); // true
 * isIterable(iter2); // true
 * ```
 *
 * #### Notes
 *
 * This function will **_not_** return `true` for async generator functions, as
 * they are a distinctly different type of function that returns a different
 * type of object. Use {@link isAsyncGeneratorFunction} to check for an async
 * generator function instead.
 *
 * @category Generators
 * @module generator-function
 */
export function isGeneratorFunction(it: unknown): it is GeneratorFunction {
  return typeof it === "function" && isTagged(it, "GeneratorFunction");
}

export default isGeneratorFunction;
