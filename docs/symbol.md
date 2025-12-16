# @nick/is/symbol

## `isSymbol`

#### Signature

```ts ignore
function isSymbol(it: unknown): it is symbol;
```

Check if the given value is a symbol.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isSymbol } from "jsr:@nick/is/symbol";

isSymbol(Symbol("foo")); // true
isSymbol(Symbol.iterator); // true
isSymbol(Symbol.for("foo")); // true
isSymbol("@@foo"); // false
```
