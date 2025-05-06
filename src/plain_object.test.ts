import { assertEquals } from "@std/assert";
import isPlainObject from "./plain_object.ts";

Deno.test("isPlainObject", () => {
  assertEquals(isPlainObject({}), true, "empty object");
  assertEquals(isPlainObject(new Object()), true, "Object instance");

  assertEquals(isPlainObject([]), false, "array");
  assertEquals(isPlainObject(() => {}), false, "function");
  assertEquals(isPlainObject(null), false, "null");
  assertEquals(isPlainObject(undefined), false, "undefined");
  assertEquals(isPlainObject(new class {}()), false, "class instance");
  assertEquals(isPlainObject(1), false, "number");
});
