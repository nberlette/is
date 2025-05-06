import { assertEquals } from "@std/assert";
import isInt8Array from "./int8_array.ts";

Deno.test("isInt8Array should return true for Int8Array instances", () => {
  const arr = new Int8Array(8);
  assertEquals(isInt8Array(arr), true);
});

Deno.test("isInt8Array should return false for non-Int8Array instances", () => {
  const arr = new ArrayBuffer(8);
  assertEquals(isInt8Array(arr), false);
});

Deno.test(
  "isInt8Array should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isInt8Array(num), false);
  },
);

Deno.test(
  "isInt8Array should return false for array-buffer-like objects",
  () => {
    const obj = { byteLength: 8 };
    assertEquals(isInt8Array(obj), false);
  },
);
