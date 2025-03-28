/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/negative-nonzero-finite
 */

import { assertEquals } from "@std/assert";
import { isNegativeNonZeroFiniteNumber } from "./negative_nonzero_finite.ts";

Deno.test("isNegativeNonZeroFiniteNumber: should return true for negative nonzero finite numbers", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(-1),
    true,
    "should return true for negative nonzero finite numbers",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false zero", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for positive nonzero finite numbers", () => {
  (isNegativeNonZeroFiniteNumber(1),
    false,
    "should return false for positive nonzero finite numbers");
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for non-finite numbers", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(NaN),
    false,
    "should return false for NaN",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(-Infinity),
    false,
    "should return false for -Infinity",
  );
});

Deno.test("isNegativeNonZeroFiniteNumber: should return false for non-number values", () => {
  assertEquals(
    isNegativeNonZeroFiniteNumber(""),
    false,
    "should return false for strings",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(true),
    false,
    "should for booleans",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(null),
    false,
    "should return false for null",
  );
  assertEquals(
    isNegativeNonZeroFiniteNumber(undefined),
    false,
    "should return false for undefined",
  );
});
