# @nick/is/date-string

## `isDateString`

#### Signature

```ts ignore
function isDateString(it: unknown): it is DateString;
```

Checks if a given value is a valid date string.

The term "date string" refers to any string that can be parsed by the native
`Date` constructor as-is, without the help of any external libraries or any
preparatory formatting. One of the most common formats is ISO 8601, which is
what the native `Date` constructor itself uses in the `toDateString()` and
`toISOString()` methods.

Note: This function does not check if the date string is in a specific format
like ISO 8601. It only checks if the string can be parsed into a valid Date
instance.

Values that fail to pass this check would be expected to result in `NaN` when
passed to the `Date` constructor and coerced to a primitive number (e.g.
`+new Date("2023-13-01")`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid date string; otherwise, `false`.

###### Category

`Guards`

#### Examples

```ts
import { isDateString } from "@nick/is/date_string";

console.assert(isDateString("4/20/2024"), "it works!");
console.assert(isDateString("2024-04-20"), "it works!");
console.assert(isDateString("02.32.2025"), "wtf lol");
```

## `DateString`

#### Signature

```ts ignore
export type DateString = string & IsDateString;
```

Represents a valid date string that can be parsed by the native `Date`
constructor without any additional formatting or help from external tools.

This is a branded nominal type that can be used to strictly distinguish between
regular strings and those that have been validated as date strings through a
runtime check like
[`isDateString`](#isdatestring "Jump to symbol: 'isDateString'").

Combined with the aforementioned type guard, this type allows you to enforce the
validity of date strings both at runtime and compile time. If your users are not
exposed to this type alias, the only way a value of this type can be created is
by satisfying the `isDateString` function check.

###### Category

`Types`

###### Tags

`date-string` `nominal`
