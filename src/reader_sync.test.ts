/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/reader-sync
 */

import { assertEquals } from "@std/assert";
import { isReaderSync } from "./reader_sync.ts";

Deno.test("isReaderSync should return true for objects with readSync method", () => {
  const mockReader = {
    readSync: (_p: Uint8Array) => {
      return 0;
    },
  };
  assertEquals(isReaderSync(mockReader), true);
});

Deno.test("isReaderSync should return false for objects without readSync method", () => {
  const mockObject = {
    otherMethod: () => {},
  };
  assertEquals(isReaderSync(mockObject), false);
});

Deno.test("isReaderSync should return false for null", () => {
  assertEquals(isReaderSync(null), false);
});

Deno.test("isReaderSync should return false for non-objects", () => {
  assertEquals(isReaderSync(123), false);
  assertEquals(isReaderSync("string"), false);
  assertEquals(isReaderSync(true), false);
  assertEquals(isReaderSync(undefined), false);
});

Deno.test("isReaderSync should return false for objects with readSync method that is not a function", () => {
  const mockObject = {
    readSync: 123,
  };
  assertEquals(isReaderSync(mockObject), false);
});
