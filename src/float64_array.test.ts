import { assertEquals } from "@std/assert";
import { isFloat64Array } from "./float64_array.ts";

Deno.test(
  "isFloat64Array() should return true for Float64Array instances",
  () => {
    const arr = new Float64Array(8);
    assertEquals(isFloat64Array(arr), true);
  },
);

Deno.test(
  "isFloat64Array() should return false for non-Float64Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isFloat64Array(arr), false);
  },
);

Deno.test(
  "isFloat64Array() should return false for non-array-buffer instances",
  () => {
    const nonArrayBuffer = { byteLength: 8 };
    assertEquals(isFloat64Array(nonArrayBuffer), false);
  },
);

Deno.test("isFloat64Array() should return false for null", () => {
  assertEquals(isFloat64Array(null), false);
});
