/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/arguments
 */

/**
 * Check if the given value is an instance of the native `Arguments` object,
 * which is a special type of Array-like object that corresponds to the
 * binding arguments of a particular JavaScript function.
 *
 * This check will return `false` for any other kind of array-like object.
 *
 * @example
 * ```ts
 * import { isArguments } from "jsr:@nick/is/arguments";
 *
 * function foo() {
 *   console.log(isArguments(arguments)); // true
 *   console.log(isArguments([1, 2, 3])); // false
 * }
 * ```
 * @category Indexed Collections
 * @module arguments
 */

import { isTaggedNative } from "./_internal.ts";
import { isArrayLikeObject } from "./array_like.ts";

/**
 * Check if the given value is an instance of the native `Arguments` object,
 * which is a special type of Array-like object that corresponds to the
 * binding arguments of a particular JavaScript function.
 *
 * This check will return `false` for any other kind of array-like object.
 *
 * @param it The value to check.
 * @returns `true` if the value is an `Arguments` object, `false` otherwise.
 * @example
 * ```ts
 * import { isArguments } from "jsr:@nick/is/arguments";
 *
 * function foo() {
 *   console.log(isArguments(arguments)); // true
 *   console.log(isArguments([1, 2, 3])); // false
 * }
 * ```
 * @category Indexed Collections
 */
export function isArguments(it: unknown): it is IArguments {
  return isArrayLikeObject(it) && isTaggedNative(it, "Arguments");
}

export default isArguments;
