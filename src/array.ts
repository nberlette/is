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
 * Checks if the given value is an array.
 *
 * @param it The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 * @example
 * ```ts
 * import { isArray } from "jsr:@nick/is/array";
 *
 * isArray([]); // true
 * isArray([1, 2, 3]); // true
 * isArray({}); // false
 *
 * // Use with type guards to narrow down the type of the array elements:
 * import { isString, isNumber } from "jsr:@nick/is";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 * if (isArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: readonly string[]
 * }
 * if (isArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: readonly number[]
 * ```
 * @category Indexed Collections
 */
export function isArray<T>(it: unknown): it is readonly T[];

/**
 * Checks if the given value is an array of a specific type.
 *
 * @param it The value to check.
 * @param test The type guard to check the type of the array elements.
 * @returns `true` if it is an array of the specific type, `false` otherwise.
 * @example
 * ```ts
 * import { isArray, isString, isNumber } from "jsr:@nick/is";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 *
 * if (isArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: readonly string[]
 * } else if (isArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: readonly number[]
 * } else {
 *   console.log(arr, "is not an array of strings or numbers");
 *   //           ^? const arr: readonly unknown[]
 * }
 * ```
 * @category Indexed Collections
 */
export function isArray<T>(
  it: unknown,
  test: (x: unknown, ...args: unknown[]) => x is T,
): it is readonly T[];

/**
 * Checks if the given value is an array.
 *
 * @param it The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 * @category Indexed Collections
 */
export function isArray<T>(
  a: unknown,
  test?: (x: unknown, ...args: unknown[]) => x is T,
): a is T[];

/** @internal */
export function isArray<T>(
  a: unknown,
  test?: (x: unknown, ...args: unknown[]) => x is T,
): a is T[] {
  if (ArrayIsArray(a) && typeof test === "function") {
    for (let i = 0; i < a.length; i++) {
      if (!test(a[i])) return false;
    }
    return true;
  } else return ArrayIsArray(a);
}

/**
 * Checks if the given value is an array with at least one element.
 *
 * @param it The value to check.
 * @returns `true` if the value is an array with at least one element, `false` otherwise.
 * @example
 * ```ts
 * import { isNonEmptyArray } from "jsr:@nick/is/array";
 *
 * console.log(isNonEmptyArray([])); // false
 * console.log(isNonEmptyArray([1, 2, 3])); // true
 * console.log(isNonEmptyArray({})); // false
 * ```
 * @category Indexed Collections
 */
export function isNonEmptyArray<T>(it: unknown): it is readonly [T, ...T[]];

/**
 * Checks if the given value is an array with at least one element of a specific type.
 *
 * @param it The value to check.
 * @param test The type guard to check the type of the array elements.
 * @returns `true` if the value is an array with at least one element of the specific type, `false` otherwise.
 * @example
 * ```ts
 * import { isNonEmptyArray } from "jsr:@nick/is/array";
 * import { isString } from "jsr:@nick/is/string";
 * import { isNumber } from "jsr:@nick/is/number";
 *
 * const arr: unknown[] = ["a", "b", "c"];
 *
 * if (isNonEmptyArray(arr, isString)) {
 *   console.log(arr, "is an array of strings");
 *   //           ^? const arr: readonly [string, ...string[]]
 * } else if (isNonEmptyArray(arr, isNumber)) {
 *   console.log(arr, "is an array of numbers");
 *   //           ^? const arr: readonly [number, ...number[]]
 * } else {
 *   console.log(arr, "is not an array of strings or numbers");
 *   //           ^? const arr: readonly unknown[]
 * }
 * ```
 * @category Indexed Collections
 */
export function isNonEmptyArray<T>(
  it: unknown,
  test: (x: unknown) => x is T,
): it is NonEmptyArray<T>;
export function isNonEmptyArray<T>(
  a: unknown,
  test?: (x: unknown) => x is T,
): a is NonEmptyArray<T>;
export function isNonEmptyArray<T>(
  a: unknown,
  test?: (x: unknown) => x is T,
): a is NonEmptyArray<T> {
  return isArray(a, test!) && a.length > 0;
}

export type NonEmptyArray<T = unknown> = readonly [T, ...T[]];

/** @ignore */
export default isArray;
