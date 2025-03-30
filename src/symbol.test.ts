/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/symbol
 */

import { isSymbol } from "./symbol.ts";
import { assertEquals } from "@std/assert";

Deno.test("isSymbol() should return true for a Symbol", () => {
  assertEquals(isSymbol(Symbol("foo")), true);
});

Deno.test("isSymbol() should return true for Symbol.iterator", () => {
  assertEquals(isSymbol(Symbol.iterator), true);
});

Deno.test("isSymbol() should return true for Symbol.for", () => {
  assertEquals(isSymbol(Symbol.for("foo")), true);
});

Deno.test("isSymbol() should return false for a string", () => {
  assertEquals(isSymbol("@@foo"), false);
});

Deno.test("isSymbol() should return false for a number", () => {
  assertEquals(isSymbol(123), false);
});

Deno.test("isSymbol() should return false for an object", () => {
  assertEquals(isSymbol({}), false);
});
