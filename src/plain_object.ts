/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/plain-object
 */

import { isTaggedNative } from "./_internal.ts";
import { isObject } from "./object.ts";

/**
 * Check if the given value is a plain object, which is an object that either
 * has a prototype of `null` or `Object.prototype`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a plain object, `false` otherwise.
 * @example
 * ```ts
 * import { isPlainObject } from "jsr:@nick/is/plain-object";
 *
 * console.log(isPlainObject({})); // true
 * console.log(isPlainObject(new class {})); // true
 * console.log(isPlainObject(new Object())); // true
 *
 * console.log(isPlainObject([])); // false
 * console.log(isPlainObject(() => {})); // false
 * console.log(isPlainObject(null)); // false
 * console.log(isPlainObject(undefined)); // false
 * console.log(isPlainObject(1)); // false
 * ```
 * @category Objects
 * @module plain-object
 */
// deno-lint-ignore no-explicit-any
export function isPlainObject<T extends Record<string, any>>(
  it: unknown,
): it is T {
  try {
    if (isObject(it) && isTaggedNative(it, "Object")) {
      const p = Reflect.getPrototypeOf(it);
      return p === null || p === Object.prototype;
    }
  } catch { /* ignore */ }
  return false;
}

export default isPlainObject;
