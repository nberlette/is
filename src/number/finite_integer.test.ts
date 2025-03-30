/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/finite-integer
 */

import { assertEquals } from "@std/assert";
import { isFiniteInteger } from "./finite_integer.ts";

Deno.test("isFiniteInteger: should return true for finite integer", () => {
  const result = isFiniteInteger(1);
  assertEquals(result, true, "should return true for finite integer");
});

Deno.test("isFiniteInteger: should return false for non-integer", () => {
  const result = isFiniteInteger(1.5);
  assertEquals(result, false, " return false for-integer");
});

Deno.test("isFiniteInteger: return false for NaN", () => {
  const result = isFiniteInteger(NaN);
  assertEquals(result, false, "should return false for NaN");
});

Deno.test("isFiniteInteger: return false for Infinity", () => {
  const result = isFiniteInteger(Infinity);
  assertEquals(result, false, "should return false for Infinity");
});

Deno.test("isFiniteInteger: should return false for negative Infinity", () => {
  const result = isFiniteInteger(-Infinity);
  assertEquals(result, false, "should return false for negative Infinity");
});

Deno.test("isFiniteInteger: should return true for zero", () => {
  const result = isFiniteInteger(0);
  assertEquals(result, true, "should return true for zero");
});
