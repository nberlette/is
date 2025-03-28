// deno-lint-ignore-file no-explicit-any
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/class
 */

import type { Is } from "./_internal.ts";

/**
 * @module class
 *
 * Checks if a given value is a constructor function, also known as a class.
 *
 * This includes all **pure** functions - no generators, arrow functions, or
 * getters/setters - that also have an own `prototype` propertty which is a
 * non-null object. The prototype must have an own `constructor` property that
 * points back to the class constructor function itself. Lastly, the function's
 * source code is inspected for the `class` keyword, to ensure that it is a
 * class and not just a regular function.
 *
 * @example
 * ```ts
 * import { isClass } from "jsr:@nick/is/class";
 *
 * class Foo {}
 * console.log(isClass(Foo)); // true
 *
 * const Bar = function() {
 *   this.foo = "bar";
 *   return this;
 * };
 * console.log(isClass(Bar)); // false
 *
 * const Baz = () => {};
 * console.log(isClass(Baz)); // false
 * ```
 * @category Types
 */
export interface Class<
  T = any,
  A extends readonly unknown[] = readonly any[],
  P extends object | null = Is<T, object | null>,
> {
  new (...args: A): T;
  readonly prototype: P;
}

/**
 * Checks if a given value is a constructor function, also known as a class.
 *
 * This includes all **pure** functions - no generators, arrow functions, or
 * getters/setters - that also have an own `prototype` propertty which is a
 * non-null object. The prototype must have an own `constructor` property that
 * points back to the class constructor function itself. Lastly, the function's
 * source code is inspected for the `class` keyword, to ensure that it is a
 * class and not just a regular function.
 *
 * @remarks
 * This is a bit of a hacky way to do things, and it is the only type guard in
 * this entire package that has to resort to such measures to accomplish its
 * intended purpose. It works in the vast majority of cases... but it is not
 * foolproof. For example, if a class is wrapped in a proxy or bound to itself
 * (or to something else), or if for some other reason it is mutating the
 * output of `Function.prototype.toString`, that value will most likely not
 * pass this check.
 *
 * In a perfect world, we would be able to directly check for the presence of
 * the internal slot named `[[Construct]]`, which is what the `new` operator
 * uses to create instances of classes. However, this is simply not possible
 * with the specification of ECMAScript as it stands today.
 *
 * As far as the alternatives to this approach, we could attempt to call the
 * [potential] class _without_ the `new` operator, and confirm that it throws.
 * We could also attempt to construct a new instance of it, and confirm that it
 * doesn't throw. But both of those are inherently risky: there's a chance that
 * constructing some mystery class could have disastrous side effects (which we
 * would be totally blindsided by. We have no way of knowing the behavior of
 * that function or constructor, so it's best to treat it as an assumed threat.
 * And if we were crazy enough to say YOLO and try constructing/calling it, how
 * would we know what (if any) arguments it might expect us to provide? I'm
 * sure you can see the problem there. If not... you're on your own, bud.
 *
 * Anyway, it was through that process of deductive reasoning that we settled
 * on this approach - the lesser of several evils, if you will.  `¯\_(ツ)_/¯`
 *
 * @param it The value to check.
 * @returns `true` if the value is a class, `false` otherwise.
 * @example
 * ```ts
 * import { isClass } from "jsr:@nick/is/class";
 *
 * class Foo {}
 * console.log(isClass(Foo)); // true
 *
 * const Bar = function() {
 *   this.foo = "bar";
 *   return this;
 * };
 * console.log(isClass(Bar)); // false
 *
 * const Baz = () => {};
 * console.log(isClass(Baz)); // false
 * ```
 * @category Objects
 */
export function isClass<
  T,
  A extends readonly unknown[] = readonly any[],
  P extends object | null = Is<T, object | null>,
>(it: unknown): it is Class<T, A, P> {
  return (
    typeof it === "function" &&
    it.prototype != null &&
    it.prototype.constructor === it
  ) && /^class /.test(Function.prototype.toString.call(it));
}

/** @ignore */
export default isClass;
