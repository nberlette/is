/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/nan
 */

import { assertEquals } from "@std/assert";
import { isNaN, type NaN } from "./nan.ts";

function assertType<T>(target: unknown, _expected?: T): asserts target is T {
  void target;
}

// deno-lint-ignore no-shadow-restricted-names
const NaN: NaN = Number.NaN as NaN;

assertType(globalThis.Number.NaN, NaN);
assertType(globalThis.NaN, NaN);

Deno.test("isNaN: should return true for NaN", () => {
  const result = isNaN(Number.NaN);
  assertEquals(result, true, "isNaN() as expected");
});

Deno.test("isNaN: should return false for non-NaN values", () => {
  const result = isNaN(0);
  assertEquals(result, false);
});
Deno.test("isNaN: should return true for Infinity", () => {
  const result = isNaN(Infinity);
  assertEquals(result, false);
});

Deno.test("isNaN: should return true for finite numbers", () => {
  const result = isNaN(1);
  assertEquals(result, false);
});

Deno.test("N: should return true for finite decimal numbers", () => {
  const result = isNaN(1.5);
  assertEquals(result, false);
});

Deno.test("isNaN: should return false for string representations of numbers", () => {
  const result = isNaN("1");
  assertEquals(result, false);
});

Deno.test("isNaN: should return true for string representations of NaN", () => {
  const result1 = isNaN("NaN");
  const result2 = isNaN("Infinity");
  assertEquals(result1, true);
  assertEquals(result2, false);
});

Deno.test("isNaN: return false for string representations of Infinity", () => {
});

Deno.test("NaN: should return true for string representations of finite decimal numbers", () => {
  const result = isNaN("1.5");
  assertEquals(result, false);
});
