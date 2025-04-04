/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/generator-function
 */

import { isGeneratorFunction } from "./generator_function.ts";
import { assert } from "@std/assert";

Deno.test("isGeneratorFunction should return true for generator function", () => {
  function* gen() {
    yield 1;
  }
  const result = isGeneratorFunction(gen);
  assert(result === true);
});

Deno.test("isGeneratorFunction should return false for non-generator function", () => {
  function nonGen() {
    return 1;
  }
  const result = isGeneratorFunction(nonGen);
  assert(result === false);
});

Deno.test("isGeneratorFunction should return false for generator object", () => {
  const gen = (function* () {
    yield 1;
  })();
  const result = isGeneratorFunction(gen);
  assert(result === false);
});

Deno.test("isGeneratorFunction should return false for non-function value", () => {
  const result = isGeneratorFunction(1);
  assert(result === false);
});
