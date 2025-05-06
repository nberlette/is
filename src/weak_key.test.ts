import { assertEquals } from "@std/assert";
import { isWeakKey } from "./weak_key.ts";

let supportsSymbolWeakKeys = false;
try {
  new WeakMap().set(Symbol(), 1);
  supportsSymbolWeakKeys = true;
} catch { /* ignore */ }

Deno.test("isWeakKey should always return true for objects and functions", () => {
  assertEquals(isWeakKey({}), true);
  assertEquals(isWeakKey(() => {}), true);
});

Deno.test("isWeakKey should reflect engine support for symbol keys", () => {
  assertEquals(isWeakKey(Symbol()), supportsSymbolWeakKeys);
});

Deno.test("isWeakKey should return false for non-objects and non-functions", () => {
  assertEquals(isWeakKey(null), false);
  assertEquals(isWeakKey(undefined), false);
  assertEquals(isWeakKey(123), false);
  assertEquals(isWeakKey("abc"), false);
});

Deno.test("isWeakKey should return false for registered symbols", () => {
  assertEquals(isWeakKey(Symbol.for("foo")), false);
});
