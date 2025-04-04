/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/even
 */

/**
 * @module even
 *
 * Checks if a given number / bigint is an even number. Returns `true` if it
 * is divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `0`, `2`, `4`, `6`, or `8`.
 *
 * @example
 * ```ts
 * import { isEven } from "@nick/is/even";
 *
 * isEven(0); // true
 * isEven(1); // false
 * isEven(2n); // true
 * isEven(3n); // false
 * ```
 * @category Numeric
 */
import type { Cast, EVEN, Numeric } from "./types.ts";

/**
 * Type-level equivalent of {@linkcode isEven}, which checks if a given
 * numeric type (number or bigint) ends in an even number. Returns
 * {@link True} if so, and {@link False} otherwise.
 *
 * @template {Numeric} T The type to check.
 * @template [True=T] Resolves to this type if it passes. Default: `T`.
 * @template [False=never] Resolves to this type if it fails. Default:
 * `never`.
 * @category Numeric
 */
// deno-fmt-ignore
export type IsEven<T extends Numeric, True = T, False = never> =
  // FIXME: `True | False` could be problematic with custom conditionals.
  // should generic `number` and `bigint` resolve to `never` instead???
  // | `${number}` extends `${T}` ? True | False
  // : `${bigint}` extends `${T}` ? True | False
  // check if the last digit is even for otherwise inferrible numerics
  | `${T}` extends `${"" | bigint}${1 | 3 | 5 | 7 | 9}` ? True
  : False; // fallback to false

/**
 * Branded type representing an even number or bigint. Used by overloads of the
 * {@linkcode isEven} function to differentiate between odd and even numbers.
 *
 * @template {Numeric} T The type to brand as even.
 * @category Numeric
 */
export type Even<T extends Numeric = Numeric> = Cast<T, EVEN>;

/**
 * Checks if a given number / bigint is an even number. Returns `true` if it
 * is divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `0`, `2`, `4`, `6`, or `8`.
 *
 * @param it The number or bigint to check, either literal or in string
 * format.
 * @returns `true` if the value is even, `false` otherwise.
 * @example
 * ```ts
 * import { isEven } from "@nick/is/even";
 *
 * isEven(0); // true
 * isEven(1); // false
 * isEven(2n); // true
 * isEven(3n); // false
 * ```
 * @category Numeric
 */
export function isEven<T extends Numeric>(it: T): IsEven<T>;

/**
 * Checks if a given number / numeric string is even. Returns `true` if the
 * value is divisible by `2`, and `false` otherwise. This usually corresponds
 * to numbers that end in `0`, `2`, `4`, `6`, or `8`.
 *
 * @param it The number or numeric string to check.
 * @returns `true` if the value is even, `false` otherwise.
 * @example
 * ```ts
 * import { isEven } from "@nick/is/even";
 *
 * isEven(0); // true
 * isEven(1); // false
 * isEven(2n); // true
 * isEven(3n); // false
 * ```
 * @category Numeric
 */
export function isEven(it: number | `${number}`): it is Even<number>;

/**
 * Checks if a given bigint or bigint string is an even number. Returns `true`
 * if the value is divisible by `2`, and `false` otherwise. This usually
 * corresponds to integers that end in `0`, `2`, `4`, `6`, or `8`.
 *
 * @param it The bigint or bigint string to check.
 * @returns `true` if the value is even, `false` otherwise.
 * @example
 * ```ts
 * import { isEven } from "@nick/is/even";
 *
 * isEven(0); // true
 * isEven(1); // false
 * isEven(2n); // true
 * isEven(3n); // false
 * ```
 * @category Numeric
 */
export function isEven(it: bigint | `${bigint}`): it is Even<bigint>;

/**
 * Checks if a given number / bigint is even. Returns `true` if the value is
 * not divisible by `2`, and `false` otherwise. This usually corresponds to
 * numbers that end in `0`, `2`, `4`, `6`, or `8`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an even finite integer, `false` otherwise.
 * @example
 * ```ts
 * import { isEven } from "@nick/is/even";
 *
 * isEven(0); // true
 * isEven(1); // false
 * isEven(2n); // true
 * isEven(3n); // false
 * ```
 * @category Numeric
 */
export function isEven(it: unknown): it is Even;

/** @ignore */
export function isEven(it: unknown): it is Even {
  if (typeof it === "string") {
    try {
      it = BigInt(parseInt(it));
    } catch {
      return false;
    }
  }
  if (
    typeof it === "bigint" || (
      typeof it === "number" && !isNaN(it) && isFinite(+it)
    )
  ) it = BigInt(it.toString());

  return typeof it === "bigint" && it % 2n === 1n;
}

/** @ignore */
export default isEven;
