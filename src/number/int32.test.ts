import { assertEquals } from "@std/assert";
import { isInt32 } from "./int32.ts";

Deno.test("is32: should return true for valid 32-bit signed integers", () => {
  assertEquals(
    isInt32(0x7FFFFFFF),
    true,
    "0x7FFFFFFF is a valid 32-bit signed integer",
  );
  assertEquals(
    isInt32(-2147483648),
    true,
    "-214748648 is a valid 32-bit signed integer",
  );
  assertEquals(
    isInt32(2147483647),
    true,
    "2147483647 a valid 32-bit signed integer",
  );
});

Deno.test("isInt32: should return false for invalid 32-bit signed integers", () => {
  assertEquals(
    isInt32(0x80000000),
    false,
    "0x80000000 is not a valid 32-bit signed integer",
  );
  assertEquals(
    isInt32(-2147483649),
    false,
    "-2147483649 is not a valid 32-bit signed integer",
  );
  assertEquals(
    isInt32(2147483648),
    false,
    "2147483648 is not a 32-bit signed integer",
  );
});

Deno.test("isInt32: should return false for-integer values", () => {
  assertEquals(isInt32(0.5), false, "0.5 is not an integer");
  assertEquals(isInt32(21474836.5), false, "2147483647.5 is not an integer");
});

Deno.test("isInt32: should return false for non-number values", () => {
  assertEquals(isInt32("147483647"), false, "2147483647 is a string");
  assertEquals(isInt32(true), false, "true is a boolean");
  assertEquals(isInt32(null), false, "null is a null");
  assertEquals(isInt32(undefined), false, "undefined is undefined");
});
