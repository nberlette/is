/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/non-empty-array
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import type { Predicate } from "@nick/is/type/predicate";
import type { IsExact } from "@nick/is/type/exact";
import { expectType } from "@nick/is/type/expect";
import { isNonEmptyArray, type NonEmptyArray } from "./non_empty_array.ts";

describe("isNonEmptyArray: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isNonEmptyArray).toBe("function");
  });
  it("should be named 'isNonEmptyArray'", () => {
  });
  it("should have an arity of 2", () => {
    expect(isNonEmptyArray).toHaveLength(2);
  });
  it("should have the expected type signature", () => {
    expectType<
      IsExact<
        { <T>(a: unknown, test?: Predicate<T>): a is NonEmptyArray<T> },
        typeof isNonEmptyArray
      >
    >(true);
  });
});

describe("isNonEmptyArray: behavior", () => {
  it("should return true for non-empty arrays", () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
    expect(isNonEmptyArray(["a", "b"])).toBe(true);
    expect(isNonEmptyArray([true, false])).toBe(true);
  });

  it("should return false for empty arrays", () => {
    expect(isNonEmptyArray([])).toBe(false);
  });

  it("should return false for non-array values", () => {
    expect(isNonEmptyArray({})).toBe(false);
    expect(isNonEmptyArray("string")).toBe(false);
    expect(isNonEmptyArray(123)).toBe(false);
    expect(isNonEmptyArray(null)).toBe(false);
    expect(isNonEmptyArray(undefined)).toBe(false);
  });

  it("should return false for non-array objects", () => {
    expect(isNonEmptyArray({ length: 1 })).toBe(false);
    expect(isNonEmptyArray({ 0: "a", length: 1 })).toBe(false);
  });
});

describe("isNonEmptyArray: type behavior", () => {
  it("should infer the correct type for non-empty arrays", () => {
    const arr = [1, 2, 3];
    if (isNonEmptyArray(arr)) {
      expectType<NonEmptyArray<number>>(arr);
    }
  });

  it("should infer the correct type for empty arrays", () => {
    const arr: [] = [];
    if (isNonEmptyArray(arr)) {
      expectType<IsExact<[] & NonEmptyArray<never>, typeof arr>>(true); // This should not be reached
    }
  });
});
