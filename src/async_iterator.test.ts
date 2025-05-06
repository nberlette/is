import { assertEquals } from "@std/assert";
import isAsyncIterator from "./async_iterator.ts";

Deno.test("isAsyncIterator should return true for an async iterator", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterator(iter), true);
});

Deno.test("isAsyncIterator should return true for an async iterator function", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterator(iter[Symbol.asyncIterator]()), true);
});

Deno.test("isAsyncIterator should return false for a non-iterator", () => {
  assertEquals(isAsyncIterator(1), false);
});

Deno.test("isAsyncIterator should return false for a non-async iterator", () => {
  const iter = (function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterator(iter), false);
});
