/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/map
 */

const MapPrototypeGetSize = Object.getOwnPropertyDescriptor(
  Map.prototype,
  "size",
)?.get;

/**
 * Checks if a given value is a `Map` instance. This is a more reliable check
 * than `it instanceof Map` because it works across different realms, and it
 * does not require the `Map` constructor to be the same as the one in the
 * current environment that the code is running in.
 *
 * It also is more strict than `it instanceof Map`, and does not consider any
 * objects created via `Object.create(Map.prototype)` (or similar constructs)
 * as valid `Map` instances, while they would pass the `instanceof` check.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `Map` instance, `false` otherwise.
 * @example
 * ```ts
 * import { isMap } from "jsr:@nick/is/map";
 *
 * isMap(new Map()); // true
 * isMap(new WeakMap()); // false
 * isMap({}); // false
 * isMap(new Set()); // false
 * ```
 *
 * @example
 * ```ts
 * import { isMap } from "jsr:@nick/is/map";
 *
 * const fakeMap = Object.create(Map.prototype);
 * console.log(isMap(fakeMap)); // false
 * console.log(fakeMap instanceof Map); // true (?!)
 * ```
 * @category Keyed Collections
 * @module map
 */
export function isMap<K = unknown, V = unknown>(it: unknown): it is Map<K, V> {
  try {
    return MapPrototypeGetSize?.call(it) !== undefined;
  } catch {
    return false;
  }
}

export default isMap;
