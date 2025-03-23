/**
 * This module provides a type guard to check if a value is a template strings
 * object, which has a `raw` property containing an array of strings.
 *
 * This type is used to loosely represent the first argument passed to a tagged
 * template function, which is a template strings array.
 *
 * @example
 * ```ts
 * import {
 *   isTemplateObject,
 * } from "jsr:@nick/is/template-object";
 *
 * console.log(
 *   isTemplateObject({ raw: ["a", "b", "c"] })
 * ); // true
 *
 * // Additional properties are allowed:
 * console.log(
 *   isTemplateObject({ raw: ["a", "b", "c"], other: 1 })
 * ); // true
 *
 * // Mimicking a template strings array will pass:
 * console.log(
 *   isTemplateObject(Object.assign(["\1"], { raw: ["\\1"] })
 * ); // true
 *
 * // However, just having any old `raw` property is not enough:
 * console.log(
 *   isTemplateObject({ raw: 1 })
 * ); // false
 * ```
 * @module template-object
 */
import { isArray } from "./array.ts";
import { isObjectLike } from "./object_like.ts";
import { isString } from "./string.ts";

/**
 * Checks if the given value is a template strings object, which is an object
 * with a `raw` property that is an array of strings.
 *
 * This type fulfills the requirements of the `String.raw` method without
 * necessarily being an array of strings, as well. Useful for validating
 * template literal call sites in tagged template functions, which often times
 * are called with just a plain object with a `raw` property.
 *
 * For a more strict check see {@linkcode isTemplateStringsArray}, which checks
 * if the value is _also_ an array of strings.
 *
 * @param it The value to check.
 * @returns `true` if the value is a template strings object, `false`
 * otherwise.
 * @example
 * ```ts
 * import {
 *   isTemplateObject,
 * } from "jsr:@nick/is/template-object";
 *
 * console.log(
 *   isTemplateObject({ raw: ["a", "b", "c"] })
 * ); // true
 *
 * // Additional properties are allowed:
 * console.log(
 *   isTemplateObject({ raw: ["a", "b", "c"], other: 1 })
 * ); // true
 *
 * // Mimicking a template strings array will pass:
 * console.log(
 *   isTemplateObject(Object.assign(["\1"], { raw: ["\\1"] })
 * ); // true
 *
 * // However, just having any old `raw` property is not enough:
 * console.log(
 *   isTemplateObject({ raw: 1 })
 * ); // false
 * ```
 * @category Template Literals
 * @module template-object
 */
export function isTemplateObject(
  it: unknown,
): it is TemplateObject {
  return isObjectLike(it) && "raw" in it && isArray(it.raw, isString);
}

/**
 * A template strings object is an object with a `raw` property containing an
 * array of strings. This type is used to loosely represent the first argument
 * passed to a tagged template function, which is a template strings array.
 *
 * Note: while all `TemplateStringsArray` values are `TemplateObject`s,
 * not all `TemplateObject`s are `TemplateStringsArray`s.
 *
 * @category Template Literals
 */
export interface TemplateObject {
  readonly raw: readonly string[];
}

/** @ignore */
export default isTemplateObject;
