/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/boolean-object
 */

import { assertEquals } from "@std/assert/equals";
import { isBooleanObject } from "./boolean_object.ts";
import { expectType } from "./_internal.ts";

Deno.test("isBooleanObject: basic tests", () => {
  assertEquals(typeof isBooleanObject, "function", "should be a function");
  assertEquals(
    isBooleanObject.name,
    "isBooleanObject",
    "should have the correct name",
  );
  assertEquals(isBooleanObject.length, 1, "should have the correct arity");
});

Deno.test("isBooleanObject: behavior", () => {
  assertEquals(isBooleanObject(true), false, "should return false for boolean");
  assertEquals(
    isBooleanObject(false),
    false,
    "should return false for boolean",
  );
  assertEquals(
    isBooleanObject(new Boolean(true)),
    true,
    "should return true for Boolean object",
  );
  assertEquals(
    isBooleanObject(new Boolean(false)),
    true,
    "should return true for Boolean object",
  );
});

Deno.test("isBooleanObject: edge cases", () => {
  assertEquals(isBooleanObject(null), false, "should return false for null");
  assertEquals(
    isBooleanObject("true"),
    false,
    "should return false for string",
  );
  assertEquals(isBooleanObject(1), false, "should return false for number");
  assertEquals(isBooleanObject({}), false, "should return false for object");
  assertEquals(isBooleanObject([]), false, "should return false for array");
  assertEquals(
    isBooleanObject(undefined),
    false,
    "should return false for undefined",
  );
  assertEquals(
    isBooleanObject(new Date()),
    false,
    "should return false for Date object",
  );
});

Deno.test("isBooleanObject: type narrowing", () => {
  const x: unknown = new Boolean(true);
  // deno-lint-ignore ban-types
  if (isBooleanObject(x)) expectType<Boolean>(x);
  expectType<unknown>(x);
});
