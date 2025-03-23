/**
 * This module provides a function to check if a given value is a valid date
 * string, meaning it can be parsed by the native `Date` constructor as-is,
 * without the help of any external libraries or preparatory formatting.
 *
 * @example
 * ```ts
 * import { isDateString } from "@nick/is/date_string";
 *
 * // Valid:
 *
 * console.log(isDateString("2023-10-01")); // true
 * console.log(isDateString("2023-10-01T12:00:00Z")); // true
 * console.log(isDateString("11-2-2024")); // true
 * console.log(isDateString("2023-10-01T12:00:00")); // true
 * console.log(isDateString("2023-10-01T12:00:00.000Z")); // true
 * console.log(isDateString("2-29-2024")); // true
 *
 * // Invalid:
 *
 * console.log(isDateString("2023-13-01")); // false
 * console.log(isDateString("2023-10-32")); // false
 * console.log(isDateString("2023-10-01T25:00:00Z")); // false
 * console.log(isDateString("2-32-2024")); // false
 * ```
 * @module date-string
 */

const Date: DateConstructor = globalThis.Date;
const DateParse: typeof Date.parse = Date.parse;

const kIsDateString: unique symbol = Symbol.for("@nick/is/date-string");
type kIsDateString = typeof kIsDateString;

interface IsDateString {
  readonly [kIsDateString]: true;
}

/**
 * Represents a valid date string that can be parsed by the native `Date`
 * constructor without any additional formatting or help from external tools.
 *
 * This is a branded nominal type that can be used to strictly distinguish
 * between regular strings and those that have been validated as date strings
 * through a runtime check like {@linkcode isDateString}.
 *
 * Combined with the aforementioned type guard, this type allows you to enforce
 * the validity of date strings both at runtime and compile time. If your users
 * are not exposed to this type alias, the only way a value of this type can be
 * created is by satisfying the `isDateString` function check.
 *
 * @category Types
 * @tags date-string, nominal
 */
export type DateString = string & IsDateString;

/**
 * Checks if a given value is a valid date string.
 *
 * The term "date string" refers to any string that can be parsed by the native
 * `Date` constructor as-is, without the help of any external libraries or any
 * preparatory formatting. One of the most common formats is ISO 8601, which is
 * what the native `Date` constructor itself uses in the `toDateString()` and
 * `toISOString()` methods.
 *
 * Note: This function does not check if the date string is in a specific
 * format like ISO 8601. It only checks if the string can be parsed into a
 * valid Date instance.
 *
 * Values that fail to pass this check would be expected to result in `NaN`
 * when passed to the `Date` constructor and coerced to a primitive number
 * (e.g. `+new Date("2023-13-01")`).
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid date string; otherwise, `false`.
 * @category Guards
 * @example
 * ```ts
 * import { isDateString } from "@nick/is/date_string";
 *
 * console.assert(isDateString("4/20/2024"), "it works!");
 * console.assert(isDateString("2024-04-20"), "it works!");
 * console.assert(isDateString("02.32.2025"), "wtf lol");
 * ```
 */
export function isDateString(it: unknown): it is DateString {
  if (typeof it === "string") {
    const parsed = DateParse(it);
    // check if parsed is a valid number and not NaN
    return typeof parsed === "number" && parsed === parsed;
  }
  return false;
}

/**
 * Checks if a given value is a valid date string.
 *
 * @param it The value to check.
 * @returns `true` if the value is a valid date string; otherwise, `false`.
 * @category Guards
 * @example
 * ```ts
 * import isDateString from "@nick/is/date_string";
 *
 * console.assert(isDateString("4/20/2024"), "it works!");
 * console.assert(isDateString("2024-04-20"), "it works!");
 * console.assert(isDateString("02.32.2025"), "wtf lol");
 * ```
 */
export default isDateString;
