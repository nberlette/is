/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/type/predicate
 */

/**
 * This module provides the {@linkcode Predicate} type definition, which is a
 * type alias that represents a type predicate (guard) function that narrows
 * a value's base type to a derived type of higher specificity.
 *
 * @category Types
 * @module type/predicate
 */

import type { Expand } from "../internal/types.ts";

/**
 * Represents a type guard (predicate function) that checks if a given value
 * of the base type `Base` is also of the derived type `Type`.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * @example
 * ```ts
 * import type { Predicate } from "jsr:@nick/is/type/predicate";
 *
 * const isString: Predicate<string> = (it) => typeof it === "string";
 * ```
 * @category Types
 */
export type Predicate<
  // deno-lint-ignore no-explicit-any
  Type extends Base = any,
  Base = unknown,
  Args extends readonly unknown[] = [],
> = Expand<(it: Base, ...args: Args) => it is Type>;
