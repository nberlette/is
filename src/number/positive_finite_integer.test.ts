/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-finite-integer
 */

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
