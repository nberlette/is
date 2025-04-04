/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/date
 */

import { assertEquals } from "@std/assert";
import isDate from "./date.ts";

Deno.test("isDate() should return true for valid Date instances", () => {
  assertEquals(isDate(new Date()), true);
  assertEquals(isDate(new Date(0)), true);
  assertEquals(isDate(new Date("2021-01-01")), true);
});

Deno.test("isDate() should return false for invalid Date instances", () => {
  assertEquals(isDate(undefined), false);
  assertEquals(isDate(null), false);
  assertEquals(isDate(true), false);
  assertEquals(isDate(false), false);
  assertEquals(isDate(0), false);
  assertEquals(isDate("2021-01-01"), false);
  assertEquals(isDate({}), false);
  assertEquals(isDate([]), false);
});

Deno.test("isDate() should return false for instances created with Object.create(Date.prototype)", () => {
  const date = Object.create(Date.prototype);
  assertEquals(isDate(date), false);
});
