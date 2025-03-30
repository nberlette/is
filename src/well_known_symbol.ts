/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/well-known-symbol
 */

import type { ValueOf } from "./_internal/types.ts";

/**
 * @module well-known-symbol
 *
 * This module provides a type guard for checking if a value is a well-known
 * symbol, which is a symbol that is defined as a static immutable property on
 * the global `Symbol` object.
 *
 * @param it The value to check.
 * @returns `true` if the value is a well-known symbol, `false` otherwise.
 * @example
 * ```ts
 * import { isWellKnownSymbol } from "jsr:@nick/is/well-known-symbol";
 *
 * isWellKnownSymbol(Symbol.iterator); // true
 * isWellKnownSymbol(Symbol.asyncIterator); // true
 * isWellKnownSymbol(Symbol.hasInstance); // true
 *
 * isWellKnownSymbol(Symbol.for("Symbol.iterator")); // false
 * isWellKnownSymbol(Symbol("Symbol.iterator")); // false
 * ```
 * @category Primitives
 */
export function isWellKnownSymbol(it: unknown): it is WellKnownSymbol {
  return typeof it === "symbol" && Symbol.keyFor(it) === undefined && Reflect
        .ownKeys(Symbol).find((key) =>
          Symbol[key as keyof typeof Symbol] === it
        ) !== undefined;
}

/** @ignore */
export default isWellKnownSymbol;

/**
 * Union type representing all of the well-known symbols defined on the global
 * `Symbol` object in the current runtime environment.
 *
 * @category Primitives
 */
export type WellKnownSymbol = ValueOf<
  {
    [
      K in keyof SymbolConstructor as SymbolConstructor[K] extends symbol ? K
        : never
    ]: SymbolConstructor[K];
  }
>;
