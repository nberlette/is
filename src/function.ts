/**
 * Check if the given value is a function.
 *
 * @param it The value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 * @example
 * ```ts
 * import { isFunction } from "jsr:@nick/is/function";
 *
 * console.log(isFunction(() => {})); // true
 * console.log(isFunction(function() {})); // true
 * console.log(isFunction(class {})); // true
 * console.log(isFunction(new Function())); // true
 * console.log(isFunction({})); // false
 * console.log(isFunction(1)); // false
 * ```
 * @category Standard
 */
export function isFunction<
  T = never,
  // deno-lint-ignore no-explicit-any
  A extends readonly unknown[] = any[],
  R = unknown,
>(
  it: unknown,
): it is [T] extends [never] ? (...args: A) => R : (this: T, ...args: A) => R {
  return typeof it === "function";
}

export default isFunction;
