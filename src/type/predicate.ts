/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/predicate
 */
import type { Expand } from "../_internal/types.ts";

/**
 * Represents a type guard (predicate function) that checks if a given value
 * of the base type `Base` is also of the derived type `Type`.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * @example
 * ```ts
 * const isString: Predicate<string> = (it: unknown): it is string => (
 *   typeof it === "string"
 * );
 * ```
 */
export type Predicate<
  // deno-lint-ignore no-explicit-any
  Type extends Base = any,
  Base = unknown,
  // deno-lint-ignore no-explicit-any
  Args extends readonly unknown[] = any[],
> = Expand<(it: Base, ...args: Args) => it is Type>;
