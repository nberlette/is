/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/empty-object
 */

/**
 * Check if a value is an empty object.
 *
 * @example
 * ```ts
 * import { isEmptyObject } from "jsr:@nick/is/empty-object";
 *
 * console.log(isEmptyObject({})); // true
 * console.log(isEmptyObject(new Object())); // true
 *
 * console.log(isEmptyObject({ a: 1 })); // false
 * console.log(isEmptyObject({ a: 1, b: 2 })); // false
 * console.log(isEmptyObject([])); // false
 * console.log(isEmptyObject(null)); // false
 * console.log(isEmptyObject(undefined)); // false
 * console.log(isEmptyObject(1)); // false
 * ```
 * @module empty-object
 */
import { isNonArrayObject } from "./non_array_object.ts";

/**
 * Unique sentinel symbol that indicates an object is empty. This is used to
 * create a type that only matches empty objects.
 * @internal
 */
const kEmptyObject: unique symbol = Symbol();
type kEmptyObject = typeof kEmptyObject;

/**
 * Represents an empty object with no own properties.
 *
 * @example
 * ```ts
 * import type { EmptyObject } from "jsr:@nick/is/empty-object";
 *
 * const foo: EmptyObject = {}; // OK
 * const bar: EmptyObject = []; // ts(6133): Type 'never[]' has no properties in common with type 'EmptyObject'.
 * ```
 * @category Objects
 */
export type EmptyObject = {
  [_ in kEmptyObject]?: never;
};

/**
 * Type-level predicate that checks if a value is an empty object. This is the
 * type equivalent of the {@linkcode isEmptyObject} function.
 *
 * It also supports custom true/false types, allowing you to construct your own
 * type guards with the desired return type, or create conditional types that
 * depend on the emptiness of an object.
 *
 * @example
 * ```ts
 * import type { IsEmptyObject } from "jsr:@nick/is/empty-object";
 *
 * type A = IsEmptyObject<{}>; // true
 * type B = IsEmptyObject<{ a: 1 }>; // false
 * type C = IsEmptyObject<[]>; // false
 * ```
 * @example
 * ```ts
 * import type { IsEmptyObject } from "jsr:@nick/is/empty-object";
 *
 * type PickEmptyObjectProperties<T> = {
 *   [K in keyof T as IsEmptyObject<T[K], K, never>]: T[K];
 *   // shorthand conditionals       true ^  ^ false
 *   // equivalent to: IsEmptyObject<T[K]> extends true ? K : never
 * };
 * ```
 * @see {@linkcode EmptyObject} for the type that represents an empty object.
 * @see {@linkcode isEmptyObject} for the runtime equivalent of this type.
 *
 * @category Objects
 * @category Type Guards
 */
// deno-fmt-ignore
export type IsEmptyObject<T, True = true, False = false> =
  | [T] extends [never] ? False // <- T is `never`
  : boolean extends (T extends never ? true : false)
    ? False // <- T is `any` (should this be `True`?)
  : [T] extends [EmptyObject] ? True // <- T is `EmptyObject`
  : T extends object
    ? object extends T ? False // <- T is `object`
    : [Exclude<keyof T, kEmptyObject>] extends [never]
      ? True // <- T is either a truly empty object, or just `EmptyObject`
    : False // <- T has properties
  : False; // <- T is a primitive

/**
 * Check if a value is an empty object.
 *
 * @template const T The type of the value to check.
 * @param value The value to check.
 * @returns `true` if the value is an empty object, or `false` otherwise.
 * @example
 * ```ts
 * import { isEmptyObject } from "jsr:@nick/is/empty-object";
 *
 * console.log(isEmptyObject({})); // true
 * console.log(isEmptyObject(new Object())); // true
 *
 * console.log(isEmptyObject({ a: 1 })); // false
 * console.log(isEmptyObject({ a: 1, b: 2 })); // false
 * console.log(isEmptyObject([])); // false
 * console.log(isEmptyObject(null)); // false
 * console.log(isEmptyObject(undefined)); // false
 * console.log(isEmptyObject(1)); // false
 * ```
 * @category Objects
 */
export function isEmptyObject(it: unknown): it is EmptyObject {
  return isNonArrayObject(it) && Object.keys(it).length === 0;
}

/** @ignore */
export default isEmptyObject;
