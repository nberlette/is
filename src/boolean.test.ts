/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/boolean
 */

import { assertEquals } from "@std/assert";
import { isBoolean } from "./boolean.ts";

Deno.test("isBoolean() should return true for boolean values", () => {
  assertEquals(isBoolean(true), true);
  assertEquals(isBoolean(false), true);
});

Deno.test("isBoolean() should return false for non-boolean values", () => {
  assertEquals(isBoolean(1), false);
  assertEquals(isBoolean("true"), false);
  assertEquals(isBoolean(null), false);
  assertEquals(isBoolean(undefined), false);
  assertEquals(isBoolean({}), false);
  assertEquals(isBoolean([]), false);
});
