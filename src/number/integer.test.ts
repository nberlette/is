/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/integer
 */

import { assert, assertEquals } from "@std/assert";
import { isInteger } from "./integer.ts";

Deno.test("isInteger: is a function", () => {
  assert(typeof isInteger === "function", "isInteger should be a function");
  assertEquals(
    isInteger.name,
    "isInteger",
    "isInteger should be named isInteger",
  );
  assertEquals(isInteger.length, 1, "isInteger should take 1 argument");
});

Deno.test("isInteger: should return true for valid integers", () => {
  assertEquals(isInteger(0), true, "0 is an integer");
  assertEquals(isInteger(1), true, "1 is an integer");
  assertEquals(isInteger(-1), true, "-1 is an integer");
  assertEquals(isInteger(1.0), true, "1.0 is an integer");
  assertEquals(isInteger(-1.0), true, "-1.0 is an integer");
  assertEquals(isInteger(1e3), true, "1e3 is an integer");
  assertEquals(isInteger(-1e3), true, "-1e3 is an integer");
  assertEquals(isInteger(0x1), true, "0x1 is an integer");
  assertEquals(isInteger(-0x1), true, "-0x1 is an integer");
  assertEquals(isInteger(0b1), true, "0b1 is an integer");
  assertEquals(isInteger(-0b1), true, "-0b1 is an integer");
  assertEquals(isInteger(0o1), true, "0o1 is an integer");
  assertEquals(isInteger(-0o1), true, "-0o1 is an integer");
  assertEquals(
    isInteger(Number.MAX_SAFE_INTEGER),
    true,
    "Number.MAX_SAFE_INTEGER is an integer",
  );
  assertEquals(
    isInteger(Number.MIN_SAFE_INTEGER),
    true,
    "Number.MIN_SAFE_INTEGER is an integer",
  );
});

Deno.test("isInteger: should return false for non-integer values", () => {
  assertEquals(isInteger(0.1), false, "0.1 is not an integer");
  assertEquals(isInteger(1.1), false, "1.1 is not an integer");
  assertEquals(isInteger(-1.1), false, "-1.1 is not an integer");
  assertEquals(isInteger(1e-3), false, "1e-3 is not an integer");
  assertEquals(isInteger(-1e-3), false, "-1e-3 is not an integer");
  assertEquals(isInteger(0.5), false, "0.5 is not an integer");
  assertEquals(isInteger(1.5), false, "1.5 is not an integer");
  assertEquals(isInteger(-1.5), false, "-1.5 is not an integer");
  assertEquals(isInteger(1e3 + 1.1), false, "1e3 + 1.1 is not an integer");
  assertEquals(isInteger(-1e3 - 1.1), false, "-1e3 - 1.1 is not an integer");
  assertEquals(isInteger(1.14), false, "1.5 is not an integer");
  assertEquals(isInteger(0n + 1n), false, "0n + 1n is not an integer");
  assertEquals(isInteger(0n - 1n), false, "0n - 1n is not an integer");
  assertEquals(
    isInteger(Number.MAX_SAFE_INTEGER + 1),
    true,
    "Number.MAX_SAFE_INTEGER + 1 is an integer",
  );
  assertEquals(
    isInteger(Number.MIN_SAFE_INTEGER - 1),
    true,
    "Number.MIN_SAFE_INTEGER - 1 is an integer",
  );
});
