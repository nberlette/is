/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/array-like
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { isArrayLike } from "./array_like.ts";

describe("isArrayLike: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isArrayLike).toBe("function");
  });
  it("should be named 'isArrayLike'", () => {
    expect(isArrayLike.name).toBe("isArrayLike");
  });
  it("should have an arity of 1", () => {
    expect(isArrayLike.length).toBe(1);
  });
  it("should be callable with a single argument", () => {
    expect(() => isArrayLike([])).not.toThrow();
  });
  it("should return a boolean", () => {
    expect(typeof isArrayLike([])).toBe("boolean");
  });
});

describe("isArrayLike: behavior", () => {
  it("should return true for arrays", () => {
    expect(isArrayLike([])).toBe(true);
  });

  it("should return true for strings", () => {
    expect(isArrayLike("abc")).toBe(true);
  });

  it("should return true for objects with a length property", () => {
    expect(isArrayLike({ length: 0 })).toBe(true);
    expect(isArrayLike({ length: 1, 0: "a" })).toBe(true);
  });

  it("should return false for objects without a length property", () => {
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike({ length: Infinity })).toBe(false);
    expect(isArrayLike({ length: -1 })).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isArrayLike(() => {})).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
  });
});
