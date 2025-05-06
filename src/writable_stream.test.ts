import { assertEquals } from "@std/assert";
import { isWritableStream } from "./writable_stream.ts";

Deno.test("isWritableStream should return true for WritableStream", () => {
  const stream = new WritableStream();
  assertEquals(isWritableStream(stream), true);
});

Deno.test("isWritableStream should return false for TransformStream", () => {
  const stream = new TransformStream();
  assertEquals(isWritableStream(stream), false);
});

Deno.test("isWritableStream should return false for ReadableStream", () => {
  const stream = new ReadableStream();
  assertEquals(isWritableStream(stream), false);
});

Deno.test("isWritableStream should return false for non-stream objects", () => {
  assertEquals(isWritableStream({}), false);
  assertEquals(isWritableStream(null), false);
  assertEquals(isWritableStream(undefined), false);
});
