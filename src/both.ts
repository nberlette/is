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
 * returns `true` if a given input satisfies **both** of the two predicates.
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
 * @param left The first predicate to check.
 * @param right The second predicate to check.
 * @returns A new predicate that returns `true` if both {@link left} and
 * {@link right} are satisfies by a given input.
 * @example
 * ```ts
 * import { isBoth, is } from "@nick/is";
 *
 * // creating a custom type guard by hand
 * const isEmpty = <T>(
 *   it: T
 * ): it is T & { readonly length: 0 } => (
 *   "length" in Object(it) && Object(it).length === 0
 * );
 *
 * // composing a custom type guard with `isBoth`
 * const isEmptyString = isBoth(is.string, isEmpty);
 * //    ^? const isEmptyString: (it: unknown) => it is string & { readonly length: 0 }
 *
 * // using the custom type guard
 * isEmptyString(""); // true
 * isEmptyString("foo"); // false
 * isEmptyString([]); // false
 * ```
 * @category Composition
 */
export function isBoth<L, R>(
  // deno-lint-ignore no-explicit-any
  left: (it: any, ...args: any[]) => it is L,
  // deno-lint-ignore no-explicit-any
  right: (it: any, ...args: any[]) => it is R,
): (it: unknown) => it is L & R {
  if (typeof left !== "function" || typeof right !== "function") {
    const typeL = left === null ? "null" : typeof left;
    const typeR = right === null ? "null" : typeof right;
    throw new TypeError(
      `'isBoth' expected predicate functions for its first and second` +
        `arguments, but received a ${typeL} and ${typeR}, respectively.`,
    );
  }
  return (it): it is L & R => left(it) && right(it);
}

/** @ignore */
export default isBoth;
