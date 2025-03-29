/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/any-or-never
 */
/**
 * @module any-or-never
 *
 * Check if a given type is either `any` or `never`, returning `true` if it is,
 * and `false` if not.
 *
 * This type guard is useful when you need to check if a value can be of any
 * type _or_ if it is unreachable. If you only need to check for `any`, use the
 * {@linkcode IsAny} type guard instead. If you only need to check for `never`, use
 * the {@linkcode IsNever} type guard instead.
 *
 * @example
 * ```ts
 * import type { IsAnyOrNever } from "@nick/is/type/any-or-never";
 *
 * type A = IsAnyOrNever<never>; // true
 * type B = IsAnyOrNever<any>; // true
 * type C = IsAnyOrNever<unknown>; // false
 * ```
 * @category Types
 */
import type { IsAny } from "./any.ts";
import type { IsNever } from "./never.ts";

/**
 * Check if the type {@linkcode T} is either `any` or `never`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * This type guard is useful when you need to check if a value can be of any
 * type _or_ if it is unreachable. If you only need to check if a type is
 * `any`, use the {@linkcode IsAny} type guard instead.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsAnyOrNever } from "@nick/is/type/any-or-never";
 *
 * type A = IsAnyOrNever<never>; // true
 * type B = IsAnyOrNever<any>; // true
 * type C = IsAnyOrNever<unknown>; // false
 * ```
 * @category Types
 */
export type IsAnyOrNever<T, True = true, False = false> = IsNever<
  T,
  True,
  IsAny<T, True, False>
>;

/**
 * Omit properties from an object type where the value is `any` or `never`.
 * This relies on the {@linkcode IsAnyOrNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitAnyOrNever } from "@nick/is/type";
 *
 * type A = { a: string; b: any; c: number; d: never };
 * type B = OmitAnyOrNever<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitAnyOrNever<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsAnyOrNever<T[K], never, K>]:
      Deep extends true ? OmitAnyOrNever<T[K], Deep> : T[K];
  } : T;
