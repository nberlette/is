/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/bigint-object
 */

/**
 * @module bigint-object
 *
 * Checks if a value is a BigInt object, which is a boxed-primitive BigInt
 * that was created by wrapping a primitive BigInt (bigint) in the `Object()`
 * wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @example
 * ```ts
 * import { isBigIntObject } from "jsr:@nick/is/bigint-object";
 *
 * isBigIntObject(Object(BigInt("2"))); // true
 *
 * isBigIntObject(BigInt("2")); // false
 * isBigIntObject(2n); // false
 * ```
 */
import { tryValueOf } from "./_internal.ts";

/**
 * Checks if a value is a BigInt object, which is a boxed-primitive BigInt
 * that was created by wrapping a primitive BigInt (bigint) in the `Object()`
 * wrapper function.
 *
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead
 * to all sorts of unexpected behavior and performance issues. As such, this
 * function - and the other boxed primitive functions like it - are provided
 * for your convenience, to help you easily ensure your code is not on the
 * receiving end of such behavior.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boxed-primitive BigInt object; otherwise,
 * `false`.
 * @example
 * ```ts
 * import { isBigIntObject } from "jsr:@nick/is/bigint-object";
 *
 * isBigIntObject(Object(BigInt("2"))); // true
 *
 * isBigIntObject(BigInt("2")); // false
 * isBigIntObject(2n); // false
 * ```
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export function isBigIntObject(it: unknown): it is BigInt {
  if (it == null || typeof it !== "object") return false;
  return tryValueOf(BigInt.prototype, it);
}

/** @ignore */
export default isBigIntObject;
