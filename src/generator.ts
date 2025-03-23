import { isIterableIterator } from "./iterable_iterator.ts";
import { isTagged } from "./tagged.ts";

/**
 * Check if the given value is a generator, which is an iterable iterator that
 * was created with the `function*() { ... }` syntax.
 *
 * This is the type of value **_returned_** when a generator function
 * (`function*() { ... }`) is called, and not the type of the function itself.
 * To check for the function itself, use `isGeneratorFunction` instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a generator, `false` otherwise.
 * @example
 * ```ts
 * import { isGenerator } from "jsr:@nick/is/generator";
 *
 * function* gen() { yield 1; }
 * const iter = gen();
 *
 * console.log(isGenerator(iter)); // true
 * console.log(isGenerator(gen)); // false
 * ```
 * @category Generators
 * @module generator
 */
// deno-lint-ignore no-explicit-any
export function isGenerator<T = unknown, TReturn = any, TNext = unknown>(
  it: unknown,
): it is Generator<T, TReturn, TNext> {
  return isIterableIterator(it) && typeof it.return === "function" &&
    typeof it.throw === "function" && isTagged(it, "Generator");
}

export default isGenerator;
