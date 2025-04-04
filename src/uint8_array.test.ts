/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/uint8-array
 */

import { assertEquals } from "@std/assert";
import { isUint8Array } from "./uint8_array.ts";

Deno.test("isUint8Array() should return true for Uint8Array instances", () => {
  const arr = new Uint8Array(8);
  assertEquals(isUint8Array(arr), true);
});

Deno.test(
  "isUint8Array() should return false for non-Uint8Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isUint8Array(arr), false);
  },
);

Deno.test(
  "isUint8Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isUint8Array(num), false);
  },
);

Deno.test("isUint8Array() should return false for non-Uint8Array views", () => {
  const arr = new Uint8Array(8);
  const view = new DataView(arr.buffer);
  assertEquals(isUint8Array(view), false);
});
