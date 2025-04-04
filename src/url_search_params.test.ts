/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/url-search-params
 */

import { assert } from "@std/assert";
import { isURLSearchParams } from "./url_search_params.ts";

Deno.test("isURLSearchParams should return true for URLSearchParams instances", () => {
  assert(isURLSearchParams(new URLSearchParams()));
  assert(isURLSearchParams(new URLSearchParams("a=1&b=2")));
});

Deno.test("isURLSearchParams should return false for non-URLSearchParams instances", () => {
  assert(!isURLSearchParams({}));
  assert(!isURLSearchParams(new URL("data:")));
});

Deno.test("isURLSearchParams should return true for URL instances with URLSearchParams properties", () => {
  assert(isURLSearchParams(new URL("https://foobar.com?a=1").searchParams));
});

Deno.test("isURLSearchParams should return false for null and undefined", () => {
  assert(!isURLSearchParams(null));
  assert(!isURLSearchParams(undefined));
});
