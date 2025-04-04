/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/index-signature
 */
/**
 * This module provides type-level utilities to check if a given key is an
 * index signature rather than a literal key belonging to a particular object
 * type, and another type to omit those index signatures from any type that is
 * passed to it.
 *
 * @example
 * ```ts
 * import type {
 *   IsIndexSignature,
 *   OmitIndexSignature,
 * } from "jsr:@nick/is/type/index-signature";
 *
 * type A = IsIndexSignature<"foo">; // false
 * type B = IsIndexSignature<0>; // false
 * type C = IsIndexSignature<number>; // false
 * ```
 *
 * @module index-signature
 */
/**
 * If {@linkcode K} is a valid index signature of an object-literal type, this
 * resolves to {@linkcode True}. Otherwise, it resolves to {@linkcode False}.
 *
 * Index signatures are not like literal keys of an object. They do share the
 * same supertypes (either a string, symbol, or number), but instead of them
 * specifying a single property's key on the object, they define _ranges_ of
 * keys that an object can accept, based on their type.
 *
 * Visually, they are surrounded with square brackets, similar to computed
 * properties. Inside of the square brackets, the index signature's label and
 * type are defined.
 *
 * @example
 * ```ts
 * type ArrayLike<T> = {
 *    readonly length: number; // <- standard property
 *    [index: number]: T | undefined; // <- index signature
 * };
 *
 * // using `IsIndexSignature` to filter out index signatures
 * type WithoutIndexSignature<T> = {
 *   [K in keyof T as IsIndexSignature<K, never, K>]: T[K];
 * };
 *
 * type IsolateIndexSignature<T> = {
 *   [K in keyof T as IsIndexSignature<K, K, never>]: T[K];
 * };
 *
 * type A = WithoutIndexSignature<ArrayLike<string>>;
 * //   ^? type A = { readonly length: number }
 *
 * type B = IsolateIndexSignature<ArrayLike<string>>;
 * //   ^? type B = { readonly [index: number]: string | undefined }
 * ```
 *
 * This type is often used for mostly cosmetic purposes, as index signatures
 * tend to make a type look less clean; however, it also serves a practical
 * purpose, allowing you to make a type more specific and restrict the keys
 * that can be used with it to only those that are explicitly defined.
 *
 * @category Types
 */
// deno-fmt-ignore
export type IsIndexSignature<
  K,
  True = true,
  False = false,
> = K extends PropertyKey
  ? // deno-lint-ignore no-explicit-any ban-types
    {} extends Record<K, any>
    ? True
    : False
  : False;

/**
 * Omit generic index signatures from an object type. This is useful for
 * filtering out index signatures that are too broad, allowing you to clean up
 * a type so it only contains literal properties.
 *
 * This relies on the {@linkcode IsIndexSignature} utility type.
 *
 * @example
 * ```ts
 * import type { OmitIndexSignature } from "@nick/is/type";
 *
 * type A = { 0: "foo"; length: 1; [y: number]: string };
 * type B = OmitIndexSignature<A>;
 * //   ^? type B = { 0: "foo"; length: 1 }
 * ```
 * @category Types
 */
// deno-fmt-ignore
export type OmitIndexSignature<T> = {
  [K in keyof T as IsIndexSignature<K, never, K>]: T[K];
};
