/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/tuple
 */
/**
 * Resolves to {@linkcode True} if {@linkcode A} is a tuple, which is an array
 * with a pre-determined length and type for each of its elements. This check
 * **does not** resolve to {@linkcode True} for arrays such as `string[]` or
 * `Array<number>` (since they are not tuples), but **does** for `[1, 2, 3]`.
 * Any other type of value will resolve to {@linkcode False}.
 *
 * @example
 * ```ts
 * import type { IsTuple } from "@nick/is/type";
 *
 * type A = IsTuple<[1, 2, 3]>; // true
 * type B = IsTuple<string[]>; // false
 * type C = IsTuple<Array<number>>; // false
 * ```
 * @example
 * ```ts
 * import type { IsTuple } from "@nick/is/type";
 *
 * // using the conditional type parameters in a custom type
 * type EnsureTuple<T> = IsTuple<T, T, never>;
 *
 * type A = EnsureTuple<[1, 2, 3]>; // [1, 2, 3]
 * type B = EnsureTuple<readonly []>; // readonly []
 * type C = EnsureTuple<string[]>; // never
 * type D = EnsureTuple<Array<number>>; // never
 * ```
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsTuple<T, True = true, False = false> =
  | T extends readonly [] | readonly [unknown, ...unknown[]]
    ? True
  : False;
