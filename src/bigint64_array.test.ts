/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/bigint64-array
 */

import { assertEquals } from "@std/assert";
import { isBigInt64Array } from "./bigint64_array.ts";

Deno.test(
  "isBigInt64Array() should return true for BigInt64Array instances",
  () => {
    const arr = new BigInt64Array(8);
    assertEquals(isBigInt64Array(arr), true);
  },
);

Deno.test(
  "isBigInt64Array() should return false for non-BigInt64Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isBigInt64Array(arr), false);
  },
);

Deno.test(
  "isBigInt64Array() should return false for non-array-like objects",
  () => {
    const obj = { length: 8 };
    assertEquals(isBigInt64Array(obj), false);
  },
);
