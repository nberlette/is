/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/defined
 */

/**
 * Checks if a value is not `undefined`.
 *
 * @param it The value to check.
 * @returns `true` if the value is not `undefined`, or `false` otherwise.
 * @example
 * ```ts
 * import { isDefined } from "jsr:@nick/is/defined";
 *
 * isDefined(null); // true
 * isDefined(undefined); // false
 * isDefined(0); // true
 * isDefined(void 0); // false
 * isDefined(''); // true
 * ```
 * @example
 * ```ts
 * import { isDefined } from "jsr:@nick/is/defined";
 *
 * let value: number | undefined;
 * if (isDefined(value)) {
 *   value += 1;
 *   // ^? let value: number
 * } else {
 *   value;
 *   // ^? let value: undefined
 *   value = 0;
 *   // ^? let value: number | undefined
 * }
 * ```
 * @category Primitives
 * @module defined
 */
export function isDefined<const T>(it: T | undefined): it is T {
  return it !== undefined;
}

export default isDefined;
