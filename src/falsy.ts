/**
 * @module falsy
 *
 * This module exports a function named {@linkcode isFalsy}, to check if a given
 * value is falsy. It also exports a type named {@linkcode IsFalsy}, which is a
 * type-level equivalent of `isFalsy`, allowing you to easily construct
 * conditional type constraints in your own code.
 *
 * ```ts
 * import { isFalsy } from "@nick/is/falsy";
 *
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(0); // true
 * isFalsy(""); // true
 * isFalsy(false); // true
 * isFalsy([]); // false
 * ```
 * @category Primitives
 */

import type { NaN } from "./number/nan.ts";

/**
 * Check if the given value is falsy.
 *
 * @param it The value to check.
 * @returns `true` if the value is falsy, `false` otherwise.
 * @example
 * ```ts
 * import { isFalsy } from "@nick/is/falsy";
 *
 * isFalsy(null); // true
 * isFalsy(undefined); // true
 * isFalsy(0); // true
 * isFalsy(""); // true
 * isFalsy(false); // true
 * isFalsy([]); // false
 * ```
 */
export function isFalsy(it: unknown): it is Falsy {
  return !it;
}

/** @ignore */
export default isFalsy;

/**
 * A type that represents all falsy values.
 * @category Primitives
 */
export type Falsy = null | undefined | void | false | 0 | 0n | "" | NaN;

/**
 * If type {@linkcode T} is falsy, returns {@linkcode True} (default: true),
 * otherwise returns {@linkcode False} (default: false).
 *
 * @example
 * ```ts
 * type X = IsFalsy<null>; // true
 * type Y = IsFalsy<"">; // true
 * type Z = IsFalsy<0>; // true
 * type A = IsFalsy<false>; // true
 * type B = IsFalsy<[]>; // false
 * ```
 * @category Types
 */
export type IsFalsy<T, True = true, False = false> = [T] extends [never] ? False
  : [Exclude<T, Falsy>] extends [never] ? True
  : False;
