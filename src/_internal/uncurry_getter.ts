/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/uncurry-getter
 */

import { bind, call } from "./uncurry_this.ts";

/** @internal */
export function uncurryGetter<
  T extends object,
  K extends NonNullable<PropertyKey> | keyof T,
>(
  target: T,
  key: K,
  assert: true | "stub",
  message?: string,
): K extends keyof T ? (self: T) => T[K] : never;
/** @internal */
export function uncurryGetter<
  T extends object,
  K extends NonNullable<PropertyKey> | keyof T,
>(
  target: T,
  key: K,
  assert?: boolean,
  message?: string,
): ((self: T) => T[K & keyof T]) | undefined;
/** @internal */
export function uncurryGetter(
  target: object,
  key: PropertyKey,
  assert?: boolean | "stub",
  message?: string,
): ((self: object) => unknown) | undefined {
  if (typeof target !== "object") {
    if (assert === "stub") {
      return () => {
        throw new TypeError(message ?? "Target must be an object.");
      };
    } else if (assert) {
      throw new TypeError("Target must be an object.");
    }
  } else {
    const desc = Object.getOwnPropertyDescriptor(target, key);
    if (desc?.get) return bind.call(call, desc.get);
    if (assert) {
      if (!message) {
        message = `Property '${key.toString()}' is not a getter.`;
      }
      const error = new TypeError(message);
      Error.captureStackTrace?.(error, uncurryGetter);
      error.stack; // trigger lazy stack capture
      throw error;
    }
  }
}
