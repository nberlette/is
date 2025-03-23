import { assertEquals } from "@std/assert";
import { isRegExp } from "./regexp.ts";

Deno.test("isRegExp() should return true for literal RegExp instances", () => {
  assertEquals(isRegExp(/foo/), true);
});

Deno.test("isRegExp() should return true for RegExp instances", () => {
  assertEquals(isRegExp(new RegExp("foo")), true);
});

Deno.test("isRegExp() should return false for non-RegExp instances", () => {
  assertEquals(isRegExp("foo"), false);
  assertEquals(isRegExp(123), false);
  assertEquals(isRegExp(null), false);
  assertEquals(isRegExp(undefined), false);
  assertEquals(isRegExp({}), false);
});
