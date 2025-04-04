/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/instance
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isInstance } from "./instance.ts";
import { expectType } from "./_internal.ts";
import type { Constructor } from "./constructor.ts";

describe("isInstance: fundamentals", () => {
  it("is a function", () => expect(isInstance).toBeInstanceOf(Function));
  it("is named 'isInstance'", () => expect(isInstance.name).toBe("isInstance"));
  it("has an arity of 2", () => expect(isInstance).toHaveLength(2));
  it("returns a boolean", () => expect(isInstance(null, null!)).toBe(false));
});

describe("isInstance: behavior", () => {
  class Foo {
    foo() {
      return 1;
    }
  }

  class Bar extends Foo {
    bar() {
      return 2;
    }
  }

  it("should return true for an instance of a class", () => {
    expect(isInstance(new Foo(), Foo)).toBe(true);
    expect(isInstance(new Bar(), Bar)).toBe(true);
    expect(isInstance(new Bar(), Foo)).toBe(true);
  });

  it("should return false for a non-instance of a class", () => {
    expect(isInstance({}, Foo)).toBe(false);
    expect(isInstance([], Foo)).toBe(false);
    expect(isInstance(null, Foo)).toBe(false);
    expect(isInstance(undefined, Foo)).toBe(false);
    expect(isInstance(1, Foo)).toBe(false);
    expect(isInstance("foo", Foo)).toBe(false);
    expect(isInstance(true, Foo)).toBe(false);
  });

  it("should return false for a non-class", () => {
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), {})).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), [])).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), null)).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), undefined)).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), 1)).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), "foo")).toBe(false);
    // @ts-expect-error this is an intentional bad test case
    expect(isInstance(new Foo(), true)).toBe(false);
  });

  it("should have the expected signature", () => {
    expectType<<T>(it: unknown, cls: Constructor<T>) => it is T>(isInstance);
  });
});
