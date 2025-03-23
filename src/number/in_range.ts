/**
 * @module in-range
 *
 * Check if a number is within a given range.
 *
 * @example
 * ```ts
 * import { inRange } from "jsr:@nick/is/number/in_range";
 *
 * inRange(1, 0, 2); // true
 * inRange(1, 2, 0); // false
 * ```
 * @category Numbers
 */
import { isNumber } from "./number.ts";
// import type { Brand, Flavor } from "../_internal.ts";

export type RangeInclusive<
  Min extends number = number,
  Max extends number = number,
> =
  | readonly [inclusiveMin: Min, inclusiveMax: Max, exclusivity: "[]"]
  | readonly [inclusiveMax: Max, exclusivity: "[]"];

export type RangeInclusiveMin<
  Min extends number = number,
  Max extends number = number,
> =
  | readonly [inclusiveMin: Min, exclusiveMax: Max, exclusivity: "[)"]
  | readonly [exclusiveMax: Max, exclusivity: "[)"];

export type RangeInclusiveMax<
  Min extends number = number,
  Max extends number = number,
> =
  | readonly [exclusiveMin: Min, inclusiveMax: Max, exclusivity: "(]"]
  | readonly [inclusiveMax: Max, exclusivity: "(]"];

export type RangeExclusive<
  Min extends number = number,
  Max extends number = number,
> =
  | readonly [exclusiveMin: Min, exclusiveMax: Max, exclusivity: "()"]
  | readonly [exclusiveMax: Max, exclusivity: "()"];

export type AnyRange<Min extends number = number, Max extends number = number> =
  | RangeInclusiveMin<Min, Max>
  | RangeInclusive<Min, Max>
  | RangeInclusiveMax<Min, Max>
  | RangeExclusive<Min, Max>;

export type Exclusivity = AnyRange[2];

export type RangeUnknown<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> =
  | readonly [minimum: Min, maximum: Max, exclusivity?: Tex]
  | readonly [maximum: Max, exclusivity?: Tex];

export type Range<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = never,
> = [Tex] extends [never] ?
    | RangeInclusiveMin<Min, Max>
    | RangeInclusive<Min, Max>
    | RangeInclusiveMax<Min, Max>
    | RangeExclusive<Min, Max>
    | RangeUnknown<Min, Max>
  : Either<
    Extract<Range<Min, Max, never>, Required<RangeUnknown<Min, Max, Tex>>>,
    RangeUnknown<Min, Max, Exclusivity>
  >;

const RANGE: unique symbol = Symbol("RANGE");

export type Derange =
  | readonly [minInclusive: number, maxInclusive: number, exclusivity: "[]"]
  | readonly [maxInclusive: number, exclusivity: "[]"]
  | readonly [minInclusive: number, maxExclusive: number, exclusivity: "[)"]
  | readonly [maxExclusive: number, exclusivity: "[)"]
  | readonly [minExclusive: number, maxInclusive: number, exclusivity: "(]"]
  | readonly [maxInclusive: number, exclusivity: "(]"]
  | readonly [minExclusive: number, maxExclusive: number, exclusivity: "()"]
  | readonly [maxExclusive: number, exclusivity: "()"]
  | readonly [min: number, max: number, exclusivity?: Exclusivity]
  | readonly [max: number, exclusivity?: Exclusivity];

export interface IsInRange<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> {
  readonly [RANGE]: readonly [min: Min, max: Max, exclusivity: Tex];
}

/**
 * Type-level equivalent to the {@linkcode inRange} function, which (naively)
 * checks if a number is within a given range. The range can be specified in
 * multiple ways, with one of four different exclusivity types.
 *
 * @see {@linkcode inRange} for more information.
 */
export type InRange<
  N extends number,
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> =
  & (number extends N ? IsInRange<Min, Max, Tex>
    : `${Min}|${Max}` extends `-${number}|-${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> // valid (negative) range
      : never // invalid range (negative min & max, positive input)
    : `${Min}|${Max}` extends `${number}|-${number}` ? never // invalid range (positive min, negative max)
    : `${Min}|${Max}` extends `-${number}|${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> // valid (negative) range
      : never // invalid range (negative min, positive max, positive input)
    : `${N}` extends `-${number}` ? never // invalid range (positive min & max, negative input)
    : IsInRange<Min, Max, Tex>)
  & N;

// deno-lint-ignore ban-types
type Either<A, B> = [A & {}] extends [never] ? B : A & {};

/**
 * Checks if a given value is a valid range exclusivity string (either
 * "[]", "(]", "[)", or "()").
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid range exclusivity string, `false` otherwise.
 * @example
 * ```ts
 * import { isExclusivity } from "jsr:@nick/is/number/in_range";
 *
 * console.log(isExclusivity("[]")); // true
 * console.log(isExclusivity("(]")); // true
 * console.log(isExclusivity("[)")); // true
 * console.log(isExclusivity("()")); // true
 * console.log(isExclusivity("")); // false
 * console.log(isExclusivity("[")); // false
 * console.log(isExclusivity("]")); // false
 * ```
 * @category Numbers
 */
export function isExclusivity(it: unknown): it is Exclusivity {
  return it === "[]" || it === "(]" || it === "[)" || it === "()";
}

/**
 * Checks if a given number is within a given range. The range can be specified
 * in multiple ways:
 * - As a tuple with the minimum and maximum values, and optional exclusivity
 *   string of either "[]", "(]", "[)", or "()".
 * - As a tuple with a maximum value and an optional exclusivity string. This
 *   assumes a minimum value of `0`.
 * - As a single number, which is assumed to be the maximum value, with an
 *   assumed minimum value of `0` and an assumed exclusivity string of "[]".
 *
 * @param value The number to check.
 * @param range The range to check against.
 * @returns `true` if the number is within the range, `false` otherwise.
 * @example
 * ```ts
 * import { inRange } from "jsr:@nick/is/number/in_range";
 *
 * console.log(inRange(1, 0, 2)); // true
 * console.log(inRange(1, 2, 0)); // false
 * console.log(inRange(1, 2)); // true
 * console.log(inRange(1, 2, "(]")); // true
 * ```
 * @category Numbers
 */
export function inRange<
  const V extends number,
  const R extends Derange,
  Min extends number = R extends [infer M extends number, number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? 0
    : R[0],
  Max extends number = R extends [number, infer M extends number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? R[0]
    : R[1],
  Tex extends Exclusivity = Either<
    R extends [number, number, infer T extends Exclusivity] ? T
      : R[1] extends Exclusivity ? R[1]
      : undefined,
    "[)"
  >,
>(value: V, ...range: [...R] | Derange): value is InRange<V, Min, Max, Tex>;

/**
 * Checks if a given number is within a given range. The range can be specified
 * in multiple ways:
 * - As a tuple with the minimum and maximum values, and optional exclusivity
 *   string of either "[]", "(]", "[)", or "()".
 * - As a tuple with a maximum value and an optional exclusivity string. This
 *   assumes a minimum value of `0`.
 * - As a single number, which is assumed to be the maximum value, with an
 *   assumed minimum value of `0` and an assumed exclusivity string of "[]".
 *
 * @param value The number to check.
 * @param range The range to check against.
 * @returns `true` if the number is within the range, `false` otherwise.
 * @example
 * ```ts
 * import { inRange } from "jsr:@nick/is/number/in_range";
 *
 * console.log(inRange(1, 0, 2)); // true
 * console.log(inRange(1, 2, 0)); // false
 * console.log(inRange(1, 2)); // true
 * console.log(inRange(1, 2, "(]")); // true
 * ```
 * @category Numbers
 */
export function inRange(
  value: number,
  ...range: Derange
): value is InRange<number>;

// deno-lint-ignore no-explicit-any
export function inRange(value: number, ...range: any[]) {
  let [min, max, exclusivity] = range;
  exclusivity ??= "[)";
  if (!isNumber(value) || !isFinite(value)) return false;
  if (!isNumber(min) || !isFinite(min)) {
    throw new TypeError(
      `Expected a finite number for the minimum range boundary. Received: ${min} (${typeof min})`,
    );
  }
  // if the maximum is a string, we assume it's the exclusivity string.
  // in this case, the minimum is assumed to be 0, the maximum is the
  // user-provided minimum value, and the exclusivity is the user-provided max.
  if (isExclusivity(max)) [min, max, exclusivity] = [0, min, max];
  // if only one boundary is provided...
  // we assume it's the maximum and the minimum is 0.
  if (max === undefined) [min, max] = [0, min];
  // one last sanity check to ensure the maximum is a number.
  if (!isNumber(max) || !isFinite(max)) {
    throw new TypeError(
      `Expected a finite number for the maximum range boundary. Received: ${max} (${typeof max})`,
    );
  }
  switch (exclusivity) {
    case "()":
      return value > min && value < max;
    case "(]":
      return value > min && value <= max;
    case "[)":
      return value >= min && value < max;
    case "[]":
      return value >= min && value <= max;
    default: {
      // only support the four valid exclusivity strings
      throw new TypeError(
        `Expected a valid range exclusivity ("[]", "(]", "[)", or "()"). ` +
          `Received: ${exclusivity} (${typeof exclusivity})`,
      );
    }
  }
}

export default inRange;
