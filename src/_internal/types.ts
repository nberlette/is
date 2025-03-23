export type { Union } from "jsr:@type/union@^0.1.0";

const BRAND: unique symbol = Symbol("BRAND");

type BRAND = typeof BRAND;

export interface Branded<T = never> {
  readonly [BRAND]: T;
}

export interface Flavored<T = never> extends Partial<Branded<T>> {}

export type Brand<T, B = never> = T & Branded<B>;

export type Flavor<T, F = never> = T & Flavored<F>;

// deno-lint-ignore ban-types
export type Or<A, B> = [A & {}] extends [never] ? B : A;

export type Is<T, U> = Or<Extract<T, U>, Or<Extract<U, T>, U>>;

export type strings = Flavor<string>;

export type Expand<T, Fallback = never> = T extends infer T ? T : Fallback;

export type Split<
  S extends string,
  C extends string = "",
> = S extends `${infer F}${infer R}`
  ? R extends `${C}${infer Q}` ? [F, ...Split<Q, C>]
  : [F, ...Split<R, C>]
  : S extends "" ? []
  : [S];

// deno-fmt-ignore
export type Whitespace =
  | "\u{9}" // '\t'
  | "\u{A}" // '\n'
  | "\u{B}" // '\v'
  | "\u{C}" // '\f'
  | "\u{D}" // '\r'
  | "\u{20}" // ' '
  | "\u{85}"
  | "\u{A0}"
  | "\u{1680}"
  | "\u{2000}"
  | "\u{2001}"
  | "\u{2002}"
  | "\u{2003}"
  | "\u{2004}"
  | "\u{2005}"
  | "\u{2006}"
  | "\u{2007}"
  | "\u{2008}"
  | "\u{2009}"
  | "\u{200A}"
  | "\u{2028}"
  | "\u{2029}"
  | "\u{202F}"
  | "\u{205F}"
  | "\u{3000}"
  | "\u{FEFF}";

export type ValueOf<T> = T[keyof T];
