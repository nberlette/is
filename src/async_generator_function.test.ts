/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/async-generator-function
 */

import { assertEquals } from "@std/assert";
import isAsyncGeneratorFunction from "./async_generator_function.ts";

Deno.test("isAsyncGeneratorFunction", () => {
  const genFnAsync = async function* () {
    yield 1;
  };
  assertEquals(isAsyncGeneratorFunction(genFnAsync), true);

  const genObjAsync = genFnAsync();
  assertEquals(isAsyncGeneratorFunction(genObjAsync), false);

  const genFn = function* () {
    yield 1;
  };
  assertEquals(isAsyncGeneratorFunction(genFn), false);

  const genObj = genFn();
  assertEquals(isAsyncGeneratorFunction(genObj), false);

  const notAGen = () => {};
  assertEquals(isAsyncGeneratorFunction(notAGen), false);
});
