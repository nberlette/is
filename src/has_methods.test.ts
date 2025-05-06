import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { hasMethods } from "./has_methods.ts";

describe("hasMethods: characteristics", () => {
  it("should be a function", () => {
    expect(typeof hasMethods).toBe("function");
  });
  it("should be named 'hasMethods'", () => {
    expect(hasMethods.name).toBe("hasMethods");
  });
  it("should have a length of 1", () => {
    expect(hasMethods.length).toBe(1);
  });
});

describe("hasMethods: behavior", () => {
  it("should accept an object and keys as arguments", () => {
    const obj = { foo: () => "foo" };
    expect(() => hasMethods(obj, "foo")).not.toThrow();
  });
  it("should return a boolean value", () => {
    const obj = { foo: () => "foo" };
    expect(typeof hasMethods(obj, "foo")).toBe("boolean");
  });
  it("should return false for an empty object", () => {
    const obj = {};
    expect(hasMethods(obj, "foo")).toBe(false);
  });
  it("should return true for an object with callable methods", () => {
    const obj = { foo: () => "foo", bar: () => "bar", baz: 42 };
    expect(hasMethods(obj, "foo", "bar")).toBe(true);
  });
  it("should return false for an object without callable methods", () => {
    const obj = { foo: "foo", bar: 42, baz: true };
    expect(hasMethods(obj, "foo", "bar")).toBe(false);
  });
  it("should return false for an object with non-callable properties", () => {
    const obj = { foo: () => "foo", bar: 42, baz: true };
    expect(hasMethods(obj, "foo", "bar")).toBe(false);
  });
  it("should return true for an object with callable methods and other properties", () => {
    const obj = { foo: () => "foo", bar: () => "bar", baz: 42 };
    expect(hasMethods(obj, "foo", "bar")).toBe(true);
  });
});
