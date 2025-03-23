import { assertEquals } from "@std/assert";
import isIterableObject from "./iterable_object.ts";

Deno.test("isIterableObject should return true for iterable objects", () => {
  assertEquals(isIterableObject([1, 2]), true);
  assertEquals(isIterableObject(new Map()), true);
  assertEquals(isIterableObject(new Set()), true);
  assertEquals(isIterableObject({ [Symbol.iterator]: () => {} }), true);
});

Deno.test("isIterableObject should return false for non-iterable objects", () => {
  assertEquals(isIterableObject("foo"), false);
});

Deno.test("isIterableObject should return false for non-objects", () => {
  assertEquals(isIterableObject(123), false);
  assertEquals(isIterableObject(null), false);
  assertEquals(isIterableObject(undefined), false);
  assertEquals(isIterableObject(true), false);
  assertEquals(isIterableObject(false), false);
  assertEquals(isIterableObject(Symbol()), false);
});
