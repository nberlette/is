/**
 * @module types
 *
 * Collection of purely type-level guards for TypeScript.
 *
 * All of the guards in this module provide a consistent API for checking the
 * types of values at compile-time: they all accept `True` and `False` type
 * parameters as their last two argumens, which default to `true` and `false`,
 * respectively.
 *
 * The `True` type parameter is the type that the guard will resolve to if the
 * type matches, and `False` is what it resolves to if it does not. This
 * allows for simple inline conditional type checks as well as more complex
 * nested conditionals.
 *
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is";
 *
 * // using the `IsNever` guard to filter out `never` types
 * type OmitNever<T> = { [K in keyof T as IsNever<T[K], never, K>]: T[K] };
 * ```
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is";
 *
 * // using the `IsUnknown` guard to filter out `unknown` types
 * type OmitUnknown<T> = {
 *   [K in keyof T as IsUnknown<T[K], never, K>]: T[K]
 * };
 * ```
 * @category Types
 */
import type { Whitespace } from "./_internal.ts";

/**
 * If the given type {@link A} is **exactly** the same as given type {@link B},
 * resolves to the {@link True} type parameter (default: `true`), otherwise it
 * resolves to the {@link False} type param (default: `false`).
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsEqual<A, B, True = true, False = false> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? True
    : False;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is the `any` type, and
 * nothing else. Otherwise, it resolves to {@linkcode False}.
 *
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is";
 *
 * type A = IsAny<any>; // true
 * type B = IsAny<unknown, "any", "not any">; // "not any"
 * ```
 *
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is";
 *
 * type IsNotAny<T> = IsAny<T, never, T>;
 *
 * type A = IsNotAny<any>; // never
 * type B = IsNotAny<unknown>; // unknown
 * type C = IsNotAny<never>; // never
 * type D = IsNotAny<any[]>; // any[]
 * type E = IsNotAny<string>; // string
 * ```
 *
 * @example
 * ```ts
 * import type { IsAny } from "@nick/is";
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
 * userData;
 * // ^? const userData: { id: string; name: string; age: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type IsAny<A, True = true, False = false> = boolean extends (
  A extends never ? true : false
)
  ? True
  : False;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is the `unknown` type, and
 * nothing else. Otherwise, it resolves to {@linkcode False}.
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is";
 *
 * type A = IsUnknown<unknown>; // true
 * type B = IsUnknown<any, "unknown", "not unknown">; // "not unknown"
 * ```
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is";
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
 * import type { IsUnknown } from "@nick/is";
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
  unknown extends A ? True : False
>;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is the `never` type, and
 * nothing else. Otherwise, it resolves to {@linkcode False}.
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is";
 *
 * type A = IsNever<never>; // true
 * type B = IsNever<unknown, "never", "not never">; // "not never"
 * ```
 *
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is";
 *
 * type IsNotNever<T> = IsNever<T, never, T>;
 *
 * type A = IsNotNever<never>; // never
 * type B = IsNotNever<unknown>; // unknown
 * type C = IsNotNever<any>; // any
 * type D = IsNotNever<never[]>; // never[]
 * type E = IsNotNever<string>; // string
 * ```
 *
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is";
 *
 * type OmitNever<U, Deep extends boolean = false> =
 *  | U extends infer T extends object ? {
 *    [K in keyof T as IsNever<T[K], never, K>]:
 *     Deep extends true ? OmitNever<T[K], true> : T[K];
 * } : IsNever<U, never, U>;
 *
 * declare const userData: OmitNever<{
 *   id: string;
 *   name: string;
 *   age: number;
 *   data: never; // <-- this will be omitted
 * }>;
 *
 * userData;
 * // ^? const userData: { id: string; name: string; age: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type IsNever<T, True = true, False = false> = [T] extends [never]
  ? True
  : False;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is `unknown` or is `never`,
 * and nothing else. Otherwise, it resolves to {@linkcode False}. This is a
 * convenience type combining the {@link IsUnknown} and {@link IsNever} guards
 * into a single type.
 *
 * @example
 * ```ts
 * import type { IsUnknownOrNever } from "@nick/is";
 *
 * type A = IsUnknownOrNever<unknown>; // true
 * type B = IsUnknownOrNever<never>; // true
 * type C = IsUnknownOrNever<any>; // false
 * type D = IsUnknownOrNever<string>; // false
 * ```
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsUnknownOrNever<A, True = true, False = false> = IsNever<
  A,
  True,
  IsUnknown<A, True, False>
>;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is a tuple, which is an array
 * with a pre-determined length and type for each of its elements. This check
 * **does not** resolve to {@linkcode True} for arrays such as `string[]` or
 * `Array<number>` (since they are not tuples), but **does** for `[1, 2, 3]`.
 * Any other type of value will resolve to {@linkcode False}.
 *
 * @example
 * ```ts
 * import type { IsTuple } from "@nick/is";
 *
 * type A = IsTuple<[1, 2, 3], "tuple", never>; // "tuple"
 * type B = IsTuple<string[], "tuple", never>; // never
 * type C = IsTuple<Array<number>, "tuple", never>; // never
 * ```
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsTuple<T, True = true, False = false> = IsNever<
  T,
  False,
  InnerIsTuple<T, True, False>
>;

/** @internal */
type InnerIsTuple<T, True, False> = T extends readonly unknown[]
  ? IsLiteral<T["length"], True, False>
  : False;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is an array, which is a list
 * of variable length with values that can be of any type. This check **does**
 * include tuples like `[1, 2, 3]`, standard arrays like `string[]`, and also
 * generic arrays like `Array<number>` in what it considers valid. Any other
 * type resolves to {@linkcode False}.
 *
 * @example
 * ```ts
 * import type { IsArray } from "@nick/is";
 *
 * type A = IsArray<[1, 2, 3]>; // true
 * type B = IsArray<[unknown, unkown, unknown, unknown, unknown]>; // true
 * type C = IsArray<string[]>; // true
 * type D = IsArray<Array<number>>; // true
 * type E = IsArray<ReadonlyArray<string>>; // true
 * type F = IsArray<readonly (string | number)[]>; // true
 *
 * type G = IsArray<string>; // false
 * type H = IsArray<string[] | number>; // false
 * ```
 * @category Types
 */
export type IsArray<T, True = true, False = false> = IsUnknownOrNever<
  T,
  False,
  IsAny<T, False, T extends readonly unknown[] ? True : False>
>;

/**
 * Resolves to {@linkcode True} if {@linkcode A} is an array, but **not** a
 * tuple. This check includes standard arrays like `string[]` and generic
 * arrays like `Array<number>`, but **excludes** tuples like `[1, 2, 3]`.
 *
 * @example
 * ```ts
 * import type { IsNonTupleArray } from "@nick/is";
 *
 * type A = IsNonTupleArray<[1, 2, 3]>; // false
 * type B = IsNonTupleArray<[unknown, unkown, unknown]>; // false
 * type C = IsNonTupleArray<string[]>; // true
 * type D = IsNonTupleArray<Array<number>>; // true
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type IsNonTupleArray<T, True = true, False = false> = IsArray<
  T,
  IsTuple<T, False, True>,
  False
>;

/**
 * If the given string {@linkcode T} is numeric (meaning a literal number like
 * `0`, the generic type `number`, a numeric string literal like `"0"`, or a
 * generic numeric template string `${number}`), this type will resolve to the
 * {@linkcode True} type parameter (which has a default value of `true`). For
 * any other type, it will resolve to the {@linkcode False} type parameter
 * (which has a default value of `false`).
 *
 * Similar to the other utility types in this module, the parameterization of
 * this type's conditional `true` and `false` branches allows for both simple
 * inline conditional type checks as well as more complex nested conditionals,
 * without the need for any `x extends y ? a : b` ternaries.
 *
 * @example
 * ```ts
 * // simplified tuple traversal
 * declare function map<const A extends readonly unknown[], const B>(
 *   array: [...A],
 *   fn: (input: A[number], index: number) => B,
 * ): [...{ [K in keyof A]: IsNumeric<K, B, A[K]> }];
 * ```
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsNumeric<T, True = true, False = false> = T extends
  | number
  | `${number}`
  ? True
  : T extends `${number}${string}`
    ? True
    : False;

/**
 * If the given string {@linkcode T} is a literal value (meaning a string,
 * number, boolean, bigint, symbol, object literal, or a tuple), this type
 * will resolve to the {@linkcode True} type parameter, which has a default
 * value of `true`. Otherwise it resolves to the {@linkcode False} type
 * parameter, which has a default value of `false`.
 *
 * @example
 * ```ts
 * import type { IsLiteral } from "@nick/is";
 *
 * type A1 = IsLiteral<"foo">; // true
 * type A2 = IsLiteral<string | 420>; // false
 * ```
 * @category Types
 */
export type IsLiteral<T, True = true, False = false> = IsNever<
  T,
  False,
  IsEqual<
    T,
    null,
    True,
    IsEqual<
      T,
      undefined,
      True,
      IsEqual<InnerIsLiteral<T, 1, 0>, 1, True, False>
    >
  >
>;
/** @internal */
// deno-fmt-ignore
type InnerIsLiteral<T, True, False> = T extends boolean
  ? IsEqual<`${T}`, "true", True, IsEqual<`${T}`, "false", True, False>>
  : T extends number
    ? number extends T
      ? False
      : True
    : T extends string
      ? string extends T
        ? False
        : True
      : T extends bigint
        ? bigint extends T
          ? False
          : True
        : T extends symbol
          ? symbol extends T
            ? False
            : True
          : // deno-lint-ignore no-explicit-any
            T extends Record<PropertyKey, any>
            ? // deno-lint-ignore no-explicit-any
              Record<PropertyKey, any> extends T
              ? False
              : True
            : // deno-lint-ignore no-explicit-any
              T extends readonly any[]
              ? number extends T["length"]
                ? False
                : True
              : T extends object
                ? object extends T
                  ? False
                  : True
                : False;

/**
 * If the given value {@linkcode K} is a valid property key (string, number,
 * or symbol), this type will resolve to {@linkcode True} **only** if it is
 * also a valid index signature; otherwise it will resolve to
 * {@linkcode False}. Index signatures are not literal types, but are used to
 * define objects that accept a range of keys, such as: `{ [x: string]: any }`
 * or `{ [x: number]: any }`.
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsIndexSignature<
  K,
  True = true,
  False = false,
> = K extends PropertyKey
  ? // deno-lint-ignore no-explicit-any ban-types
    {} extends Record<K, any>
    ? True
    : False
  : False;

/**
 * If the given string {@linkcode T} is lower case, this type will resolve to
 * the {@linkcode True} type parameter (default: `true`). Otherwise, it will
 * resolve to the {@linkcode False} type parameter (default: `false`).
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsLowerCase<T extends string, True = true, False = false> =
  T extends Lowercase<T> ? True : False;

/**
 * If the given string {@linkcode T} is upper case, this type will resolve to
 * the {@linkcode True} type parameter (default: `true`). Otherwise, it will
 * resolve to the {@linkcode False} type parameter (default: `false`).
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsUpperCase<T extends string, True = true, False = false> =
  T extends Uppercase<T> ? True : False;

/**
 * If the given string {@linkcode T} is whitespace, this type will resolve to
 * the {@linkcode True} type parameter (default: `true`). Otherwise, it will
 * resolve to the {@linkcode False} type parameter (default: `false`).
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsWhitespace<
  T extends string,
  True = true,
  False = false,
> = T extends Whitespace
  ? True
  : T extends `${Whitespace}${infer R}`
    ? IsWhitespace<R>
    : False;

/**
 * Omit properties from an object type where the value is `never`.
 *
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitNever } from "@nick/is/types";
 *
 * type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
 * //   ^? type A = { a: string; b: never; c: number }
 *
 * type B = OmitNever<A>;
 * //   ^? type B = { a: string; c: number }
 * ````
 * @category Types
 */
export type OmitNever<T> = { [K in keyof T as IsNever<T[K], never, K>]: T[K] };
