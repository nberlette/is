/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/omit
 */
import type { IsNever } from "./mod.ts";
import type { IsAny } from "./any.ts";
import type { IsAnyOrNever } from "./any_or_never.ts";
import type { IsUnknown } from "./unknown.ts";
import type { IsIndexSignature } from "./index_signature.ts";

/**
 * Omit properties from an object type where the value is `never`.
 *
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitNever } from "@nick/is/type";
 *
 * type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
 * //   ^? type A = { a: string; b: never; c: number }
 *
 * type B = OmitNever<A>;
 * //   ^? type B = { a: string; c: number }
 * ````
 * @category Types
 */
// deno-fmt-ignore
export type OmitNever<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsNever<T[K], never, K>]:
      Deep extends true ? OmitNever<T[K], Deep> : T[K];
  } : T;

/**
 * Omit properties from an object type where the value is `any`.
 *
 * This relies on the {@linkcode IsAny} utility type.
 *
 * @example
 * ```ts
 * import type { OmitAny } from "@nick/is/type";
 *
 * type A = { a: string; b: any; c: number };
 * type B = OmitAny<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitAny<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsAny<T[K], never, K>]:
      Deep extends true ? OmitAny<T[K], true> : T[K];
  } : T;

/**
 * Omit properties from an object type where the value is `unknown`.
 *
 * This relies on the {@linkcode IsUnknown} utility type.
 *
 * @example
 * ```ts
 * import type { OmitUnknown } from "@nick/is/type";
 *
 * type A = { a: string; b: unknown; c: number };
 * type B = OmitUnknown<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitUnknown<U, Deep extends boolean = false> =
 | U extends infer T extends object ? {
    [K in keyof T as IsUnknown<T[K], never, K>]:
     Deep extends true ? OmitUnknown<T[K], true> : T[K];
 } : IsUnknown<U, never, U>;

/**
 * Omit properties from an object type where the value is `any` or `never`.
 *
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

/**
 * Omit properties from an object type whose value is `undefined`.
 *
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
    [K in keyof T as IsNever<Exclude<T[K], undefined>, never, K>]:
      Deep extends true ? OmitUndefined<T[K], Deep> : T[K]
  } : T;

/**
 * Omit properties from an object type whose value is `null` or `undefined`.
 *
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitNullable } from "@nick/is/type";
 *
 * type A = { a: string; b: null; c: number; d: undefined };
 * type B = OmitNullable<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitNullable<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsNever<NonNullable<T[K]>, never, K>]:
      Deep extends true ? OmitNullable<T[K], Deep> : T[K];
  } : T;

/**
 * Omit generic index signatures from an object type. This is useful for
 * filtering out index signatures that are too broad, allowing you to clean up
 * a type so it only contains literal properties.
 *
 * This relies on the {@linkcode IsIndexSignature} utility type.
 *
 * @example
 * ```ts
 * import type { OmitIndexSignature } from "@nick/is/type";
 *
 * type A = { 0: "foo"; length: 1; [y: number]: string };
 * type B = OmitIndexSignature<A>;
 * //   ^? type B = { 0: "foo"; length: 1 }
 * ```
 */
// deno-fmt-ignore
export type OmitIndexSignature<T> = {
  [K in keyof T as IsIndexSignature<K, never, K>]: T[K];
};
