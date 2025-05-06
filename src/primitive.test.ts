import { isPrimitive } from "./primitive.ts";
import { assertEquals } from "@std/assert";

Deno.test("isPrimitive() should return true for primitive values", () => {
  assertEquals(isPrimitive("foo"), true);
  assertEquals(isPrimitive(42), true);
  assertEquals(isPrimitive(BigInt(42)), true);
  assertEquals(isPrimitive(true), true);
  assertEquals(isPrimitive(Symbol("foo")), true);
  assertEquals(isPrimitive(null), true);
  assertEquals(isPrimitive(undefined), true);
});

Deno.test("isPrimitive() should return false for non-primitive values", () => {
  assertEquals(isPrimitive({}), false);
  assertEquals(isPrimitive(new String("foo")), false);
  assertEquals(isPrimitive(new Number(42)), false);
  assertEquals(isPrimitive(new Boolean(true)), false);
});
