import { assertEquals } from "@std/assert";
import { isIterator } from "./iterator.ts";

Deno.test("isIterator should return true for iterators", () => {
  const iterable = [1, 2, 3];
  const iterator = iterable[Symbol.iterator]();
  assertEquals(isIterator(iterator), true);
});

Deno.test("isIterator should return false for non-iterators", () => {
  assertEquals(isIterator(1), false);
  assertEquals(isIterator("string"), false);
  assertEquals(isIterator(true), false);
  assertEquals(isIterator({}), false);
});
