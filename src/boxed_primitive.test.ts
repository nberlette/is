import { assertEquals } from "@std/assert/equals";
import { type BoxedPrimitive, isBoxedPrimitive } from "./boxed_primitive.ts";
import { expectType } from "./_internal.ts";

Deno.test("isBoxedPrimitive: basic tests", () => {
  assertEquals(typeof isBoxedPrimitive, "function", "should be a function");
  assertEquals(
    isBoxedPrimitive.name,
    "isBoxedPrimitive",
    "should have the correct name",
  );
  assertEquals(isBoxedPrimitive.length, 1, "should have the correct arity");
});

Deno.test("isBoxedPrimitive: Boolean objects", () => {
  assertEquals(
    isBoxedPrimitive(true),
    false,
    "should return false for boolean",
  );
  assertEquals(
    isBoxedPrimitive(false),
    false,
    "should return false for boolean",
  );
  assertEquals(
    isBoxedPrimitive(new Boolean(true)),
    true,
    "should return true for Boolean object",
  );
  assertEquals(
    isBoxedPrimitive(new Boolean(false)),
    true,
    "should return true for Boolean object",
  );
});

Deno.test("isBoxedPrimitive: Number objects", () => {
  assertEquals(isBoxedPrimitive(1), false, "should return false for number");
  assertEquals(
    isBoxedPrimitive(0),
    false,
    "should return false for number",
  );
  assertEquals(
    isBoxedPrimitive(NaN),
    false,
    "should return false for NaN",
  );
  assertEquals(
    isBoxedPrimitive(Infinity),
    false,
    "should return false for Infinity",
  );
  assertEquals(
    isBoxedPrimitive(-Infinity),
    false,
    "should return false for -Infinity",
  );
  assertEquals(
    isBoxedPrimitive(new Number(1)),
    true,
    "should return true for Number object",
  );
  assertEquals(
    isBoxedPrimitive(new Number(0)),
    true,
    "should return true for Number object",
  );
  assertEquals(
    isBoxedPrimitive(new Number(NaN)),
    true,
    "should return true for Number object",
  );
  assertEquals(
    isBoxedPrimitive(new Number(Infinity)),
    true,
    "should return true for Number object",
  );
  assertEquals(
    isBoxedPrimitive(Object(-Infinity)),
    true,
    "should return true for Number object",
  );
});

Deno.test("isBoxedPrimitive: String objects", () => {
  assertEquals(isBoxedPrimitive(""), false, "should return false for string");
  assertEquals(
    isBoxedPrimitive("test"),
    false,
    "should return false for string",
  );
  assertEquals(
    isBoxedPrimitive(new String("")),
    true,
    "should return true for String object",
  );
  assertEquals(
    isBoxedPrimitive(new String("test")),
    true,
    "should return true for String object",
  );
});

Deno.test("isBoxedPrimitive: Symbol objects", () => {
  assertEquals(
    isBoxedPrimitive(Symbol()),
    false,
    "should return false for symbol",
  );
  assertEquals(
    isBoxedPrimitive(Symbol("test")),
    false,
    "should return false for symbol",
  );
  assertEquals(
    isBoxedPrimitive(Object(Symbol("test"))),
    true,
    "should return true for unique Symbol object",
  );
  assertEquals(
    isBoxedPrimitive(Object(Symbol.iterator)),
    true,
    "should return true for well-known Symbol object",
  );
  assertEquals(
    isBoxedPrimitive(Object(Symbol.for("test"))),
    true,
    "should return true for registered Symbol objects",
  );
});

Deno.test("isBoxedPrimitive: BigInt objects", () => {
  assertEquals(isBoxedPrimitive(1n), false, "should return false for BigInt");
  assertEquals(
    isBoxedPrimitive(Object(1n)),
    true,
    "should return true for BigInt object",
  );
});

Deno.test("isBoxedPrimitive: Edge cases", () => {
  assertEquals(isBoxedPrimitive(null), false, "should return false for null");
  assertEquals(
    isBoxedPrimitive(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(isBoxedPrimitive({}), false, "should return false for object");
  assertEquals(isBoxedPrimitive([]), false, "should return false for array");
  assertEquals(
    isBoxedPrimitive(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isBoxedPrimitive: type narrowing", () => {
  const value: unknown = new Boolean(true);
  if (isBoxedPrimitive(value)) {
    expectType<BoxedPrimitive>(value);
  }
  expectType<unknown>(value);

  // deno-lint-ignore ban-types
  const value2: String | null | undefined = Object("test");
  if (isBoxedPrimitive(value2)) {
    // deno-lint-ignore ban-types
    expectType<String>(value2);
  }
  // deno-lint-ignore ban-types
  expectType<String | null | undefined>(value2);
});
