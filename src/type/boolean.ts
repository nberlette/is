/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/boolean
 */
/**
 * @module boolean
 *
 * This module provides type-level predicates for checking if a given type is
 * a boolean value (a union of `true | false`), or if it's specifically `true`
 * or `false`. These can prove to be useful in scenarios where you need to be
 * sure that a given type parameter is exactly `true` or `false`, and not the
 * generic `boolean` super type, for example. The typical `T extends true` is
 * sometimes insufficient in such cases, since passing `any` or `never` would
 * result in ambiguous results.
 *
 * @category Types
 */

/**
 * Checks if the type {@linkcode T} is the generic type `boolean`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * This predicate is not satisfied by just `true` or `false`; the type must be
 * a union of both (`true | false`, which is what the `boolean` type actually
 * represents) to result in a positive match.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsBoolean } from "@nick/is/type/boolean";
 *
 * type A = IsBoolean<true>; // false
 * type B = IsBoolean<false>; // false
 * type C = IsBoolean<boolean | 0>; // false
 *
 * type Y = IsBoolean<true | false>; // true
 * type Z = IsBoolean<boolean>; // true
 * ```
 * @category Types
 * @category Boolean
 */
export type IsBoolean<T, True = true, False = false> = [T] extends [boolean]
  ? [boolean] extends [T] ? True : False
  : False;

/**
 * Checks if the type {@linkcode T} is specifically `true`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsTrue } from "@nick/is/type/boolean";
 *
 * type A = IsTrue<true>; // true
 * type B = IsTrue<false>; // false
 * type C = IsTrue<boolean>; // false
 * ```
 * @category Types
 * @category Boolean
 */
export type IsTrue<T, True = true, False = false> = [T, true] extends [true, T]
  ? True
  : False;

/**
 * Checks if the type {@linkcode T} is specifically `false`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsFalse } from "@nick/is/type/boolean";
 *
 * type A = IsFalse<true>; // false
 * type B = IsFalse<false>; // true
 * type C = IsFalse<boolean>; // false
 * ```
 * @category Types
 * @category Boolean
 */
export type IsFalse<T, True = true, False = false> = [T, false] extends
  [false, T] ? True : False;
