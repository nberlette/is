/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/empty
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isEmpty } from "./empty.ts";
import { expectType } from "./_internal.ts";

describe("isEmpty: fundamentals", () => {
  it("is a function", () => expect(isEmpty).toBeInstanceOf(Function));
  it("is named 'isEmpty'", () => expect(isEmpty.name).toBe("isEmpty"));
  it("has an arity of 1", () => expect(isEmpty).toHaveLength(1));
  it("returns a boolean", () => expect(isEmpty(null!)).toBe(true));
});

describe("isEmpty: behavior", () => {
  it("should return true for an empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("should return true for an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for a non-empty array", () => {
    expect(isEmpty([1])).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    expect(isEmpty("a")).toBe(false);
  });
});

describe("isEmpty: type inference", () => {
  it("should infer the correct type for an empty object", () => {
    let value: unknown = {};
    if (isEmpty(value)) {
      expectType<{ [K in never]: never }>(value);
    }
    expectType<unknown>(value);

    value = { a: 1 };
    if (isEmpty(value)) {
      expectType<{ [K in never]: never }>(value);
    }

    const values: readonly unknown[] = [];
    if (isEmpty(values)) expectType<readonly []>(values);

    const valueStr: string = "";
    if (isEmpty(valueStr)) expectType<"">(valueStr);
  });
});
