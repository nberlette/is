/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/regexp
 */

import { assertEquals } from "@std/assert";
import { isRegExp } from "./regexp.ts";

Deno.test("isRegExp() should return true for literal RegExp instances", () => {
  assertEquals(isRegExp(/foo/), true);
});

Deno.test("isRegExp() should return true for RegExp instances", () => {
  assertEquals(isRegExp(new RegExp("foo")), true);
});

Deno.test("isRegExp() should return false for non-RegExp instances", () => {
  assertEquals(isRegExp("foo"), false);
  assertEquals(isRegExp(123), false);
  assertEquals(isRegExp(null), false);
  assertEquals(isRegExp(undefined), false);
  assertEquals(isRegExp({}), false);
});
