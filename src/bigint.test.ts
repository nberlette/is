/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/bigint
 */

import { assertEquals } from "@std/assert";
import { isBigInt } from "./bigint.ts";

Deno.test("isBigInt() should return true for bigint values", () => {
  const testValue: unknown = 123n;
  assertEquals(isBigInt(testValue), true);
});

Deno.test("isBigInt() should return false for non-bigint values", () => {
  const testValue: unknown = 123;
  assertEquals(isBigInt(testValue), false);
});

Deno.test("isBigInt() should return false for string values", () => {
  const testValue: unknown = "123";
  assertEquals(isBigInt(testValue), false);
});

Deno.test("isBigInt() should return false for boolean values", () => {
  const testValue: unknown = true;
  assertEquals(isBigInt(testValue), false);
});
