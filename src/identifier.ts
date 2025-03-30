/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/identifier
 */

/**
 * Provides the {@linkcode isIdentifier} type guard and a companion utility
 * type {@link Identifier} that represents a valid JavaScript identifier.
 *
 * Identifiers are strings that can be used as a name of a variable, function,
 * property, label, or export. The {@linkcode Identifier} type is a branded
 * nominal subtype of `string`, useful for distinguishing between regular
 * strings and those which have been validated as identifiers at runtime.
 *
 * The {@linkcode isIdentifier} function checks if a given string is a valid
 * JavaScript identifier via a two-part check:
 *
 * 1. the input string is validated against a regular expression pattern, which
 *    is exposed as the {@linkcode isIdentifier.pattern} property (allowing for
 *    custom overrides in advanced use cases and testing scenarios).
 * 2. If the value passes the pattern test, it is then checked against a list
 *    of reserved words that are forbidden for use as per the ECMAScript
 *    specification. As with the pattern, the set of reserved words is exposed
 *    as the {@linkcode isIdentifier.reservedWords} property (as a native `Set`
 *    instance), allowing overrides and extensions to the list if necessary.
 *
 * @example
 * ```ts
 * import { type Identifier, isIdentifier } from "jsr:@nick/is/identifier";
 *
 * const foo = "bar" satisfies Identifier<"bar">
 * //     ^? const foo: Identifier<"bar">
 *
 * console.log(isIdentifier("foo")); // true
 * console.log(isIdentifier("1")); // false
 * console.log(isIdentifier("export")); // false
 * ```
 * @module identifier
 */
import type { Brand, strings } from "./_internal.ts";
import { identifier_regexp as pattern } from "./_internal/unicode_regexp.ts";

/**
 * Regular Expression pattern used to check if a string is a valid JavaScript
 * identifier. This is available as a separate property for the ability to
 * override it with a custom pattern.
 *
 * @category Primitives
 */
export { pattern };

/**
 * Reserved words in JavaScript that cannot be used as identifiers. This is
 * available as a separate property for the ability to override it with a
 * custom list of reserved words. Mostly used for testing purposes.
 *
 * @category Primitives
 */
const reserved = [
  "abstract",
  "await",
  "arguments",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
] as const;
type reserved = typeof reserved;

/**
 * Represents a reserved word in JavaScript that cannot be used as an
 * identifier, such as `export`, `default`, `class`, etc.
 *
 * @category Primitives
 * @tags identifier, reserved
 */
export type ReservedWord = reserved[number];

/**
 * A `Set` of reserved words in JavaScript that cannot be used as identifiers.
 * This is available as a separate property for the ability to override it with
 * a custom list of reserved words. Mostly used for testing purposes.
 *
 * @category Primitives
 * @tags identifier, reserved
 */
// the `strings` union allows userland string extensions to this set
// without raising a compile-time assignability error.
export const reservedWords: Set<ReservedWord | strings> = new globalThis.Set(
  reserved,
);

globalThis.Object.defineProperties(isIdentifier, {
  // non-writable, non-enumerable, non-configurables
  reservedWords: { value: reservedWords },
  pattern: { value: pattern, enumerable: true },
});

/**
 * Utility type brand that represents a valid JavaScript identifier. This is a
 * string that can be used as a name of a variable, function, property, label,
 * or export. It is a subtype of `string` and is used to distinguish between
 * regular strings and identifiers.
 *
 * @category Primitives
 */
export type Identifier<T extends string = string> = Brand<T, "Identifier">;

/**
 * Checks if a given string is a valid JavaScript identifier, meaning it can be
 * used as the name of a variable, function, property, label, or export.
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid identifier, `false` otherwise.
 * @example
 * ```ts
 * import { isIdentifier } from "jsr:@nick/is/identifier";
 *
 * console.log(isIdentifier("a")); // true
 * console.log(isIdentifier("1")); // false
 * console.log(isIdentifier("export")); // false
 * ```
 * @category Primitives
 */
export function isIdentifier<T extends string>(it: T): it is Identifier<T>;

/**
 * Checks if a given value is a valid JavaScript identifier, meaning it can be
 * used as the name of a variable, function, property, label, or export.
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid identifier, `false` otherwise.
 * @example
 * ```ts
 * import { isIdentifier } from "jsr:@nick/is/identifier";
 *
 * console.log(isIdentifier("a")); // true
 * console.log(isIdentifier("1")); // false
 * console.log(isIdentifier("export")); // false
 * ```
 * @category Primitives
 */
export function isIdentifier(it: unknown): it is Identifier;
/**
 * Checks if a given value is a valid JavaScript identifier, meaning it can be
 * used as the name of a variable, function, property, label, or export.
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid identifier, `false` otherwise.
 * @example
 * ```ts
 * import { isIdentifier } from "jsr:@nick/is/identifier";
 *
 * console.log(isIdentifier("a")); // true
 * console.log(isIdentifier("1")); // false
 * console.log(isIdentifier("exportm z=-0fdxz")); // true
 * ```
 * @category Primitives
 */
export function isIdentifier(it: unknown): it is Identifier {
  return typeof it === "string" && isIdentifier.pattern.test(it) &&
    !isIdentifier.reservedWords.has(it);
}

/** @internal */
export declare namespace isIdentifier {
  export { pattern, reservedWords };
}

export default isIdentifier;
