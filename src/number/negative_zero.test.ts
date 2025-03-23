import { assertEquals } from "@std/assert";
import { isNegativeZero } from "./negative_zero.ts";

Deno.test("isNegativeZero: should return true for -0", () => {
  const result = isNegativeZero(-0);
  assertEquals(result, true, "isNegativeZero() functions as expected");
});

Deno.test("isNegativeZero: should return false for 0", () => {
  const result = isNegativeZero(0);
  assertEquals(result, false, "isNegativeZero() functions as expected");
});

Deno.test("isNegativeZero: should return false for -1", () => {
  const result = isNegativeZero(-1);
  assertEquals(result, false, "isNegativeZero() functions as expected");
});

Deno.test("isNegativeZero: should return false for 1", () => {
  const result = isNegativeZero(1);
  assertEquals(result, false, "isNegativeZero() functions as expected");
});

Deno.test("isNegativeZero: should return a string", () => {
  const result = isNegativeZero("-0");
  assertEquals(result, false, "isNegativeZero() functions as expected");
});

Deno.test("isNegativeZero: should return false for non-number values", () => {
  const result = isNegativeZero("");
  assertEquals(result, false, "isNegativeZero() functions as expected");
});
