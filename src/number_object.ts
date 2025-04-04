/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/number-object
 */

/**
 * @module number-object
 *
 * Checks if a value is a Number object, which is a boxed-primitive number
 * that was created either with the `new Number()` syntax, or by wrapping
 * a primitive number in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @example
 * ```ts
 * import { isNumberObject } from "jsr:@nick/is/number-object";
 *
 * isNumberObject(Object(1)); // true
 * isNumberObject(new Number(1)); // true
 *
 * isNumberObject(Number(1)); // false
 * isNumberObject(1); // false
 * ```
 */
import { tryValueOf } from "./_internal.ts";

/**
 * Checks if a value is a Number object, which is a boxed-primitive number
 * that was created either with the `new Number()` syntax, or by wrapping
 * a primitive number in the `Object()` wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boxed-primitive number object; otherwise,
 * `false`.
 * @example
 * ```ts
 * import { isNumberObject } from "jsr:@nick/is/number-object";
 *
 * isNumberObject(Object(1)); // true
 * isNumberObject(new Number(1)); // true
 *
 * isNumberObject(Number(1)); // false
 * isNumberObject(1); // false
 * ```
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export function isNumberObject(it: unknown): it is Number {
  if (it == null || typeof it !== "object") return false;
  return tryValueOf(Number.prototype, it);
}

/** @ignore */
export default isNumberObject;
