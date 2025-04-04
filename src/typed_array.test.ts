/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/typed-array
 */

import { assertEquals } from "@std/assert";
import { isTypedArray } from "./typed_array.ts";

Deno.test("isTypedArray should return true for TypedArray instances", () => {
  const arr = new Uint8Array(8);
  assertEquals(isTypedArray(arr), true);
});

Deno.test("isTypedArray should return true for TypedArray instances of specific type", () => {
  const arr = new Uint8Array(8);
  assertEquals(isTypedArray(arr, "Uint8Array"), true);
});

Deno.test("isTypedArray should return false for non-TypedArray instances", () => {
  const arr = new ArrayBuffer(8);
  assertEquals(isTypedArray(arr), false);
});

Deno.test("isTypedArray should return false for TypedArray instances of different type", () => {
  const arr = new Uint8Array(8);
  assertEquals(isTypedArray(arr, "Uint16Array"), false);
});
