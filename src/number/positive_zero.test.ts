/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/positive-zero
 */

import { assertEquals } from "@std/assert";
import { isPositiveZero } from "./positive_zero.ts";

Deno.test("isZero should return true positive zero", () => {
  const result = isPositiveZero(0);
  assertEquals(result, true, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for negative zero", () => {
  const result = isPositiveZero(-0);
  assertEquals(result, false, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for nonzero numbers", () => {
  const result = isPositiveZero(1);
  assertEquals(result, false, "isPositiveZero() functions as expected");
});

Deno.test("isZero should return false for non-number values", () => {
  const result = isPositiveZero("");
  assertEquals(result, false, "isPositiveZero() functions as expected");
});
