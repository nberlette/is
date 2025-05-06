import { assertEquals } from "@std/assert";
import isDefined from "./defined.ts";

Deno.test("isDefined() should return true for non-undefined values", () => {
  assertEquals(isDefined(0), true);
  assertEquals(isDefined(""), true);
});

Deno.test("isDefined() should return false for undefined values", () => {
  assertEquals(isDefined(undefined), false);
  assertEquals(isDefined(void 0), false);
});

Deno.test("isDefined() should return true for null values", () => {
  assertEquals(isDefined(null), true);
});
