/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/error
 */

import { assertEquals } from "@std/assert";
import { isError } from "./error.ts";

Deno.test("isError() should return true for instances of Error", () => {
  const err = new Error("Something went wrong");
  assertEquals(isError(err), true);
});

Deno.test("isError() should return false for non-Error objects", () => {
  const nonErr = { message: "Something went wrong" };
  assertEquals(isError(nonErr), false);
});

Deno.test("isError() should return false for non-objects", () => {
  assertEquals(isError(null), false);
  assertEquals(isError(undefined), false);
  assertEquals(isError(123), false);
  assertEquals(isError("error"), false);
  assertEquals(isError(true), false);
});
