/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/never
 */
/**
 * Checks if the type {@linkcode T} is specifically `never`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not. This is useful for
 * creating type guards, conditional types, and other utilities where you need
 * to determine whether or not a specific type or type parameter is the empty
 * set type `never`.
 *
 * This module also provides a utility type {@linkcode OmitNever} that can be
 * used to filter out properties from an object type where their value has been
 * reduced to `never`.
 *
 * @remarks
 * Since `never` is a "bottom" type in TypeScript, it is allowed to be
 * assigned to any other type, overriding any constraints or restrictions that
 * are in place in a manner similar to the `any` type. Unlike the `any` type,
 * however, `never` does not allow for any values to be assigned _to_ it.
 *
 * This makes it a useful tool for creating "unreachable" code paths, or for
 * indicating that a function never returns a value (i.e. it throws an error).
 * There is a risky side to it, however, as demonstrated below:
 *
 * ```ts
 * type IsTrue<T, True = true, False = false> =
 *  [T] extends [true] ? True : False;
 *
 * type A = IsTrue<false>;
 * //   ^? type A = false
 *
 * type B = IsTrue<true>;
 * //   ^? type B = true
 *
 * type C = IsTrue<never>; // <-- this is the risky part
 * //   ^? type C = true   // <-- that's not what we wanted!
 * ```
 *
 * As you can see above, the `IsTrue` type guard is not able to distinguish
 * between `true` and `never`, which can lead to unexpected results. The same
 * problem applies to any other type guard that does not explicitly check for
 * `never` as a type. This is where the `Never` type guard comes in handy:
 *
 * ```ts
 * import type { IsNever } from "@nick/is/type";
 *
 * // we first check if the type is `never`, returning `False` if it is.
 * // if it is not `never`, we can then safely check if it is `true`.
 * type IsTrue<T, True = true, False = false> =
 *   IsNever<T, False, [T] extends [true] ? True : False>;
 * ```
 *
 * Should you also need to check if a type is `any`, and would like to do so in
 * a single type guard, try the {@linkcode IsAnyOrNever} type guard instead.
 *
 * @category Types
 * @module never
 */

/**
 * Check if the type {@linkcode T} is specifically `never`, returning
 * {@linkcode True} if it is, and {@linkcode False} if not.
 *
 * @template T The type to check.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is/type/never";
 *
 * type A = IsNever<never>; // true
 * type B = IsNever<never, "never", "not never">; // "never"
 * ```
 * @category Types
 */
export type IsNever<T, True = true, False = false> = [T] extends [never] ? True
  : False;

/**
 * Omit properties from an object type where the value is `never`.
 *
 * This relies on the {@linkcode IsNever} utility type.
 *
 * @example
 * ```ts
 * import type { OmitNever } from "@nick/is/type/never";
 *
 * type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
 * //   ^? type A = { a: string; b: never; c: number }
 *
 * type B = OmitNever<A>;
 * //   ^? type B = { a: string; c: number }
 * ````
 * @category Types
 */
// deno-fmt-ignore
export type OmitNever<T, Deep extends boolean = false> =
  | T extends object ? {
    [K in keyof T as IsNever<T[K], never, K>]:
      Deep extends true ? OmitNever<T[K], Deep> : T[K];
  } : T;
