/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/weak-ref
 */

// File: ./weak-ref.test.ts
import { assertEquals } from "@std/assert";
import { isWeakRef } from "./weak_ref.ts";

Deno.test("isWeakRef should return true for WeakRef instances", () => {
  const strong = { a: 1 };
  const weak = new WeakRef(strong);
  assertEquals(isWeakRef(weak), true);
});

Deno.test("isWeakRef should return false for non-WeakRef instances", () => {
  const strong = { a: 1 };
  assertEquals(isWeakRef(strong), false);
});

Deno.test("isWeakRef should return false for WeakMap instances", () => {
  const weak = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
  assertEquals(isWeakRef(weak), false);
});
