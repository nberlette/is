/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/array
 */

/**
 * Checks if the given value is an array. If the `Array.isArray` method is
 * available in the global scope, it will be used under the hood. Otherwise,
 * a custom implementation will be used.
 *
 * To constrain the types of each eleemnt in the array, a custom type guard
 * can be provided for the second argument, `test`, which will be used to
 * verify the type of each element in the array.
 *
 * **Warning**: Validating all of the elements in the array can be expensive,
 * especially when dealing with large arrays. Use the 2-argument overload with
 * discretion, as it can have a significant performance impact.
 *
 * @example Basic usage:
 * ```ts
 * import { isArray } from "jsr:@nick/is/array";
 *
 * console.assert(isArray([])); // OK
 * console.assert(isArray([1, 2, 3])); // OK
 * console.assert(!isArray({ length: 1, 0: "a" })); // not an array
 * ```
 * @example Use with type guards to narrow down the type of the array elements:
 * ```ts
 * import { isArray } from "jsr:@nick/is/array";
 * import { isString } from "jsr:@nick/is/string";
 * import { isNumber } from "jsr:@nick/is/number";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 * if (isArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: string[]
 * }
 * if (isArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: number[]
 * ```
 * @module array
 */

import { isTaggedNative } from "./_internal.ts";
import type { Predicate } from "./type/predicate.ts";

const ArrayIsArray: (x: unknown) => x is unknown[] = (() => {
  if (typeof globalThis.Array.isArray === "function") {
    return globalThis.Array.isArray.bind(globalThis.Array);
  }
  // fallback checks for the native `Array` tag (e.g. it _appears_ to have a
  // Symbol.toStringTag when passed to Object.prototype.toString, but does not
  // actually have that property anywhere in its prototype chain)
  return (x): x is unknown[] => (
    typeof x === "object" && x !== null && isTaggedNative(x, "Array")
  );
})();

/**
 * Checks if the given value is an array, optionally verifying that each of its
 * elements are of a specific type.
 *
 * @param it The value to check.
 * @param [test] The type guard to check the type of the array elements.
 * @returns `true` if it is an array, and the predicate (if provided) is
 * satisfied by each of its values. Otherwise, returns `false`.
 * @example
 * ```ts
 * import { isArray, isString, isNumber } from "jsr:@nick/is";
 * import { expectType } from "jsr:@nick/is/type/expect";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 *
 * if (isArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: string[]
 *   expectType<string[]>(arr);
 * } else if (isArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: number[]
 *   expectType<number[]>(arr);
 * } else {
 *   console.log(arr, "is not an array of strings or numbers");
 *   //           ^? const arr: unknown[]
 *   expectType<unknown[]>(arr);
 * }
 * ```
 * @category Indexed Collections
 */
export function isArray<T>(a: unknown, test?: Predicate<T>): a is T[] {
  if (ArrayIsArray(a)) {
    if (typeof test === "function") {
      for (let i = 0; i < a.length; i++) {
        if (!test(a[i])) return false;
      }
    }
    return true;
  }
  return false;
}

export default isArray;
