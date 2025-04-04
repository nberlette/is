/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/map-iterator
 */

import { assertEquals } from "@std/assert";
import isMapIterator from "./map_iterator.ts";

Deno.test("isMapIterator should return true for Map Iterator", () => {
  const map = new Map([["foo", 1], ["bar", 2]]);
  const iterator = map.entries();
  assertEquals(isMapIterator(iterator), true);
});

Deno.test("isMapIterator should return false for non-Map Iterator", () => {
  const map = new Map([["foo", 1], ["bar", 2]]);
  assertEquals(isMapIterator(map), false);
});

Deno.test("isMapIterator should return true for Map Entries", () => {
  const map = new Map([["foo", 1], ["bar", 2]]);
  const iterator = map[Symbol.iterator]();
  assertEquals(isMapIterator(iterator), true);
});
