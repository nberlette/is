/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/iterable-iterator
 */

import { assertEquals } from "@std/assert";
import { isIterableIterator } from "./iterable_iterator.ts";

Deno.test("isIterableIterator should return true for an array iterator", () => {
  const iter = [1, 2][Symbol.iterator]();
  assertEquals(isIterableIterator(iter), true);
});

Deno.test("isIterableIterator should return true for a function that returns an iterator", () => {
  const iter = (() => ({
    next: () => ({ value: 1, done: false }),
    [Symbol.iterator]: () => iter,
  }))();
  assertEquals(isIterableIterator(iter), true);
});

Deno.test("isIterableIterator should return false for a non-iterator", () => {
  assertEquals(isIterableIterator(1), false);
});

Deno.test("isIterableIterator should return false for a non-iterable", () => {
  assertEquals(isIterableIterator({}), false);
});
