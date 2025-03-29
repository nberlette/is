/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/any
 */
/**
 * Checks if the type {@linkcode A} is the `any` type, and nothing else. This
 * is useful for creating your own type guards, conditional types, and other
 * utilities where you need to determine whether or not a specific type or
 * type parameter is the `any` type.
 *
 * This type will resolve to {@linkcode True} (default `true`) if `A` is `any`.
 * Otherwise, it resolves to the {@linkcode False} parameter (default `false`).
 * This allows you to create complex/nested conditional types with a minimal
 * amount of boilerplate.
 *
 * @remarks
 * Since `any` is a "top" type in TypeScript, it is allowed to be assigned to
 * _any_ other type, regardless of any constraints or restrictions that are in
 * place. In fact, the `any` type is actually not a type at all; in reality,
 * it's more of a "kill switch" for the type checker, effectively disabling
 * all type checking on the value it is assigned to.
 *
 * This can be useful in certain scenarios, but it can also be very dangerous
 * if used improperly or excessively. For this reason, the safer `unknown`
 * type was introduced, and it's generally recommended to use it instead of
 * `any` wherever possible.
 *
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is/type/any";
 *
 * type A = IsAny<any>; // true
 * type B = IsAny<never, 1, 0>; // 0
 * type C = IsAny<unknown, 1, 0>; // 0
 * type D = IsAny<null, 1, 0>; // 0
 * ```
 *
 * @module any
 */
import type { IsBoolean } from "./boolean.ts";

/**
 * Checks if the type {@linkcode A} is the `any` type, and nothing else. This
 * is useful for creating your own type guards, conditional types, and other
 * utilities where you need to determine whether or not a specific type or
 * type parameter is the `any` type.
 *
 * This type will resolve to {@linkcode True} (default `true`) if `A` is `any`.
 * Otherwise, it resolves to the {@linkcode False} parameter (default `false`).
 * This allows you to create complex/nested conditional types with a minimal
 * amount of boilerplate.
 *
 * @remarks
 * Since `any` is a "top" type in TypeScript, it is allowed to be assigned to
 * _any_ other type, regardless of any constraints or restrictions that are in
 * place. In fact, the `any` type is actually not a type at all; in reality,
 * it's more of a "kill switch" for the type checker, effectively disabling
 * all type checking on the value it is assigned to.
 *
 * This can be useful in certain scenarios, but it can also be very dangerous
 * if used improperly or excessively. For this reason, the safer `unknown`
 * type was introduced, and it's generally recommended to use it instead of
 * `any` wherever possible.
 *
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is/type";
 *
 * type A = IsAny<any>; // true
 * type B = IsAny<unknown, "any", "not any">; // "not any"
 * ```
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is/type";
 *
 * type IsNotAny<T> = IsAny<T, never, T>;
 *
 * type A = IsNotAny<any>; // never
 * type B = IsNotAny<unknown>; // unknown
 * type C = IsNotAny<never>; // never
 * type D = IsNotAny<any[]>; // any[]
 * type E = IsNotAny<string>; // string
 * ```
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is/type";
 *
 * type OmitAny<U, Deep extends boolean = false> =
 *   | U extends infer T extends U & object ? {
 *       [K in keyof T as IsAny<T[K], never, K>]:
 *         Deep extends true ? OmitAny<T[K], true> : T[K];
 *   } : IsAny<U, never, U>;
 *
 * declare const userData: OmitAny<{
 *   id: string;
 *   name: string;
 *   age: number;
 *   data: any; // <-- this will be omitted
 * }>;
 *
 * userData;
 * // ^? const userData: { id: string; name: string; age: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type IsAny<A, True = true, False = false> =
  | IsBoolean<A extends never ? true : false, True, False>;

/**
 * Omit properties from an object type where the value is `any`.
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
