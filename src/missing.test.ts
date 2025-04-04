/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/missing
 */

import { assertEquals } from "@std/assert";
import { isMissing } from "./missing.ts";

Deno.test("isMissing should return true for null and undefined", () => {
  assertEquals(isMissing(null), true);
  assertEquals(isMissing(undefined), true);
});

Deno.test("isMissing should return false for other values", () => {
  assertEquals(isMissing(0), false);
  assertEquals(isMissing(""), false);
  assertEquals(isMissing(false), false);
});
