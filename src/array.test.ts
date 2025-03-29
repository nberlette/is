/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/array
 */
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import type { Predicate } from "@nick/is/type/predicate";
import type { IsExact } from "@nick/is/type/exact";
import { expectType } from "@nick/is/type/expect";
import { isArray } from "./array.ts";

describe("isArray: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isArray).toBe("function");
  });
  it("should be named 'isArray'", () => {
    expect(isArray.name).toBe("isArray");
  });
  it("should have an arity of 2", () => {
    expect(isArray).toHaveLength(2);
  });
  it("should have the expected type signature", () => {
    expectType<
      IsExact<
        { <T>(a: unknown, test?: Predicate<T>): a is Array<T> },
        typeof isArray
      >
    >(true);
  });
});

describe("isArray: behavior", () => {
  it("should return true for arrays", () => {
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(["a", "b"])).toBe(true);
    expect(isArray([true, false])).toBe(true);
  });

  it("should return false for non-array values", () => {
    expect(isArray({})).toBe(false);
    expect(isArray("string")).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });

  it("should return false for non-array objects", () => {
    expect(isArray({ length: 1 })).toBe(false);
    expect(isArray({ 0: "a", length: 1 })).toBe(false);
  });
});

describe("isArray: type behavior", () => {
  it("should infer the correct type for arrays", () => {
    const arr = [1, 2, 3];
    if (isArray(arr)) {
      expectType<IsExact<typeof arr, number[]>>(true);
    }
  });

  it("should infer the correct type for non-array values", () => {
    const notArr = "string";
    if (!isArray(notArr)) {
      expectType<IsExact<typeof notArr, "string">>(true);
    }
  });

  it("should infer the correct type for non-array objects", () => {
    const notArr = { length: 1 };
    if (!isArray(notArr)) {
      expectType<IsExact<typeof notArr, { length: number }>>(true);
    }
  });

  it("should infer the correct type for empty arrays", () => {
    const arr: [] = [];
    if (isArray(arr)) {
      expectType<IsExact<typeof arr, []>>(true);
    }
  });

  it("should infer the correct type for arrays with mixed types", () => {
    const arr = [1, "a", true];
    if (isArray(arr)) {
      expectType<IsExact<typeof arr, (number | string | boolean)[]>>(true);
    }
  });
});
