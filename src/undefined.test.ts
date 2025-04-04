/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/undefined
 */

import { assertEquals } from "@std/assert";
import { isUndefined } from "./undefined.ts";

Deno.test("isUndefined() should return true for undefined values", () => {
  assertEquals(isUndefined(undefined), true);
});

Deno.test("isUndefined() should return false for null values", () => {
  assertEquals(isUndefined(null), false);
});

Deno.test("isUndefined() should return false for numeric values", () => {
  assertEquals(isUndefined(0), false);
});

Deno.test("isUndefined() should return true for void values", () => {
  assertEquals(isUndefined(void 0), true);
});

Deno.test("isUndefined() should return false for string values", () => {
  assertEquals(isUndefined(""), false);
});
