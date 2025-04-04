// deno-lint-ignore-file ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/function
 */

import { isFunction } from "./function.ts";
import { assertEquals } from "@std/assert";

Deno.test("isFunction should return true for function", () => {
  assertEquals(isFunction(() => {}), true);
  assertEquals(
    isFunction(function (this: Function, a: number): bigint {
      return BigInt(a);
    }),
    true,
  );
  assertEquals(isFunction(class {}), true);
  assertEquals(isFunction(new Function()), true);
});

Deno.test("isFunction should return false for non-function values", () => {
  assertEquals(isFunction({}), false);
  assertEquals(isFunction(1), false);
  assertEquals(isFunction("string"), false);
  assertEquals(isFunction(null), false);
  assertEquals(isFunction(undefined), false);
});
