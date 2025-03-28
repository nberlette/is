/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/either
 */

/**
 * This module exports a predicate composition utility named {@link isEither},
 * which is used to combine two different predicates into one, such that the
 * resulting function returns `true` if **either** of the input predicates is
 * satisfied by an input.
 *
 * This creates a logical OR between the two predicates, narrowing types to a
 * union of the two original predicates' return types. This helps you compose
 * custom reusable type guards with ease, reducing boilerplate and repetition.
 *
 * @example
 * ```ts
 * import { isEither, isString, isSymbol } from "@nick/is";
 *
 * // creating a custom type guard that checks for strings or symbols
 * const isStringOrSymbol = isEither(isString, isSymbol);
 * //    ^? const isStringOrSymbol: (it: unknown) => it is string | symbol
 *
 * // using the custom type guard
 * isStringOrSymbol("foo"); // true
 * isStringOrSymbol(Symbol.iterator); // true
 * isStringOrSymbol(123); // false
 * ```
 *
 * @category Composition
 * @module either
 */

/**
 * Combine two different predicates into one, such that the resulting function
 * returns `true` if a given input satisfies **either** of the two predicates.
 *
 * This creates a logical OR between the two predicates, narrowing types to a
 * union of the two original predicates' return types. This helps you compose
 * custom reusable type guards with ease, reducing boilerplate and repetition.
 *
 * @param left The first predicate to check.
 * @param right The second predicate to check.
 * @returns A new predicate that returns `true` if either {@link left} or
 * {@link right} are satisfies by a given input.
 * @example
 * ```ts
 * import { isEither, isString, isSymbol } from "@nick/is";
 *
 * // creating a custom type guard that checks for strings or symbols
 * const isStringOrSymbol = isEither(isString, isSymbol);
 * //    ^? const isStringOrSymbol: (it: unknown) => it is string | symbol
 *
 * // using the custom type guard
 * isStringOrSymbol("foo"); // true
 * isStringOrSymbol(Symbol.iterator); // true
 * isStringOrSymbol(123); // false
 * ```
 * @category Composition
 */
export function isEither<L, R>(
  // deno-lint-ignore no-explicit-any
  left: (it: any, ...args: any[]) => it is L,
  // deno-lint-ignore no-explicit-any
  right: (it: any, ...args: any[]) => it is R,
): (it: unknown) => it is L | R {
  if (typeof left !== "function" || typeof right !== "function") {
    const typeL = left === null ? "null" : typeof left;
    const typeR = right === null ? "null" : typeof right;
    throw new TypeError(
      `'isEither' expected predicate functions for its first and second` +
        `arguments, but received a ${typeL} and ${typeR}, respectively.`,
    );
  }
  return (it): it is L | R => left(it) || right(it);
}

/** @ignore */
export default isEither;
