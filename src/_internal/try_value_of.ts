/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/try-value-of
 */

import { tryMethod } from "./try_method.ts";

/**
 * Attempt to call the `valueOf` method on the provided {@link prototype}
 * object, with the given {@link it} as the contextual `this` binding.
 */
export function tryValueOf<
  const T extends { valueOf(this: unknown): U },
  U = unknown,
>(prototype: T | { valueOf(this: unknown): U }, it: unknown): it is U {
  try {
    return tryMethod(prototype, "valueOf", it);
  } catch {
    return false;
  }
}
