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
