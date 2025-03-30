/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/plain-object
 */

import { assertEquals } from "@std/assert";
import isPlainObject from "./plain_object.ts";

Deno.test("isPlainObject", () => {
  assertEquals(isPlainObject({}), true, "empty object");
  assertEquals(isPlainObject(new Object()), true, "Object instance");

  assertEquals(isPlainObject([]), false, "array");
  assertEquals(isPlainObject(() => {}), false, "function");
  assertEquals(isPlainObject(null), false, "null");
  assertEquals(isPlainObject(undefined), false, "undefined");
  assertEquals(isPlainObject(new class {}()), false, "class instance");
  assertEquals(isPlainObject(1), false, "number");
});
