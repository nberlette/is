/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-nonzero
 */

import { assertEquals } from "@std/assert";
import {
  isPositiveNonZeroNumber,
  type PositiveNonZero,
} from "./positive_nonzero.ts";
import { expectType } from ".././_internal.ts";

Deno.test("isPositiveNonZeroNumber: should return true for positive nonzero numbers", () => {
  assertEquals(isPositiveNonZeroNumber(1), true, "1 is nonzero number");
  assertEquals(
    isPositiveNonZeroNumber(2.5),
    true,
    "2.5 is a positive nonzero number",
  );
});

Deno.test("isPositiveNonZeroNumber: should return false for zero", () => {
  assertEquals(
    isPositiveNonZeroNumber(0),
    false,
    "0 is not a positive nonzero number",
  );
});

Deno.test("isPositiveNonZeroNumber: should return false for negative numbers", () => {
  assertEquals(
    isPositiveNonZeroNumber(-1),
    false,
    "-1 is not a positive nonzero number",
  );
  assertEquals(
    isPositiveNonZeroNumber(-2.5),
    false,
    "-2.5 is not a positive nonzero number",
  );
});

Deno.test("isPositiveNonZeroNumber: should return false for non-numbers", () => {
  assertEquals(isPositiveNonZeroNumber("1"), false, "`string` is not a number");
  assertEquals(isPositiveNonZeroNumber(true), false, "`true` is not a number");
  assertEquals(isPositiveNonZeroNumber(null), false, "`null` is not a number");
  assertEquals(
    isPositiveNonZeroNumber(undefined),
    false,
    "`undefined` is not a number",
  );
  assertEquals(isPositiveNonZeroNumber({}), false, "`{}` is not a number");
  assertEquals(isPositiveNonZeroNumber([]), false, "`[]` is not a number");
  assertEquals(isPositiveNonZeroNumber(NaN), false, "`NaN` is not a number");
});

Deno.test("isPositiveNonZeroNumber: should return false for zero", () => {
  (isPositiveNonZeroNumber(0), false, "0 is not a positive nonzero number");
});

Deno.test("isPositiveNonZeroNumber: should return true for Infinity", () => {
  assertEquals(
    isPositiveNonZeroNumber(Infinity),
    true,
    "Infinity is not a positive nonzero number",
  );
});

Deno.test("isPositiveNonZeroNumber: should narrow types to PositiveNonZero", () => {
  const value = 1;
  if (isPositiveNonZeroNumber(value)) {
    expectType<PositiveNonZero<1>>(value);
  }
});

Deno.test("isPositiveNonZeroNumber: should narrow incompatible types to never", () => {
  const value = { foo: "bar" } as const;
  if (isPositiveNonZeroNumber(value)) {
    expectType<never>(value);
  }
});
