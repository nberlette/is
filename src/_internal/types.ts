// deno-lint-ignore-file ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/types
 */

const BRAND: unique symbol = Symbol("BRAND");

type BRAND = typeof BRAND;

export interface Branded<T = never> {
  readonly [BRAND]: T;
}

export interface Flavored<T = never> extends Partial<Branded<T>> {}

export type Brand<T, B = never> = T & Branded<B>;

export type Flavor<T, F = never> = T & Flavored<F>;

export type Or<A, B> = [A & {}] extends [never] ? B : A;

export type Is<T, U> = Or<Extract<T, U>, Or<Extract<U, T>, U>>;

/**
 * An empty interface used to create a non-widening type from a generic type
 * such as `string`, `number`, or `symbol`. This is used to create literal
 * unions which define a set of possible values for a type, while allowing
 * for the possibility of other values.
 *
 * @internal
 */
// deno-lint-ignore no-empty-interface
export interface _ {}

export type strings = string & {};

export type numbers = number & {};

export type symbols = symbol & _;

/** Equivalent to `unknown`, but safe to use in a union. */
export type unknowns = {} | null | undefined;

export type Expand<T, Fallback = never> = T extends infer T ? T : Fallback;

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
export type ObjectEntries<T> = ObjectEntry<T>[];
export type ObjectKeys<T> = (string & keyof T)[];
export type ObjectValues<T> = T[keyof T][];

export type Split<
  S extends string,
  C extends string = "",
> = S extends `${infer F}${infer R}`
  ? R extends `${C}${infer Q}` ? [F, ...Split<Q, C>]
  : [F, ...Split<R, C>]
  : S extends "" ? []
  : [S];

export type ValueOf<T> = T[keyof T];
