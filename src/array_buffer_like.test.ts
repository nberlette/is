/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/array-buffer-like
 */

import { assertEquals } from "@std/assert";
import isArrayBufferLike from "./array_buffer_like.ts";

Deno.test("isArrayBufferLike() should return true for ArrayBuffer", () => {
  const buffer = new ArrayBuffer(8);
  assertEquals(isArrayBufferLike(buffer), true);
});

Deno.test("isArrayBufferLike() should return true for SharedArrayBuffer", () => {
  const shared = new SharedArrayBuffer(8);
  assertEquals(isArrayBufferLike(shared), true);
});

Deno.test("isArrayBufferLike() should return false for non-ArrayBufferLike", () => {
  const array = new Uint8Array(8);
  assertEquals(isArrayBufferLike(array), false);
});

Deno.test("isArrayBufferLike() should return true for ArrayBuffer in ArrayBufferLike", () => {
  const array = new Uint8Array(8);
  assertEquals(isArrayBufferLike(array.buffer), true);
});
