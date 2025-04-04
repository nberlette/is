/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/class
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isClass } from "./class.ts";
import { expectType } from "./_internal.ts";

describe("isClass: fundamentals", () => {
  it("is a function", () => expect(isClass).toBeInstanceOf(Function));
  it("is named 'isClass'", () => expect(isClass.name).toBe("isClass"));
  it("has an arity of 1", () => expect(isClass).toHaveLength(1));
  it("returns a boolean", () => expect(isClass(null)).toBe(false));
});

describe("isClass: behavior", () => {
  class Foo {}
  class Bar extends Foo {}

  it("should return true for a class", () => {
    expect(isClass(Foo)).toBe(true);
    expect(isClass(Bar)).toBe(true);

    expect(isClass(class {})).toBe(true);
  });

  it("should return false for a regular function", () => {
    expect(isClass(function () {})).toBe(false);
    expect(isClass(() => {})).toBe(false);
    expect(isClass(async () => {})).toBe(false);
    expect(isClass(function* () {})).toBe(false);
    expect(isClass(Object)).toBe(false);
    expect(isClass(Array)).toBe(false);
  });

  it("should return false for a non-class", () => {
    expect(isClass({})).toBe(false);
    expect(isClass([])).toBe(false);
    expect(isClass(null)).toBe(false);
    expect(isClass(undefined)).toBe(false);
    expect(isClass(1)).toBe(false);
    expect(isClass("foo")).toBe(false);
    expect(isClass(true)).toBe(false);
    expect(isClass(Symbol())).toBe(false);
  });
});

describe("isClass: type inference", () => {
  it("should infer the correct type for a class", () => {
    const value: unknown = class {};
    if (isClass(value)) expectType<new () => void>(value);
    expectType<unknown>(value);
  });
});
