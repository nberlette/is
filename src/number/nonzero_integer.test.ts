import { assertEquals } from "@std/assert";
import { isNonZeroInteger } from "./nonzero_integer.ts";

Deno.test("isNonZeroInteger: should return true for nonzero integers", () => {
  assertEquals(isNonZeroInteger(1), true, "1 is a nonzero integer");
  assertEquals(isNonZeroInteger(-1), true, "-1 is a nonzero integer");
});

Deno.test("isNonZeroInteger: should return false for zero", () => {
  assertEquals(isNonZeroInteger(0), false, "0 is not a nonzero integer");
});

Deno.test("isNonZeroInteger: should return false for non-integer values", () => {
  assertEquals(isNonZeroInteger(1.5), false, "1. is not an integer");
  assertEquals(isNonZeroInteger(NaN), false, "NaN is not an integer");
  assertEquals(isNonZeroInteger(Infinity), false, "Infinity is not an integer");
});

Deno.test("isNonZeroInteger: should return false for non-number values", () => {
  assertEquals(isNonZeroInteger("1"), false, "string is not a number");
  assertEquals(isNonZeroInteger(true), false, "boolean is not a number");
  assertEquals(isNonZeroInteger(null), false, "null is not a number");
  assertEquals(isNonZeroInteger(undefined), false, "undefined is not a number");
});

Deno.test("isNonZeroInteger: should return false for non-integer values", () => {
  assertEquals(isNonZeroInteger(1.5), false, "1.5 is not an integer");
  assertEquals(isNonZeroInteger(-1.245), false, "-1.245 is not an integer");
});
