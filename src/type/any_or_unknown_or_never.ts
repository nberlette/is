/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/any-or-unknown-or-never
 */
/**
 * @module any-or-unknown-or-never
 */
import type { IsAny } from "./any.ts";
import type { IsUnknownOrNever } from "./unknown_or_never.ts";

/**
 * Resolves to {@linkcode True} if `A` is `any`, `unknown`, or `never`.
 * Otherwise, it resolves to {@linkcode False}.
 *
 * This composite type combines {@linkcode IsAny}, {@linkcode IsNever}, and
 * {@linkcode IsUnknown} into a single type-level predicate. It's useful when
 * creating your own custom type-level predicates, as its usually a good idea
 * to first check the input type is **not** `any`, `unknown`, or `never` before
 * moving on to the assignability of the type you're actually interested in.
 *
 * @example
 * ```ts
 * import type { IsAnyOrUnknownOrNever } from "@nick/is/type";
 *
 * type A = IsAnyOrUnknownOrNever<unknown>; // true
 * type B = IsAnyOrUnknownOrNever<never>; // true
 * type C = IsAnyOrUnknownOrNever<any>; // true
 *
 * type D = IsAnyOrUnknownOrNever<true>; // false
 * type E = IsAnyOrUnknownOrNever<"hello">; // false
 * type F = IsAnyOrUnknownOrNever<1>; // false
 * ```
 */
export type IsAnyOrUnknownOrNever<T, True = true, False = false> = IsAny<
  T,
  True,
  IsUnknownOrNever<T, True, False>
>;

/**
 * Omit properties from an object type where the value is `any`, `unknown`, or
 * `never`. This relies on the {@linkcode IsAnyOrUnknownOrNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitAnyUnknownNever } from "@nick/is/type";
 *
 * type A = { a: string; b: any; c: number; d: unknown; e: ""; f: never };
 * type B = OmitAnyUnknownNever<A>;
 * //   ^? type B = { a: string; c: number; e: "" }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitAnyUnknownNever<U, Deep extends boolean = false> =
  U extends infer T extends object ? {
    [K in keyof T as IsAnyOrUnknownOrNever<T[K], never, K>]:
      Deep extends true ? OmitAnyUnknownNever<T[K], true> : T[K];
  } : IsAnyOrUnknownOrNever<U, never, U>;
