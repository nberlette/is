import { isTaggedNative } from "./_internal.ts";
import { isObjectLike } from "./object_like.ts";

/**
 * Check if the given value is an instance of the native Error class, or of a
 * subclass that inherits from it, like `TypeError` or `RangeError`.
 *
 * This is more reliable than `instanceof Error`, because it also works across
 * different realms (e.g. iframes / web workers / browser tabs). It's also more
 * strict than `instanceof` because it **does not** recognize objects that were
 * created with `Object.create(Error.prototype)` or `Object.setPrototypeOf` as
 * being a subclass of `Error`.
 *
 * @param it The value to check.
 * @returns `true` if the value is an error, `false` otherwise.
 * @example
 * ```ts
 * import { isError } from "jsr:@nick/is/error";
 *
 * const err = new Error("Something went wrong");
 * console.log(isError(err)); // true
 * console.log(isError(err.message)); // false
 * ```
 * @category Standard
 * @module error
 */
export function isError(it: unknown): it is Error {
  return isObjectLike(it) && isTaggedNative(it, "Error");
}

export default isError;
