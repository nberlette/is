// deno-lint-ignore-file no-explicit-any
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/exact
 */

/**
 * This module provides a type-level predicate to check if two types are
 * exactly the same type in terms of their structural assignability. It is
 * designed to be used in TypeScript type definitions only, and does not have
 * any runtime behavior.
 *
 * The {@linkcode IsExact} type utility provided by this module performs a very
 * strict comparison of two types, and will only return `true` if the types are
 * exactly the same.
 *
 * - This distinguishes between `any`, `unknown`, and `never`, and also takes
 *   into account the types of deeply nested properties in objects.
 * - Parameter types and return types of functions are respected, as well as
 *   their contextul `this` types (all three of which are checked).
 * - `any`, `unknown`, and `never` are all treated like any other type - if
 *   they do not exactly match, the two outer types are considered inequal.
 * - This does not consider two tuples to be the same unless their mutability
 *   is also an exact match (i.e. `readonly []` is not the same as `[]`).
 * - This respects the type parameters of most built-in generic types, such as
 *   `Array`, `Map`, `Set`, `WeakMap`, `WeakSet`, `Promise`, `Generator`,
 *   `AsyncGenerator`, `AsyncIterable`, `Iterable`, `Iterator`, and more.
 * - Constructors and Functions are both strictly verified, and must have the
 *   same parameter types, return types, and (in the case of functions) the
 *   same contextual `this` type.
 *   - Additionally, the `prototype` property (if present) must also match, as
 *     well as any static properties that may exist on the function itself.
 *   - This means that `function foo(a: number): number` is not the same as
 *     `function bar(a: number): number; bar.baz = 1;`
 *   - It also means that `function foo(a: number): number` is not the same as
 *     `(a: number) => number` (which has no `prototype` property).
 * @module exact
 */
import type { IsAny } from "./any.ts";
import type { IsNever } from "./never.ts";

type Eq<T, Boxed extends boolean = true> = Boxed extends true
  ? <X>(_: T) => [X] extends [T] ? 1 : 2
  : <X>(_: T) => X extends T ? 1 : 2;

type Matches<T, U, True = true, False = false, Boxed extends boolean = true> =
  Boxed extends true ? (
      [T] extends [U] ? [U] extends [T] ? True : False : False
    )
    : (
      T extends U ? U extends T ? True : False : False
    );

type MatchMutability<T, A extends readonly unknown[]> = Matches<
  Eq<Readonly<T>>,
  Eq<T>,
  readonly [...A],
  [...A]
>;

type PrepArray<T> = T extends readonly [infer First, ...infer Rest]
  ? MatchMutability<T, [Prep<First>, ...PrepArray<Rest>]>
  : MatchMutability<T, []>;

type Prep<T> = IsAny<T> extends true ? Any
  : T extends (this: infer This, ...args: infer Args) => infer Return
    ? { (this: Prep<This>, ...args: PrepArray<Args>): Prep<Return> } & {
      prototype: T extends { prototype: infer Proto } ? Prep<Proto> : never;
    } & Prep<Omit<T, "prototype">>
  : T extends abstract new (...args: infer Args) => infer Return
    ? { new (...args: PrepArray<Args>): Prep<Return> } & {
      prototype: Prep<
        "prototype" extends keyof T
          ? IsAny<T["prototype"], Return, T["prototype"]>
          : Return
      >;
    } & Prep<Omit<T, "prototype">>
  : T extends readonly unknown[] ? PrepArray<T>
  : T extends Record<PropertyKey, any> ? { [K in keyof T]: Prep<T[K]> }
  : T extends Map<infer Key, infer Value> ? Map<Prep<Key>, Prep<Value>>
  : T extends Set<infer Value> ? Set<Prep<Value>>
  : T extends WeakMap<infer Key, infer Value> ? WeakMap<Prep<Key>, Prep<Value>>
  : T extends WeakSet<infer Value> ? WeakSet<Prep<Value>>
  : T extends Promise<infer Value> ? Promise<Prep<Value>>
  : T extends Generator<infer Value, infer Return, infer Next>
    ? Generator<Prep<Value>, Prep<Return>, Prep<Next>>
  : T extends AsyncGenerator<infer Value, infer Return, infer Next>
    ? AsyncGenerator<Prep<Value>, Prep<Return>, Prep<Next>>
  : T extends AsyncIterable<infer Value> ? AsyncIterable<Prep<Value>>
  : T extends Iterable<infer Value> ? Iterable<Prep<Value>>
  : T extends Iterator<infer Value, infer Return, infer Next>
    ? Iterator<Prep<Value>, Prep<Return>, Prep<Next>>
  : T extends AsyncIterableIterator<infer Value>
    ? AsyncIterableIterator<Prep<Value>>
  : T extends IterableIterator<infer Value> ? IterableIterator<Prep<Value>>
  : T extends PromiseLike<infer Value> ? PromiseLike<Prep<Value>>
  : T extends WeakRef<infer Value extends WeakKey> ? WeakRef<Prep<Value>>
  : T extends FinalizationRegistry<infer Value>
    ? FinalizationRegistry<Prep<Value>>
  : T extends ReadableStream<infer Value> ? ReadableStream<Prep<Value>>
  : T extends WritableStream<infer Value> ? WritableStream<Prep<Value>>
  : T extends TransformStream<infer Value> ? TransformStream<Prep<Value>>
  : IsNever<keyof T, T, { [K in keyof T]: Prep<T[K]> }>;

declare const ANY: unique symbol;
type ANY = typeof ANY;

type Any = {
  readonly [ANY]: true;
};

/**
 * Type-level predicate to check if {@linkcode T} and {@linkcode U} are exactly
 * the same type in terms of their structural assignability. If the types are
 * an exact match, it will resolve to {@linkcode True} (default: true). If not,
 * it will resolve to {@linkcode False} (default: false).
 *
 * You can override the `True` and `False` type parameters to customize the
 * behavior of this type predicate, and effectively create a type-level
 * ternery operation. Be mindful that while you _can_ create nested conditional
 * type checks with this, it is usually not recommended to do so (for the same
 * reasons why it's discouraged to do so with a runtime ternary operator).
 *
 * This is a strict comparison that leverages TypeScript's internal semantics
 * surrounding type variance and assignability, and is not just a simple `T
 * extends U` check.
 *
 * @template T The first time to compare.
 * @template U The second type to compare.
 * @template [True=true] The type to return if the check passes.
 * @template [False=false] The type to return if the check fails.
 * @example
 * ```ts
 * import type { IsExact } from "@nick/is/type/exact";
 *
 * type A = IsExact<"hello", "hello">; // true
 * type B = IsExact<{ a: string | null }, { a: string | null }>; // true
 * type C = IsExact<any, any>; // true
 * type D = IsExact<never, never>; // true
 *
 * type E = IsExact<any, unknown>; // false
 * type F = IsExact<never, any>; // false
 * type G = IsExact<{ a: string | null }, { a: string }>; // false
 * type H = IsExact<{ a: string | null }, { a: string | undefined }>; // false
 * type I = IsExact<{ a: string; b?: number }, { a: string; b: number }>; // false
 * type J = IsExact<{ a: void }, { a: undefined }>; // false
 * type K = T.IsExact<{ a: boolean }, { a: any }>; // false
 * ```
 */
export type IsExact<T, U, True = true, False = false> = Matches<
  Eq<Prep<T>>,
  Eq<Prep<U>>,
  True,
  False
>;

function foo(a: number): number {
  return a;
}

type _Tests = [
  IsExact<typeof foo, (a: number) => number>,
];
