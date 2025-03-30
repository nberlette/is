/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/async-iterable
 */

import { assertEquals } from "@std/assert";
import isAsyncIterable from "./async_iterable.ts";

Deno.test("isAsyncIterable should return true for an async iterable", () => {
  const iter = (async function* () {
    yield 1;
  })();
  assertEquals(isAsyncIterable(iter), true);
});

Deno.test("isAsyncIterable should return false for a non-async iterable", () => {
  const nonIterable = { next: () => ({ value: 1, done: false }) };
  assertEquals(isAsyncIterable(nonIterable), false);
});

Deno.test("isAsyncIterable should return false for null", () => {
  assertEquals(isAsyncIterable(null), false);
});

Deno.test("isAsyncIterable should return false for undefined", () => {
  assertEquals(isAsyncIterable(undefined), false);
});
