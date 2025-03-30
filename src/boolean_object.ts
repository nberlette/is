/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/boolean-object
 */

/**
 * @module boolean-object
 *
 * Checks if a value is a Boolean object, which is a boxed-primitive boolean
 * that was created either with the `new Boolean()` syntax, or by wrapping
 * a primitive boolean in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @example
 * ```ts
 * import { isBooleanObject } from "jsr:@nick/is/boolean-object";
 *
 * isBooleanObject(Object(true)); // true
 * isBooleanObject(new Boolean(true)); // true
 *
 * isBooleanObject(Boolean(true)); // false
 * isBooleanObject(true); // false
 * ```
 */
import { tryValueOf } from "./_internal.ts";

/**
 * Checks if a value is a Boolean object, which is a boxed-primitive boolean
 * that was created either with the `new Boolean()` syntax, or by wrapping
 * a primitive boolean in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boxed-primitive boolean object; otherwise,
 * `false`.
 * @example
 * ```ts
 * import { isBooleanObject } from "jsr:@nick/is/boolean-object";
 *
 * isBooleanObject(Object(true)); // true
 * isBooleanObject(new Boolean(true)); // true
 *
 * isBooleanObject(Boolean(true)); // false
 * isBooleanObject(true); // false
 * ```
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export function isBooleanObject(it: unknown): it is Boolean {
  if (it == null || typeof it !== "object") return false;
  return tryValueOf(Boolean.prototype, it);
}

/** @ignore */
export default isBooleanObject;
