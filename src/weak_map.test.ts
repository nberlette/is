/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/weak-map
 */

import { assertEquals } from "@std/assert";
import isWeakMap from "./weak_map.ts";

Deno.test("isWeakMap should return true for WeakMap instances", () => {
  const weakMap = new WeakMap();
  assertEquals(isWeakMap(weakMap), true);
});

Deno.test("isWeakMap should return false for non-WeakMap instances", () => {
  const map = new Map();
  assertEquals(isWeakMap(map), false);
});

Deno.test("isWeakMap should return false for non-object instances", () => {
  assertEquals(isWeakMap(null), false);
  assertEquals(isWeakMap(undefined), false);
  assertEquals(isWeakMap(123), false);
  assertEquals(isWeakMap("abc"), false);
});

Deno.test("isWeakMap should return false for non-WeakMap instances", () => {
  const weakSet = new WeakSet();
  assertEquals(isWeakMap(weakSet), false);
});
