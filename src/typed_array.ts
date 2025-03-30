/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/typed-array
 */

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

const TypedArrayPrototypeGetToStringTag = Reflect.getOwnPropertyDescriptor(
  Object.getPrototypeOf(
    Uint8Array,
  ).prototype as TypedArray,
  Symbol.toStringTag,
)?.get;

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
export type TypedArray =
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Float16Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

type TypedArrayTypeName = string & TypedArray[typeof Symbol.toStringTag];

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
export function isTypedArray(it: unknown): it is TypedArray;

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
 * @returns `true` if the value is a typed array of the specified type, `false` otherwise.
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
export function isTypedArray<K extends TypedArrayTypeName>(
  it: unknown,
  type: K,
): it is Extract<TypedArray, { [Symbol.toStringTag]: K }>;

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
    const tag = TypedArrayPrototypeGetToStringTag?.call(it);
    return tag != null && (type === void 0 || tag === type);
  } catch {
    return false;
  }
}

export default isTypedArray;
