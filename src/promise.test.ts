/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/promise
 */

import { assertEquals } from "@std/assert";
import { isPromise } from "./promise.ts";

Deno.test("isPromise should return true for Promise instances", () => {
  assertEquals(isPromise(Promise.resolve()), true);
});

Deno.test("isPromise should return false for non-Promise instances", () => {
  assertEquals(isPromise({ then: () => {} }), false);
  assertEquals(isPromise({}), false);
  assertEquals(isPromise(null), false);
  assertEquals(isPromise(undefined), false);
  assertEquals(isPromise(1), false);
  assertEquals(isPromise("string"), false);
});

Deno.test("isPromise should return false for Promise-like objects", () => {
  assertEquals(isPromise({ then: () => {} }), false);
});
