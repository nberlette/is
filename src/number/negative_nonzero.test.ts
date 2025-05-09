/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/negative-nonzero
 */

import { assertEquals } from "@std/assert";
import { isNegativeNonZeroNumber } from "./negative_nonzero.ts";

Deno.test("isNegativeNonZeroNumber: should return true for negative nonzero numbers", () => {
  assertEquals(
    isNegativeNonZeroNumber(-1),
    true,
    "should return true for negative nonzero numbers",
  );
});

Deno.test("isNegativeNonZeroNumber: should return false for zero", () => {
  assertEquals(
    isNegativeNonZeroNumber(0),
    false,
    "should return false for zero",
  );
});

Deno.test("isNegativeNonZeroNumber: should return false for positive nonzero numbers", () => {
  assertEquals(
    isNegativeNonZeroNumber(1),
    false,
    "should return false for positive nonzero numbers",
  );
});

Deno.test("isNegativeNonZero: should return false for negative zero", () => {
  assertEquals(
    isNegativeNonZeroNumber(-0),
    false,
    "should return false for negative zero",
  );
});

Deno.test("isNegativeNonZeroNumber: should return false for positive zero", () => {
  assertEquals(
    isNegativeNonZeroNumber(0),
    false,
    "should return false for positive zero",
  );
});

Deno.test("isNegativeNon return false for non-numbers", () => {
  assertEquals(
    isNegativeNonZeroNumber("string"),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber(true),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber(null),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber(undefined),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber({}),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber([]),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber(Symbol()),
    false,
    "should return false for non-numbers",
  );
  assertEquals(
    isNegativeNonZeroNumber(() => {}),
    false,
    "should return false for non-numbers",
  );
});
