/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/buffer-source
 */

import { assertEquals } from "@std/assert";
import isBufferSource from "./buffer_source.ts";

Deno.test("isBufferSource should return true for ArrayBuffer", () => {
  const buffer = new ArrayBuffer(8);
  assertEquals(isBufferSource(buffer), true);
});

Deno.test("isBufferSource should return true for SharedArrayBuffer", () => {
  const buffer = new SharedArrayBuffer(8);
  assertEquals(isBufferSource(buffer), true);
});

Deno.test("isBufferSource should return true for ArrayBufferView", () => {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  assertEquals(isBufferSource(view), true);
});
