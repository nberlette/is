import { assertEquals } from "@std/assert";
import { isWriter } from "./writer.ts";

Deno.test("isWriter returns true for objects with write method", () => {
  const mockWriter = {
    write: (_p: Uint8Array) => Promise.resolve(0),
  };
  assertEquals(isWriter(mockWriter), true);
});

Deno.test("isWriter returns false for objects without write method", () => {
  const mockNoWrite = {
    write: "not a function",
  };
  assertEquals(isWriter(mockNoWrite), false);
});

Deno.test("isWriter returns false for null", () => {
  assertEquals(isWriter(null), false);
});

Deno.test("isWriter returns false for undefined", () => {
  assertEquals(isWriter(undefined), false);
});

Deno.test("isWriter returns false for non-objects", () => {
  assertEquals(isWriter("not an object"), false);
  assertEquals(isWriter(123), false);
  assertEquals(isWriter(true), false);
});
