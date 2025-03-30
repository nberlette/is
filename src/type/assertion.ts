/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/assertion
 */
/**
 * @module assertion
 */
import type { Expand } from "../_internal/types.ts";

/**
 * Represents an assertion function that checks if a given value of the base
 * type `Base` is also of the derived type `Type`. If the value is not of the
 * derived type, it will throw an error.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * @example
 * ```ts
 * const assertString: Assertion<string> = (it: unknown): asserts it is string => {
 *   if (typeof it !== "string") {
 *     throw new TypeError("Expected a string");
 *   }
 * };
 * ```
 */
export type Assertion<
  // deno-lint-ignore no-explicit-any
  Type extends Base = any,
  Base = unknown,
  // deno-lint-ignore no-explicit-any
  Args extends readonly unknown[] = readonly any[],
> = Expand<(it: Base, ...args: Args) => asserts it is Type>;
