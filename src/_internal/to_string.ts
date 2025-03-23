import { uncurryThis } from "./uncurry_this.ts";

/**
 * An uncurried version of the `Object.prototype.toString` method, which allows
 * for the `this` binding to be passed as the first argument.
 * @example
 * ```ts
 * import { toString } from "./src/_internal.ts";
 *
 * console.log(toString({})); // "[object Object]"
 * console.log(toString([])); // "[object Array]"
 * ```
 */
export const toString = uncurryThis(Object.prototype.toString) as
  & (<T>(target: T) => `[object ${string}]`)
  & ((target: unknown) => string);
