/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/boxed-primitive
 */

/**
 * Checks if a value is a boxed-primitive object, which is an object that was
 * created by wrapping a primitive value in the `Object()` wrapper function,
 * or by using the `new` operator with the `String`, `Number`, or `Boolean`
 * constructors (`Symbol` and `BigInt` do not support the `new` operator).
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @example
 * ```ts
 * import { isBoxedPrimitive } from "jsr:@nick/is/boxed-primitive";
 *
 * isBoxedPrimitive(new String("abc")); // true
 * isBoxedPrimitive(new Number(42)); // true
 * isBoxedPrimitive(new Boolean(true)); // true
 *
 * isBoxedPrimitive("abc"); // false
 * isBoxedPrimitive(42); // false
 * isBoxedPrimitive(true); // false
 * ```
 * @module boxed-primitive
 */
import { isStringObject } from "./string_object.ts";
import { isNumberObject } from "./number_object.ts";
import { isBooleanObject } from "./boolean_object.ts";
import { isSymbolObject } from "./symbol_object.ts";
import { isBigIntObject } from "./bigint_object.ts";

/**
 * Checks if a value is a boxed-primitive object, which is an object that was
 * created by wrapping a primitive value in the `Object()` wrapper function,
 * or by using the `new` operator with the `String`, `Number`, or `Boolean`
 * constructors (`Symbol` and `BigInt` do not support the `new` operator).
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boxed-primitive object; otherwise, `false`.
 * @example
 * ```ts
 * import { isBoxedPrimitive } from "jsr:@nick/is/boxed-primitive";
 *
 * isBoxedPrimitive(new String("abc")); // true
 * isBoxedPrimitive(new Number(42)); // true
 * isBoxedPrimitive(new Boolean(true)); // true
 *
 * isBoxedPrimitive("abc"); // false
 * isBoxedPrimitive(42); // false
 * isBoxedPrimitive(true); // false
 * ```
 * @category Boxed Primitives
 */
export function isBoxedPrimitive<T extends BoxedPrimitive>(
  // deno-lint-ignore ban-types
  it: T | {} | null | undefined,
): it is T;
export function isBoxedPrimitive(it: unknown): it is BoxedPrimitive;
/** @internal */
export function isBoxedPrimitive(it: unknown): it is BoxedPrimitive {
  return isStringObject(it) || isNumberObject(it) || isBooleanObject(it) ||
    isSymbolObject(it) || isBigIntObject(it);
}

/** @ignore */
export default isBoxedPrimitive;

/**
 * Type representing a boxed-primitive object, which is an object created by
 * wrapping a primitive value in the `Object()` wrapper function, or by using
 * the `new` operator with the `String`, `Number`, or `Boolean` constructors
 * (`Symbol` and `BigInt` do not support the `new` operator).
 *
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export type BoxedPrimitive = String | Number | Boolean | Symbol | BigInt;
