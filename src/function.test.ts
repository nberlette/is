import { isFunction } from "./function.ts";
import { assertEquals } from "@std/assert";

Deno.test("isFunction should return true for function", () => {
  assertEquals(isFunction(() => {}), true);
  assertEquals(isFunction(function () {}), true);
  assertEquals(isFunction(class {}), true);
  assertEquals(isFunction(new Function()), true);
});

Deno.test("isFunction should return false for non-function values", () => {
  assertEquals(isFunction({}), false);
  assertEquals(isFunction(1), false);
  assertEquals(isFunction("string"), false);
  assertEquals(isFunction(null), false);
  assertEquals(isFunction(undefined), false);
});
