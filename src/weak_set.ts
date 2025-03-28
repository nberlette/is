/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/weak-set
 */

/**
 * Provides a type guard to check if a value is a `WeakSet`.
 *
 * For more on `WeakSet`s, see the [MDN Reference](https://mdn.io/WeakSet).
 *
 * @example
 * ```ts
 * import { isWeakSet } from "jsr:@nick/is/weak-set";
 *
 * const strong = new Set([1, 2]);
 * const weak1 = new WeakSet([{ a: 1 }, { b: 2 }]);
 * const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 *
 * console.log(isWeakSet(strong)); // false
 * console.log(isWeakSet(weak1)); // true
 * console.log(isWeakSet(weak2)); // false
 * ```
 * @module weak-set
 */
import type { WeakKey } from "./weak_key.ts";

/**
 * Checks if {@linkcode it} is a `WeakSet` object. For more information on this
 * language feature, refer to the [MDN Documentation](https://mdn.io/WeakSet).
 *
 * @param it The value to check.
 * @returns true if it is a `WeakSet`, otherwise false.
 * @example
 * ```ts
 * import { isWeakSet } from "jsr:@nick/is/weak-set";
 *
 * const strong = new Set([1, 2]);
 * const weak1 = new WeakSet([{ a: 1 }, { b: 2 }]);
 * const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 *
 * console.log(isWeakSet(strong)); // false
 * console.log(isWeakSet(weak1)); // true
 * console.log(isWeakSet(weak2)); // false
 * ```
 * @category Weak Collections
 * @tags WeakSet
 */
export function isWeakSet<T extends WeakKey>(
  it: WeakSet<T> | null | undefined,
): it is WeakSet<T>;
/**
 * Checks if {@linkcode obj} is a `WeakSet` object. For more information on
 * this language feature, see the [MDN Reference](https://mdn.io/WeakSet).
 *
 * @param obj The value to check.
 * @returns true if it is a `WeakSet`, otherwise false.
 * @category Weak Collections
 * @tags WeakSet
 */
export function isWeakSet<T extends WeakKey>(
  it: unknown,
): it is WeakSet<T>;
/** @internal */
export function isWeakSet<T extends WeakKey>(
  obj: unknown,
): obj is WeakSet<T> {
  if (typeof globalThis.WeakSet !== "function") return false;
  try {
    globalThis.WeakSet.prototype.has.call(obj, {});
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a value is a `WeakSet`, returning `true` if it is, and `false` if
 * it is not. For more information on `WeakSet`s, see the [MDN Reference].
 *
 * [MDN Reference]: https://mdn.io/WeakSet
 *
 * @param it The value to check.
 * @returns `true` if the value is a `WeakSet`, `false` otherwise.
 * @category Weak Collections
 * @tags WeakSet
 * @example
 * ```ts
 * import { isWeakSet } from "jsr:@nick/is/weak-set";
 *
 * const strong = new Set([1, 2]);
 * const weak1 = new WeakSet([{ a: 1 }, { b: 2 }]);
 * const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 *
 * console.log(isWeakSet(strong)); // false
 * console.log(isWeakSet(weak1)); // true
 * console.log(isWeakSet(weak2)); // false
 * ```
 */
export default isWeakSet;
