/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/shared-array-buffer
 */

import { assertEquals } from "@std/assert";
import isSharedArrayBuffer from "./shared_array_buffer.ts";

Deno.test("isSharedArrayBuffer() should return true for SharedArrayBuffer instances", () => {
  const shared = new SharedArrayBuffer(8);
  assertEquals(isSharedArrayBuffer(shared), true);
});

Deno.test("isSharedArrayBuffer() should return false for ArrayBuffer instances", () => {
  const array = new ArrayBuffer(8);
  assertEquals(isSharedArrayBuffer(array), false);
});

Deno.test("isSharedArrayBuffer() should return false for non-Buffer instances", () => {
  assertEquals(isSharedArrayBuffer(null), false);
  assertEquals(isSharedArrayBuffer(undefined), false);
  assertEquals(isSharedArrayBuffer(123), false);
  assertEquals(isSharedArrayBuffer("abc"), false);
  assertEquals(isSharedArrayBuffer(true), false);
  assertEquals(isSharedArrayBuffer(false), false);
  assertEquals(isSharedArrayBuffer({}), false);
  assertEquals(isSharedArrayBuffer([]), false);
  assertEquals(isSharedArrayBuffer(() => {}), false);
  assertEquals(isSharedArrayBuffer(Symbol("test")), false);
  assertEquals(isSharedArrayBuffer(new Uint8Array()), false);
});
