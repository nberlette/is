/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/global-this
 */
declare const root: typeof globalThis | undefined;
declare const self: typeof globalThis | undefined;
declare const window: typeof globalThis | undefined;
declare const global: typeof globalThis | undefined;

export const $globalThis: typeof globalThis = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof global !== "undefined") return global; // node
  if (typeof window !== "undefined") return window; // browsers, deno v1
  if (typeof self !== "undefined") return self; // web workers
  if (typeof root !== "undefined") return root; // old browsers (which ones?)
  if (typeof this !== "undefined") return this; // non-strict mode (cjs)

  try {
    return (0, eval)("this");
  } catch (_) {
    // if there's no global object, we shouldn't assume there's a global
    // Error object either, so we just throw a string. this should seriously
    // never ever ever happen. but hey, who knows.
    throw "Unable to locate global object";
  }
})();

export type $globalThis = typeof $globalThis;

export default $globalThis;
