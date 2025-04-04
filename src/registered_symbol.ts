/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/registered-symbol
 */

import type { Brand } from "./_internal.ts";

/**
 * @module registered-symbol
 *
 * This module provides a type guard for checking if a given value is a symbol
 * that is registered in the global symbol registry, which means it was
 * created using the `Symbol.for()` function. These kind of symbols are
 * **not** allowed as keys in Weak Collections like `WeakMap`, `WeakSet`, or
 * `WeakRef` objects.
 *
 * @param it The value to check.
 * @returns `true` if the value is a registered symbol, `false` otherwise.
 * @example
 * ```ts
 * import { isRegisteredSymbol } from "jsr:@nick/is/registered-symbol";
 *
 * isRegisteredSymbol(Symbol.for("foo")); // true
 *
 * isRegisteredSymbol(Symbol("foo")); // false
 * isRegisteredSymbol(Symbol.iterator); // false
 * isRegisteredSymbol("@@foo"); // false
 * ```
 * @example
 * ```ts
 * import {
 *   isRegisteredSymbol,
 *   type RegisteredSymbol,
 * } from "jsr:@nick/is/registered-symbol";
 *
 * function doSomething(key: RegisteredSymbol): void {
 *   if (isRegisteredSymbol(key)) {
 *     // ... do something ...
 *   }
 * }
 *
 * const key = Symbol.for("foo");
 * doSomething(key);
 * ```
 * @example
 * ```ts
 * import { isRegisteredSymbol, RegisteredSymbol } from "jsr:@nick/is/registered-symbol";
 *
 * function assertRegisteredSymbol(value: unknown): asserts value is RegisteredSymbol {
 *   if (!isRegisteredSymbol(value)) {
 *     throw new Error("Expected a registered symbol.");
 *   }
 * }
 * ```
 * @category Primitives
 */
export function isRegisteredSymbol(it: unknown): it is RegisteredSymbol {
  return typeof it === "symbol" && Symbol.keyFor(it) != null;
}

/** @ignore */
export default isRegisteredSymbol;

/**
 * Branded type representing a symbol that is registered in the global symbol
 * registry, which means it was created using the `Symbol.for()` function.
 * This kind of symbol is **not** allowed as keys in Weak Collections like
 * `WeakMap` or `WeakSet` objects, as they are not truly unique.
 *
 * This is the type that the {@linkcode isRegisteredSymbol} type guard narrows
 * its input values to. It is provided as an export for you to use in tandem
 * with that type guard, to ensure your code is handling registered symbols in
 * a strict, type-safe manner.
 *
 * @category Primitives
 * @category Types
 * @example
 * ```ts
 * import {
 *   isRegisteredSymbol,
 *   type RegisteredSymbol,
 * } from "jsr:@nick/is/registered-symbol";
 *
 * function doSomething(key: RegisteredSymbol): void {
 *   // ...
 * }
 *
 * const key = Symbol.for("foo");
 * if (isRegisteredSymbol(key)) {
 *   doSomething(key);
 * }
 * ```
 * @example
 * ```ts
 * import {
 *   isRegisteredSymbol,
 *   type RegisteredSymbol,
 * } from "jsr:@nick/is/registered-symbol";
 *
 * function assertRegisteredSymbol(value: unknown): asserts value is RegisteredSymbol {
 *   if (!isRegisteredSymbol(value)) {
 *     throw new Error("Expected a registered symbol.");
 *   }
 * }
 * ```
 */
export type RegisteredSymbol = Brand<symbol, "registered-symbol">;
