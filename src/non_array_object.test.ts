/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/non-array-object
 */
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { expectType } from "@nick/is/type/expect";

import { isNonArrayObject, type NonArrayObject } from "./non_array_object.ts";

describe("isNonArrayObject: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isNonArrayObject).toBe("function");
  });
  it("should be named 'isNonArrayObject'", () => {
    expect(isNonArrayObject.name).toBe("isNonArrayObject");
  });
  it("should have an arity of 1", () => {
    expect(isNonArrayObject.length).toBe(1);
  });
});

describe("isNonArrayObject: functionality", () => {
  it(
    "should return true for objects that are not null, arrays, or functions",
    () => {
      expect(isNonArrayObject({})).toBe(true);
      expect(isNonArrayObject(new class {}())).toBe(true);
      expect(isNonArrayObject(new Object())).toBe(true);
      expect(isNonArrayObject({ a: 1, b: 2 })).toBe(true);
      expect(isNonArrayObject({ length: 0 })).toBe(true);
      expect(isNonArrayObject({ length: 1, 0: "a" })).toBe(true);
      expect(isNonArrayObject(new Date())).toBe(true);
      expect(isNonArrayObject(new Map())).toBe(true);
      expect(isNonArrayObject(new Set())).toBe(true);
      expect(isNonArrayObject(new WeakMap())).toBe(true);
      expect(isNonArrayObject(new WeakSet())).toBe(true);
    },
  );

  it("should return false for null and undefined", () => {
    expect(isNonArrayObject(null)).toBe(false);
    expect(isNonArrayObject(undefined)).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isNonArrayObject(() => {})).toBe(false);
    expect(isNonArrayObject(function () {})).toBe(false);
    expect(isNonArrayObject(class {})).toBe(false);
  });

  it("should return false for arrays", () => {
    expect(isNonArrayObject([])).toBe(false);
    expect(isNonArrayObject([1, 2, 3])).toBe(false);
    expect(isNonArrayObject(Array(2))).toBe(false);
  });

  it("should return false for primitives", () => {
    expect(isNonArrayObject("abc")).toBe(false);
    expect(isNonArrayObject(123)).toBe(false);
    expect(isNonArrayObject(true)).toBe(false);
    expect(isNonArrayObject(Symbol())).toBe(false);
    expect(isNonArrayObject(BigInt(123))).toBe(false);
  });
});

describe("isNonArrayObject: type narrowing", () => {
  it("should narrow to NonArrayObject<T>", () => {
    let value1: Record<string, unknown> | readonly unknown[] | undefined;
    if (isNonArrayObject(value1)) {
      expectType<NonArrayObject<Record<string, unknown>>>(value1);
    }

    let value2:
      | readonly unknown[]
      | (() => void)
      | Record<string, unknown>
      | null
      | undefined;
    if (isNonArrayObject(value2)) {
      expectType<NonArrayObject>(value2);
    }
  });
});
