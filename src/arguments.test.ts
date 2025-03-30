/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/arguments
 */

// File: ./arguments.test.ts
import { assertEquals } from "@std/assert";
import isArguments from "./arguments.ts";

Deno.test("isArguments should return true for arguments", function () {
  assertEquals(isArguments(arguments), true);
});

Deno.test("isArguments should return false for mock arguments", () => {
  const args = {
    0: "zero",
    1: "one",
    length: 2,
    callee: () => {},
  };
  assertEquals(isArguments(args), false);
});

Deno.test("isArguments should return false for non-arguments", () => {
  const nonArgs = {
    0: "zero",
    1: "one",
    length: 2,
  };
  assertEquals(isArguments(nonArgs), false);
});

Deno.test("isArguments should return false for non-objects", () => {
  assertEquals(isArguments("not an object"), false);
  assertEquals(isArguments(123), false);
  assertEquals(isArguments(null), false);
  assertEquals(isArguments(undefined), false);
});
