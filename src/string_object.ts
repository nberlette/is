/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/string-object
 */

/**
 * @module string-object
 *
 * Checks if a value is a string object, which is a boxed-primitive string that
 * was created via the `new String()` constructor, or by wrapping a primitive
 * string in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @example
 * ```ts
 * import { isStringObject } from "jsr:@nick/is/string-object";
 *
 * isStringObject(new String("abc")); // true
 * isStringObject(Object("abc")); // true
 *
 * isStringObject("abc"); // false
 * isStringObject("abc" as unknown); // false
 * ```
 */
import { tryValueOf } from "./_internal.ts";

/**
 * Checks if a value is a string object, which is a boxed-primitive string that
 * was created via the `new String()` constructor, or by wrapping a primitive
 * string in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @param it The value to check.
 * @returns `true` if the value is a string object; otherwise, `false`.
 * @example
 * ```ts
 * import { isStringObject } from "jsr:@nick/is/string-object";
 *
 * isStringObject(new String("abc")); // true
 * isStringObject(Object("abc")); // true
 *
 * isStringObject("abc"); // false
 * isStringObject("abc" as unknown); // false
 * ```
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export function isStringObject(it: unknown): it is String {
  if (it == null || typeof it !== "object") return false;
  return tryValueOf(String.prototype, it);
}

/** @ignore */
export default isStringObject;
