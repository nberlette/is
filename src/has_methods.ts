// deno-lint-ignore-file no-explicit-any
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/has-methods
 */

import { Object } from "./_internal/primordials.ts";

type Fn<T = any, A extends readonly any[] = any[]> = (...args: A) => T;

/**
 * Checks if the given value contains methods for all of the specified keys.
 * No other properties or traits are checked by this guard, such that the
 * target value may be even be a primitive value like a string or number.
 *
 * @template T The type of the object to check.
 * @template K The type of the keys to check.
 * @param it The object to check.
 * @param keys The keys to check for.
 * @returns `true` if the object has all the specified keys, and each key is a
 * callable method; otherwise, `false`.
 * @category Guards
 * @example
 * ```ts
 * import { hasMethods } from "@nick/is/has-methods";
 *
 * const obj = { foo: () => "foo", bar: () => "bar", baz: 42 };
 *
 * console.assert(hasMethods(obj, "foo", "bar")); // OK
 * ```
 * @example
 * ```ts
 * import { hasMethods } from "@nick/is/has-methods";
 *
 * const ab = new ArrayBuffer(8);
 *
 * console.assert(hasMethods(ab, "slice")); // OK
 *
 * // checking if resizable array buffer methods are available
 * if (hasMethods(ab, "resize", "transfer")) {
 *   console.log("Great news - the RAB proposal is supported!");
 * }
 * ```
 */
// deno-fmt-ignore
export function hasMethods<
  const T,
  const K extends readonly PropertyKey[],
>(it: T, ...keys: K): it is Extract<T, {
  [P in K[number] as P extends keyof T ? T[P] extends Fn ? P : never : P]:
    P extends keyof T ? T[P] extends Fn ? T[P] : never : Fn;
}>;
export function hasMethods<
  const K extends readonly PropertyKey[],
>(it: unknown, ...keys: K): it is { [P in K[number]]: Fn };
export function hasMethods(it: unknown, ...keys: PropertyKey[]): boolean;
/** @internal */
export function hasMethods(it: unknown, ...keys: PropertyKey[]): boolean {
  const o = Object(it);
  return !!keys.length && keys.every((k) => typeof o[k] === "function");
}

export default hasMethods;
