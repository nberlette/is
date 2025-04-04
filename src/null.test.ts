/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/null
 */

import { assertEquals } from "@std/assert";
import { isNull } from "./null.ts";

Deno.test("isNull() should return true for null values", () => {
  assertEquals(isNull(null), true);
});

Deno.test("isNull() should return false for undefined values", () => {
  assertEquals(isNull(undefined), false);
});

Deno.test("isNull() should return false for numeric values", () => {
  assertEquals(isNull(0), false);
});

Deno.test("isNull() should return false for string values", () => {
  assertEquals(isNull(""), false);
});

Deno.test("isNull() should return false for boolean values", () => {
  assertEquals(isNull(false), false);
});
