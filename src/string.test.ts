/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/string
 */

import { isString } from "./string.ts";
import { assertEquals } from "@std/assert";

Deno.test("isString() should return true for string values", () => {
  assertEquals(isString("test"), true);
});

Deno.test("isString() should return false for non-string values", () => {
  assertEquals(isString(123), false);
  assertEquals(isString(true), false);
  assertEquals(isString(null), false);
  assertEquals(isString(undefined), false);
  assertEquals(isString({}), false);
});
