/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/both
 */
import type { Predicate } from "./type/predicate.ts";

/**
 * @module both
 *
 * This module exports a predicate composition utility named {@linkcode both},
 * which is used to combine two different predicates into one, such that the
 * resulting function returns `true` if **both** of the input predicates are
 * satisfied by an input.
 *
 * This creates a logical AND between the two predicates, narrowing types to an
 * intersection of the two original predicates' return types. This helps you
 * compose custom reusable type guards with ease, reducing boilerplate and
 * repetition.
 *
 * **Note**: just like in the rest of TypeScript code, if you attempt to use an
 * incompatible pair of predicates in this function, the resulting type it will
 * narrow to will probably be `never`. For this reason, don't use this function
 * to combine mutually exclusive predicates like `isString` and `isNumber`.
 *
 * @example
 * ```ts
 * import { both, isString } from "@nick/is";
 *
 * // creating a custom type guard by hand
 * const isEmpty = <T>(it: T): it is T & { readonly length: 0 } => (
 *   "length" in Object(it) && Object(it).length === 0
 * );
 *
 * // composing a custom type guard with `both`
 * const isEmptyString = both(isString, isEmpty);
 * //    ^? const isEmptyString: (it: unknown) => it is string & {
 * //         readonly length: 0;
 * //       }
 * //
 * // using the custom type guard
 * isEmptyString(""); // true
 * isEmptyString("foo"); // false
 * isEmptyString([]); // false
 * ```
 * @category Composition
 */

/**
 * Combine two different predicates into one, such that the resulting function
 * returns `true` if a given input satisfies **both** predicates.
 *
 * This creates a logical AND between the two predicates, narrowing types to an
 * intersection of the two original predicates' return types. This helps you
 * compose custom reusable type guards with ease, reducing boilerplate and
 * repetition.
 *
 * **Note**: just like in the rest of TypeScript code, if you attempt to use an
 * incompatible pair of predicates in this function, the resulting type it will
 * narrow to will probably be `never`. For this reason, don't use this function
 * to combine mutually exclusive predicates like `isString` and `isNumber`.
 *
 * @param l The first predicate to check.
 * @param r The second predicate to check.
 * @returns a new predicate that ensures both `l` and `r` guards are satisfied.
 * @example
 * ```ts
 * import { isBoth, isString } from "@nick/is";
 *
 * // creating a custom type guard by hand
 * const isEmpty = <T>(
 *   it: T
 * ): it is T & { readonly length: 0 } => (
 *   "length" in Object(it) && Object(it).length === 0
 * );
 *
 * // composing a custom type guard with `isBoth`
 * const isEmptyString = isBoth(isString, isEmpty);
 * //    ^? const isEmptyString: (it: unknown) => it is string & { readonly length: 0 }
 *
 * // using the custom type guard
 * isEmptyString(""); // true
 * isEmptyString("foo"); // false
 * isEmptyString([]); // false
 * ```
 * @category Composition
 */
export function isBoth<L, R>(l: Predicate<L>, r: Predicate<R>): Predicate<L & R> {
  if (typeof l !== "function" || typeof r !== "function") {
    const typeL = l === null ? "null" : typeof l;
    const typeR = r === null ? "null" : typeof r;
    throw new TypeError(
      `'isBoth' expected predicate functions for its first and second` +
        `arguments, but received a ${typeL} and ${typeR}, respectively.`,
    );
  }
  return (x): x is L & R => l(x) && r(x);
}

/** @ignore */
export default isBoth;
