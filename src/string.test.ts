import { isString } from "./string.ts";
import { assertEquals } from "@std/assert";

Deno.test("isString() should return true for string values", () => {
  assertEquals(isString("test"), true);
});

Deno.test("isString() should return false for non-string values", () => {
  assertEquals(isString(123), false);
  assertEquals(isString(true), false);
  assertEquals(isString(null), false);
  assertEquals(isString(undefined), false);
  assertEquals(isString({}), false);
});
