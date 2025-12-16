# @nick/is/property-key

## `isPropertyKey`

#### Signature

```ts ignore
function isPropertyKey(value: unknown): value is PropertyKey;
```

Checks if the given value is of the `PropertyKey` type (i.e. string, number, or
symbol).

In JavaScript, a property key can technically only be a string or a symbol, and
all other values are coerced to strings. TypeScript includes numbers in its
definition of this type, and therefore so does this function. But it is worth
noting that even though a number _can_ be used to indexed access an array-like
object, the number is coerced to a string behind the scenes.

##### Parameters

| Name        | Info                |
| :---------- | :------------------ |
| **`value`** | The value to check. |

##### Returns

`true` if the value is a property key, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPropertyKey } from "jsr:@nick/is/property-key";

isPropertyKey("foo"); // true
isPropertyKey(42); // true
isPropertyKey(Symbol("foo")); // true
isPropertyKey({ foo: "bar" }); // false
```

## `PropertyKey`

#### Signature

```ts ignore
export type PropertyKey = string | number | symbol;
```

The `PropertyKey` type represents the set of all possible values that can be
used as a property key in JavaScript. This includes strings, numbers, and
symbols. This type is included in TypeScript's standard library, but for the
situations where it may not be available, it's also exported from this module.
