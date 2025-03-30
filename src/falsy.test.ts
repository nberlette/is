/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/falsy
 */

import { assert, assertEquals } from "@std/assert";
import { type Falsy, isFalsy } from "./falsy.ts";
import { expectType } from "./_internal.ts";

Deno.test("isFalsy: should return true for falsy values", () => {
  assert(isFalsy(false), "isFalsy(false) should return true");
  assert(isFalsy(0), "isFalsy(0) should return true");
  assert(isFalsy(-0), "isFalsy(-0) should return true");
  assert(isFalsy(""), "isFalsy('') should return true");
  assert(isFalsy(null), "isFalsy(null) should return true");
  assert(isFalsy(undefined), "isFalsy(undefined) should return true");
  assert(isFalsy(NaN), "isFalsy(NaN) should return true");
  assert(isFalsy(0n), "isFalsy(0n) should return true");
  // deno-lint-ignore no-explicit-any
  assert((isFalsy as any)(), "isFalsy() should return true");
});

Deno.test("isFalsy: should return false for truthy values", () => {
  assertEquals(isFalsy(true), false, "isFalsy(true) should return false");
  assertEquals(isFalsy(1), false, "isFalsy(1) should return false");
  assertEquals(
    isFalsy("string"),
    false,
    "isFalsy('string') should return false",
  );
  assertEquals(isFalsy({}), false, "isFalsy({}) should return false");
  assertEquals(isFalsy([]), false, "isFalsy([]) should return false");
  assertEquals(
    isFalsy(() => {}),
    false,
    "isFalsy(() => {}) should return false",
  );
  assertEquals(
    isFalsy(Infinity),
    false,
    "isFalsy(Infinity) should return false",
  );
  assertEquals(isFalsy(-1), false, "isFalsy(-1) should return false");
  assertEquals(isFalsy(1n), false, "isFalsy(1n) should return false");
  assertEquals(
    isFalsy(Symbol()),
    false,
    "isFalsy(Symbol()) should return false",
  );
  assertEquals(
    isFalsy(new Date()),
    false,
    "isFalsy(new Date()) should return false",
  );
});

Deno.test("isFalsy: should narrow types correctly", () => {
  const value: unknown = 0;
  if (isFalsy(value)) expectType<Falsy>(value);

  const value2: 1 | null | undefined = 1;
  if (!isFalsy(value2)) expectType<1>(value2);
});
