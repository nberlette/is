/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/object
 */

/**
 * This module provides a function to check if a value is a non-null object.
 *
 * @module object
 */

/**
 * Check if the given value is a non-null object.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-null object, `false` otherwise.
 * @example
 * ```ts
 * import { isObject } from "jsr:@nick/is/object";
 *
 * console.log(isObject({})); // true
 * console.log(isObject(new class {})); // true
 * console.log(isObject(new Object())); // true
 * console.log(isObject([])); // true
 *
 * console.log(isObject(() => {})); // false
 * console.log(isObject(null)); // false
 * console.log(isObject(undefined)); // false
 * console.log(isObject(1)); // false
 * ```
 * @category Objects
 */
export function isObject(it: unknown): it is object {
  return it != null && typeof it === "object";
}

/** @ignore */
export default isObject;
