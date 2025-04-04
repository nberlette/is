/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/odd
 */

/**
 * @module odd
 *
 * Checks if a given number / bigint is odd. Returns `true` if the value is
 * not divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `1`, `3`, `5`, `7`, or `9`.
 *
 * @example
 * ```ts
 * import { isOdd } from "@nick/is/odd";
 *
 * isOdd(1); // true
 * isOdd(2); // false
 * isOdd(3); // true
 * isOdd(4); // false
 * ```
 * @category Numeric
 */
import type { Cast, Numeric, ODD } from "./types.ts";

/**
 * Type-level equivalent of {@linkcode isOdd}, which checks if a given numeric
 * type (number or bigint) ends in an odd number. Returns {@link True} if so,
 * and {@link False} otherwise.
 *
 * @template {Numeric} T The type to check.
 * @template [True=T] Resolves to this type if it passes. Default: `T`.
 * @template [False=never] Resolves to this type if it fails. Default:
 * `never`.
 * @category Numeric
 */
// deno-fmt-ignore
export type IsOdd<T extends Numeric, True = true, False = false> =
  | `${number}` extends `${T}` ? True
  : `${bigint}` extends `${T}` ? True
  : `${T}` extends `${infer _}${1 | 3 | 5 | 7 | 9}` ? True
  : False;

/**
 * Branded type representing an odd number. Used by overloads of the
 * {@linkcode isOdd} function to differentiate between odd and even numbers.
 *
 * @template [T=number] The type to brand as odd.
 * @category Numeric
 */
export type Odd<T = number> = Cast<
  IsOdd<Extract<T, Numeric>, Extract<T, Numeric>, never>,
  ODD
>;

/**
 * Checks if a given number / bigint is odd. Returns `true` if the value is
 * not divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `1`, `3`, `5`, `7`, or `9`.
 *
 * @param it The number or bigint to check, either literal or in string
 * format.
 * @returns `true` if the value is odd, `false` otherwise.
 * @example
 * ```ts
 * import { isOdd } from "@nick/is/odd";
 *
 * isOdd(1); // true
 * isOdd(2); // false
 * isOdd(3n); // true
 * isOdd(4n); // false
 * ```
 * @category Numeric
 */
export function isOdd<const T = Numeric>(it: T): it is Odd<T>;

/**
 * Checks if a given number / numeric string is odd. Returns `true` if the
 * value is not divisible by `2`, and `false` otherwise. This usually
 * corresponds to numbers that end in `1`, `3`, `5`, `7`, or `9`.
 *
 * @param it The number or numeric string to check.
 * @returns `true` if the value is odd, `false` otherwise.
 * @example
 * ```ts
 * import { isOdd } from "@nick/is/odd";
 *
 * isOdd(1); // true
 * isOdd(2); // false
 * isOdd(3n); // true
 * isOdd(4n); // false
 * ```
 * @category Numeric
 */
export function isOdd(it: number | `${number}`): it is Odd<number>;

/**
 * Checks if a given bigint or bigint string is an odd number. Returns `true`
 * if the value is not divisible by `2`, and `false` otherwise. This usually
 * corresponds to integers that end in `1`, `3`, `5`, `7`, or `9`.
 *
 * @param it The bigint or bigint string to check.
 * @returns `true` if the value is odd, `false` otherwise.
 * @example
 * ```ts
 * import { isOdd } from "@nick/is/odd";
 *
 * isOdd(1); // true
 * isOdd(2); // false
 * isOdd(3n); // true
 * isOdd(4n); // false
 * ```
 * @category Numeric
 */
export function isOdd(it: bigint | `${bigint}`): it is Odd<bigint>;

/**
 * Checks if a given number / bigint is odd. Returns `true` if the value is
 * not divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `1`, `3`, `5`, `7`, or `9`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an odd finite integer, `false` otherwise.
 * @example
 * ```ts
 * import { isOdd } from "@nick/is/odd";
 *
 * isOdd(1); // true
 * isOdd(2); // false
 * isOdd(3n); // true
 * isOdd(4n); // false
 * ```
 * @category Numeric
 */
export function isOdd(it: unknown): it is Odd;

/** @ignore */
// deno-lint-ignore no-explicit-any
export function isOdd(it: any): it is Odd {
  if (typeof it === "bigint") {
    it = it < 0 ? -it : it;
    return it % 2n === 1n;
  } else {
    if ((it = +it) !== it) return false;
    it = it < 0 ? -it : it;
    return it % 2 === 1;
  }
}

/** @ignore */
export default isOdd;
