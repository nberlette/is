# @nick/is/primitive

## `isPrimitive`

#### Signature

```ts ignore
function isPrimitive(it: unknown): it is Primitive;
```

Checks if a given value is a primitive string, number, bigint, boolean, symbol,
null, or undefined.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a primitive, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPrimitive } from "jsr:@nick/is/primitive";

isPrimitive("foo"); // true
isPrimitive(42); // true
isPrimitive(BigInt(42)); // true
isPrimitive(true); // true
isPrimitive(Symbol("foo")); // true
isPrimitive(null); // true
isPrimitive(undefined); // true

isPrimitive({}); // false
isPrimitive(new String("foo")); // false
isPrimitive(new Number(42)); // false
isPrimitive(new Boolean(true)); // false
```

## `Primitive`

#### Signature

```ts ignore
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;
```

Represents a primitive value. This includes strings, numbers, bigints, booleans,
symbols, null, and undefined.

###### Category

`Primitives`
