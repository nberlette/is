import { assertEquals } from "@std/assert";
import { isCloser } from "./closer.ts";

Deno.test("isCloser() should return true for objects with a 'close' method", () => {
  const mock = { close: () => {} };
  assertEquals(isCloser(mock), true);
});

Deno.test("isCloser() should return false for non-objects", () => {
  assertEquals(isCloser(null), false);
  assertEquals(isCloser(undefined), false);
  assertEquals(isCloser(123), false);
  assertEquals(isCloser("string"), false);
  assertEquals(isCloser(true), false);
});

Deno.test("isCloser() should return false for objects without a 'close' method", () => {
  const mock = { otherMethod: () => {} };
  assertEquals(isCloser(mock), false);
});
