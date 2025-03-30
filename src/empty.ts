/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/empty
 */

/**
 * @module empty
 *
 * Checks if a given value is an empty object, array, or string.
 *
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty({}); // true
 * isEmpty([]); // true
 * isEmpty(""); // true
 *
 * isEmpty({ a: 1 }); // false
 * isEmpty([1]); // false
 * isEmpty("a"); // false
 * ```
 * @category
 */

const Never: unique symbol = Symbol("never");
interface IsNever {
  readonly [Never]: never;
}
type Never = PropertyKey & IsNever;

// string comes first as its the most specific array-like we're checking
/**
 * Checks if a given value is an empty string.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty string, `false` otherwise.
 * @category Chain
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty(""); // true
 * isEmpty("a"); // false
 * ```
 */
export function isEmpty(it: string): it is "";

// next is array, the most common array-like we're checking.
/**
 * Checks if a given value is an empty Array object.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty Array object, `false` otherwise.
 * @category Chain
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty([]); // true
 * isEmpty([1]); // false
 * ```
 */
export function isEmpty(it: readonly unknown[]): it is readonly [];

// and finally comes a generic array-like object. if this came before the other
// two, those two overloads would never be reached as this would always match.
/**
 * Checks if a given value is an empty ArrayLike object.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty ArrayLike object, `false` otherwise.
 * @category Chain
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty([]); // true
 * isEmpty([1]); // false
 * ```
 */
// deno-lint-ignore no-explicit-any
export function isEmpty<const U extends ArrayLike<any>>(
  it: U,
): it is U & { readonly length: 0 };

/**
 * Checks if a given value is an empty object.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty object, `false` otherwise.
 * @category Chain
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty({}); // true
 * isEmpty({ a: 1 }); // false
 * ```
 */
export function isEmpty(it: unknown): it is { [K in Never]: never };

/**
 * Checks if a given value is an empty object, array, or string.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty object, array, or string, `false` otherwise.
 * @category Chain
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty({}); // true
 * isEmpty([]); // true
 * isEmpty(""); // true
 *
 * isEmpty({ a: 1 }); // false
 * isEmpty([1]); // false
 * isEmpty("a"); // false
 * ```
 */
export function isEmpty(
  it: unknown,
): it is "" | { length: 0 } | { [K in Never]: never };

/** @ignore */
export function isEmpty(
  it: unknown,
): it is "" | { length: 0 } | { [K in Never]: never } {
  return it != null && ("length" in Object(it) && Object(it).length === 0) || (
    Object.keys(Object(it)).length === 0 &&
    Object.getOwnPropertyNames(Object(it)).length === 0
  );
}

/** @ignore */
export default isEmpty;
