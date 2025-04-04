/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/float32
 */

import { assertEquals } from "@std/assert";
import { isFloat32 } from "./float32.ts";

Deno.test("isFloat32: should return true for valid single-precision floats", () => {
  assertEquals(isFloat32(1.5), true, "isFloat32 returns true for 1.5");
  assertEquals(isFloat32(1.125), true, "isFloat32 returns true for 1.125");
  assertEquals(isFloat32(3.5), true, "isFloat32 returns true for 3.5");
  assertEquals(isFloat32(0.5), true, "isFloat32 returns true for 0.5");
});

Deno.test("isFloat32: should return false for Math.PI", () => {
  assertEquals(
    isFloat32(Math.PI),
    false,
    "isFloat32 returns false for Math.PI",
  );
  assertEquals(
    isFloat32(3.140625),
    true,
    "isFloat32 returns false for Math.PI (16-bit)",
  );
});

Deno.test("isFloat32: should return false for integer", () => {
  assertEquals(isFloat32(1), false, "isFloat32 returns false for integers");
});

Deno.test("isFloat32: should return false for non-number", () => {
  const x = "1.5x" as unknown as number;
  assertEquals(isFloat32(x), false, "isFloat32 returns false for non-numbers");
});

Deno.test("isFloat32: should return false for invalid cases", () => {
  assertEquals(
    isFloat32(Infinity),
    false,
    "isFloat32 returns false for +Infinity",
  );
  assertEquals(
    isFloat32(-Infinity),
    false,
    "isFloat32 returns false for -Infinity",
  );
  assertEquals(isFloat32(NaN), false, "isFloat32 returns false for NaN");
  assertEquals(isFloat32(1 / 0), false, "isFloat32 returns false for Infinity");
  assertEquals(
    isFloat32(-1 / 0),
    false,
    "isFloat32 returns false for Infinity",
  );
  assertEquals(
    isFloat32(1e50 + 0.123),
    false,
    "isFloat32 returns false for numbers > 2^32",
  );
  assertEquals(
    isFloat32(-1e50 + 0.123),
    false,
    "isFloat32 returns false for numbers > 2^32",
  );
});

Deno.test("isFloat32: should return true for 0 / -0", () => {
  assertEquals(isFloat32(0), true, "isFloat32 returns true for 0");
  assertEquals(isFloat32(-0), true, "isFloat32 returns true for -0");
});
