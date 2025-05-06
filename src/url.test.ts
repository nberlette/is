import { assert } from "@std/assert";
import { isURL } from "./url.ts";

Deno.test("isURL should return true for URL objects", () => {
  assert(isURL(new URL("https://example.com")));
});

Deno.test("isURL should return false for URL strings", () => {
  assert(!isURL("https://example.com"));
});

Deno.test("isURL should return false for objects with href property", () => {
  assert(!isURL({ href: "https://example.com" }));
});

Deno.test("isURL should return false for objects with URL properties", () => {
  assert(!isURL({ ...new URL("https://example.com") }));
});

Deno.test("isURL should return false for non-objects", () => {
  assert(!isURL("https://example.com"));
  assert(!isURL(null));
  assert(!isURL(undefined));
  assert(!isURL(123));
  assert(!isURL(true));
});
