/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/object-like
 */

/**
 * Check if a given value is a non-null object-like value, which includes plain
 * objects, arrays, functions, classes, class instances, and other objects.
 *
 * @example
 * ```ts
 * import { isObjectLike } from "jsr:@nick/is/object-like";
 *
 * console.log(isObjectLike({})); // true
 * console.log(isObjectLike([])); // true
 * console.log(isObjectLike(() => {})); // true
 * console.log(isObjectLike(new class {})); // true
 * console.log(isObjectLike(new Object())); // true
 * console.log(isObjectLike(null)); // false
 * console.log(isObjectLike(undefined)); // false
 * console.log(isObjectLike(1)); // false
 * ```
 * @category Objects
 * @module object-like
 */

/**
 * Check if a given value is a non-null object-like value, which includes plain
 * objects, arrays, functions, classes, class instances, and other objects.
 *
 * @param it The value to check.
 * @returns `true` if it is a non-null object-like value, `false` otherwise.
 * @example
 * ```ts
 * import { isObjectLike } from "jsr:@nick/is/object-like";
 *
 * console.log(isObjectLike({})); // true
 * console.log(isObjectLike([])); // true
 * console.log(isObjectLike(() => {})); // true
 * console.log(isObjectLike(new class {})); // true
 * console.log(isObjectLike(new Object())); // true
 * console.log(isObjectLike(null)); // false
 * console.log(isObjectLike(undefined)); // false
 * console.log(isObjectLike(1)); // false
 * ```
 * @category Objects
 */
export function isObjectLike(it: unknown): it is object {
  return it != null && (typeof it === "object" || typeof it === "function");
}

export default isObjectLike;
