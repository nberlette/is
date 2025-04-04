/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/readable-stream
 */

import { assertEquals } from "@std/assert";
import { isReadableStream } from "./readable_stream.ts";

Deno.test("isReadableStream should return true for ReadableStream", () => {
  const stream = new ReadableStream();
  assertEquals(isReadableStream(stream), true);
});

Deno.test("isReadableStream should return false for TransformStream", () => {
  const stream = new TransformStream();
  assertEquals(isReadableStream(stream), false);
});

Deno.test("isReadableStream should return false for WritableStream", () => {
  const stream = new WritableStream();
  assertEquals(isReadableStream(stream), false);
});

Deno.test("isReadableStream should return false for non-stream objects", () => {
  assertEquals(isReadableStream({}), false);
  assertEquals(isReadableStream(null), false);
  assertEquals(isReadableStream(undefined), false);
  assertEquals(isReadableStream(123), false);
  assertEquals(isReadableStream("string"), false);
  assertEquals(isReadableStream(true), false);
});
