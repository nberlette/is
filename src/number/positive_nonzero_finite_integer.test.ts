/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-nonzero-finite-integer
 */

import { assertEquals } from "@std/assert";
import { isPositiveNonZeroFiniteInteger } from "./positive_nonzero_finite_integer.ts";

Deno.test("isPositiveNonZeroFiniteInteger: should return true for positive nonzero finite integers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(1),
    true,
    "should return true for positive nonzero finite integers",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for negative zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(-0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for negative finite integer", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(-1),
    false,
    "should return false for negative finite integer",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false for non-finite numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(-Infinity),
    false,
    "should return false for -Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(NaN),
    false,
    "should return false for NaN",
  );
});

Deno.test("isPositiveNonZeroFiniteInteger: should return false non-integer numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteInteger(1.5),
    false,
    "should return false for 1.5",
  );
  assertEquals(
    isPositiveNonZeroFiniteInteger(-1.245),
    false,
    "should return false for -1.245",
  );
});
