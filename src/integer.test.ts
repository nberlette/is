/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/integer
 */

import { assertEquals } from "@std/assert";
import {
  isInteger,
  isNegativeInteger,
  isNonZeroInteger,
  isPositiveInteger,
} from "./number/mod.ts";

Deno.test("isNegativeInteger", () => {
  const testCases = [
    [1, false],
    [0, false],
    [-1, true],
    [NaN, false],
    ["1", false],
    ["0", false],
    ["NaN", false],
  ];
  for (const [testCase, expected] of testCases) {
    const result = isNegativeInteger(testCase);
    Deno.test(`isNegativeInteger(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isNegativeInteger(${testCase}) should return ${result}`,
      );
    });
  }
});

Deno.test("isInteger", () => {
  const testCases = [
    [1, true],
    [0, true],
    [-1, true],
    [NaN, false],
    ["1", false],
    ["0", false],
    ["NaN", false],
  ];
  for (const [testCase, expected] of testCases) {
    const result = isInteger(testCase);
    Deno.test(`isInteger(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isInteger(${testCase}) should return ${result}`,
      );
    });
  }
});

Deno.test("isPositiveInteger", () => {
  const testCases = [
    [1, true],
    [0, false],
    [-1, false],
    [NaN, false],
    ["1", false],
    ["0", false],
    ["NaN", false],
  ];
  for (const [testCase, expected] of testCases) {
    const result = isPositiveInteger(testCase);
    Deno.test(`isPositiveInteger(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isPositiveInteger(${testCase}) should return ${result}`,
      );
    });
  }
});

Deno.test("isNonZeroInteger", () => {
  const testCases = [
    [1, true],
    [0, false],
    [-1, true],
    [NaN, false],
    ["1", false],
    ["0", false],
    ["NaN", false],
  ];
  for (const [testCase, expected] of testCases) {
    const result = isNonZeroInteger(testCase);
    Deno.test(`isNonZeroInteger(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isNonZeroInteger(${testCase}) should return ${result}`,
      );
    });
  }
});
