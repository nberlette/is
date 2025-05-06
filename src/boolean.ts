/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/boolean
 */

import { tryValueOf } from "./_internal.ts";

/**
 * Checks if the given value is a boolean.
 *
 * @param it The value to check.
 * @returns `true` if the value is a boolean, `false` otherwise.
 * @example
 * ```ts
 * import { isBoolean } from "jsr:@nick/is/boolean";
 * isBoolean("true"); // false
 * isBoolean(true); // true
 * ```
 * @category Primitives
 */
export function isBoolean(it: unknown): it is boolean {
  return tryValueOf(Boolean.prototype, it);
}

export default isBoolean;
