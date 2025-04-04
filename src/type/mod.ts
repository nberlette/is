/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/mod
 */
/**
 * Collection of purely type-level guards for TypeScript.
 *
 * All of the guards in this module provide a consistent API for checking the
 * types of values at compile-time: they all accept `True` and `False` type
 * parameters as their last two argumens, which default to `true` and `false`,
 * respectively.
 *
 * The `True` type parameter is the type that the guard will resolve to if the
 * type matches, and `False` is what it resolves to if it does not. This
 * allows for simple inline conditional type checks as well as more complex
 * nested conditionals.
 *
 * @example
 * ```ts
 * import type { IsNever } from "@nick/is/type";
 *
 * // using the `IsNever` guard to filter out `never` types
 * type OmitNever<T> = { [K in keyof T as IsNever<T[K], never, K>]: T[K] };
 * ```
 *
 * @example
 * ```ts
 * import type { IsUnknown } from "@nick/is/type";
 *
 * // using the `IsUnknown` guard to filter out `unknown` types
 * type OmitUnknown<T> = {
 *   [K in keyof T as IsUnknown<T[K], never, K>]: T[K]
 * };
 * ```
 * @category Types
 *
 * @module type
 */
export * from "./any_or_never.ts";
export * from "./any_or_unknown_or_never.ts";
export * from "./any.ts";
export * from "./array.ts";
export * from "./assertion.ts";
export * from "./boolean.ts";
export * from "./exact.ts";
export * from "./expect.ts";
export * from "./index_signature.ts";
export * from "./literal.ts";
export * from "./never.ts";
export * from "./null.ts";
export * from "./numeric.ts";
export * from "./predicate.ts";
export * from "./tuple.ts";
export * from "./undefined.ts";
export * from "./unknown_or_never.ts";
export * from "./unknown.ts";
