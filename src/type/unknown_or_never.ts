/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/unknown-or-never
 */
/**
 * @module unknown-never
 *
 * Checks if a given type is either the `unknown` or `never type, returning
 * {@linkcode True} if it is, and {@linkcode False} if not. The `unknown`
 * type, introduced in the TypeScript 3.0 release (July 2018), is the "safer"
 * alternative to `any`.
 *
 * This is because of the assignability semantics of `unknown` and `never`,
 * summarized briefly below:
 *
 * ### `unknown`
 *
 * The `unknown` type (also representable as `{} | null | undefined`) is known
 * as a safer alternative to `any`. When a value is declared as unknown, it
 * can have any other type assigned to it.
 *
 * The reverse, however, is not true: an unknown type cannot be assigned to
 * another known type. This is the primary distinguishing characteristic
 * between `unknown` and `any`.
 *
 * ```ts
 * // allows any type to be assigned to it:
 * let foo: unknown;
 *
 * foo = "42"; // OK
 * foo = 42; // OK
 *
 * // does not allow `unknown` types to be assigned, unlike `any`:
 * let bar: number = foo;
 * //  ^? Error: Type 'unknown' is not assignable to type 'number'.
 * ```
 *
 * ### `never`
 *
 * The `never` type (known as an "empty" set) represents a value that can
 * never occur. It is usually used to indicate a function will never return a
 * value, such as a `fail` function that **always** throws an exception.
 *
 * Using `never` as a return type or in specific branches of conditional types
 * can help you control the flow of your program and manipulate types in a more
 * precise way.
 *
 * ### Widening and Narrowing
 *
 * The `unknown` and `never` types are both special types in the TypeScript
 * language, and they each serve distinctively unique purposes.
 *
 * `unknown` is used to represent a value that could be anything, while `never`
 * represent a value that can never exist in any scenario. You typically use
 * `unknown` when beginning a chain of type checks (e.g. defining parameters of
 * a function), while `never` is usually found at the end of the chain (e.g. in
 * a function's return type).
 *
 * ### Unions + Intersections with `unknown` + `never`
 *
 * One of the main differences between the two is the widening behavior that
 * applies to other types that are unioned or intersected with `unknown` and
 * `never`. Understanding this behavior is critical to being able to properly
 * leverage the power of these types in your code.
 *
 * Unions that have `unknown` in them cease to be a union at all. Its presence
 * causes all the other union members to also be widened to `unknown`, similar
 * to how `any` behaves (it is "contagious"). This is because of the logical
 * fallacy that you cannot simultaneously have "known" and "unknown" types - it
 * is one or the other. On the other hand, `never` being placed into a union
 * will not affect a thing; it will always be reduced to nothing in this case.
 *
 * For intersections, however, the opposite of the aforementioned rules can be
 * observed. Intersecting any type and `unknown` results in it being unchanged.
 * `A & unknown` is always `A`. In contrast, intersecting with `never` always
 * reduces the other type to `never` (`A & never` is always `never`). The same
 * applies to incompatible type intersections: `{ a: 1 } & { a: 2 }` results
 * in `never`, since `1` and `2` can never simultaneously coexist in one type.
 *
 * @example
 * ```ts
 * import type { IsUnknownOrNever } from "@nick/is/type";
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
 */
import type { IsNever } from "./never.ts";
import type { IsUnknown } from "./unknown.ts";

/**
 * Resolves to {@linkcode True} if {@linkcode A} is `unknown` or is `never`,
 * and nothing else. Otherwise, it resolves to {@linkcode False}. This is a
 * convenience type combining the {@link IsUnknown} and {@link IsNever} guards
 * into a single type.
 *
 * @example
 * ```ts
 * import type { IsUnknownOrNever } from "@nick/is/type";
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
export type IsUnknownOrNever<A, True = true, False = false> =
  IsNever<A, True, IsUnknown<A, True, False>>;

/**
 * Omit properties from an object type where the value is `unknown` or `never`.
 * This relies on the {@linkcode IsUnknownOrNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitUnknownOrNever } from "@nick/is/type";
 *
 * type A = { a: string; b: unknown; c: number };
 * type B = OmitUnknownOrNever<A>;
 * //   ^? type B = { a: string; c: number }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitUnknownOrNever<U, Deep extends boolean = false> =
 | U extends infer T extends object ? {
    [K in keyof T as IsUnknownOrNever<T[K], never, K>]:
     Deep extends true ? OmitUnknownOrNever<T[K], true> : T[K];
 } : IsUnknownOrNever<U, never, U>;
