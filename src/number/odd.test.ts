/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/odd
 */

import { assertEquals } from "@std/assert";
import { isOdd } from "./odd.ts";

Deno.test("isOdd should return true for odd numbers", () => {
  assertEquals(isOdd(1), true);
  assertEquals(isOdd(3), true);
  assertEquals(isOdd(5), true);
  assertEquals(isOdd(7), true);
  assertEquals(isOdd(9), true);
});

Deno.test("isOdd: should return false for even numbers", () => {
  assertEquals(isOdd(2), false);
  assertEquals(isOdd(4), false);
  assertEquals(isOdd(6), false);
  assertEquals(isOdd(8), false);
  assertEquals(isOdd(10), false);
});

Deno.test("isOdd: should return true for odd bigints", () => {
  assertEquals(isOdd(1n), true);
  assertEquals(isOdd(3n), true);
  assertEquals(isOdd(5n), true);
  assertEquals(isOdd(7n), true);
  assertEquals(isOdd(9), true);
});

Deno.test("isOdd: should return false for even bigints", () => {
  assertEquals(isOdd(2n), false);
  assertEquals(isOdd(4n), false);
  assertEquals(isOdd(6n), false);
  assertEquals(isOdd(8n), false);
  assertEquals(isOdd(10), false);
});

Deno.test("isOdd: should return true for odd numbers in string format", () => {
  assertEquals(isOdd("1"), true);
  assertEquals(isOdd("3"), true);
  assertEquals(isOdd("5"), true);
  assertEquals(isOdd("7"), true);
  assertEquals(isOdd("9"), true);
});

Deno.test("isOdd: should return false for even numbers in string format", () => {
  assertEquals(isOdd("2"), false);
  assertEquals(isOdd("4"), false);
  assertEquals(isOdd("6"), false);
  assertEquals(isOdd("8"), false);
  assertEquals(isOdd("10"), false);
});
