/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/expect
 */

/**
 * This module provides the {@linkcode expectType} function, which is a no-op
 * function (at runtime) that is used for explicit type checking in TypeScript.
 *
 * ### How it works
 *
 * The way this function works is rather simple: a generic function is defined
 * with a single type parameter `T`, and a single argument that is of type `T`.
 * Assuming the TypeScript environment is set up correctly (i.e. strict mode
 * with strict function types enabled), the TypeScript compiler will check that
 * any value passed to the `expectType` function is a match for type `T`.
 *
 * ## Using `expectType` in your tests
 *
 * Since this function performs no operations at runtime, you **must** be sure
 * to run your testing suite with type checking enabled. This way the compiler
 * will raise an error if the type does not match, so the test runner can act
 * on it and fail the test. Otherwise, any usage of this function will just be
 * skipped over at runtime, which is probably not what you want.
 *
 * ### How to enable type checking
 *
 * In Deno, this can be done by passing the `--check` or `--no-check=remote`
 * flag to the `deno test` command.
 *
 * > I personally prefer using the `--no-check=remote` flag, as it allows me to
 * > check the types in my project, without worrying about validating external
 * > modules (which kind of feels like me doing someone else's job for them).
 *
 * ```sh
 * deno test -A --no-check=remote --parallel --doc --coverage
 * ```
 *
 * For other platforms, refer to their respective documentation on how to
 * enable type checking in your tests.
 *
 * @example
 * ```ts
 * import { expectType } from "@nick/is/type/expect";
 *
 * let result: string | number = "hello world";
 *
 * // @ts-expect-error -- this is intentional
 * expectType<string>(result);
 * ```
 *
 * @module expect
 */

/**
 * A no-op function that is used for explicit type checking in TypeScript.
 *
 * This function is a generic function that takes a single type parameter `T`
 * and a single argument of type `T`. The function does not perform any
 * operations at runtime, but it is used to check that the type of the argument
 * passed to it is a match for type `T`. This is useful for testing purposes.
 *
 * @template T The type to check against.
 * @param value THe value to assert the type of.
 * @returns Nothing.
 * @category Testing
 * @example
 * ```ts
 * import { expectType } from "@nick/is/type/expect";
 *
 * let result: string | number = "hello world".toString();
 *
 * // This will raise a type error if `result` is not a `string`
 * expectType<string>(result);
 *
 * const literal = "hello world";
 *
 * // This will raise a type error if `literal` is not a string literal
 * expectType<"hello world">(literal);
 * ```
 */
export function expectType<T>(value: T): void {
  void value;
}

/**
 * Type-level equivalent to the {@linkcode expectType} function.
 *
 * This type alias accepts 2 type parameters: `TExpected` and `TActual`. If the
 * type of `TActual` is not assignable to `TExpected`, it will raise a compiler
 * error indicating as much. This is useful for testing purposes.
 *
 * @category Types
 */
export type ExpectType<TExpected, TActual extends TExpected> = TActual;

export default expectType;
