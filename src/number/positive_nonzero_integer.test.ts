/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-nonzero-integer
 */

import { assertEquals } from "@std/assert";
import { isPositiveNonZeroInteger } from "./positive_nonzero_integer.ts";

Deno.test("isPositiveNonZeroInteger: should return true for positive nonzero integers", () => {
  assertEquals(
    isPositiveNonZeroInteger(1),
    true,
    "should return true for positive nonzero integers",
  );
});

Deno.test("isPositiveNonZeroInteger: should return false for zero", () => {
  assertEquals(
    isPositiveNonZeroInteger(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isPositiveNonZeroInteger: should return false for negative nonzero numbers", () => {
  assertEquals(
    isPositiveNonZeroInteger(-1),
    false,
    "should return false for negative nonzero numbers",
  );
});

Deno.test("isPositiveNonZero: should return false for positive zero", () => {
  assertEquals(
    isPositiveNonZeroInteger(-0),
    false,
    "should return false for positive zero",
  );
});

Deno.test("isPositiveNonZeroInteger: should return false for negative zero", () => {
  assertEquals(
    isPositiveNonZeroInteger(0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isPositiveNonZero return false for non-numbers", () => {
  assertEquals(
    isPositiveNonZeroInteger("string"),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isPositiveNonZeroInteger(true),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isPositiveNonZeroInteger(null),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isPositiveNonZeroInteger(undefined),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isPositiveNonZeroInteger({}),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isPositiveNonZeroInteger([]),
    false,
    "should return false for non-numbers",
  );
});

Deno.test("isPositiveNonZeroInteger: should return false for non-finite numbers", () => {
  assertEquals(
    isPositiveNonZeroInteger(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isPositiveNonZeroInteger(-Infinity),
    false,
    "should return false for -Infinity",
  );
  assertEquals(
    isPositiveNonZeroInteger(NaN),
    false,
    "should return false for NaN",
  );
});
