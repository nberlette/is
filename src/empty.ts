/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/empty
 */
import { type EmptyObject, isEmptyObject } from "./empty_object.ts";
import { isArrayLike } from "./array_like.ts";

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
 * @category Indexed Collections
 */

// string comes first as its the most specific array-like we're checking
/**
 * Checks if a given value is an empty string.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty string, `false` otherwise.
 * @category Indexed Collections
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
 * @category Indexed Collections
 * @example
 * ```ts
 * import { isEmpty } from "@nick/is/empty";
 *
 * isEmpty([]); // true
 * isEmpty([1]); // false
 * ```
 */
export function isEmpty(
  it: readonly [] | readonly [unknown, ...unknown[]],
): it is readonly [];

// and finally comes a generic array-like object. if this came before the other
// two, those two overloads would never be reached as this would always match.
/**
 * Checks if a given value is an empty ArrayLike object.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty ArrayLike object, `false` otherwise.
 * @category Indexed Collections
 * @example
 * ```ts
 * import { isEmpty } from "jsr:@nick/is/empty";
 * import assert from "node:assert";
 *
 * assert(isEmpty([]));
 * assert(isEmpty(""));
 * assert(isEmpty(new Uint8Array(0)));
 *
 * assert.false(isEmpty("foo"));
 * assert.false(isEmpty([123456]));
 * assert.false(isEmpty(new Uint8Array(1)));
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
 * @category Indexed Collections
 * @example
 * ```ts
 * import { isEmpty } from "jsr:@nick/is/empty";
 *
 * isEmpty({}); // true
 * isEmpty({ a: 1 }); // false
 * ```
 */
export function isEmpty(it: unknown): it is EmptyObject;

/**
 * Checks if a given value is an empty object, array, or string.
 *
 * @param it The value to check.
 * @returns `true` if the value is an empty object, array, or string, `false` otherwise.
 * @category Indexed Collections
 */
export function isEmpty(
  it: unknown,
): it is "" | { length: 0 } | EmptyObject;

/** @ignore */
export function isEmpty(
  it: unknown,
): it is "" | { length: 0 } | EmptyObject {
  return (isArrayLike(it) && it.length === 0) || isEmptyObject(it);
}

/** @ignore */
export default isEmpty;
