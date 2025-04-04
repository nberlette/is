// deno-lint-ignore-file ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/typed-array
 */

import type { unknowns, ValueOf } from "./_internal/types.ts";
import type { $globalThis } from "./_internal/global_this.ts";
import type { IsNever } from "./type/never.ts";
import { uncurryGetter } from "./_internal/uncurry_getter.ts";
import {
  ObjectGetPrototypeOf,
  SymbolToStringTag,
  Uint8Array,
} from "./_internal/primordials.ts";

type GetGlobalType<K extends PropertyKey = keyof typeof globalThis> =
  $globalThis extends Record<K, infer V> ? V : never;

type UnstableTypedArrayConstructorMap<
  T extends ArrayBufferLike = ArrayBufferLike,
> =
  & IsNever<
    GetGlobalType<"Float16Array">,
    {},
    { Float16Array: typeof Float16Array<T> }
  >
  & IsNever<
    GetGlobalType<"BigInt64Array">,
    {},
    { BigInt64Array: typeof BigInt64Array<T> }
  >
  & IsNever<
    GetGlobalType<"BigUint64Array">,
    {},
    { BigUint64Array: typeof BigUint64Array<T> }
  >;

/**
 * Maps the names of TypedArray subclasses to their constructor types.
 * This is used to provide type information for the `TypedArray` type
 * and the {@linkcode isTypedArray} function.
 *
 * @internal
 */
export interface TypedArrayConstructorMap<
  T extends ArrayBufferLike = ArrayBufferLike,
> extends UnstableTypedArrayConstructorMap<T> {
  Uint8Array: typeof Uint8Array<T>;
  Uint8ClampedArray: typeof Uint8ClampedArray<T>;
  Uint16Array: typeof Uint16Array<T>;
  Uint32Array: typeof Uint32Array<T>;
  Int8Array: typeof Int8Array<T>;
  Int16Array: typeof Int16Array<T>;
  Int32Array: typeof Int32Array<T>;
  Float32Array: typeof Float32Array<T>;
  Float64Array: typeof Float64Array<T>;
}

/**
 * Maps the names of TypedArray subclasses to their instance types. This is
 * used to provide type information to the {@linkcode isTypedArray} type guard.
 *
 * @internal
 */
export type TypedArrayTypeMap<
  T extends ArrayBufferLike = ArrayBufferLike,
> = {
  [K in keyof TypedArrayConstructorMap<T>]: InstanceType<
    TypedArrayConstructorMap<T>[K]
  >;
};

/**
 * Represents a constructor for typed arrays, which are views over raw binary
 * data buffers (e.g. `ArrayBuffer`) that provide a fixed-size, typed view into
 * the buffer. The following are the supported native typed array types:
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Uint16Array`
 * - `Uint32Array`
 * - `Int8Array`
 * - `Int16Array`
 * - `Int32Array`
 * - `Float16Array` (ES2024)
 * - `Float32Array`
 * - `Float64Array`
 * - `BigInt64Array`
 * - `BigUint64Array`
 */
export type TypedArrayConstructor<T extends ArrayBufferLike = ArrayBufferLike> =
  ValueOf<TypedArrayConstructorMap<T>>;

/**
 * Represents an instance of a typed array, which is a view over a raw binary
 * data buffer (e.g. `ArrayBuffer`) of a fixed-size. The following are the
 * supported native typed array types:
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Uint16Array`
 * - `Uint32Array`
 * - `Int8Array`
 * - `Int16Array`
 * - `Int32Array`
 * - `Float16Array` (ES2024)
 * - `Float32Array`
 * - `Float64Array`
 * - `BigInt64Array`
 * - `BigUint64Array`
 * @see {@link isTypedArray} to check if a value is this type at runtime.
 * @category Binary Data Structures
 */
export type TypedArray<T extends ArrayBufferLike = ArrayBufferLike> =
  InstanceType<TypedArrayConstructor<T>>;

/**
 * Represents the name of a `TypedArrayConstructor`, which is a string that
 * corresponds to a given typed array subclass, e.g. `"Uint8Array"`.
 *
 * @internal
 */
export type TypedArrayTypeName = string & keyof TypedArrayTypeMap;

/**
 * The intrinsic `%TypedArray%` constructor, which is a view over raw binary
 * data buffers (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into
 * the buffer.
 */
export const TypedArray: TypedArrayConstructor = ObjectGetPrototypeOf(
  Uint8Array,
);

/**
 * The intrinsic `%TypedArrayPrototype%`, which is the prototype object for all
 * typed arrays. It provides methods and properties that are shared across all
 * typed array types.
 *
 * @see {@linkcode TypedArray} for the constructor.
 */
export const TypedArrayPrototype: TypedArray = TypedArray.prototype;

/**
 * Checks if a given value is a typed array, which is a view over a raw binary
 * data buffer (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into
 * the buffer. If the {@link type} parameter is given, it checks if the value
 * is that specific typed array type (e.g. `"Uint8Array"` -> `Uint8Array`).
 *
 * For a value to pass this check, it must be an instance of the intrinsic
 * `%TypedArray%` constructor, and have the `%TypedArrayPrototype%` prototype
 * inherited by all native typed array types:
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Uint16Array`
 * - `Uint32Array`
 * - `Int8Array`
 * - `Int16Array`
 * - `Int32Array`
 * - `Float16Array` (ES2024)
 * - `Float32Array`
 * - `Float64Array`
 * - `BigInt64Array`
 * - `BigUint64Array`
 *
 * To check for a specific typed array type, supply its type name (such as
 * `"Uint8Array"`) for the optional second parameter, `type`. Alternatively,
 * you can use one of the more type-specific checks like `isUint8Array()`,
 * which are available as standalone functions for each of the supported typed
 * array types.
 *
 * @example
 * ```ts
 * import { isTypedArray } from "jsr:@nick/is/typed-array";
 *
 * const arr = new Uint8Array(8);
 * isTypedArray(arr); // true
 * isTypedArray(arr, "Uint8Array"); // true
 * ```
 * @category Binary Data Structures
 * @module typed-array
 */

const TypedArrayPrototypeGetToStringTag = uncurryGetter(
  TypedArrayPrototype,
  SymbolToStringTag,
  "stub",
);

/**
 * Checks if a given value is a typed array, which is a view over a raw binary
 * data buffer (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into
 * the buffer. If the {@link type} parameter is given, it checks if the value
 * is that specific typed array type (e.g. `"Uint8Array"` -> `Uint8Array`).
 *
 * For a value to pass this check, it must be an instance of the intrinsic
 * `%TypedArray%` constructor, and have the `%TypedArrayPrototype%` prototype
 * inherited by all native typed array types:
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Uint16Array`
 * - `Uint32Array`
 * - `Int8Array`
 * - `Int16Array`
 * - `Int32Array`
 * - `Float16Array`
 * - `Float32Array`
 * - `Float64Array`
 * - `BigInt64Array`
 * - `BigUint64Array`
 *
 * To check for a specific typed array type, use the `type` parameter or one of
 * the type-specific checks like `isUint8Array`, etc.
 *
 * @param it The value to check.
 * @param [type] Name of a specific typed array type to check for (optional).
 * @returns `true` if the value is a typed array, `false` otherwise.
 * @example
 * ```ts
 * import { isTypedArray } from "jsr:@nick/is/typed-array";
 *
 * const arr = new Uint8Array(8);
 * isTypedArray(arr); // true
 * isTypedArray(arr, "Uint8Array"); // true
 * ```
 * @category Binary Data Structures
 */
export function isTypedArray<T extends ArrayBufferLike = ArrayBufferLike>(
  it: TypedArray<T> | unknowns,
): it is TypedArray<T>;

/**
 * Checks if a given value is a typed array, which is a view over a raw binary
 * data buffer (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into
 * the buffer. If the {@link type} parameter is given, it checks if the value
 * is that specific typed array type (e.g. `"Uint8Array"` -> `Uint8Array`).
 *
 * For a value to pass this check, it must be an instance of the intrinsic
 * `%TypedArray%` constructor, and have the `%TypedArrayPrototype%` prototype
 * inherited by all native typed array types:
 * - `Uint8Array`
 * - `Uint8ClampedArray`
 * - `Uint16Array`
 * - `Uint32Array`
 * - `Int8Array`
 * - `Int16Array`
 * - `Int32Array`
 * - `Float16Array`
 * - `Float32Array`
 * - `Float64Array`
 * - `BigInt64Array`
 * - `BigUint64Array`
 *
 * To check for a specific typed array type, use the `type` parameter or one of
 * the type-specific checks like `isUint8Array`, etc.
 *
 * @param it The value to check.
 * @param [type] Name of a specific typed array type to check for (optional).
 * @returns `true` if the value is a typed array, `false` otherwise.
 * @example
 * ```ts
 * import { isTypedArray } from "jsr:@nick/is/typed-array";
 *
 * const arr = new Uint8Array(8);
 * isTypedArray(arr); // true
 * isTypedArray(arr, "Uint8Array"); // true
 * ```
 * @category Binary Data Structures
 */
export function isTypedArray<T extends ArrayBufferLike = ArrayBufferLike>(
  it: unknown,
): it is TypedArray<T>;

/**
 * Checks if a given value is a typed array of a specific {@link type}. The
 * {@link type} parameter must be one of the following strings:
 * - `"Uint8Array"`
 * - `"Uint8ClampedArray"`
 * - `"Uint16Array"`
 * - `"Uint32Array"`
 * - `"Int8Array"`
 * - `"Int16Array"`
 * - `"Int32Array"`
 * - `"Float16Array"`
 * - `"Float32Array"`
 * - `"Float64Array"`
 * - `"BigInt64Array"`
 * - `"BigUint64Array"`
 *
 * @param it The value to check.
 * @param type Name of a specific typed array type to check for.
 * @returns `true` if the value is a typed array of the specified type, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isTypedArray } from "jsr:@nick/is/typed-array";
 *
 * const arr = new Uint8Array(8);
 * isTypedArray(arr, "Uint8Array"); // true
 * isTypedArray(arr, "Uint16Array"); // false
 * ```
 * @category Binary Data Structures
 */
export function isTypedArray<
  K extends TypedArrayTypeName,
  T extends ArrayBufferLike,
>(
  it: TypedArray<T> | unknowns,
  type: K,
): it is TypedArrayTypeMap<T>[K];

/**
 * Checks if a given value is a typed array of a specific {@link type}. The
 * {@link type} parameter must be one of the following strings:
 * - `"Uint8Array"`
 * - `"Uint8ClampedArray"`
 * - `"Uint16Array"`
 * - `"Uint32Array"`
 * - `"Int8Array"`
 * - `"Int16Array"`
 * - `"Int32Array"`
 * - `"Float16Array"`
 * - `"Float32Array"`
 * - `"Float64Array"`
 * - `"BigInt64Array"`
 * - `"BigUint64Array"`
 *
 * @param it The value to check.
 * @param type Name of a specific typed array type to check for.
 * @returns `true` if the value is a typed array of the specified type, `false`
 * otherwise.
 * @example
 * ```ts
 * import { isTypedArray } from "jsr:@nick/is/typed-array";
 *
 * const arr = new Uint8Array(8);
 * isTypedArray(arr, "Uint8Array"); // true
 * isTypedArray(arr, "Uint16Array"); // false
 * ```
 * @category Binary Data Structures
 */
export function isTypedArray<
  K extends TypedArrayTypeName,
  T extends ArrayBufferLike,
>(
  it: unknown,
  type: K,
): it is TypedArrayTypeMap<T>[K];

/**
 * Checks if a given value is a typed array.
 *
 * @param it The value to check.
 * @param [type] Name of a specific typed array type to check for (optional).
 * @returns `true` if the value is a typed array, `false` otherwise.
 * @category Binary Data Structures
 */
export function isTypedArray(it: unknown, type?: string): it is TypedArray {
  try {
    const tag = TypedArrayPrototypeGetToStringTag?.(
      it as TypedArray,
    );
    return tag != null && (type === void 0 || tag === type);
  } catch {
    return false;
  }
}

export default isTypedArray;
