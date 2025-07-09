/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/internal/uncurry-setter
 */

import {
  bind,
  call,
  ErrorCaptureStackTrace,
  FunctionPrototypeCall,
  ObjectGetOwnPropertyDescriptor,
  String,
  TypeError,
} from "./primordials.ts";

/** @internal */
export function uncurrySetter<
  T extends object,
  K extends NonNullable<PropertyKey> | keyof T,
>(
  target: T,
  key: K,
  assert: true | "stub",
  message?: string,
): K extends keyof T ? (self: T, value: T[K]) => void : never;
/** @internal */
export function uncurrySetter<
  T extends object,
  K extends NonNullable<PropertyKey> | keyof T,
>(
  target: T,
  key: K,
  assert?: boolean,
  message?: string,
): ((self: T, value: T[K & keyof T]) => void) | undefined;
/** @internal */
export function uncurrySetter(
  target: object,
  key: PropertyKey,
  assert?: boolean | "stub",
  message?: string,
): ((self: object, value: unknown) => void) | undefined {
  if (typeof target !== "object" || target === null) {
    if (assert === "stub") {
      return () => {
        throw new TypeError(message ?? "Target must be an object.");
      };
    } else if (assert) {
      throw new TypeError("Target must be an object.");
    }
  } else {
    const desc = ObjectGetOwnPropertyDescriptor(target, key);
    // if (desc?.set) return bind.call(call, desc.set);
    if (desc?.set) {
      return FunctionPrototypeCall(
        bind,
        call,
        desc.set,
      );
    }
    if (assert) {
      if (!message) {
        message = `Property '${String(key)}' is not a setter.`;
      }
      const error = new TypeError(message);
      ErrorCaptureStackTrace?.(error, uncurrySetter);
      error.stack; // trigger lazy stack capture
      throw error;
    }
  }
}
