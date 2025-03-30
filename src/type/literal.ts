/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/literal
 */
import type { IsBoolean } from "./boolean.ts";

/**
 * If the given type {@linkcode T} is a literal value (meaning a string,
 * number, boolean, bigint, symbol, object literal, or a tuple), this type
 * will resolve to the {@linkcode True} type parameter, which has a default
 * value of `true`. Otherwise it resolves to the {@linkcode False} type
 * parameter, which has a default value of `false`.
 *
 * @example
 * ```ts
 * import type { IsLiteral } from "@nick/is/type";
 *
 * type A1 = IsLiteral<"foo">; // true
 * type A2 = IsLiteral<string | 420>; // false
 * ```
 * @category Types
 */
export type IsLiteral<T, True = true, False = false> = [T] extends [never]
  ? False
  : [T] extends [null] ? True
  : [T] extends [undefined] ? True
  : [T] extends [boolean] ? IsBoolean<T, False, True>
  : [T] extends [number] ? number extends T ? False
    : True
  : [T] extends [string] ? string extends T ? False
    : True
  : [T] extends [bigint] ? bigint extends T ? False
    : True
  : [T] extends [symbol] ? symbol extends T ? False
    : True
  // deno-lint-ignore no-explicit-any
  : [T] extends [Record<PropertyKey, any>]
  // deno-lint-ignore no-explicit-any
    ? Record<PropertyKey, any> extends T ? False
    : True
  // deno-lint-ignore no-explicit-any
  : T extends readonly [] | readonly [any, ...readonly any[]]
    ? number extends T["length"] ? False
    : True
  : [T] extends [object] ? object extends T ? False
    : True
  : False;
