import { assertEquals } from "@std/assert";
import isMap from "./map.ts";

Deno.test("isMap should return true for Map instances", () => {
  assertEquals(isMap(new Map()), true);
});

Deno.test("isMap should return false for non-Map instances", () => {
  assertEquals(isMap(new WeakMap()), false);
  assertEquals(isMap({}), false);
  assertEquals(isMap(new Set()), false);
});

Deno.test("isMap should return false for objects created via Object.create(Map.prototype)", () => {
  const fakeMap = Object.create(Map.prototype);
  assertEquals(isMap(fakeMap), false);
});
