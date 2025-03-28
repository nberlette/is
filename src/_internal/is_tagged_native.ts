// deno-lint-ignore-file ban-types
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/is-tagged-native
 */

import { toString } from "./to_string.ts";

/**
 * This function checks the "tagged" status of a given object. It functions in
 * two different manners; depending on whether or not the {@link allowCustom}
 * parameter is enabled or not, this function checks that the given object
 * {@link it} either has the given {@link tag} for its `Symbol.toStringTag`
 * property, or that it is a native object that returns `[object ${tag}]` when
 * used as the contextual `this` binding in a `Object.prototype.toString`
 * invocation.
 *
 * In the latter of these two cases, the function will also check that the
 * object does not have a custom `Symbol.toStringTag` property, which is the
 * hallmark of a native object (e.g. a native Error or Promise). Those objects
 * behave as if they have a custom toStringTag, but does not have the property
 * anywhere in its prototype chain.
 *
 * @internal
 */
export function isTaggedNative<U extends {}, T extends string>(
  it: U,
  tag: T,
  allowCustom?: boolean,
): boolean {
  tag = tag.toString().replace(/^\[object (.+)\]$/, "$1") as T;
  return toString(it = Object(it)) === `[object ${tag}]` &&
    (allowCustom
      ? Symbol.toStringTag in it && it[Symbol.toStringTag] === tag
      : typeof (it as Record<symbol, unknown>)[Symbol.toStringTag] ===
        "undefined");
}
