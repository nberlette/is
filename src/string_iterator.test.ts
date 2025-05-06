import { assertEquals } from "@std/assert";
import { isStringIterator } from "./string_iterator.ts";

Deno.test("isStringIterator should return true for string iterators", () => {
  const str = "foo";
  const iter = str[Symbol.iterator]();
  assertEquals(isStringIterator(iter), true);
});

Deno.test("isStringIterator should return false for non-string iterators", () => {
  const nonIter = {
    [Symbol.iterator]: function* () {
      yield "foo";
    },
  };
  assertEquals(isStringIterator(nonIter), false);
});

Deno.test("isStringIterator should return false for non-iterators", () => {
  assertEquals(isStringIterator("foo"), false);
  assertEquals(isStringIterator(123), false);
  assertEquals(isStringIterator(null), false);
  assertEquals(isStringIterator(undefined), false);
});
