/**
 * @module uint32
 *
 * Checks if a given value is an unsigned 32-bit integer, which equates to the
 * range `[0, 65535]` (or `[0x0, 0xFFFFFFFF]` in hexadecimal).
 *
 * @example
 * ```ts
 * import { isUint32, type Uint32, type MaybeUint32 } from "@nick/is/number";
 *
 * let value = 1 as Uint32;
 *
 * const setValue = (newValue: MaybeUint32) => {
 *   if (isUint32(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
 * ```
 * @category Numbers
 * @tags uint32, number
 * @module uint32
 */
import { isInteger } from "./integer.ts";
import type { Cast, MAYBE_UINT32, UINT32 } from "./types.ts";

/**
 * Casts a value into an unsigned 32-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint32, type Uint32, type MaybeUint32 } from "@nick/is/number";
 *
 * let value = 1 as Uint32;
 *
 * const setValue = (newValue: MaybeUint32) => {
 *   if (isUint32(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
 * ```
 * @category Numbers
 * @category Types
 * @tags unsigned, integer
 */
export type Uint32<N = number> = Cast<N, UINT32>;

/**
 * Casts a value into a partial unsigned 32-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint32, type Uint32, type MaybeUint32 } from "@nick/is/number";
 *
 * let value = 1 as Uint32;
 *
 * const setValue = (newValue: MaybeUint32) => {
 *   if (isUint32(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, unsigned, integer
 */
export type MaybeUint32<N = number> = Cast<N, MAYBE_UINT32>;

/**
 * Checks if a given value is an unsigned 32-bit integer.
 *
 * @template N The type of the value to check.
 * @param it The value to check.
 * @returns {it is Uint32<N>} `true` if `it` is an unsigned 32-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint32, type Uint32, type MaybeUint32 } from "@nick/is/number";
 *
 * let value = 1 as Uint32;
 *
 * const setValue = (newValue: MaybeUint32) => {
 *   if (isUint32(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint32<const N = number>(it: N): it is Uint32<N>;

/**
 * Checks if a given value is an unsigned 32-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if `it` is an unsigned 32-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint32, type Uint32, type MaybeUint32 } from "@nick/is/number";
 *
 * let value = 1 as Uint32;
 *
 * const setValue = (newValue: MaybeUint32) => {
 *   if (isUint32(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint32(it: unknown): it is Uint32<number>;

/** @ignore */
export function isUint32(it: unknown): it is number {
  return isInteger(it) && (it >>> 0 === it);
}

/** @ignore */
export default isUint32;
