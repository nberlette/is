// deno-lint-ignore-file no-explicit-any
/**
 * Provides a type guard to check if a value is a `WeakMap`.
 *
 * For more on `WeakMap`s, see the [MDN Reference](https://mdn.io/WeakMap).
 *
 * @example
 * ```ts
 * import { isWeakMap } from "jsr:@nick/is/weak-map";
 *
 * const strong = new Map([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak1 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak2 = new WeakSet([{ a: 1 }, { b: 2 }]);
 *
 * isWeakMap(strong); // false
 * isWeakMap(weak1); // true
 * isWeakMap(weak2); // false
 * ```
 * @module weak-map
 */
import type { WeakKey } from "./weak_key.ts";

/**
 * Checks if {@linkcode it} is a `WeakMap` object. For more information on this
 * language feature, refer to the [MDN Documentation](https://mdn.io/WeakMap).
 *
 * @param it The value to check.
 * @returns true if it is a `WeakMap`, otherwise false.
 * @example
 * ```ts
 * import { isWeakMap } from "jsr:@nick/is/weak-map";
 *
 * const strong = new Map([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak1 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak2 = new WeakSet([{ a: 1 }, { b: 2 }]);
 *
 * isWeakMap(strong); // false
 * isWeakMap(weak1); // true
 * isWeakMap(weak2); // false
 * ```
 * @category Weak Collections
 * @tags WeakMap
 */
export function isWeakMap<K extends WeakKey, V = any>(
  it: WeakMap<K, V> | null | undefined,
): it is WeakMap<K, V>;
/**
 * Checks if {@linkcode obj} is a `WeakMap` object. For more information on
 * this language feature, see the [MDN Reference](https://mdn.io/WeakMap).
 *
 * @param obj The value to check.
 * @returns true if it is a `WeakMap`, otherwise false.
 * @category Weak Collections
 * @tags WeakMap
 */
export function isWeakMap<K extends WeakKey, V = any>(
  it: unknown,
): it is WeakMap<K, V>;
/** @internal */
export function isWeakMap<K extends WeakKey, V = any>(
  obj: unknown,
): obj is WeakMap<K, V> {
  if (typeof globalThis.WeakMap !== "function") return false;
  try {
    globalThis.WeakMap.prototype.has.call(obj, {});
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a value is a `WeakMap`, returning `true` if it is, and `false` if
 * it is not. For more information on `WeakMap`s, see the [MDN Reference].
 *
 * [MDN Reference]: https://mdn.io/WeakMap
 *
 * @param it The value to check.
 * @returns `true` if the value is a `WeakMap`, `false` otherwise.
 * @category Weak Collections
 * @tags WeakMap
 * @example
 * ```ts
 * import { isWeakMap } from "jsr:@nick/is/weak-map";
 *
 * const strong = new Map([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak1 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
 * const weak2 = new WeakSet([{ a: 1 }, { b: 2 }]);
 *
 * isWeakMap(strong); // false
 * isWeakMap(weak1); // true
 * isWeakMap(weak2); // false
 * ```
 */
export default isWeakMap;
