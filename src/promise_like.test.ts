import { assertEquals } from "@std/assert";
import isPromiseLike from "./promise_like.ts";

Deno.test("isPromiseLike should return true for Promise.resolve()", () => {
  assertEquals(isPromiseLike(Promise.resolve()), true);
});

Deno.test("isPromiseLike should return true for objects with a then method", () => {
  assertEquals(isPromiseLike({ then: () => {} }), true);
});

Deno.test("isPromiseLike should return false for objects without a then method", () => {
  assertEquals(isPromiseLike({}), false);
});

Deno.test("isPromiseLike should return false for non-objects", () => {
  assertEquals(isPromiseLike(null), false);
  assertEquals(isPromiseLike(undefined), false);
  assertEquals(isPromiseLike(1), false);
  assertEquals(isPromiseLike("string"), false);
});
