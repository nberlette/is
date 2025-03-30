/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/uncurry-this
 */

export const { bind, call } = Function.prototype;

export const uncurryThis = bind.bind(call) as <
  T,
  // deno-lint-ignore no-explicit-any
  const A extends readonly unknown[] = any[],
  R = unknown,
>(
  fn: (this: T, ...args: A) => R,
) => (target: T, ...args: Parameters<typeof fn>) => ReturnType<typeof fn>;
