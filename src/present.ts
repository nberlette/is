/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/present
 */

/**
 * Check if the given value is not `null` or `undefined`.
 *
 * @param it The value to check.
 * @returns `true` if the value is not null or undefined, or `false` otherwise.
 * @example
 * ```ts
 * import { isPresent } from "jsr:@nick/is/present";
 *
 * isPresent(null); // false
 * isPresent(undefined); // false
 * isPresent(0); // true
 * isPresent(''); // true
 * isPresent(false); // true
 * ```
 * @category Primitives
 * @see {@link isMissing} for the opposite of this function.
 * @module present
 */
export function isPresent<T>(it: T | null | undefined): it is NonNullable<T> {
  return it !== null && it !== undefined;
}

/** @ignore */
export default isPresent;

// deno-lint-ignore ban-types
export type NonNullable<T> = T & {};
