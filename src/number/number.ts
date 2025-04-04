/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/number
 */

/**
 * Checks if the given value is a number. This includes all numbers, without
 * distinguishing between `NaN`, `Infinity`, and other special values.
 *
 * @param it The value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 * @example
 * ```ts
 * import { isNumber } from "jsr:@nick/is/number";
 *
 * isNumber("123"); // false
 * isNumber(123); // true
 * ```
 * @example
 * ```ts
 * import { isNumber } from "jsr:@nick/is/number";
 *
 * const x: unknown = 123;
 * if (isNumber(x)) {
 *   console.log(x + 1);
 *   //          ^? const x: number
 * }
 * ```
 * @category Primitives
 * @module number
 */
export function isNumber(it: unknown): it is number {
  return typeof it === "number";
}

export default isNumber;
