// deno-lint-ignore-file ban-types
/**
 * Composite type guard that checks if the given value {@linkcode it} contains
 * all the specified {@linkcode keys}, and also that each is a callable method.
 *
 * This is used internally by some of the other typeguards to simplify the
 * process of checking that an object implements several methods at once.
 *
 * @template T The type of the object to check.
 * @template K The type of the keys to check.
 * @param it The object to check.
 * @param keys The keys to check for.
 * @returns `true` if the object has all the specified keys, and each key is a callable method; otherwise, `false`.
 * @category Guards
 */
// deno-fmt-ignore
export function hasMethods<
  const T extends {},
  const K extends readonly PropertyKey[],
>(it: T, ...keys: K): it is T & {
    [P in K[number]]: P extends keyof T
      // deno-lint-ignore no-explicit-any
      ? T[P] extends (...args: any) => any ? T[P]
      : never
      // deno-lint-ignore no-explicit-any
      : (...args: any[]) => unknown;
  } {
  return (
    keys.length > 0 &&
    keys.every((k) => typeof (it = Object(it))[k] === "function")
  );
}
