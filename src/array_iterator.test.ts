/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/array-iterator
 */

import { assertEquals } from "@std/assert";
import isArrayIterator from "./array_iterator.ts";

Deno.test("isArrayIterator should return true for Array Iterator", () => {
  const array = ["foo", "bar", "foo"];
  const iterator = array[Symbol.iterator]();
  assertEquals(isArrayIterator(iterator), true);
});

Deno.test("isArrayIterator should return false for non-Array Iterator", () => {
  const array = ["foo", "bar", "foo"];
  assertEquals(isArrayIterator(array), false);
});

Deno.test("isArrayIterator should return false for non-iterable", () => {
  assertEquals(isArrayIterator("foo"), false);
});

Deno.test("isArrayIterator should return false for null", () => {
  assertEquals(isArrayIterator(null), false);
});

Deno.test("isArrayIterator should return false for undefined", () => {
  assertEquals(isArrayIterator(undefined), false);
});
