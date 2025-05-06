import { assertEquals } from "@std/assert";
import { isURLString } from "./url_string.ts";

Deno.test("isURLString: should return true for valid URL strings", () => {
  assertEquals(
    isURLString("https://example.com"),
    true,
    "https://example.com is a valid URL",
  );
  assertEquals(isURLString("data:"), true, "data: is a valid URL");
});

Deno.test("isURLString: should return false for invalid URL strings", () => {
  assertEquals(isURLString("//foo"), false, "//foo is not a valid URL");
  assertEquals(
    isURLString("example.com"),
    false,
    "example.com is not a valid URL",
  );
});

Deno.test("isURLString: should return false for non-string inputs", () => {
  assertEquals(isURLString(123), false, "123 is not a string");
  assertEquals(isURLString(true), false, "true is not a string");
  assertEquals(isURLString(null), false, "null is not a string");
  assertEquals(isURLString(undefined), false, "undefined is not a string");
});

Deno.test("isURLString: should return false for string inputs that are not URLs", () => {
  assertEquals(isURLString("not a URL"), false, "not a URL is not a valid URL");
});

Deno.test("isURLString: should return true for string inputs that can be parsed as URLs", () => {
  assertEquals(
    isURLString("http://example.com"),
    true,
    "http://example.com can be parsed as a URL",
  );
  assertEquals(
    isURLString("https://example.com/path/to/page"),
    true,
    "https://example.com/path/to/page can be parsed as a URL",
  );
});
