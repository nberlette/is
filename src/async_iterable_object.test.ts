/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/async-iterable-object
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isAsyncIterableObject } from "./async_iterable_object.ts";

describe("isAsyncIterableObject: fundamentals", () => {
  it("is a function", () =>
    expect(isAsyncIterableObject).toBeInstanceOf(Function));
  it("is named 'isAsyncIterableObject'", () =>
    expect(isAsyncIterableObject.name).toBe("isAsyncIterableObject"));
  it("has an arity of 1", () => expect(isAsyncIterableObject).toHaveLength(1));
  it("returns a boolean", () => expect(isAsyncIterableObject({})).toBe(false));
});

describe("isAsyncIterableObject: behavior", () => {
  it("should return true for async iterable objects", () => {
    expect(
      isAsyncIterableObject({
        [Symbol.asyncIterator]() {
          return this;
        },
        next() {
          return Promise.resolve({ done: false, value: undefined });
        },
      }),
    ).toBe(true);
  });

  it("should return false for non-async iterable objects", () => {
    expect(isAsyncIterableObject([])).toBe(false);
    expect(isAsyncIterableObject({})).toBe(false);
    expect(isAsyncIterableObject(new Map())).toBe(false);
    expect(isAsyncIterableObject(new Set())).toBe(false);
  });

  it("should return false for non-object values", () => {
    expect(isAsyncIterableObject(null)).toBe(false);
    expect(isAsyncIterableObject(undefined)).toBe(false);
    expect(isAsyncIterableObject(123)).toBe(false);
    expect(isAsyncIterableObject("abc")).toBe(false);
    expect(isAsyncIterableObject(true)).toBe(false);
  });
});
