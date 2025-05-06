import { assertEquals } from "@std/assert";
import { isUndefined } from "./undefined.ts";

Deno.test("isUndefined() should return true for undefined values", () => {
  assertEquals(isUndefined(undefined), true);
});

Deno.test("isUndefined() should return false for null values", () => {
  assertEquals(isUndefined(null), false);
});

Deno.test("isUndefined() should return false for numeric values", () => {
  assertEquals(isUndefined(0), false);
});

Deno.test("isUndefined() should return true for void values", () => {
  assertEquals(isUndefined(void 0), true);
});

Deno.test("isUndefined() should return false for string values", () => {
  assertEquals(isUndefined(""), false);
});
