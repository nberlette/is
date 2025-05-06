import { assertEquals } from "@std/assert";
import isWeakSet from "./weak_set.ts";

Deno.test("isWeakSet should return true for WeakSet instances", () => {
  const weakSet = new WeakSet();
  assertEquals(isWeakSet(weakSet), true);
});

Deno.test("isWeakSet should return false for non-WeakSet instances", () => {
  const nonWeakSet = {};
  assertEquals(isWeakSet(nonWeakSet), false);
});

Deno.test("isWeakSet should return false for null", () => {
  assertEquals(isWeakSet(null), false);
});

Deno.test("isWeakSet should return false for undefined", () => {
  assertEquals(isWeakSet(undefined), false);
});

Deno.test("isWeakSet should return false for primitive types", () => {
  assertEquals(isWeakSet(1), false);
  assertEquals(isWeakSet("string"), false);
  assertEquals(isWeakSet(true), false);
});

Deno.test("isWeakSet should return false for objects without Symbol.toStringTag", () => {
  const obj = Object.create(null);
  assertEquals(isWeakSet(obj), false);
});
