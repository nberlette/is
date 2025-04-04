/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/undefined
 */
/**
 * @module undefined
 *
 * Checks if a given type is the `undefined` type, returning {@linkcode True}
 * if it is, and {@linkcode False} if not. The `undefined` type is a primitive
 * type in TypeScript that represents the intentional absence of any value.
 *
 * @example
 * ```ts
 * import type { IsUndefined } from "@nick/is/type";
 *
 * type A = IsUndefined<undefined>; // true
 * type B = IsUndefined<null>; // false
 * type C = IsUndefined<never>; // false
 * ```
 *
 * @category Types
 */

/**
 * Checks if the type {@linkcode T} is specifically `undefined`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not. This does not
 * recognize `void` as `undefined`.
 *
 * @example
 * ```ts
 * import type { IsUndefined } from "@nick/is/type";
 *
 * type A = IsUndefined<undefined>; // true
 * type B = IsUndefined<null>; // false
 * type C = IsUndefined<never>; // false
 * type D = IsUndefined<void>; // false
 * ```
 * @category Types
 */
export type IsUndefined<T, True = true, False = false> = [T] extends [never]
  ? False
  : [T] extends [undefined] ? [void] extends [T] ? False : True
  : False;

/**
 * Omit properties from an object type where the value is `undefined`.
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitUndefined } from "@nick/is/type";
 *
 * type A = { a: string; b: undefined; c: number };
 * type B = OmitUndefined<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitUndefined<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsUndefined<T[K], never, K>]:
      Deep extends true ? OmitUndefined<T[K], Deep> : T[K];
  } : T;
