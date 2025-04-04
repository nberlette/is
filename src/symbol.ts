/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/symbol
 */

import { tryValueOf } from "./_internal.ts";

/**
 * Check if the given value is a symbol.
 *
 * @param it The value to check.
 * @returns `true` if the value is a symbol, `false` otherwise.
 * @example
 * ```ts
 * import { isSymbol } from "jsr:@nick/is/symbol";
 *
 * isSymbol(Symbol("foo")); // true
 * isSymbol(Symbol.iterator); // true
 * isSymbol(Symbol.for("foo")); // true
 * isSymbol("@@foo"); // false
 * ```
 * @category Primitives
 * @module symbol
 */
export function isSymbol(it: unknown): it is symbol {
  return tryValueOf(Symbol.prototype, it);
}

export default isSymbol;
