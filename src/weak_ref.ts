/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/weak-ref
 */

/**
 * Provides a type guard to check if a value is a `WeakRef`.
 *
 * For more on `WeakRef`s, see the [MDN Reference](https://mdn.io/WeakRef).
 *
 * @module weak-ref
 */
import type { WeakKey } from "./weak_key.ts";

/**
 * Checks if {@linkcode obj} is a WeakRef. For more information on this type of
 * object, refer to the [MDN Documentation](https://mdn.io/WeakRef).
 *
 * @param obj The value to check.
 * @returns true if it is a `WeakRef`, otherwise false.
 * @example
 * ```ts
 * import { isWeakRef } from "jsr:@nick/is/weak-ref";
 *
 * const strong = { a: 1 };
 * const weak1 = new WeakRef(strong);
 * const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 *
 * console.log(isWeakRef(strong)); // false
 * console.log(isWeakRef(weak1)); // true
 * console.log(isWeakRef(weak2)); // false
 * ```
 * @category Weak Collections
 */
export function isWeakRef<T extends WeakKey>(
  obj: WeakRef<T> | null | undefined,
): obj is WeakRef<T>;
/**
 * Checks if {@linkcode obj} is a WeakRef. For more information on this type of
 * object, refer to the [MDN Documentation](https://mdn.io/WeakRef).
 *
 * @param obj The value to check.
 * @returns true if it is a `WeakRef`, otherwise false.
 */
export function isWeakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T>;
/** @internal */
export function isWeakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T> {
  if (typeof globalThis.WeakRef !== "function") return false;
  try {
    globalThis.WeakRef.prototype.deref.call(obj);
    return true;
  } catch {
    return false;
  }
}

export default isWeakRef;
