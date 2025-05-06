import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import { isEnum } from "./enum.ts";
import { expectType } from "./_internal.ts";

describe("isEnum: fundamentals", () => {
  it("is a function", () => expect(isEnum).toBeInstanceOf(Function));
  it("is named 'isEnum'", () => expect(isEnum.name).toBe("isEnum"));
  it("has an arity of 1", () => expect(isEnum).toHaveLength(1));
  it("returns a boolean", () => expect(isEnum(null!)).toBe(false));
});

describe("isEnum: behavior", () => {
  it("should return true for an enum", () => {
    enum Foo {
      Bar = "bar",
      Baz = "baz",
    }
    expect(isEnum(Foo)).toBe(true);

    enum Bar {
      Bar,
      Baz,
      Qux,
    }
    expect(isEnum(Bar)).toBe(true);

    enum Baz {
      Buzz = 0,
      Fizz = 1,
      Bazz = 2,
    }
    expect(isEnum(Baz)).toBe(true);

    const Spread = { ...Baz };
    expect(isEnum(Spread)).toBe(true);
    expectType<{ Buzz: Baz.Buzz; Fizz: Baz.Fizz; Bazz: Baz.Bazz }>(Spread);
  });

  it("should return true for an enum-like object", () => {
    const Enum = {
      Foo: "foo",
      Bar: "bar",
      Baz: "baz",
    } as const;
    expect(isEnum(Enum)).toBe(true);
  });

  it("should return true for a numeric enum-like object", () => {
    const Enum = {
      Foo: 1,
      Bar: 2,
      Baz: 3,
    } as const;
    expect(isEnum(Enum)).toBe(true);
  });
});

describe("isEnum: key and value validation", () => {
  it("should return true for an enum-like object with string/number keys and values", () => {
    const Enum = {
      Foo: "foo",
      Bar: "bar",
      Baz: 1,
    };
    expect(isEnum(Enum)).toBe(true);
    const Enum2 = {
      Foo: "foo",
      Bar: "bar",
      Baz: NaN,
    };
    expect(isEnum(Enum2)).toBe(true);
  });

  it("should return false for an enum-like object with non-string/number values", () => {
    const Enum = {
      Foo: 1,
      Bar: "bar",
      Baz: true,
    };
    expect(isEnum(Enum)).toBe(false);
  });

  it("should return false for an enum-like object with non-string/number values", () => {
    const Enum = {
      Foo: 1,
      Bar: "bar",
      Baz: {},
    };
    expect(isEnum(Enum)).toBe(false);
  });

  it("should return false for an enum-like object with non-string/number keys", () => {
    const Enum = {
      1: 1,
      Bar: "bar",
    };
    expect(isEnum(Enum)).toBe(false);
  });
});

describe("isEnum: prototypes", () => {
  it("should return true for objects with `null` prototypes", () => {
    expect(isEnum({ __proto__: null })).toBe(true);
  });

  it("should return true for regular POJOs", () => {
    expect(isEnum({ foo: 1, bar: 2, baz: 3 })).toBe(true);
  });

  it("should return false for objects with prototypes other than `Object.prototype` or `null`", () => {
    const obj = Object.create({ foo: 1 });
    expect(isEnum(obj)).toBe(false);
    expect(isEnum(new Date())).toBe(false);
    expect(isEnum(new Error())).toBe(false);
    expect(isEnum(new Map())).toBe(false);
    expect(isEnum(new Set())).toBe(false);
  });

  it("should return false for a non-enum", () => {
    expect(isEnum([])).toBe(false);
    expect(isEnum(() => {})).toBe(false);
    expect(isEnum(1)).toBe(false);
    expect(isEnum("foo")).toBe(false);
    expect(isEnum(true)).toBe(false);
  });
});
