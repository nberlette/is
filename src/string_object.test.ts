import { assertEquals } from "@std/assert/equals";
import { isStringObject } from "./string_object.ts";
import { expectType } from "./_internal.ts";

Deno.test("isStringObject: basic tests", () => {
  assertEquals(typeof isStringObject, "function", "should be a function");
  assertEquals(
    isStringObject.name,
    "isStringObject",
    "should have the correct name",
  );
  assertEquals(isStringObject.length, 1, "should have the correct arity");
});

Deno.test("isStringObject: behavior", () => {
  assertEquals(isStringObject(""), false, "should return false for string");
  assertEquals(
    isStringObject(Object("")),
    true,
    "should return true for String object",
  );
});

Deno.test("isStringObject: edge cases", () => {
  assertEquals(isStringObject(null), false, "should return false for null");
  assertEquals(
    isStringObject("true"),
    false,
    "should return false for string",
  );
  assertEquals(isStringObject(true), false, "should return false for boolean");
  assertEquals(isStringObject(1), false, "should return false for number");
  assertEquals(isStringObject({}), false, "should return false for object");
  assertEquals(isStringObject([]), false, "should return false for array");
  assertEquals(
    isStringObject(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(
    isStringObject(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isStringObject: type narrowing", () => {
  const x: unknown = Object("");
  // deno-lint-ignore ban-types
  if (isStringObject(x)) expectType<String>(x);
  expectType<unknown>(x);
});
