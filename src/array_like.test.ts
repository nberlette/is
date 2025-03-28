/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/array-like
 */

import { assertEquals } from "@std/assert";
import { isArrayLike, isArrayLikeObject } from "./array_like.ts";

Deno.test("isArrayLike", () => {
  assertEquals(isArrayLike([]), true);
  assertEquals(isArrayLike("abc"), true);
  assertEquals(isArrayLike({ length: 0 }), true);
  assertEquals(isArrayLike({ length: 1, 0: "a" }), true);
  assertEquals(isArrayLike({ length: Infinity }), false);
  assertEquals(isArrayLike({ length: -1 }), false);
});

Deno.test("isArrayLikeObject", () => {
  assertEquals(isArrayLikeObject([]), true);
  assertEquals(isArrayLikeObject({ length: 0 }), true);
  assertEquals(isArrayLikeObject({ length: 1, 0: "a" }), true);
  assertEquals(isArrayLikeObject("abc"), false);
  assertEquals(isArrayLikeObject({ length: Infinity }), false);
  assertEquals(isArrayLikeObject({ length: -1 }), false);
});
