/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/object
 */

import { assertEquals } from "@std/assert";
import { isObject } from "./object.ts";

Deno.test("isObject should return true for non-null objects", () => {
  assertEquals(isObject({}), true);
  assertEquals(isObject(new class {}()), true);
  assertEquals(isObject(new Object()), true);
  assertEquals(isObject([]), true);
});

Deno.test("isObject should return false for null", () => {
  assertEquals(isObject(null), false);
});

Deno.test("isObject should return false for undefined", () => {
  assertEquals(isObject(undefined), false);
});

Deno.test("isObject should return false for functions", () => {
  assertEquals(isObject(() => {}), false);
});

Deno.test("isObject should return false for numbers", () => {
  assertEquals(isObject(123), false);
});

Deno.test("isObject should return false for strings", () => {
  assertEquals(isObject("abc"), false);
});

Deno.test("isObject should return false for symbols", () => {
  assertEquals(isObject(Symbol()), false);
});
