/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/uint8-clamped-array
 */

import { assertEquals } from "@std/assert";
import { isUint8ClampedArray } from "./uint8_clamped_array.ts";

Deno.test("isUint8ClampedArray() should return true for Uint8ClampedArray instances", () => {
  const arr = new Uint8ClampedArray(8);
  assertEquals(isUint8ClampedArray(arr), true);
});

Deno.test("isUint8ClampedArray() should return false for non-Uint8ClampedArray instances", () => {
  const arr = new ArrayBuffer(8);
  assertEquals(isUint8ClampedArray(arr), false);
});

Deno.test("isUint8ClampedArray() should return false for non-array-buffer instances", () => {
  const num = 8;
  assertEquals(isUint8ClampedArray(num), false);
});
