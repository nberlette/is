/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/float16-array
 */

import { assertEquals } from "@std/assert";
import { isFloat16Array } from "./float16_array.ts";

Deno.test(
  "isFloat16Array() should return true for Float16Array instances",
  () => {
    const arr = new Float16Array(8);
    assertEquals(isFloat16Array(arr), true);
  },
);

Deno.test(
  "isFloat16Array() should return false for non-Float16Array TypedArrays",
  () => {
    const arr = new ArrayBuffer(8);
    assertEquals(isFloat16Array(arr), false);
    assertEquals(isFloat16Array(Object.create(Float16Array.prototype)), false);
    assertEquals(isFloat16Array(new Float32Array(8)), false);
    assertEquals(isFloat16Array(new Float64Array(8)), false);
    assertEquals(isFloat16Array(new Int8Array(8)), false);
    assertEquals(isFloat16Array(new Int16Array(8)), false);
    assertEquals(isFloat16Array(new Int32Array(8)), false);
    assertEquals(isFloat16Array(new Uint8Array(8)), false);
    assertEquals(isFloat16Array(new Uint8ClampedArray(8)), false);
    assertEquals(isFloat16Array(new Uint16Array(8)), false);
    assertEquals(isFloat16Array(new Uint32Array(8)), false);
    assertEquals(isFloat16Array(new BigInt64Array(8)), false);
    assertEquals(isFloat16Array(new BigUint64Array(8)), false);
  },
);

Deno.test(
  "isFloat16Array() should return false for other non-Float16Array objects",
  () => {
    assertEquals(isFloat16Array(() => {}), false);
    assertEquals(isFloat16Array([]), false);
    assertEquals(isFloat16Array({}), false);
    assertEquals(isFloat16Array(/foo/), false);
    assertEquals(isFloat16Array(new class Float16Array {}()), false);
  },
);

Deno.test(
  "isFloat16Array() should return false for non-objects",
  () => {
    assertEquals(isFloat16Array(8), false);
    assertEquals(isFloat16Array(8n), false);
    assertEquals(isFloat16Array("foo"), false);
    assertEquals(isFloat16Array(true), false);
    assertEquals(isFloat16Array(Symbol("foo")), false);
    assertEquals(isFloat16Array(null), false);
    assertEquals(isFloat16Array(undefined), false);
  },
);
