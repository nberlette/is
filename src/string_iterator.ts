/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/string-iterator
 */

import { isIterator } from "./iterator.ts";
import { isTagged } from "./tagged.ts";
import type { Split } from "./_internal.ts";

/**
 * Check if the given value is a string iterator, which is an iterable iterator
 * that yields individual characters from a string literal or String object.
 * This is the type of object returned by `String.prototype[Symbol.iterator]`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a string iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isStringIterator } from "jsr:@nick/is/string-iterator";
 *
 * const str = "foo";
 * const iter = str[Symbol.iterator]();
 * console.log(isStringIterator(iterator)); // true
 * console.log(isStringIterator(str)); // false
 * ```
 * @category Iterables
 * @module string-iterator
 */
export function isStringIterator<T extends string = string>(
  it: unknown,
): it is StringIterator<T> {
  return isIterator(it) && isTagged(it, "String Iterator");
}

export default isStringIterator;

/** Represents a string iterator. */
export interface StringIterator<T extends string = string>
  extends IterableIterator<string extends T ? string : Split<T, "">[number]> {
  readonly [Symbol.toStringTag]: "String Iterator";
}
