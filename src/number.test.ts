/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/number
 */

import { assertEquals } from "@std/assert";
import {
  isNegativeNumber,
  isNonZeroNumber,
  isNumber,
  isPositiveNonZeroNumber,
  isPositiveNumber,
} from "./number/mod.ts";

Deno.test("isNumber() should return true for numbers", () => {
  assertEquals(isNumber(123), true);
  assertEquals(isNumber(0), true);
  assertEquals(isNumber(-123), true);
  assertEquals(isNumber(NaN), true);
  assertEquals(isNumber(Infinity), true);
  assertEquals(isNumber(-Infinity), true);
});

Deno.test("isNumber() should return false for non-numbers", () => {
  assertEquals(isNumber(undefined), false);
  assertEquals(isNumber(null), false);
  assertEquals(isNumber(true), false);
  assertEquals(isNumber(false), false);
  assertEquals(isNumber(""), false);
  assertEquals(isNumber("123"), false);
  assertEquals(isNumber({}), false);
});

Deno.test("isNonZeroNumber", () => {
  const testCases = [
    [1, true],
    [0, false],
    [-1, true],
    [NaN, true],
    ["1", false],
    ["0", false],
    ["NaN", false],
  ];
  for (const [testCase, expected] of testCases) {
    const result = isNonZeroNumber(testCase);
    Deno.test(`isNonZeroNumber(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isNonZeroNumber(${testCase}) should return ${result}`,
      );
    });
  }
});

// Deno.test("isNonZeroFiniteNumber", () => {
//   const testCases = [
//     [1, true],
//     [0, false],
//     [-1, true],
//     [NaN, false],
//     ["1", false],
//     ["0", false],
//     ["NaN", false],
//   ];
//   for (const [testCase, expected] of testCases) {
//     const result = isNonZeroFiniteNumber(testCase);
//     Deno.test(`isNonZeroFiniteNumber(${testCase}) should return ${result}`, () => {
//       assertEquals(
//         result,
//         expected,
//         `isNonZeroFiniteNumber(${testCase}) should return ${result}`,
//       );
//     });
//   }
// });

Deno.test("isPositiveNumber", () => {
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
    const result = isPositiveNumber(testCase);
    Deno.test(`isPositiveNumber(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isPositiveNumber(${testCase}) should return ${result}`,
      );
    });
  }
});

// Deno.test("isPositiveFiniteNumber", () => {
//   const testCases = [
//     [1, true],
//     [0, false],
//     [-1, false],
//     [NaN, false],
//     ["1", false],
//     ["0", false],
//     ["NaN", false],
//   ];
//   for (const [testCase, expected] of testCases) {
//     const result = isPositiveFiniteNumber(testCase);
//     Deno.test(`isPositiveFiniteNumber(${testCase}) should return ${result}`, () => {
//       assertEquals(
//         result,
//         expected,
//         `isPositiveFiniteNumber(${testCase}) should return ${result}`,
//       );
//     });
//   }
// });

Deno.test("isPositiveNonZeroNumber", () => {
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
    const result = isPositiveNonZeroNumber(testCase);
    Deno.test(`isPositiveNonZeroNumber(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isPositiveNonZeroNumber(${testCase}) should return ${result}`,
      );
    });
  }
});

// Deno.test("isPositiveNonZeroFiniteNumber", () => {
//   const testCases = [
//     [1, true],
//     [0, false],
//     [-1, false],
//     [NaN, false],
//     ["1", false],
//     ["0", false],
//     ["NaN", false],
//   ];
//   for (const [testCase, expected] of testCases) {
//     const result = isPositiveNonZeroFiniteNumber(testCase);
//     Deno.test(`isPositiveNonZeroFiniteNumber(${testCase}) should return ${result}`, () => {
//       assertEquals(
//         result,
//         expected,
//         `isPositiveNonZeroFiniteNumber(${testCase}) should return ${result}`,
//       );
//     });
//   }
// });

Deno.test("isNegativeNumber", () => {
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
    const result = isNegativeNumber(testCase);
    Deno.test(`isNegativeNumber(${testCase}) should return ${result}`, () => {
      assertEquals(
        result,
        expected,
        `isNegativeNumber(${testCase}) should return ${result}`,
      );
    });
  }
});

// Deno.test("isFinite", () => {
//   const testCases = [
//     [1, true],
//     [0, true],
//     [-1, true],
//     [NaN, false],
//     ["1", false],
//     ["0", false],
//     ["NaN", false],
//   ];
//   for (const [testCase, expected] of testCases) {
//     const result = isFinite(testCase);
//     Deno.test(`isFinite(${testCase}) should return ${result}`, () => {
//       assertEquals(
//         result,
//         expected,
//         `isFinite(${testCase}) should return ${result}`,
//       );
//     });
//   }
// });
