/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/positive-integer
 */
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { isPositiveInteger } from "./positive_integer.ts";

describe("isPositiveInteger: functionality", () => {
  const testCases = [
    [1, true],
    [0, true],
    [-0, false],
    [-1, false],
    [NaN, false],
    ["1", false],
    ["0", false],
    ["NaN", false],
    [Infinity, false],
    [-Infinity, false],
    [1.5, false],
    [-1.5, false],
    [Number.MAX_SAFE_INTEGER, true],
    [Number.MIN_SAFE_INTEGER, false],
    [Number.MAX_VALUE, false],
  ];

  for (const [input, output] of testCases) {
    const result = isPositiveInteger(input);
    it(`should return ${output} for ${input}`, () => {
      expect(result, `${input} should return ${output}`).toBe(output);
    });
  }
});
