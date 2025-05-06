import { assertEquals } from "@std/assert";
import isPrintable from "./printable.ts";

Deno.test("isPrintable should return true for string", () => {
  assertEquals(isPrintable("hello"), true);
});

Deno.test("isPrintable should return true for number", () => {
  assertEquals(isPrintable(1), true);
});

Deno.test("isPrintable should return true for bigint", () => {
  assertEquals(isPrintable(BigInt(1)), true);
});

Deno.test("isPrintable should return true for boolean", () => {
  assertEquals(isPrintable(true), true);
});

Deno.test("isPrintable should return true for null", () => {
  assertEquals(isPrintable(null), true);
});

Deno.test("isPrintable should return true for undefined", () => {
  assertEquals(isPrintable(undefined), true);
});

Deno.test("isPrintable should return false for symbol", () => {
  assertEquals(isPrintable(Symbol()), false);
});
