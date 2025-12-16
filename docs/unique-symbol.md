# @nick/is/unique-symbol

## `isUniqueSymbol`

#### Signature

```ts ignore
function isUniqueSymbol(it: unknown): it is UniqueSymbol;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a unique symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isUniqueSymbol } from "jsr:@nick/is/unique-symbol";

isUniqueSymbol(Symbol("foo")); // true
isUniqueSymbol(Symbol.iterator); // false
isUniqueSymbol(Symbol.for("foo")); // false
```

## `UniqueSymbol`

#### Signature

```ts ignore
export type UniqueSymbol = Brand<symbol, "unique-symbol">;
```

Branded type representing a unique symbol, which is a primitive symbol that was
created using the `Symbol()` function, and is not a registered symbol created
with `Symbol.for()`, nor a well-known symbol defined on the global `Symbol`
object.

###### Category

`Primitives`
