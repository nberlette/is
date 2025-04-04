/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/non-array-object
 */

/**
 * Check if a given value is a non-null object other than an array or function.
 *
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 *
 * console.log(isNonArrayObject([])); // false
 * console.log(isNonArrayObject(() => {})); // false
 * console.log(isNonArrayObject(null)); // false
 * console.log(isNonArrayObject(undefined)); // false
 * console.log(isNonArrayObject(1)); // false
 * ```
 * @category Objects
 * @module non-array-object
 */

import { isArray } from "./array.ts";
import { isObject } from "./object.ts";
import type { EmptyObject } from "./empty_object.ts";
import type { IsAnyOrUnknownOrNever } from "./type/any_or_unknown_or_never.ts";
import type { IsArray } from "./type/array.ts";
import type { IsExact } from "./type/exact.ts";

declare const NON_ARRAY_OBJECT: unique symbol;
type NON_ARRAY_OBJECT = typeof NON_ARRAY_OBJECT;

interface NonArrayObjectBrand {
  readonly [NON_ARRAY_OBJECT]: true;
}

/**
 * Represents a non-null object that is neither an array nor a function. This
 * is **generic** nominal (branded) type, that can either be used as is to
 * represent a non-null object that is neither an array nor a function, or can
 * be parameterized with a specific type.
 *
 * When parameterized, the type it receives will be intersected with an
 * unforgeable unique brand to ensure it is distinct from the base type (and
 * any other type for that matter). This allows you to create custom subtypes
 * of your own that have been validated at runtime, providing a level of
 * type safety that is just not possible with a plain object type.
 *
 * @example
 * ```ts
 * import nonArray, {
 *   type NonArrayObject,
 * } from "jsr:@nick/is/non-array-object";
 *
 * let obj: readonly unknown[] | Record<number, unknown> = {};
 *
 * const doesntLikeArrays = <T>(obj: NonArrayObject<T>) => {
 *   // do something with obj
 * };
 *
 * doesntLikeArrays(obj); // error
 * ```
 * @category Objects
 * @tags NonArrayObject, branded
 */
export type NonArrayObject<T = EmptyObject> =
  & IsAnyOrUnknownOrNever<
    T,
    // deno-lint-ignore no-explicit-any
    Record<PropertyKey, any>,
    Exclude<T, readonly unknown[]>
  >
  & NonArrayObjectBrand;

/**
 * Converts a given type `T` into a non-array object type, if possible. If `T`
 * is `any`, `unknown`, or `never`, it resolves to `never`. If `T` is an array
 * or a function, it also resolves to `never`. If `T` is an object type, it
 * resolves to `NonArrayObject<T>`, branding it with the unique symbol that
 * marks it as a valid non-array object.
 *
 * @category Objects
 * @tags NonArrayObject, branded
 * @experimental
 */
export type AsNonArrayObject<T> = IsAnyOrUnknownOrNever<
  T,
  never,
  IsArray<
    T,
    never,
    NonArrayObject<
      // deno-lint-ignore no-explicit-any
      IsExact<T, object, T, T extends (...args: any) => any ? never : T>
    >
  >
>;

/**
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-null object, `false` otherwise.
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 * ```
 * @category Objects
 */
export function isNonArrayObject<T>(it: T): it is NonArrayObject<T>;

/**
 * Check if the given value is a non-null object. This includes all non-null
 * and non-array values where `typeof === "object"`. If you want to check for
 * arrays and functions, too, use {@link isObjectLike} instead.
 *
 * @param it The value to check.
 * @returns `true` if the value is a non-null object, `false` otherwise.
 * @example
 * ```ts
 * import { isNonArrayObject } from "jsr:@nick/is/non-array-object";
 *
 * console.log(isNonArrayObject({})); // true
 * console.log(isNonArrayObject(new class {})); // true
 * console.log(isNonArrayObject(new Object())); // true
 *
 * console.log(isNonArrayObject([])); // false
 * console.log(isNonArrayObject(() => {})); // false
 * console.log(isNonArrayObject(null)); // false
 * console.log(isNonArrayObject(undefined)); // false
 * console.log(isNonArrayObject(1)); // false
 * ```
 * @category Objects
 */
export function isNonArrayObject<T>(it: unknown): it is Record<PropertyKey, T>;

/** @internal */
export function isNonArrayObject(it: unknown): it is NonArrayObject {
  return isObject(it) && !isArray(it);
}

/** @ignore */
export default isNonArrayObject;
