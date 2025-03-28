/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/closer
 */

import { assertEquals } from "@std/assert";
import { isCloser } from "./closer.ts";

Deno.test("isCloser() should return true for objects with a 'close' method", () => {
  const mock = { close: () => {} };
  assertEquals(isCloser(mock), true);
});

Deno.test("isCloser() should return false for non-objects", () => {
  assertEquals(isCloser(null), false);
  assertEquals(isCloser(undefined), false);
  assertEquals(isCloser(123), false);
  assertEquals(isCloser("string"), false);
  assertEquals(isCloser(true), false);
});

Deno.test("isCloser() should return false for objects without a 'close' method", () => {
  const mock = { otherMethod: () => {} };
  assertEquals(isCloser(mock), false);
});
