/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/writer-sync
 */

import { assertEquals } from "@std/assert";
import { isWriterSync } from "./writer_sync.ts";

Deno.test("isWriterSync should return true for objects with writeSync method", () => {
  const mockWriter = {
    writeSync: (p: Uint8Array) => p.byteLength,
  };
  assertEquals(isWriterSync(mockWriter), true);
});

Deno.test("isWriterSync should return false for non-objects", () => {
  assertEquals(isWriterSync(null), false);
  assertEquals(isWriterSync(undefined), false);
  assertEquals(isWriterSync(123), false);
  assertEquals(isWriterSync("string"), false);
});

Deno.test("isWriterSync should return false for objects without writeSync method", () => {
  const mockWriter = {
    write: (p: Uint8Array) => p.byteLength,
  };
  assertEquals(isWriterSync(mockWriter), false);
});
