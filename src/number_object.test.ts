import { assertEquals } from "@std/assert/equals";
import { isNumberObject } from "./number_object.ts";
import { expectType } from "./_internal.ts";

Deno.test("isNumberObject: basic tests", () => {
  assertEquals(typeof isNumberObject, "function", "should be a function");
  assertEquals(
    isNumberObject.name,
    "isNumberObject",
    "should have the correct name",
  );
  assertEquals(isNumberObject.length, 1, "should have the correct arity");
});

Deno.test("isNumberObject: behavior", () => {
  assertEquals(isNumberObject(0), false, "should return false for number");
  assertEquals(
    isNumberObject(-0),
    false,
    "should return false for number",
  );
  assertEquals(
    isNumberObject(Object(0)),
    true,
    "should return true for Number object",
  );
  assertEquals(
    isNumberObject(Object(-0)),
    true,
    "should return true for Number object",
  );
});

Deno.test("isNumberObject: edge cases", () => {
  assertEquals(isNumberObject(null), false, "should return false for null");
  assertEquals(
    isNumberObject("true"),
    false,
    "should return false for string",
  );
  assertEquals(isNumberObject(true), false, "should return false for boolean");
  assertEquals(isNumberObject({}), false, "should return false for object");
  assertEquals(isNumberObject([]), false, "should return false for array");
  assertEquals(
    isNumberObject(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(
    isNumberObject(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isNumberObject: type narrowing", () => {
  const x: unknown = Object(0);
  // deno-lint-ignore ban-types
  if (isNumberObject(x)) expectType<Number>(x);
  expectType<unknown>(x);
});
