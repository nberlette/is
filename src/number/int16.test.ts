import { assertEquals } from "@std/assert";
import { isInt16 } from "./int16.ts";

Deno.test("isInt16: should true for valid int16", () => {
  assertEquals(isInt16(32767), true, "should return true for 32767");
  assertEquals(isInt16(-32768), true, "should return true for -32768");
});

Deno.test("isInt16: return false for invalid int16", () => {
  assertEquals(isInt16(32768), false, "should return false for 32768");
  assertEquals(isInt16(-32769), false, "should return false for -32769");
});

Deno.test("isInt16: should return false for non-number values", () => {
  assertEquals(isInt16("28f"), false, "should return for string");
  assertEquals(isInt16(true), false, "should false for boolean");
  assertEquals(isInt16(null), false, "should return false for null");
  assertEquals(isInt16(undefined), false, "should return false for undefined");
});

Deno.test("isInt16: should return false for non-integer numbers", () => {
  assertEquals(isInt16(32768.5), false, "should return false for float");
});
