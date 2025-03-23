/**
 * @module uint16
 *
 * Checks if a given value is an unsigned 16-bit integer, which equates to the
 * range `[0, 65535]` (or `[0x0000, 0xFFFF]` in hexadecimal).
 *
 * @example
 * ```ts
 * import { isUint16, type Uint16, type MaybeUint16 } from "@nick/is/number";
 *
 * let value = 1 as Uint16;
 *
 * const setValue = (newValue: MaybeUint16) => {
 *   if (isUint16(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
 * ```
 * @category Numbers
 * @tags uint16, number
 * @module uint16
 */
import { isInteger } from "./integer.ts";
import type { Cast, MAYBE_UINT16, UINT16 } from "./types.ts";

/**
 * Casts a value into an unsigned 16-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint16, type Uint16, type MaybeUint16 } from "@nick/is/number";
 *
 * let value = 1 as Uint16;
 *
 * const setValue = (newValue: MaybeUint16) => {
 *   if (isUint16(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
 * ```
 * @category Numbers
 * @category Types
 * @tags unsigned, integer
 */
export type Uint16<N = number> = Cast<N, UINT16>;

/**
 * Casts a value into a partial unsigned 16-bit integer type.
 *
 * @template [N=number] The type of the value to cast.
 * @example
 * ```ts
 * import { isUint16, type Uint16, type MaybeUint16 } from "@nick/is/number";
 *
 * let value = 1 as Uint16;
 *
 * const setValue = (newValue: MaybeUint16) => {
 *   if (isUint16(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
 * ```
 * @category Numbers
 * @category Types
 * @tags maybe, unsigned, integer
 */
export type MaybeUint16<N = number> = Cast<N, MAYBE_UINT16>;

/**
 * Checks if a given value is an unsigned 16-bit integer.
 *
 * @template N The type of the value to check.
 * @param it The value to check.
 * @returns {it is Uint16<N>} `true` if `it` is an unsigned 16-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint16, type Uint16, type MaybeUint16 } from "@nick/is/number";
 *
 * let value = 1 as Uint16;
 *
 * const setValue = (newValue: MaybeUint16) => {
 *   if (isUint16(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint16<const N = number>(it: N): it is Uint16<N>;

/**
 * Checks if a given value is an unsigned 16-bit integer.
 *
 * @param it The value to check.
 * @returns `true` if `it` is an unsigned 16-bit integer, `false` otherwise.
 * @example
 * ```ts
 * import { isUint16, type Uint16, type MaybeUint16 } from "@nick/is/number";
 *
 * let value = 1 as Uint16;
 *
 * const setValue = (newValue: MaybeUint16) => {
 *   if (isUint16(newValue)) value = newValue;
 * };
 *
 * setValue(0xFFFF); // <- No error!
 *
 * // This will raise a TypeScript compiler error:
 * value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
 * ```
 * @category Numbers
 * @tags number, unsigned, integer
 */
export function isUint16(it: unknown): it is Uint16<number>;

/** @ignore */
export function isUint16(it: unknown): it is number {
  return isInteger(it) && it >= 0 && it <= 65535;
}

/** @ignore */
export default isUint16;
