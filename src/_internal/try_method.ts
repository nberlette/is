/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/try-method
 */

import { FunctionPrototypeCall } from "./primordials.ts";

/**
 * Attempt to call a given {@link method} on the provided {@link prototype}
 * object, with the given {@link it} as the contextual `this` binding.
 */
export function tryMethod<
  // deno-lint-ignore no-explicit-any
  T extends { [K in M]: (...args: A) => R } & { [x: PropertyKey]: any },
  M extends PropertyKey = keyof T,
  A extends readonly unknown[] = Parameters<T[M]>,
  R = ReturnType<T[M]>,
>(
  prototype: { [K in M]: (this: T, ...args: A) => R },
  method: M,
  it: unknown,
): it is T {
  try {
    if (method in prototype && typeof prototype[method] === "function") {
      FunctionPrototypeCall(prototype[method], it as T);
      return true;
    }
  } catch { /* ignore */ }
  return false;
}
