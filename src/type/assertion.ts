/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/type/assertion
 */

/**
 * This module provides the {@linkcode Assertion} type, which is a type alias
 * for a function that asserts a value is of a specific type. It is used to
 * create custom type assertions that throw an error if the value does not
 * match the expected type.
 *
 * This is useful for performing runtime type checks with support for stricter
 * type narrowing than a standard type guard.
 *
 * @category Types
 * @tags Assertion
 * @module assertion
 */
import type { Expand } from "../internal/types.ts";

/**
 * Represents an assertion function that checks if a given value of the base
 * type `Base` is also of the derived type `Type`. If the value is not of the
 * derived type, it will throw an error.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * @example
 * ```ts
 * import type { Assertion } from "jsr:@nick/is/type/assertion";
 *
 * const assertString: Assertion<string> = (it) => {
 *   if (typeof it !== "string") throw new TypeError("Expected a string");
 *   // do nothing when the type is correct; the compiler does the rest here.
 * };
 * ```
 * @category Types
 * @tags Assertion
 */
export type Assertion<
  // deno-lint-ignore no-explicit-any
  Type extends Base = any,
  Base = unknown,
  // deno-lint-ignore no-explicit-any
  Args extends readonly unknown[] = readonly any[],
> = Expand<(it: Base, ...args: Args) => asserts it is Type>;
