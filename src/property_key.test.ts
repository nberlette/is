/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/property-key
 */

import { assertEquals } from "@std/assert";
import { isPropertyKey } from "./property_key.ts";

Deno.test("isPropertyKey() should return true for string values", () => {
  assertEquals(isPropertyKey("foo"), true);
});

Deno.test("isPropertyKey() should return true for number values", () => {
  assertEquals(isPropertyKey(42), true);
});

Deno.test("isPropertyKey() should return true for symbol values", () => {
  assertEquals(isPropertyKey(Symbol("foo")), true);
});

Deno.test("isPropertyKey() should return false for object values", () => {
  assertEquals(isPropertyKey({ foo: "bar" }), false);
});
