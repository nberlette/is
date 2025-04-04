/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/null
 */

/**
 * Checks if the value is `null`, and nothing else.
 *
 * @param it The value to check.
 * @returns `true` if the value is `null`, or `false` otherwise.
 * @example
 * ```ts
 * import { isNull } from "jsr:@nick/is/null";
 *
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull(0); // false
 * isNull(''); // false
 * isNull(false); // false
 * ```
 * @category Primitives
 * @module null
 */
export function isNull(it: unknown): it is null {
  return it === null;
}

export default isNull;
