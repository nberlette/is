import { assertEquals } from "@std/assert";
import { isObject } from "./object.ts";

Deno.test("isObject should return true for non-null objects", () => {
  assertEquals(isObject({}), true);
  assertEquals(isObject(new class {}()), true);
  assertEquals(isObject(new Object()), true);
});

Deno.test("isObject should return false for null", () => {
  assertEquals(isObject(null), false);
});

Deno.test("isObject should return false for undefined", () => {
  assertEquals(isObject(undefined), false);
});

Deno.test("isObject should return false for arrays", () => {
  assertEquals(isObject([]), false);
});

Deno.test("isObject should return false for functions", () => {
  assertEquals(isObject(() => {}), false);
});

Deno.test("isObject should return false for numbers", () => {
  assertEquals(isObject(123), false);
});

Deno.test("isObject should return false for strings", () => {
  assertEquals(isObject("abc"), false);
});

Deno.test("isObject should return false for symbols", () => {
  assertEquals(isObject(Symbol()), false);
});
