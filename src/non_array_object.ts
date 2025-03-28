/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/non-array-object
 */

/**
 * @module non-array-object
 *
 * Check if a given value is a non-null object other than an array or function.
 * If you want to check for those two types as well, use {@link isObjectLike}.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-array object. Otherwise `false`.
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 *
 * console.log(isNonArrayObject([])); // false
 * console.log(isNonArrayObject(() => {})); // false
 * console.log(isNonArrayObject(null)); // false
 * console.log(isNonArrayObject(undefined)); // false
 * console.log(isNonArrayObject(1)); // false
 * ```
 * @category Objects
 */

import isArray from "./array.ts";
import type { EmptyObject } from "./empty_object.ts";

/**
 * Represents an object-like value that is not `null` or `undefined`, and is
 * not a function or array.
 * @category Objects
 */
// deno-lint-ignore no-explicit-any
export type ObjectLike<T = any> = Record<PropertyKey, T>;

/**
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-null object, `false` otherwise.
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 * ```
 * @category Objects
 */
export function isNonArrayObject<T>(it: unknown): it is NonArrayObject<T>;

/**
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-null object, `false` otherwise.
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 *
 * console.log(isNonArrayObject([])); // false
 * console.log(isNonArrayObject(() => {})); // false
 * console.log(isNonArrayObject(null)); // false
 * console.log(isNonArrayObject(undefined)); // false
 * console.log(isNonArrayObject(1)); // false
 * ```
 * @category Objects
 */
export function isNonArrayObject<T>(it: unknown): it is Record<PropertyKey, T> {
  return it != null && typeof it === "object" && !isArray(it);
}

/** @ignore */
export default isNonArrayObject;

/** */
export type NonArrayObject<T = EmptyObject> = T extends object
  ? T extends readonly unknown[] ? never
    // deno-lint-ignore no-explicit-any ban-types
  : T extends ((...args: any[]) => any) | Function ? never
  : T
  : never;
