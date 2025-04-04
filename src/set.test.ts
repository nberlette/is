/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/set
 */

// File: ./set.test.ts
import { assertEquals } from "@std/assert";
import isSet from "./set.ts";

Deno.test("isSet() should return true for Set instances", () => {
  assertEquals(isSet(new Set()), true);
});

Deno.test("isSet() should return false for non-Set instances", () => {
  assertEquals(isSet([]), false);
  assertEquals(isSet(new WeakSet()), false);
  assertEquals(isSet(new Map()), false);
  assertEquals(isSet(Object.create(Set.prototype)), false);
});

Deno.test("isSet() should return false for non-object values", () => {
  assertEquals(isSet(null), false);
  assertEquals(isSet(undefined), false);
  assertEquals(isSet(123), false);
  assertEquals(isSet("abc"), false);
  assertEquals(isSet(true), false);
});
