import { assertEquals } from "@std/assert";
import isWeakMap from "./weak_map.ts";

Deno.test("isWeakMap should return true for WeakMap instances", () => {
  const weakMap = new WeakMap();
  assertEquals(isWeakMap(weakMap), true);
});

Deno.test("isWeakMap should return false for non-WeakMap instances", () => {
  const map = new Map();
  assertEquals(isWeakMap(map), false);
});

Deno.test("isWeakMap should return false for non-object instances", () => {
  assertEquals(isWeakMap(null), false);
  assertEquals(isWeakMap(undefined), false);
  assertEquals(isWeakMap(123), false);
  assertEquals(isWeakMap("abc"), false);
});

Deno.test("isWeakMap should return false for non-WeakMap instances", () => {
  const weakSet = new WeakSet();
  assertEquals(isWeakMap(weakSet), false);
});
