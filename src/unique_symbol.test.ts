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
