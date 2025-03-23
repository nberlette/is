/**
 * Checks if a given value has a `Symbol.toStringTag` property, and optionally
 * checks if the value of that property matches the given {@link tag}.
 *
 * @param it The value to check.
 * @param [tag] The value to check against.
 * @returns `true` if the value has a `Symbol.toStringTag` property that
 * matches the given {@link tag} (if provided), otherwise `false`.
 * @category Objects
 * @module tagged
 */
// deno-lint-ignore ban-types
export function isTagged<const O = {}, T extends string = string>(
  it: O,
  tag: T = undefined!,
): it is O & { readonly [Symbol.toStringTag]: NormalizeTag<T> } {
  if (it != null && Symbol.toStringTag in Object(it)) {
    return !tag || Object(it)[Symbol.toStringTag] === normalizeTag(tag);
  }
  return false;
}

/**
 * Normalizes a given toStringTag value, removing any leading and trailing
 * whitespace and any leading `[object ` and trailing `]`, if present.
 * @internal
 */
export function normalizeTag<T extends string>(tag: T): NormalizeTag<T>;
export function normalizeTag(tag: string): string;
export function normalizeTag(tag: string): string {
  return tag.toString().replace(/^\[object (.+)\]$/, "$1").trim();
}

export type NormalizeTag<T extends string> = Trim<
  T extends `[object ${infer U}]` ? U : T
>;

type Trim<T, C extends string = " "> = T extends `${C}${infer T}` ? Trim<T, C>
  : T extends `${infer T}${C}` ? Trim<T, C>
  : T;

export default isTagged;
