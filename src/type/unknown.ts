/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/unknown
 */
/**
 * Checks if a given type is the `unknown` type, returning {@linkcode True} if
 * it is, and {@linkcode False} if not. The `unknown` type, introduced in the
 * TypeScript 3.0 release (July 2018), is the "safer" alternative to `any`.
 *
 * This is because `unknown` is a "bottom" type in TypeScript, meaning it is
 * assignable to _any_ other type, but not vice versa. This makes it a safer
 * choice for use in type definitions where you want to allow for any type,
 * but still maintain type safety.
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type A = IsUnknown<unknown>; // true
 * type B = IsUnknown<any, "unknown", "not unknown">; // "not unknown"
 * ```
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type IsNotUnknown<T> = IsUnknown<T, never, T>;
 *
 * type A = IsNotUnknown<unknown>; // never
 * type B = IsNotUnknown<any>; // any
 * type C = IsNotUnknown<never>; // never
 * type D = IsNotUnknown<unknown[]>; // unknown[]
 * type E = IsNotUnknown<string>; // string
 * ```
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type OmitUnknown<U, Deep extends boolean = false> =
 *  | U extends infer T extends object ? {
 *     [K in keyof T as IsUnknown<T[K], never, K>]:
 *      Deep extends true ? OmitUnknown<T[K], true> : T[K];
 *  } : IsUnknown<U, never, U>;
 *
 * declare const userData: OmitUnknown<{
 *   id: string;
 *   name: string;
 *   age: number;
 *   data: unknown; // <-- this will be omitted
 * }>;
 *
 * userData;
 * // ^? const userData: { id: string; name: string; age: number }
 * ```
 * @category Types
 * @module unknown
 */
import type { IsAny } from "./any.ts";

/**
 * This is an alias for the built-in `unknown` type in TypeScript. It is used
 * by the {@linkcode IsUnknown} type guard, and represents any value that is
 * not `null` or `undefined`.
 *
 * This is provided as a public export for users who want to use it in their
 * own type definitions but without relying on built-in `unknown` types; it's
 * also provided for users who are using an older version of TypeScript that
 * does not support `unknown` yet.
 *
 * @category Types
 */
// deno-lint-ignore ban-types
export type unknowns = {} | null | undefined;

export type { unknowns as unknown };

/**
 * Checks if a given type is the `unknown` type, resolving to {@linkcode True}
 * if it is, and {@linkcode False} if not. The `unknown` type is the "safer"
 * alternative to `any` in TypeScript, introduced in the TypeScript 3.0
 * release (July 2018). It is a "bottom" type, meaning it is assignable to
 * _any_ other type, but not vice versa. This makes it a safer choice for use
 * in type definitions where you want to allow for any type, but still
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type A = IsUnknown<unknown>; // true
 * type B = IsUnknown<any, "unknown", "not unknown">; // "not unknown"
 * ```
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type IsNotUnknown<T> = IsUnknown<T, never, T>;
 *
 * type A = IsNotUnknown<unknown>; // never
 * type B = IsNotUnknown<any>; // any
 * type C = IsNotUnknown<never>; // never
 * type D = IsNotUnknown<unknown[]>; // unknown[]
 * type E = IsNotUnknown<string>; // string
 * ```
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * type OmitUnknown<U, Deep extends boolean = false> =
 *  | U extends infer T extends object ? {
 *     [K in keyof T as IsUnknown<T[K], never, K>]:
 *      Deep extends true ? OmitUnknown<T[K], true> : T[K];
 *  } : IsUnknown<U, never, U>;
 *
 * declare const userData: OmitUnknown<{
 *   id: string;
 *   name: string;
 *   age: number;
 *   data: unknown; // <-- this will be omitted
 * }>;
 * userData;
 * // ^? const userData: { id: string; name: string; age: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type IsUnknown<A, True = true, False = false> = IsAny<
  A,
  False,
  unknowns extends A ? True : False
>;

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
