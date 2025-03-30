/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/well-known-symbol
 */

import { assertEquals } from "@std/assert";
import { isWellKnownSymbol } from "./well_known_symbol.ts";

Deno.test("isWellKnownSymbol: should return true for well-known symbols", () => {
  assertEquals(isWellKnownSymbol(Symbol.iterator), true);
  assertEquals(isWellKnownSymbol(Symbol.asyncIterator), true);
  assertEquals(isWellKnownSymbol(Symbol.hasInstance), true);
});

Deno.test("isWellKnownSymbol: should return false for non-well-known symbols", () => {
  assertEquals(isWellKnownSymbol(Symbol.for("Symbol.iterator")), false);
  assertEquals(isWellKnownSymbol(Symbol("Symbol.iterator")), false);
});

Deno.test("isWellKnownSymbol: should return false for non-symbol values", () => {
  assertEquals(isWellKnownSymbol(1), false);
  assertEquals(isWellKnownSymbol("string"), false);
  assertEquals(isWellKnownSymbol(true), false);
  assertEquals(isWellKnownSymbol(null), false);
  assertEquals(isWellKnownSymbol(undefined), false);
});

Deno.test("isWellKnownSymbol: should return false for undefined and null values", () => {
  assertEquals(isWellKnownSymbol(null), false);
  assertEquals(isWellKnownSymbol(undefined), false);
});
