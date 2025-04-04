/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/whitespace
 */

import isIterable from "./iterable.ts";
import type { IsAny } from "./type/any.ts";
import type { IsNever } from "./type/never.ts";

/**
 * This module provides type guards for checking values against whitespace
 * characters, including {@linkcode isWhitespaceChar}, to check for a single
 * {@linkcode Whitespace} character, and {@linkcode isWhitespac} which checks
 * if an entire string is comprised exclusively of whitespace characters).
 *
 * It also provides various related type definitions and type-level guards,
 * including {@linkcode Whitespace}, a union of all whitespace characters, and
 * {@linkcode IsWhitespace}, which serves as a type-level equivalent to the
 * runtime predicate {@linkcode isWhitespace} that was desribed above.
 *
 * @module whitespace
 */

/**
 * Character codes for whitespace characters, as defined by the Unicode
 * standard. This includes characters such as spaces, tabs, newlines, and
 * additional Unicode whitespace characters that are not typically visible.
 *
 * These char codes correspond directly to the {@linkcode WHITESPACE_CHARS}
 * values at the same indices.
 *
 * @category Types
 * @tags whitespace, char code
 */
export const WHITESPACE_CODES = [
  /** Horizontal Tab (`\t`) */
  0x9,
  /** Line Feed (`\n`) */
  0xA,
  /** Vertical Tab (`\v`) */
  0xB,
  /** Form Feed (`\f`) */
  0xC,
  /** Carriage Return (`\r`) */
  0xD,
  /** Space (` `) */
  0x20,
  /** Next Line (`\u0085`) */
  0x85,
  /** Non-Breaking Space (`\u00A0`) */
  0xA0,
  /** Ogham Space Mark (`\u1680`) */
  0x1680,
  /** En Quad (`\u2000`) */
  0x2000,
  /** Em Quad (`\u2001`) */
  0x2001,
  /** En Space (`\u2002`) */
  0x2002,
  /** Em Space (`\u2003`) */
  0x2003,
  /** Three-Per-Em Space (`\u2004`) */
  0x2004,
  /** Four-Per-Em Space (`\u2005`) */
  0x2005,
  /** Six-Per-Em Space (`\u2006`) */
  0x2006,
  /** Figure Space (`\u2007`) */
  0x2007,
  /** Punctuation Space (`\u2008`) */
  0x2008,
  /** Thin Space (`\u2009`) */
  0x2009,
  /** Hair Space (`\u200A`) */
  0x200A,
  /** Zero Width Space (`\u200B`) */
  0x200B,
  /** Zero Width Non-Breaking Space (`\u200C`) */
  0x200C,
  /** Zero Width Non-Joiner (`\u200D`) */
  0x200D,
  /** Left-To-Right Mark (`\u200E`) */
  0x200E,
  /** Right-To-Left Mark (`\u200F`) */
  0x200F,
  /** Line Separator (`\u2028`) */
  0x2028,
  /** Paragraph Separator (`\u2029`) */
  0x2029,
  /** Narrow No-Break Space (`\u202F`) */
  0x202F,
  /** Medium Mathematical Space (`\u205F`) */
  0x205F,
  /** Word Joiner (`\u2060`) */
  0x2060,
  /** Ideographic Space (`\u3000`) */
  0x3000,
  /** Zero Width No-Break Space / ByteOrderMark (`\uFEFF`) */
  0xFEFF,
] as const;

/**
 * An array of whitespace characters, as defined by the Unicode standard.
 * This includes characters such as spaces, tabs, newlines, and additional
 * Unicode whitespace characters that are not typically visible.
 *
 * These characters correspond directly to the {@linkcode WHITESPACE_CODES}
 * values at the same indices.
 *
 * @category Types
 * @tags whitespace
 */
export const WHITESPACE_CHARS = [
  /** Horizontal Tab (`\t`) */
  "\u{9}",
  /** Line Feed (`\n`) */
  "\u{A}",
  /** Vertical Tab (`\v`) */
  "\u{B}",
  /** Form Feed (`\f`) */
  "\u{C}",
  /** Carriage Return (`\r`) */
  "\u{D}",
  /** Space (` `) */
  "\u{20}",
  /** Next Line (`\u0085`) */
  "\u{85}",
  /** Non-Breaking Space (`\u00A0`) */
  "\u{A0}",
  /** Ogham Space Mark (`\u1680`) */
  "\u{1680}",
  /** En Quad (`\u2000`) */
  "\u{2000}",
  /** Em Quad (`\u2001`) */
  "\u{2001}",
  /** En Space (`\u2002`) */
  "\u{2002}",
  /** Em Space (`\u2003`) */
  "\u{2003}",
  /** Three-Per-Em Space (`\u2004`) */
  "\u{2004}",
  /** Four-Per-Em Space (`\u2005`) */
  "\u{2005}",
  /** Six-Per-Em Space (`\u2006`) */
  "\u{2006}",
  /** Figure Space (`\u2007`) */
  "\u{2007}",
  /** Punctuation Space (`\u2008`) */
  "\u{2008}",
  /** Thin Space (`\u2009`) */
  "\u{2009}",
  /** Hair Space (`\u200A`) */
  "\u{200A}",
  /** Zero Width Space (`\u200B`) */
  "\u{200B}",
  /** Zero Width Non-Breaking Space (`\u200C`) */
  "\u{200C}",
  /** Zero Width Non-Joiner (`\u200D`) */
  "\u{200D}",
  /** Left-To-Right Mark (`\u200E`) */
  "\u{200E}",
  /** Right-To-Left Mark (`\u200F`) */
  "\u{200F}",
  /** Line Separator (`\u2028`) */
  "\u{2028}",
  /** Paragraph Separator (`\u2029`) */
  "\u{2029}",
  /** Narrow No-Break Space (`\u202F`) */
  "\u{202F}",
  /** Medium Mathematical Space (`\u205F`) */
  "\u{205F}",
  /** Word Joiner (`\u2060`) */
  "\u{2060}",
  /** Ideographic Space (`\u3000`) */
  "\u{3000}",
  /** Zero Width No-Break Space / ByteOrderMark (`\uFEFF`) */
  "\u{FEFF}",
] as const;

/**
 * Union of all whitespace character codes, as defined by the Unicode
 * standard. This includes characters such as spaces, tabs, newlines, and
 * additional Unicode whitespace characters that are not typically visible.
 *
 * @category Types
 * @tags whitespace, char code
 */
export type WhitespaceCode = typeof WHITESPACE_CODES[number];

/**
 * A union of all whitespace characters, as defined by the Unicode standard.
 * This includes characters such as spaces, tabs, newlines, and additional
 * Unicode whitespace characters that are not typically visible in text.
 *
 * This type is particularly useful for type-level programming, specifically
 * when developing string manipulation types that need to account for various
 * types of whitespace characters rather than a simple ASCII space.
 *
 * For example, if one wanted to create a type-level utility to split a string
 * literal into its constituent parts using whitespace and punctuation as its
 * delimiters, it could be done quite easily using this type.
 *
 * @category Types
 * @tags whitespace
 */
// deno-fmt-ignore
// deno-lint-ignore ban-types
export type Whitespace = typeof WHITESPACE_CHARS[number] & {};

/**
 * Type-level predicate that checks if a given string {@linkcode T} is a
 * whitespace character. If {@linkcode T} is a whitespace character, it will
 * resolve to the {@linkcode True} type parameter (default: `true`). Otherwise,
 * it will resolve to the {@linkcode False} type parameter (default: `false`).
 *
 * The compile-time equivalent of the {@linkcode isWhitespaceChar} function.
 */
export type IsWhitespaceChar<
  T extends string,
  True = true,
  False = false,
> = T extends Whitespace ? True : False;

/**
 * Type-level predicate that checks if a given string {@linkcode T} is a
 * whitespace character code. If {@linkcode T} is a whitespace character code,
 * it will resolve to the {@linkcode True} type parameter (default: `true`).
 * Otherwise, it will resolve to the {@linkcode False} type parameter (default:
 * `false`).
 *
 * The compile-time equivalent of the {@linkcode isWhitespaceCode} function.
 */
export type IsWhitespaceCode<
  T extends number,
  True = true,
  False = false,
> = T extends WhitespaceCode ? True : False;

/**
 * If the given string {@linkcode T} is whitespace, this type will resolve to
 * the {@linkcode True} type parameter (default: `true`). Otherwise, it will
 * resolve to the {@linkcode False} type parameter (default: `false`).
 *
 * @category Types
 * @tags whitespace
 */
// deno-fmt-ignore
export type IsWhitespace<
  T extends string,
  True = true,
  False = false,
> = IsNever<T> extends true ? False
  : IsAny<T> extends true ? True
  : T extends Whitespace ? True
  : T extends `${Whitespace}${infer R}`
    ? IsWhitespace<R, True, False>
  : False;

declare const WHITESPACE: unique symbol;

interface WhitespaceBrand {
  readonly [WHITESPACE]: never;
}

/**
 * Represents a string that has been verified at runtime to only consist of
 * whitespace characters. This is a nominal (branded) type that is distinct
 * from a regular string type.
 *
 * @category Types
 * @tags whitespace, branded
 */
export type WhitespaceString<S extends string = string> = S & WhitespaceBrand;

/**
 * A union type that can be either a string or a whitespace character code.
 *
 * This is the type used in the {@linkcode isWhitespaceLike} function to
 * determine if a value is either a string or a whitespace character code.
 *
 * @category Types
 * @tags whitespace
 */
export type WhitespaceLike = WhitespaceString | Whitespace | WhitespaceCode;

/**
 * Checks if a given value is a whitespace character code.
 *
 * This function checks if the provided value is a number and if it is
 * included in the list of recognized whitespace character codes, which
 * is exposed as the {@linkcode WHITESPACE_CODES} array.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a whitespace character code, `false`
 * otherwise.
 */
// deno-fmt-ignore
export function isWhitespaceCode(it: unknown): it is WhitespaceCode {
  if (typeof it === "number" && it === it) {
    for (let i = 0; i < WHITESPACE_CODES.length; i++) {
      if (it === WHITESPACE_CODES[i]) return true;
    }
  }
  return false;
}

/**
 * Checks if a given character is a whitespace character.
 *
 * This function checks if the provided character is one of the recognized
 * whitespace characters, including spaces, tabs, newlines, and additional
 * Unicode whitespace characters.
 *
 * @param it - The character to check.
 * @returns `true` if the character is a whitespace character, `false`
 * otherwise.
 *
 * @example
 * ```ts
 * import { isWhitespaceChar } from "jsr:@nick/is/whitespace";
 *
 * console.log(isWhitespaceChar(" ")); // true
 * console.log(isWhitespaceChar("\n")); // true
 * console.log(isWhitespaceChar("\t")); // true
 * console.log(isWhitespaceChar("a")); // false
 * ```
 * @category Strings
 * @tags whitespace
 */
export function isWhitespaceChar(it: unknown): it is Whitespace {
  if (typeof it === "string" && it.length === 1) {
    return isWhitespaceCode(it.charCodeAt(0));
  }
  return false;
}

/**
 * Checks if the provided value is either a string or an iterable of strings
 * that consists entirely of whitespace characters.
 *
 * This function is useful for validating input data, ensuring that it contains
 * characters other than whitespace.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a string or an iterable of strings that
 * consists entirely of whitespace characters, `false` otherwise.
 *
 * @example
 * ```ts
 * import { isWhitespace } from "jsr:@nick/is/whitespace";
 *
 * console.log(isWhitespace("   ")); // true
 * console.log(isWhitespace("abc")); // false
 * console.log(isWhitespace("  a ")); // false
 * console.log(isWhitespace(""));     // false
 * console.log(isWhitespace(" \n\t ")); // true
 * ```
 * @category Strings
 * @tags whitespace
 */
export function isWhitespace<S extends string>(
  it: S,
): it is IsWhitespace<S, S, string extends S ? WhitespaceString<S> : never>;
export function isWhitespace(it: unknown): it is WhitespaceString;
/** @internal */
export function isWhitespace(it: unknown): it is WhitespaceString {
  if (typeof it === "string" && it.length > 0) {
    for (let i = 0; i < it.length; i++) {
      if (!isWhitespaceChar(it[i])) return false;
    }
    return true;
  }
  return false;
}

/**
 * Checks if the provided value is either a string or an iterable of strings
 * that consists entirely of whitespace characters.
 *
 * This function is useful for validating input data, ensuring that it contains
 * characters other than whitespace.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a string or an iterable of strings that
 * consists entirely of whitespace characters, `false` otherwise.
 */
export function isWhitespaceLike<S extends string>(
  it: S,
): it is IsWhitespace<S, S, never>;
/**
 * Checks if the provided value is a whitespace character code.
 *
 * This function checks if the provided value is a number and if it is
 * included in the list of recognized whitespace character codes, which
 * is exposed as the {@linkcode WHITESPACE_CODES} array.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a whitespace character code, `false`
 * otherwise.
 */
export function isWhitespaceLike<N extends number>(
  it: N,
): it is IsWhitespaceCode<N, N, never>;
/**
 * Checks if the provided value is either a string or an iterable of strings
 * that consists entirely of whitespace characters.
 *
 * This function is useful for validating input data, ensuring that it contains
 * characters other than whitespace.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a string or an iterable of strings that
 * consists entirely of whitespace characters, `false` otherwise.
 */
export function isWhitespaceLike(
  it: Iterable<string>,
): it is Iterable<Whitespace>;
/**
 * Checks if the provided value is a whitespace character code.
 *
 * @param it - The value to check.
 * @returns `true` if the value is a whitespace character code, `false`
 * otherwise.
 */
export function isWhitespaceLike(it: number): it is WhitespaceCode;
/** @internal */
export function isWhitespaceLike(it: unknown): it is WhitespaceLike;
/** @internal */
export function isWhitespaceLike(
  it: unknown,
): it is string | WhitespaceCode | Iterable<Whitespace> {
  if (typeof it === "number") return isWhitespaceCode(it);
  if (typeof it === "string") {
    return it.length > 1 ? isWhitespace(it) : isWhitespaceChar(it);
  }
  if (isIterable(it)) {
    for (const value of it) {
      if (!isWhitespaceLike(value)) return false;
    }
  }
  return false;
}

export default isWhitespace;
