/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/data-view
 */

import { assertEquals } from "@std/assert";
import isDataView from "./data_view.ts";

Deno.test("isDataView should return true for DataView instances", () => {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  assertEquals(isDataView(view), true);
});

Deno.test("isDataView should return false for non-DataView instances", () => {
  const buffer = new ArrayBuffer(8);
  assertEquals(isDataView(buffer), false);
});

Deno.test("isDataView should return false for TypedArray instances", () => {
  const array = new Uint8Array(8);
  assertEquals(isDataView(array), false);
});

Deno.test("isDataView should return false for non-ArrayBufferView instances", () => {
  const nonArrayBufferView = { byteLength: 8 };
  assertEquals(isDataView(nonArrayBufferView), false);
});
