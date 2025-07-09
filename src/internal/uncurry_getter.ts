/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/internal/uncurry-getter
 */

import { fail } from "./fail.ts";
import {
  bind,
  call,
  FunctionPrototypeCall,
  ObjectGetOwnPropertyDescriptor,
  String,
  TypeError,
} from "./primordials.ts";

/** @internal */
export function uncurryGetter<
  T extends object,
  K extends NonNullable<PropertyKey> | keyof T,
>(
  target: T,
  key: K,
  assert: true | "stub" | "wrap",
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
  assert?: boolean | "stub" | "wrap",
  message?: string,
): ((self: object) => unknown) | undefined {
  if (
    typeof target !== "function" &&
    (typeof target !== "object" || target === null)
  ) {
    if (assert === "stub" || assert === "wrap") {
      return () => {
        fail(message ?? "Target must be an object.", uncurryGetter);
      };
    } else if (assert) {
      fail("Target must be an object.", uncurryGetter);
    }
  } else {
    const desc = ObjectGetOwnPropertyDescriptor(target, key);
    // if (desc?.get) return bind.call(call, desc.get);
    if (typeof desc?.get === "function") {
      return FunctionPrototypeCall(
        bind,
        call,
        desc.get,
      );
    } else if (assert === "wrap") {
      return (self) => {
        let cause: unknown;
        try {
          // deno-lint-ignore no-explicit-any
          return desc?.value ?? (self as any)[key];
        } catch (e) {
          cause = e;
        }
        fail(
          new TypeError(
            message ??
              `Property '${
                String(key)
              }' does not exist or is not a getter/field on the target object.`,
            { cause },
          ),
          uncurryGetter,
        );
      };
    } else if (assert === "stub") {
      return () => {
        fail(
          message ??
            `Property '${
              String(key)
            }' does not exist or is not a getter/field on the target object.`,
          uncurryGetter,
        );
      };
    } else if (assert) {
      fail(
        message || `Property '${String(key)}' is not a getter.`,
        uncurryGetter,
      );
    }
  }
}
