/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/printable
 */

import { isString } from "./string.ts";
import { isNumber } from "./number/number.ts";
import { isBigInt } from "./bigint.ts";
import { isBoolean } from "./boolean.ts";
import { isMissing } from "./missing.ts";

/**
 * Represents a value that can be printed in a template literal type string,
 * which means it is either a `string`, `number`, `bigint`, `boolean`, `null`
 * or `undefined`. Any other type of value will raise a compiler error if you
 * attempt to construct a template literal type with it.
 *
 * @example
 * ```ts
 * import type { Printable } from "jsr:@nick/is/printable";
 *
 * type Join<T, D extends string = ""> =
 *   | T extends [infer F extends Printable, ...infer R]
 *     ? `${F}${R extends [] ? "" : D}${Join<R, D>}`
 *   : "";
 *
 * type Result = Join<[1, "two", 3n, true, null, undefined]>;
 * //   ^? type Result = "1two3true"
 * ```
 */
export type Printable = string | number | bigint | boolean | null | undefined;

type Join<T, D extends string = ""> = T extends
  [infer F extends Printable, ...infer R]
  ? `${F}${R extends [] ? "" : D}${Join<R, D>}`
  : "";

type Result = Join<[1, "two", 3n, true, null, undefined]>;
//   ^? type Result = "1two3truenullundefined"

/**
 * Check if a value is printable, meaning it is either a `string`, `number`,
 * `bigint`, `boolean`, `null` or `undefined`. This is useful for logging and
 * debugging purposes. The complentary type {@linkcode Printable} can be used
 * on the type-level to represent values that are usable within a template
 * literal type syntax.
 *
 * @param it The value to check.
 * @returns `true` if the value is printable, `false` otherwise.
 * @example
 * ```ts
 * import { isPrintable } from "jsr:@nick/is/printable";
 *
 * console.log(isPrintable("hello")); // true
 * console.log(isPrintable(1)); // true
 * console.log(isPrintable(BigInt(1))); // true
 * console.log(isPrintable(true)); // true
 * console.log(isPrintable(null)); // true
 * console.log(isPrintable(undefined)); // true
 * console.log(isPrintable({})); // false
 * console.log(isPrintable(Symbol())); // false
 * ```
 * @category Primitives
 * @module printable
 */
export function isPrintable(x: unknown): x is Printable {
  return isMissing(x) || isString(x) || isNumber(x) || isBigInt(x) ||
    isBoolean(x);
}

/** @ignore */
export default isPrintable;
