/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/keyof
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isKeyOf } from "./keyof.ts";
import { expectType } from "./_internal.ts";

describe("isKeyOf: fundamentals", () => {
  it("is a function", () => expect(isKeyOf).toBeInstanceOf(Function));
  it("is named 'isKeyOf'", () => expect(isKeyOf.name).toBe("isKeyOf"));
  it("has an arity of 2", () => expect(isKeyOf).toHaveLength(2));
  it("returns a boolean", () => expect(isKeyOf({}, "")).toBe(false));
});

describe("isKeyOf: behavior", () => {
  it("should return true for an own property of an object", () => {
    const obj = { foo: 1 };
    expect(isKeyOf(obj, "foo")).toBe(true);
  });

  it("should return false for properties that do not exist", () => {
    const obj = { foo: 1 };
    expect(isKeyOf(obj, "bar")).toBe(false);
    expect(isKeyOf(obj, "baz")).toBe(false);
    expect(isKeyOf(obj, 1)).toBe(false);
    expect(isKeyOf(obj, 2)).toBe(false);
    expect(isKeyOf(obj, Symbol.iterator)).toBe(false);
  });

  it("should return false for non-objects", () => {
    expect(isKeyOf(null!, "foo")).toBe(false);
    expect(isKeyOf(undefined!, "foo")).toBe(false);
    expect(isKeyOf(1, "foo")).toBe(false);
    expect(isKeyOf("foo", "foo")).toBe(false);
    expect(isKeyOf(true, "foo")).toBe(false);
  });

  it("should return false for invalid property keys", () => {
    const obj = { foo: 1 };
    expect(isKeyOf(obj, Symbol.iterator)).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, {})).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, [])).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, () => {})).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, new Date())).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, null)).toBe(false);
    // @ts-expect-error this is intentional
    expect(isKeyOf(obj, undefined)).toBe(false);
  });

  it("should return true for properties that exist in the prototype chain", () => {
    const obj = Object.create({ foo: 1 });
    expect(isKeyOf(obj, "foo")).toBe(true);
    expect(isKeyOf(obj, "toString")).toBe(true);
    expect(isKeyOf(obj, "hasOwnProperty")).toBe(true);
    expect(isKeyOf(obj, "isPrototypeOf")).toBe(true);
    expect(isKeyOf(obj, "constructor")).toBe(true);
    expect(isKeyOf(obj, "valueOf")).toBe(true);
    expect(isKeyOf(obj, "toLocaleString")).toBe(true);
  });

  it("should narrow the type of the key appropriately", () => {
    const obj = { foo: 1 };
    let key = "foo" as "foo" | "bar" | "baz" | 1 | 2 | 3;
    if (isKeyOf(obj, key)) expectType<"foo">(key);
    key = "bar";
    if (isKeyOf(obj, key)) expectType<never>(key);
  });
});
