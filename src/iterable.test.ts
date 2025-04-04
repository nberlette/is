/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/iterable
 */

import { assertEquals } from "@std/assert";
import { isIterable } from "./iterable.ts";

Deno.test("isIterable should return true for iterable values", () => {
  assertEquals(isIterable([1, 2]), true);
  assertEquals(isIterable("foo"), true);
  assertEquals(isIterable(new Map()), true);
  assertEquals(isIterable(new Set()), true);
  assertEquals(isIterable({ [Symbol.iterator]: () => {} }), true);
});

Deno.test("isIterable should return false for non-iterable values", () => {
  assertEquals(isIterable({}), false);
  assertEquals(isIterable(123), false);
  assertEquals(isIterable(null), false);
  assertEquals(isIterable(undefined), false);
  assertEquals(isIterable(true), false);
  assertEquals(isIterable(false), false);
});
