/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/array-like-object
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { isArrayLikeObject } from "./array_like_object.ts";

describe("isArrayLikeObject: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isArrayLikeObject).toBe("function");
  });
  it("should be named 'isArrayLikeObject'", () => {
    expect(isArrayLikeObject.name).toBe("isArrayLikeObject");
  });
  it("should have an arity of 1", () => {
    expect(isArrayLikeObject.length).toBe(1);
  });
  it("should be callable with a single argument", () => {
    expect(() => isArrayLikeObject([])).not.toThrow();
  });
  it("should return a boolean", () => {
    expect(typeof isArrayLikeObject([])).toBe("boolean");
  });
});

describe("isArrayLikeObject: behavior", () => {
  it("should return true for arrays", () => {
    expect(isArrayLikeObject([])).toBe(true);
  });

  it("should return false for strings", () => {
    expect(isArrayLikeObject("abc")).toBe(false);
  });

  it("should return true for objects with a valid length property", () => {
    expect(isArrayLikeObject({ length: 0 })).toBe(true);
    expect(isArrayLikeObject({ length: 1, 0: "a" })).toBe(true);
  });

  it("should return false for objects without a valid length property", () => {
    expect(isArrayLikeObject({})).toBe(false);
    expect(isArrayLikeObject({ length: Infinity })).toBe(false);
    expect(isArrayLikeObject({ length: -1 })).toBe(false);
  });

  it("should return false for functions", () => {
    expect(isArrayLikeObject(() => {})).toBe(false);
  });

  it("should return false for null and undefined", () => {
    expect(isArrayLikeObject(null)).toBe(false);
    expect(isArrayLikeObject(undefined)).toBe(false);
  });
});
