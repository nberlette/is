/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/object-like
 */

import { isObjectLike } from "./object_like.ts";
import { assert } from "@std/assert";

Deno.test("isObjectLike should return true for objects", () => {
  assert(isObjectLike({}));
  assert(isObjectLike([]));
});

Deno.test("isObjectLike should return true for functions", () => {
  assert(isObjectLike(() => {}));
});

Deno.test("isObjectLike should return true for class instances", () => {
  class TestClass {}
  assert(isObjectLike(new TestClass()));
});

Deno.test("isObjectLike should return true for instances of Object", () => {
  assert(isObjectLike(new Object()));
});

Deno.test("isObjectLike should return false for null", () => {
  assert(!isObjectLike(null));
});

Deno.test("isObjectLike should return false for undefined", () => {
  assert(!isObjectLike(undefined));
});

Deno.test("isObjectLike should return false for numbers", () => {
  assert(!isObjectLike(123));
});
