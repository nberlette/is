/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/uint16-array
 */

import { assertEquals } from "@std/assert";
import { isUint16Array } from "./uint16_array.ts";

Deno.test(
  "isUint16Array() should return true for Uint16Array instances",
  () => {
    const arr = new Uint16Array(8);
    assertEquals(isUint16Array(arr), true);
  },
);

Deno.test(
  "isUint16Array() should return false for non-Uint16Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isUint16Array(arr), false);
  },
);

Deno.test(
  "isUint16Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isUint16Array(num), false);
  },
);

Deno.test("isUint16Array() should return false for null", () => {
  assertEquals(isUint16Array(null), false);
});
