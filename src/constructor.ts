/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @see https://jsr.io/@nick/is/doc/constructor
 * @license MIT
 */

/**
 * Checks whether a given value is a constructor function.
 *
 * In this context, a constructor is defined as a function with a `prototype`
 * own property that contains an object with an own `constructor` property
 * that points back to the constructor function itself.
 *
 * @template T The type of instances created by the constructor.
 * @param it The value to check.
 * @returns {it is Constructor<T>} `true` if the value is a constructor
 * function; otherwise, `false`.
 * @example
 * ```ts
 * import { isConstructor } from "jsr:@nick/is/constructor";
 *
 * class Foo {}
 * console.log(isConstructor(Foo)); // true
 * console.log(isConstructor(Foo.prototype.constructor)); // true
 * console.log(isConstructor(class {})); // true
 * console.log(isConstructor(function () {})); // true
 *
 * console.log(isConstructor({})); // false
 * console.log(isConstructor(null)); // false
 * console.log(isConstructor(Foo.prototype)); // false
 * console.log(isConstructor(() => new Foo())); // false
 * ```
 *
 * @remarks
 * Therefore, if `x` is a constructor, then `x.prototype.constructor === x`
 * should always be `true`. Note that while this is the case for most classes
 * and functions created with the correct syntax, it is _not_ guaranteed to
 * always be true for all constructors.
 *
 * This is because, in JavaScript, the `constructor` property can be
 * reassigned, deleted, or shadowed by an own property on the prototype
 * object. Also, if the constructor function returns a different object or a
 * modified version of `this` (such as wrapping it in a proxy), then the
 * `constructor` property may be missing or incorrect.
 *
 * Unfortunately, we cannot directly check the `[[Construct]]` internal field
 * of a function object to determine if it is a constructor, as this is not
 * exposed in the ECMAScript language specification. Therefore, this function
 * cannot **guarantee** a function is a constructor/class, but can only make a
 * best-effort estimation based on the shape of the object in question.
 *
 * @category Guards
 * @module constructor
 */
export function isConstructor<T>(it: unknown): it is Constructor<T> {
  return typeof it === "function" && "prototype" in it &&
    it.prototype !== null && typeof it.prototype === "object" &&
    "constructor" in it.prototype && it.prototype.constructor === it;
}

/**
 * Represents a constructor function that creates instances of type `T`.
 *
 * @template T The type of instances created by the constructor function.
 * @template {readonly unknown[]} A The type of the constructor's arguments.
 * @category Types
 */
export interface Constructor<
  T = unknown,
  A extends readonly unknown[] = readonly unknown[],
> {
  new (...args: A): T;

  readonly prototype: Prototype<T, this>;
}

type Prototype<T, C> = T & { readonly constructor: C };

/* @ignore */
export default isConstructor;
