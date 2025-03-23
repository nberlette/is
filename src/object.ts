/**
 * @module object
 *
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
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
 *
 * console.log(isObject([])); // false
 * console.log(isObject(() => {})); // false
 * console.log(isObject(null)); // false
 * console.log(isObject(undefined)); // false
 * console.log(isObject(1)); // false
 * ```
 * @category Objects
 */

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
 * import { isObject } from "jsr:@nick/is/object";
 *
 * console.log(isObject({})); // true
 * console.log(isObject(new class {})); // true
 * console.log(isObject(new Object())); // true
 * ```
 * @category Objects
 */
// deno-lint-ignore no-explicit-any
export function isObject<T = any>(it: unknown): it is ObjectLike<T>;

/**
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
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
 *
 * console.log(isObject([])); // false
 * console.log(isObject(() => {})); // false
 * console.log(isObject(null)); // false
 * console.log(isObject(undefined)); // false
 * console.log(isObject(1)); // false
 * ```
 * @category Objects
 */
// deno-lint-ignore no-explicit-any
export function isObject(it: unknown): it is Record<PropertyKey, any>;

/** @ignore */
// deno-lint-ignore no-explicit-any
export function isObject(it: unknown): it is Record<PropertyKey, any> {
  return it != null && typeof it === "object" && !Array.isArray(it);
}

/** @ignore */
export default isObject;
