/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/biguint64-array
 */

import { assertEquals } from "@std/assert";
import { isBigUint64Array } from "./biguint64_array.ts";

Deno.test(
  "isBigUint64Array() should return true for BigUint64Array instances",
  () => {
    const arr = new BigUint64Array(8);
    assertEquals(isBigUint64Array(arr), true);
  },
);

Deno.test(
  "isBigUint64Array() should return false for non-BigUint64Array instances",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isBigUint64Array(arr), false);
  },
);

Deno.test(
  "isBigUint64Array() should return false for non-array-buffer instances",
  () => {
    const num = 8;
    assertEquals(isBigUint64Array(num), false);
  },
);
