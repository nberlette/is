/**
 * This module provides a type predicate function, `isInstance`, which can be
 * used to check if a value is an instance of a specific class or constructor.
 *
 * This is preferable to using the `instanceof` operator, as it works across
 * different realms (e.g. iframes) and can be used with classes that are not
 * directly accessible in the current scope.
 *
 * @module instance
 */
// TODO(nberlette): in reference to these ^ claims... citation needed!
import { uncurryThis } from "./_internal.ts";
import type { Constructor } from "./constructor.ts";

const SymbolHasInstance: typeof globalThis.Symbol.hasInstance = (
  typeof globalThis.Symbol === "function" &&
    typeof globalThis.Symbol.hasInstance === "symbol"
    ? globalThis.Symbol.hasInstance
    : "@@hasInstance" as never // lol for super legacy environments
);

const Function: FunctionConstructor = globalThis.Function;
const FunctionPrototype: Function = Function.prototype;

const isPrototypeOf = uncurryThis(FunctionPrototype.isPrototypeOf);

const hasInstance: (self: Function, object: object) => boolean = (() => {
  if (typeof FunctionPrototype[SymbolHasInstance] === "function") {
    return uncurryThis(FunctionPrototype[SymbolHasInstance]);
  }
  return isPrototypeOf;
})();

/**
 * Checks if a given value is an instance of a specific class or constructor.
 *
 * This is a type guard function that can be used to determine if a value is an
 * instance of a class or constructor function, even if the class is not
 * directly accessible in the current scope.
 *
 * @param it The value to check.
 * @param constructor The class or constructor function to check against.
 * @returns `true` if it is an instance of the class; otherwise, `false`.
 * @category Guards
 */
export function isInstance<T>(
  it: unknown,
  constructor: Constructor<T>,
): it is T;

/**
 * Checks if a given value is an instance of a particular class or constructor.
 *
 * @param it The value to check.
 * @param constructor The class or constructor function to check against.
 * @returns `true` if it is an instance of the class; otherwise, `false`.
 * @category Guards
 */
// deno-lint-ignore no-explicit-any
export function isInstance<T extends Constructor<any>>(
  it: unknown,
  constructor: T,
): it is InstanceType<T>;

/**
 * Checks if a given value is an instance of a specific class or constructor.
 *
 * @param it The value to check.
 * @param constructor The class or constructor function to check against.
 * @returns `true` if it is an instance of the class; otherwise, `false`.
 * @category Guards
 */
export function isInstance<T extends Constructor<P>, P = InstanceType<T>>(
  it: unknown,
  constructor: T | Constructor<P> | P,
): it is InstanceType<T> {
  if (!constructor || !it) return false;
  if (typeof constructor === "function") return hasInstance(constructor, it);
  return false;
}

/** @ignore */
export default isInstance;
