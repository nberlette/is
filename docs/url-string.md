# @nick/is/url-string

## `isURLString`

#### Signature

```ts ignore
function isURLString(it: unknown): it is URLString;
```

Checks if a value is a string that is a valid, parsable URL capable of being
passed to the `URL` constructor.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a URL string, `false` otherwise.

###### Category

`Web APIs`

#### Examples

```ts
import { isURLString } from "jsr:@nick/is/url-string";

console.log(isURLString("https://example.com")); // true
console.log(isURLString("data:")); // true
console.log(isURLString("https://foo")); // false
console.log(isURLString("example.com")); // false
```

## `URLString`

#### Signature

```ts ignore
export type URLString = Brand<string, "URL">;
```

A string that is a valid, parsable URL capable of being passed to the `URL`
constructor. This is a branded string type, meaning it behaves as a nominal type
that is distinct from other string values. The only way to narrow a string to a
[`URLString`](#urlstring "Jump to symbol: 'URLString'") type is by validating it
first with the [`isURLString`](#isurlstring "Jump to symbol: 'isURLString'")
type guard function.

###### Categories

`Web APIs` `Types`
