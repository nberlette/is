/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/async-function
 */

import { isAsyncFunction } from "./async_function.ts";
import { assert } from "@std/assert";

Deno.test("isAsyncFunction should return true for async function", () => {
  const asyncFunc = async () => {};
  assert(isAsyncFunction(asyncFunc));
});

Deno.test("isAsyncFunction should return true for async arrow function", () => {
  const asyncArrowFunc = async () => {};
  assert(isAsyncFunction(asyncArrowFunc));
});

Deno.test("isAsyncFunction should return false for async generator function", () => {
  const asyncGenFunc = async function* () {};
  assert(!isAsyncFunction(asyncGenFunc));
});

Deno.test("isAsyncFunction should return false for regular function", () => {
  const regularFunc = () => {};
  assert(!isAsyncFunction(regularFunc));
});
