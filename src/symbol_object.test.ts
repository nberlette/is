import { assertEquals } from "@std/assert/equals";
import { isSymbolObject } from "./symbol_object.ts";
import { expectType } from "./_internal.ts";

Deno.test("isSymbolObject: basic tests", () => {
  assertEquals(typeof isSymbolObject, "function", "should be a function");
  assertEquals(
    isSymbolObject.name,
    "isSymbolObject",
    "should have the correct name",
  );
  assertEquals(isSymbolObject.length, 1, "should have the correct arity");
});

Deno.test("isSymbolObject: behavior", () => {
  assertEquals(
    isSymbolObject(Symbol()),
    false,
    "should return false for symbol",
  );
  assertEquals(
    isSymbolObject(Object(Symbol())),
    true,
    "should return true for Symbol object",
  );
});

Deno.test("isSymbolObject: edge cases", () => {
  assertEquals(isSymbolObject(null), false, "should return false for null");
  assertEquals(
    isSymbolObject("true"),
    false,
    "should return false for string",
  );
  assertEquals(isSymbolObject(1), false, "should return false for number");
  assertEquals(isSymbolObject({}), false, "should return false for object");
  assertEquals(isSymbolObject([]), false, "should return false for array");
  assertEquals(
    isSymbolObject(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(
    isSymbolObject(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isSymbolObject: type narrowing", () => {
  const x: unknown = Object(Symbol());
  // deno-lint-ignore ban-types
  if (isSymbolObject(x)) expectType<Symbol>(x);
  expectType<unknown>(x);
});
