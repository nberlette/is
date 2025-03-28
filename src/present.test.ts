/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/present
 */

import { assertEquals } from "@std/assert";
import { isPresent } from "./present.ts";

Deno.test("isPresent should return false for null values", () => {
  assertEquals(isPresent(null), false);
});

Deno.test("isPresent should return false for undefined values", () => {
  assertEquals(isPresent(undefined), false);
});

Deno.test("isPresent should return true for non-null and non-undefined values", () => {
  assertEquals(isPresent(0), true);
  assertEquals(isPresent(""), true);
  assertEquals(isPresent(false), true);
});
