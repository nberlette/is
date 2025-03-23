import { isIterator } from "./iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Check if the given value is a set iterator, which is an iterable iterator
 * that yields key-value pairs from a Set object. This is the type of object
 * returned by the `Set.prototype.entries` and `Set.prototype[Symbol.iterator]`
 * methods.
 *
 * @param it The value to check.
 * @returns `true` if the value is a set iterator, `false` otherwise.
 * @example
 * ```ts
 * import { isSetIterator } from "jsr:@nick/is/set-iterator";
 *
 * const set = new Set(["foo", "bar", "foo"]);
 * const iter = set[Symbol.iterator]();
 * console.log(isSetIterator(iterator)); // true
 * console.log(isSetIterator(set)); // false
 * ```
 * @category Iterables
 * @module set-iterator
 */
export function isSetIterator<T>(it: unknown): it is SetIterator<T> {
  return isIterator(it) &&
    (isTagged(it, "Set Iterator") || isTagged(it, "Set Entries"));
}

export default isSetIterator;

/** Represents a set iterator. */
export interface SetIterator<T = unknown> extends IterableIterator<T> {
  readonly [Symbol.toStringTag]: "Set Iterator" | "Set Entries";
}
