/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/template-strings-array
 */

/**
 * Checks if the given value is a template strings array, which is an array of
 * strings with an own property named `raw` that also is an array of strings.
 * This is the type of array provided to tagged template literals for the first
 * argument, represented as the type `TemplateStringsArray` in TypeScript.
 *
 * @remarks
 * This guards is a stricter form of {@linkcode isTemplateObject}. For a value
 * to pass this check, it must satisfy the `isTemplateObject` check and also be
 * a readonly array of strings.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@nick/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * function print(strings: TemplateStringsArray, ...values: any[]): string;
 * function print(...vals: unknown[]): string;
 * function print(...vals: unknown[]): string {
 *   const [strings, ...values] = vals;
 *   if (isTemplateStringsArray(strings)) {
 *     return String.raw(strings, ...values);
 *   } else {
 *     return JSON.stringify(vals);
 *   }
 * };
 *
 * print(["a", "b", "c"], 1, 2, 3); // '[["a", "b", "c"], 1, 2, 3]'
 * print`a${1}b${2}c${3}`; // a1b2c3
 * ```
 * @category Template Literals
 * @module template-strings-array
 */
import { isArray } from "./array.ts";
import { isString } from "./string.ts";
import { isTemplateObject } from "./template_object.ts";

/**
 * Checks if the given value is a template strings array, which is an array of
 * strings with an own property named `raw` that also is an array of strings.
 * This is the type of array provided to tagged template literals for the first
 * argument, and is represented as the type `TemplateStringsArray` in
 * TypeScript.
 *
 * This predicate's type is a supertype of the one checked by its more lenient
 * counterpart, {@linkcode isTemplateObject}, which only checks if the
 * value is an object with a `raw` property that is an array of strings.
 *
 * @param it The value to check.
 * @returns `true` if the value is a TemplateStringsArray, `false` otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@nick/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * function print(strings: TemplateStringsArray, ...values: any[]): string;
 * function print(...vals: unknown[]): string;
 * function print(...vals: unknown[]): string {
 *   const [strings, ...values] = vals;
 *   if (isTemplateStringsArray(strings)) {
 *     return String.raw(strings, ...values);
 *   } else {
 *     return JSON.stringify(vals);
 *   }
 * };
 *
 * print(["a", "b", "c"], 1, 2, 3); // '[["a", "b", "c"], 1, 2, 3]'
 * print`a${1}b${2}c${3}`; // a1b2c3
 * ```
 * @category Template Literals
 */
export function isTemplateStringsArray(
  it: unknown,
): it is TemplateStringsArray {
  return isTemplateObject(it) && isArray(it, isString);
}

/**
 * A template strings array is an array of strings with an own property named
 * `raw` that is also an array of strings. This is the type of array provided
 * to tagged template literals for the first argument, and is represented as
 * the type `TemplateStringsArray` in TypeScript.
 *
 * Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s,
 * not all `TemplateStringsObject`s are `TemplateStringsArray`s.
 *
 * @category Types
 * @tags TemplateStringsArray
 */
export interface TemplateStringsArray extends ReadonlyArray<string> {
  readonly raw: ReadonlyArray<string>;
}

/**
 * A type guard for `TemplateStringsArray` values.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `TemplateStringsArray`, `false` otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateStringsArray
 * } from "jsr:@nick/is/template-strings-array";
 *
 * console.log(isTemplateStringsArray(["a", "b", "c"])); // false
 * console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false
 *
 * function print(strings: TemplateStringsArray, ...values: any[]): string;
 * function print(...vals: unknown[]): string;
 * function print(...vals: unknown[]): string {
 *   const [strings, ...values] = vals;
 *   if (isTemplateStringsArray(strings)) {
 *     return String.raw(strings, ...values);
 *   } else {
 *     return JSON.stringify(vals);
 *   }
 * };
 *
 * print(["a", "b", "c"], 1, 2, 3); // '[["a", "b", "c"], 1, 2, 3]'
 * print`a${1}b${2}c${3}`; // a1b2c3
 * ```
 * @category Template Literals
 * @tags TemplateStringsArray
 */
export default isTemplateStringsArray;
