/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/unique-symbol
 */

import type { Brand } from "./_internal.ts";
import { isRegisteredSymbol } from "./registered_symbol.ts";
import { isWellKnownSymbol } from "./well_known_symbol.ts";

/**
 * @module unique-symbol
 *
 * This module provides a type guard for checking if a given value is a unique
 * symbol, which is a symbol that is neither registered in the global symbol
 * registry (created with `Symbol.for()`) nor a well-known symbol defined on
 * the global `Symbol` object. The only values that return `true` when passed
 * to this function are primitive symbols created with the `Symbol()`
 * function, that do not pass the `isRegisteredSymbol()` or
 * `isWellKnownSymbol()` checks.
 *
 * @param it The value to check.
 * @returns `true` if the value is a unique symbol, `false` otherwise.
 * @example
 * ```ts
 * import { isUniqueSymbol } from "jsr:@nick/is/unique-symbol";
 *
 * isUniqueSymbol(Symbol("foo")); // true
 * isUniqueSymbol(Symbol.iterator); // false
 * isUniqueSymbol(Symbol.for("foo")); // false
 * ```
 * @category Primitives
 */
export function isUniqueSymbol(it: unknown): it is UniqueSymbol {
  return typeof it === "symbol" && !isRegisteredSymbol(it) &&
    !isWellKnownSymbol(it);
}

/** @ignore */
export default isUniqueSymbol;

/**
 * Branded type representing a unique symbol, which is a primitive symbol that
 * was created using the `Symbol()` function, and is not a registered symbol
 * created with `Symbol.for()`, nor a well-known symbol defined on the global
 * `Symbol` object.
 *
 * @category Primitives
 */
export type UniqueSymbol = Brand<symbol, "unique-symbol">;
