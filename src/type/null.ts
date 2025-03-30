/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/null
 */
/**
 * @module null
 *
 * Checks if a given type is the `null` type, returning {@linkcode True} if it
 * is, and {@linkcode False} if not. The `null` type is a primitive type in
 * TypeScript that represents the intentional absence of any object value.
 *
 * @example
 * ```ts
 * import type { IsNull } from "@nick/is/type";
 *
 * type A = IsNull<null>; // true
 * type B = IsNull<undefined>; // false
 * type C = IsNull<never>; // false
 * ```
 *
 * @category Types
 */

/**
 * Checks if the type {@linkcode T} is specifically `null`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsNull } from "@nick/is/type";
 *
 * type A = IsNull<null>; // true
 * type B = IsNull<undefined>; // false
 * type C = IsNull<never>; // false
 * ```
 * @category Types
 */
export type IsNull<T, True = true, False = false> = [T] extends [never] ? False
  : [T] extends [null] ? True
  : False;

/**
 * Omit properties from an object type where the value is `null`.
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @template T The type to check.
 * @template [Deep=false] Whether to perform a deep omit operation.
 * @example
 * ```ts
 * import type { OmitNull } from "@nick/is/type";
 *
 * type A = { a: string; b: null; c: number };
 * type B = OmitNull<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitNull<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsNull<T[K], never, K>]:
      Deep extends true ? OmitNull<T[K], Deep> : T[K];
  } : T;
