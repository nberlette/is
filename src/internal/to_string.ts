/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/internal/to-string
 */
import { ObjectPrototypeToString } from "./primordials.ts";

/**
 * An uncurried version of the `Object.prototype.toString` method, which allows
 * for the `this` binding to be passed as the first argument.
 *
 * @example
 * ```ts
 * import { toString } from "./src/_internal.ts";
 *
 * console.log(toString({})); // "[object Object]"
 * console.log(toString([])); // "[object Array]"
 * ```
 */
export const toString: {
  <T>(target: T): `[object ${string}]`;
  (target: unknown): string;
} = ObjectPrototypeToString as never;
