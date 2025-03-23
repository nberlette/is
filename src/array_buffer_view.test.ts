import { assertEquals } from "@std/assert";
import { isArrayBufferView } from "./array_buffer_view.ts";

Deno.test("isArrayBufferView() should return true for ArrayBufferView instances", () => {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  const array = new Uint8Array(buffer);

  assertEquals(isArrayBufferView(view), true);
  assertEquals(isArrayBufferView(array), true);
  assertEquals(isArrayBufferView(buffer), false);
});

Deno.test("isArrayBufferView() without ArrayBuffer.isView support", () => {
  const originalIsView = ArrayBuffer.isView;
  ArrayBuffer.isView = undefined!;

  try {
    const buffer = new ArrayBuffer(8);
    const view = new DataView(buffer);
    const array = new Uint8Array(buffer);

    assertEquals(isArrayBufferView(view), true);
    assertEquals(isArrayBufferView(array), true);
    assertEquals(isArrayBufferView(buffer), false);
  } finally {
    ArrayBuffer.isView = originalIsView;
  }
});
