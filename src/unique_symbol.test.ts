/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/unique-symbol
 */

import { assertEquals } from "@std/assert";
import { isUniqueSymbol } from "./unique_symbol.ts";

Deno.test("isUniqueSymbol: should return true for a unique symbol", () => {
  const symbol = Symbol("foo");
  assertEquals(
    isUniqueSymbol(symbol),
    true,
    "should return true for a unique symbol",
  );
});

Deno.test("isUniqueSymbol: should return false for a registered symbol", () => {
  const symbol = Symbol.for("foo");
  assertEquals(
    isUniqueSymbol(symbol),
    false,
    " return false for a registered symbol",
  );
});

Deno.test("isUniqueSymbol: should return false for a well-known symbol", () => {
  const symbol = Symbol.iterator;
  assertEquals(
    isUniqueSymbol(symbol),
    false,
    "should return false for a well-known symbol",
  );
});

Deno.test("isUniqueSymbol: should return false for a non-symbol", () => {
  const nonSymbol = "foo";
  assertEquals(
    isUniqueSymbol(nonSymbol),
    false,
    "should return false for a non-symbol",
  );
});
