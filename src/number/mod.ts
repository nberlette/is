/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/number
 */

/**
 * @module number
 *
 * This module provides a set of type guards for working with numeric values,
 * including integers, floats, and special numbers like `NaN`, `Infinity`, and
 * `-Infinity`. Each sub-module provides a runtime type guard function and a
 * compile-time type alias for TypeScript, allowing you to perform strict type
 * checks and utilize strict type annotations in your code with minimal effort.
 *
 * @example
 * ```ts
 * import { isNumber, isNegative, type Negative } from "jsr:@nick/is/number";
 *
 * let x = -1, y = 0;
 *
 * let z = -2 as Negative;
 *
 * if (isNegative(x)) z = x;
 * ```
 *
 * @category Numeric
 */

export * from "./even.ts";
export * from "./finite_integer.ts";
export * from "./finite.ts";
export * from "./float.ts";
export * from "./float16.ts";
export * from "./float32.ts";
export * from "./float64.ts";
export * from "./in_range.ts";
export * from "./infinity.ts";
export * from "./int8.ts";
export * from "./int16.ts";
export * from "./int32.ts";
export * from "./integer.ts";
export * from "./nan.ts";
export * from "./negative_finite_integer.ts";
export * from "./negative_finite.ts";
export * from "./negative_infinity.ts";
export * from "./negative_integer.ts";
export * from "./negative_nonzero_finite_integer.ts";
export * from "./negative_nonzero_finite.ts";
export * from "./negative_nonzero_integer.ts";
export * from "./negative_nonzero.ts";
export * from "./negative_zero.ts";
export * from "./negative.ts";
export * from "./nonzero_finite_integer.ts";
export * from "./nonzero_finite.ts";
export * from "./nonzero_integer.ts";
export * from "./nonzero.ts";
export * from "./number.ts";
export * from "./odd.ts";
export * from "./positive_finite_integer.ts";
export * from "./positive_finite.ts";
export * from "./positive_infinity.ts";
export * from "./positive_integer.ts";
export * from "./positive_nonzero_finite_integer.ts";
export * from "./positive_nonzero_finite.ts";
export * from "./positive_nonzero_integer.ts";
export * from "./positive_nonzero.ts";
export * from "./positive_zero.ts";
export * from "./positive.ts";
export * from "./types.ts";
export * from "./uint8.ts";
export * from "./uint16.ts";
export * from "./uint32.ts";
export * from "./zero.ts";
