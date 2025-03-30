/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/int32-array
 */

import { assertEquals } from "@std/assert";
import isInt32Array from "./int32_array.ts";

Deno.test("isInt32Array() should return true for Int32Array instances", () => {
  const arr = new Int32Array(8);
  assertEquals(isInt32Array(arr), true);
});

Deno.test(
  "isInt32Array() should return false for non-Int32Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isInt32Array(arr), false);
  },
);

Deno.test(
  "isInt32Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isInt32Array(num), false);
  },
);

Deno.test("isInt32Array() should return false for null", () => {
  assertEquals(isInt32Array(null), false);
});

Deno.test("isInt32Array() should return false for undefined", () => {
  assertEquals(isInt32Array(undefined), false);
});
