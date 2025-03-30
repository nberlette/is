/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/url-string
 */

/**
 * Checks if a value is a string that is a valid, parsable URL capable of being
 * passed to the `URL` constructor.
 *
 * @example
 * ```ts
 * import { isURLString } from "jsr:@nick/is/url-string";
 *
 * console.log(isURLString("https://example.com")); // true
 * console.log(isURLString("data:")); // true
 * console.log(isURLString("https://foo")); // false
 * console.log(isURLString("example.com")); // false
 * ```
 * @category Web APIs
 * @module url-string
 */
import type { Brand } from "./_internal.ts";

const URL_REGEX =
  /^(?<protocol>[a-zA-Z][a-zA-Z\d+-.]*:)(?:\/\/(?:(?<username>[^:@\/?#]+)(?::(?<password>[^:@\/?#]*))?@)?(?<hostname>[^:\/?#]+)(?::(?<port>\d+))?)?(?<pathname>\/[^?#]*)?(?<search>\?[^#]*)?(?<hash>#.*)?$/;

/**
 * A string that is a valid, parsable URL capable of being passed to the `URL`
 * constructor. This is a branded string type, meaning it behaves as a nominal
 * type that is distinct from other string values. The only way to narrow a
 * string to a {@linkcode URLString} type is by validating it first with the
 * {@linkcode isURLString} type guard function.
 *
 * @category Web APIs
 * @category Types
 */
export type URLString = Brand<string, "URL">;

/**
 * Checks if a value is a string that is a valid, parsable URL capable of being
 * passed to the `URL` constructor.
 *
 * @param it The value to check.
 * @returns `true` if the value is a URL string, `false` otherwise.
 * @example
 * ```ts
 * import { isURLString } from "jsr:@nick/is/url-string";
 *
 * console.log(isURLString("https://example.com")); // true
 * console.log(isURLString("data:")); // true
 * console.log(isURLString("https://foo")); // false
 * console.log(isURLString("example.com")); // false
 * ```
 * @category Web APIs
 */
export function isURLString(it: unknown): it is URLString {
  if (typeof it !== "string") return false;
  const URL = globalThis.URL;
  try {
    if (typeof URL === "function") {
      if ("canParse" in URL && typeof URL.canParse === "function") {
        return URL.canParse(it.toString());
      }
      new URL(it.toString());
      return true;
    } else {
      return URL_REGEX.test(it);
    }
  } catch { /* ignore */ }
  return false;
}

/** @ignore */
export default isURLString;
