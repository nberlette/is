/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/primitive
 */

/**
 * Checks if a given value is a primitive string, number, bigint, boolean,
 * symbol, null, or undefined.
 *
 * @param it The value to check.
 * @returns `true` if the value is a primitive, `false` otherwise.
 * @example
 * ```ts
 * import { isPrimitive } from "jsr:@nick/is/primitive";
 *
 * isPrimitive("foo"); // true
 * isPrimitive(42); // true
 * isPrimitive(BigInt(42)); // true
 * isPrimitive(true); // true
 * isPrimitive(Symbol("foo")); // true
 * isPrimitive(null); // true
 * isPrimitive(undefined); // true
 *
 * isPrimitive({}); // false
 * isPrimitive(new String("foo")); // false
 * isPrimitive(new Number(42)); // false
 * isPrimitive(new Boolean(true)); // false
 * ```
 * @category Primitives
 * @module primitive
 */
export function isPrimitive(it: unknown): it is Primitive {
  return it == null || typeof it === "string" || typeof it === "number" ||
    typeof it === "bigint" || typeof it === "boolean" || typeof it === "symbol";
}

/**
 * Represents a primitive value. This includes strings, numbers, bigints,
 * booleans, symbols, null, and undefined.
 * @category Primitives
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

export default isPrimitive;
