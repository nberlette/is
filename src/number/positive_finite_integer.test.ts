import { assertEquals } from "@std/assert";
import { isPositiveFiniteInteger } from "./positive_finite_integer.ts";

Deno.test("isPositiveFiniteInteger: should return true for positive finite integer", () => {
  assertEquals(
    isPositiveFiniteInteger(1),
    true,
    "should return true for positive finite integer",
  );
});

Deno.test("isPositiveFiniteInteger: should return false for negative zero", () => {
  assertEquals(
    isPositiveFiniteInteger(-0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isPositiveFiniteInteger: should return false for negative finite integer", () => {
  assertEquals(
    isPositiveFiniteInteger(-1),
    false,
    "should return false for negative finite integer",
  );
});

Deno.test("isPositiveFiniteInteger: should return true for zero", () => {
  assertEquals(
    isPositiveFiniteInteger(0),
    true,
    "should return false for zero",
  );
});
