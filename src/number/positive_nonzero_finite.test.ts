/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-nonzero-finite
 */

import { assertEquals } from "@std/assert";
import { isPositiveNonZeroFiniteNumber } from "./positive_nonzero_finite.ts";

Deno.test("isPositiveNonZeroFiniteNumber: should return true for positive nonzero finite numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber(1),
    true,
    "should return true for positive nonzero finite numbers",
  );
});

Deno.test("isPositiveNonZeroFiniteNumber: should return false for negative zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber(-0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isPositiveNonZeroFiniteNumber: should return false for negative finite number", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber(-1),
    false,
    "should return false for negative finite number",
  );
});

Deno.test("isPositiveNonZeroFiniteNumber: should return false for zero", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isPositiveNonZeroFiniteNumber: should return false for non-finite numbers", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteNumber(-Infinity),
    false,
    "should return false for -Infinity",
  );
  assertEquals(
    isPositiveNonZeroFiniteNumber(NaN),
    false,
    "should return false for NaN",
  );
});

Deno.test("isPositiveNonZeroFiniteNumber: should return false non-number values", () => {
  assertEquals(
    isPositiveNonZeroFiniteNumber("1"),
    false,
    "should return false for non-number values",
  );
  assertEquals(
    isPositiveNonZeroFiniteNumber(true),
    false,
    "should return false for non-number values",
  );
  assertEquals(
    isPositiveNonZeroFiniteNumber(null),
    false,
    "should return false for non-number values",
  );
  assertEquals(
    isPositiveNonZeroFiniteNumber(undefined),
    false,
    "should return false for non-number values",
  );
});
