import { assertEquals } from "@std/assert";
import { isArray, isNonEmptyArray } from "./array.ts";

Deno.test("isArray", () => {
  assertEquals(isArray([]), true);
  assertEquals(isArray([1, 2, 3]), true);
  assertEquals(isArray({}), false);
});

Deno.test("isNonEmptyArray", () => {
  assertEquals(isNonEmptyArray([]), false);
  assertEquals(isNonEmptyArray([1, 2, 3]), true);
  assertEquals(isNonEmptyArray({}), false);
});
