/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/url
 */

/**
 * @module url
 *
 * Checks if a value is a URL object. This function is useful for checking if a
 * value is an instance of the `URL` class, while being much more reliable than
 * the typical `instanceof URL` check. Unlike `instanceof`, this check will work
 * across different realms, such as iframes or web workers, and is also more
 * strict about what it considers a URL object.
 *
 * @example
 * ```ts
 * import { isURL } from "jsr:@nick/is/url";
 *
 * console.log(isURL(new URL("https://example.com"))); // true
 * console.log(isURL(new URL("https://example.com").toString())); // false
 * console.log(isURL({ href: "https://example.com" })); // false
 * console.log(isURL({ ...new URL("https://example.com") })); // false
 * ```
 */

/**
 * @module url
 *
 * Checks if a value is a URL object. This function is useful for checking if a
 * value is an instance of the `URL` class, while being much more reliable than
 * the typical `instanceof URL` check. Unlike `instanceof`, this check will work
 * across different realms, such as iframes or web workers, and is also more
 * strict about what it considers a URL object.
 *
 * @param it The value to check.
 * @returns `true` if the value is a URL object, `false` otherwise.
 * @example
 * ```ts
 * import { isURL } from "jsr:@nick/is/url";
 *
 * console.log(isURL(new URL("https://example.com"))); // true
 * console.log(isURL(new URL("https://example.com").toString())); // false
 * console.log(isURL({ href: "https://example.com" })); // false
 * console.log(isURL({ ...new URL("https://example.com") })); // false
 * ```
 * @category Web APIs
 */
export function isURL(it: unknown): it is URL {
  if ("URL" in globalThis) {
    const getHref = Object.getOwnPropertyDescriptor(URL.prototype, "href")?.get;
    if (typeof getHref === "function" && typeof it === "object" && it != null) {
      try {
        return typeof getHref.call(it) === "string";
      } catch {
        /* ignore */
      }
    }
  }
  return false;
}

/** @ignore */
export default isURL;
