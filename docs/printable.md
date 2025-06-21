# @nick/is/printable

## `isPrintable`

#### Signature

```ts ignore
function isPrintable(x: unknown): x is Printable;
```

Check if a value is printable, meaning it is either a `string`, `number`,
`bigint`, `boolean`, `null` or `undefined`. This is useful for logging and
debugging purposes. The complentary type
[`Printable`](#printable "Jump to symbol: 'Printable'") can be used on the
type-level to represent values that are usable within a template literal type
syntax.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is printable, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPrintable } from "jsr:@nick/is/printable";

console.log(isPrintable("hello")); // true
console.log(isPrintable(1)); // true
console.log(isPrintable(BigInt(1))); // true
console.log(isPrintable(true)); // true
console.log(isPrintable(null)); // true
console.log(isPrintable(undefined)); // true
console.log(isPrintable({})); // false
console.log(isPrintable(Symbol())); // false
```

## `Printable`

#### Signature

```ts ignore
export type Printable = string | number | bigint | boolean | null | undefined;
```

Represents a value that can be printed in a template literal type string, which
means it is either a `string`, `number`, `bigint`, `boolean`, `null` or
`undefined`. Any other type of value will raise a compiler error if you attempt
to construct a template literal type with it.

#### Examples

```ts
import type { Printable } from "jsr:@nick/is/printable";

type Join<T, D extends string = ""> = T extends
  [infer F extends Printable, ...infer R]
  ? `${F}${R extends [] ? "" : D}${Join<R, D>}`
  : "";

type Result = Join<[1, "two", 3n, true, null, undefined]>;
//   ^? type Result = "1two3true"
```
