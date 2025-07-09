import {
  FunctionPrototypeCall,
  ObjectGetOwnPropertyDescriptor,
  ObjectHasOwn,
} from "./primordials.ts";

/**
 * Attempts to call {@link key} on the provided {@link prototype}, using
 * {@link thisArg} for its contextual `this` binding. If no error is thrown,
 * returns `true`. Otherwise, this returns `false`.
 *
 * **Note**: the `prototype` object **must** have the property `key` defined
 * as an own **getter** method. This is due to the fact this guard relies on
 * `Object.getOwnPropertyDescriptor` - it specifically expects the returned
 * descriptor to be a non-null object, and for it to have a `get` method. If
 * either of these conditions are not met, this method will return `false`.
 *
 * @template {{ [P in K]: V } & { [x: PropertyKey]: any }} T The prototype
 * object to check the getter method on.
 * @template {PropertyKey} [K=keyof T] The key for the getter method.
 * @template [V=T[K]] The value type for the getter method.
 * @param prototype The object to check the getter method on.
 * @param key The key for the getter method.
 * @param thisArg The contextual `this` binding for the getter method. This is
 * the parameter that has its type narrowed by this type guard. For example, to
 * check if a given object is an `ArrayBuffer` instance, you could call this
 * method with the arguments `ArrayBuffer.prototype`, `"byteLength"`, and then
 * the unknown value you wish to check for its `thisArg` parameter. If the test
 * passes, the `thisArg` value's type will be narrowed to `ArrayBuffer`.
 * @returns `true` if the getter was successfully called; otherwise, `false`.
 * @internal
 */
export function tryGetter<
  // deno-lint-ignore no-explicit-any
  T extends { [P in K]: V } & { [x: PropertyKey]: any },
  K extends PropertyKey = keyof T,
  V = T[K],
>(prototype: T | { [P in K]: V }, key: K, thisArg: unknown): thisArg is T {
  try {
    if (key in prototype && ObjectHasOwn(prototype, key)) {
      const descriptor = ObjectGetOwnPropertyDescriptor(prototype, key);
      if (typeof descriptor?.get === "function") {
        FunctionPrototypeCall(descriptor.get, thisArg);
        return true;
      }
    }
  } catch { /* ignore */ }

  return false;
}
