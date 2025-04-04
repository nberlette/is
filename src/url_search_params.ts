/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/url-search-params
 */

/**
 * @module url-search-params
 *
 * Checks if a value is a URLSearchParams object.
 *
 * This function is useful for checking if a value is an instance of the native
 * `URLSearchParams` class, without leaning on the `instanceof` operator (which
 * known to be unreliable in certain environments and across different realms).
 *
 * @example
 * ```ts
 * import { isURLSearchParams } from "jsr:@nick/is/url-search-params";
 *
 * console.log(isURLSearchParams(new URLSearchParams())); // true
 * console.log(isURLSearchParams(new URLSearchParams("a=1&b=2"))); // true
 * console.log(isURLSearchParams(new URL("https://foobar.com?a=1").searchParams)); // true
 * console.log(isURLSearchParams({})); // false
 * console.log(isURLSearchParams(new URL("data:"))); // false
 * ```
 */
import { tryMethod } from "./_internal.ts";

/**
 * Checks if a value is a URLSearchParams object.
 *
 * This function is useful for checking if a value is an instance of the native
 * `URLSearchParams` class, without leaning on the `instanceof` operator (which
 * known to be unreliable in certain environments and across different realms).
 *
 * @param it The value to check.
 * @returns `true` if the value is a URLSearchParams object, `false` otherwise.
 * @example
 * ```ts
 * import { isURLSearchParams } from "jsr:@nick/is/url-search-params";
 *
 * console.log(isURLSearchParams(new URLSearchParams())); // true
 * console.log(isURLSearchParams(new URLSearchParams("a=1&b=2"))); // true
 * console.log(isURLSearchParams(new URL("https://foobar.com?a=1").searchParams)); // true
 * console.log(isURLSearchParams({})); // false
 * console.log(isURLSearchParams(new URL("data:"))); // false
 * ```
 * @category Web APIs
 */
export function isURLSearchParams(it: unknown): it is URLSearchParams {
  if (it == null || typeof it !== "object") return false;
  if (typeof URLSearchParams !== "function") return false;
  return tryMethod(URLSearchParams.prototype, "toString", it);
}

/** @ignore */
export default isURLSearchParams;
