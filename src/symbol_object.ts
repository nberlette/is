/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/symbol-object
 */

/**
 * Checks if a value is a Symbol Object, which is a boxed symbol primitive that
 * was created by wrapping a primitive symbol with the `Object()` function.
 *
 * @remarks
 * Boxed primitives are strongly discouraged in JavaScript, as they can lead to
 * all sorts of unexpected behavior, particularly when it comes to equality
 * checks and type coercion. As such, this function (and the other boxed
 * primitive functions like it) are provided to help you easily ensure your
 * code is not on the receiving end of such behavior.
 * @example
 * ```ts
 * import { isSymbolObject } from "jsr:@nick/is/symbol-object";
 *
 * isSymbolObject(Object(Symbol("abc"))); // true
 * isSymbolObject(Symbol.iterator); // false
 * isSymbolObject(Symbol.for("abc")); // false
 * isSymbolObject("@@abc"); // false
 *
 * const abc = Symbol("abc");
 * console.assert(!isSymbolObject(abc));
 * const abcBoxed = Object(abc);
 * console.assert(isSymbolObject(abcBoxed));
 * console.assert(abcBoxed !== abc);
 * console.assert(abcBoxed == abc);
 * ```
 * @module symbol-object
 */
import { tryValueOf } from "./_internal.ts";

/**
 * Checks if a value is a symbol object, which is a boxed-primitive symbol that
 * was created by wrapping a primitive symbol in the `Object()` wrapper
 * function.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boxed-primitive symbol object; otherwise,
 * `false`.
 * @example
 * ```ts
 * import { isSymbolObject } from "jsr:@nick/is/symbol-object";
 *
 * isSymbolObject(Object(Symbol("abc"))); // true
 *
 * isSymbolObject(Symbol("abc")); // false
 * isSymbolObject(Symbol.iterator); // false
 * isSymbolObject(Symbol.for("abc")); // false
 * isSymbolObject("@@abc"); // false
 * ```
 * @category Boxed Primitives
 */
// deno-lint-ignore ban-types
export function isSymbolObject(it: unknown): it is Symbol {
  if (it == null || typeof it !== "object") return false;
  return tryValueOf(Symbol.prototype, it);
}

/** @ignore */
export default isSymbolObject;
