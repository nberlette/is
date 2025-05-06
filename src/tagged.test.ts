import { assertEquals } from "@std/assert";
import isTagged from "./tagged.ts";

Deno.test("isTagged should return true for objects with Symbol.toStringTag", () => {
  const obj = Object.create(null, { [Symbol.toStringTag]: { value: "Test" } });
  assertEquals(isTagged(obj, "Test"), true);
});

Deno.test("isTagged should return false for objects without Symbol.toStringTag", () => {
  const obj = Object.create(null);
  assertEquals(isTagged(obj, "Test"), false);
});

Deno.test("isTagged should return true for objects with matching Symbol.toStringTag", () => {
  const obj = Object.create(null, { [Symbol.toStringTag]: { value: "Test" } });
  assertEquals(isTagged(obj, "Test"), true);
});

Deno.test("isTagged should return false for objects with non-matching Symbol.toStringTag", () => {
  const obj = Object.create(null, { [Symbol.toStringTag]: { value: "Test" } });
  assertEquals(isTagged(obj, "Other"), false);
});
