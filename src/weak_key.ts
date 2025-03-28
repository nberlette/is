/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/weak-key
 */

/**
 * Checks if a value is valid as a weak key, meaning it can be used as a key
 * in a `WeakMap`, a value in a `WeakSet`, or as the target of a `WeakRef`.
 * Weak keys can also be used as the "unregister token" argument in both the
 * `register` and `unregister` methods of the `FinalizationRegistry` API.
 *
 * This always includes non-null objects, arrays, and functions. Since ES2023+
 * it also includes symbols that are not globally registered via `Symbol.for`.
 *
 * @see https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.
 *
 * @module weak-key
 */

/**
 * Checks if a value is valid as a weak key, meaning it can be used as a key
 * in a `WeakMap`, a value in a `WeakSet`, or as the target of a `WeakRef`.
 * Weak keys can also be used as the "unregister token" argument in both the
 * `register` and `unregister` methods of the `FinalizationRegistry` API.
 *
 * This always includes non-null objects, arrays, and functions. Since ES2023+
 * it also includes symbols that are not globally registered via `Symbol.for`.
 *
 * @see https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.
 *
 * @param it The value you check.
 * @returns `true` if it is a valid WeakKey, otherwise `false`.
 * @example
 * ```ts
 * import { isWeakKey } from "jsr:@nick/is/weak-key";
 *
 * // objects and functions are always valid weak keys:
 * console.log(isWeakKey({})); // true
 * console.log(isWeakKey(() => {})); // true
 *
 * // starting in ES2023+, symbols are also valid weak keys:
 * console.log(isWeakKey(Symbol("a"))); // true
 * console.log(isWeakKey(Symbol.iterator)); // true
 *
 * // however, globally registered symbols are not:
 * console.log(isWeakKey(Symbol.for("a"))); // false
 *
 * // primitives are never valid weak keys:
 * console.log(isWeakKey(1)); // false
 * console.log(isWeakKey("a")); // false
 * ```
 * @category Weak Collections
 */
export function isWeakKey(it: unknown): it is WeakKey {
  if (typeof globalThis.WeakSet === "function") {
    // fast path: let the runtime do the work for us.
    // if its not a valid weak key, the WeakSet constructor will throw.
    try {
      new globalThis.WeakSet([it as object]);
      return true;
    } catch {
      return false;
    }
  } else {
    // slow path: check if it is an object, function, or a symbol that is not
    // globally registered. this is the best we can do without WeakSet.
    return typeof it === "function" ||
      (typeof it === "object" && it != null) || (
        // TODO(nberlette): should we even check for symbols without WeakSet??
        typeof it === "symbol" &&
        typeof globalThis.Symbol === "function" &&
        typeof globalThis.Symbol.keyFor === "function" &&
        typeof globalThis.Symbol.keyFor(it) === "undefined"
      );
  }
}

/**
 * Checks if a value is valid as a weak key, meaning it can be used as a key
 * in a `WeakMap`, a value in a `WeakSet`, or as the target of a `WeakRef`.
 * Weak keys can also be used as the "unregister token" argument in both the
 * `register` and `unregister` methods of the `FinalizationRegistry` API.
 *
 * This always includes non-null objects, arrays, and functions. Since ES2023+
 * it also includes symbols that are not globally registered via `Symbol.for`.
 *
 * @see https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.
 *
 * @category Weak Collections
 * @tags WeakKey
 */
export default isWeakKey;

/**
 * A value that can be used as a key in a `WeakMap`, a value in a `WeakSet`, or
 * as the target of a `WeakRef`. Weak keys can also be used as the "unregister
 * token" argument in both the `register` and `unregister` methods of the
 * `FinalizationRegistry` API.
 *
 * This always includes non-null objects, arrays, and functions. Since ES2023+
 * it also includes symbols that are not globally registered via `Symbol.for`.
 *
 * @see https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.
 *
 * @category Weak Collections
 * @tags WeakKey
 */
export type WeakKey = WeakKeyTypes[keyof WeakKeyTypes];

/**
 * The types that can be used as a weak key.
 *
 * @category Weak Collections
 * @internal
 */
export interface WeakKeyTypes {
  object: object;
  symbol: symbol;
}
