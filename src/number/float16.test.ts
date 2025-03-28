/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/float16
 */

import { assertEquals } from "@std/assert";
import { isFloat16 } from "./float16.ts";

Deno.test("isFloat16: should return true for valid float16 numbers", () => {
  assertEquals(isFloat16(1.25), true, "1.25 is a valid float16 number");
  assertEquals(isFloat16(3.125), true, "3.125 is a valid float16 number");
});

Deno.test("isFloat16: should return true for special float16 numbers", () => {
  assertEquals(isFloat16(0), true, "0 is a valid float16 number");
  assertEquals(isFloat16(-0), true, "-0 is a valid float16 number");
});

Deno.test("isFloat16: should return false for invalid float16 numbers", () => {
  assertEquals(isFloat16(1), false, "1 is not a valid float16 number");
  assertEquals(isFloat16(-1), false, "-1 is not a valid float16 number");
  assertEquals(
    isFloat16(1.1),
    false,
    "1.1 is not a valid float16 number",
  );
  assertEquals(isFloat16(1.49), false, "1.49 is not a valid float16 number");
});

Deno.test("isFloat16: should return false for non-numeric values", () => {
  assertEquals(isFloat16(true), false, "true is not a valid float16 number");
  assertEquals(isFloat16(null), false, "null is not a valid float16 number");
  assertEquals(
    isFloat16(undefined),
    false,
    "undefined is not a valid float16 number",
  );
});

Deno.test("isFloat16: should return false for Infinity and NaN", () => {
  assertEquals(
    isFloat16(Infinity),
    false,
    "Infinity is not a valid float16 number",
  );
  assertEquals(
    isFloat16(-Infinity),
    false,
    "-Infinity is not a valid float16 number",
  );
  assertEquals(isFloat16(NaN), false, "NaN is not a valid float16 number");
});
