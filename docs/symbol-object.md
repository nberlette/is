# @nick/is/symbol-object

## `isSymbolObject`

#### Signature

```ts ignore
function isSymbolObject(it: unknown): it is Symbol;
```

Checks if a value is a symbol object, which is a boxed-primitive symbol that was
created by wrapping a primitive symbol in the `Object()` wrapper function.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive symbol object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isSymbolObject } from "jsr:@nick/is/symbol-object";

isSymbolObject(Object(Symbol("abc"))); // true

isSymbolObject(Symbol("abc")); // false
isSymbolObject(Symbol.iterator); // false
isSymbolObject(Symbol.for("abc")); // false
isSymbolObject("@@abc"); // false
```
