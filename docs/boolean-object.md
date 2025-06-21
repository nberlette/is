# @nick/is/boolean-object

## `isBooleanObject`

#### Signature

```ts ignore
function isBooleanObject(it: unknown): it is Boolean;
```

Checks if a value is a Boolean object, which is a boxed-primitive boolean that
was created either with the `new Boolean()` syntax, or by wrapping a primitive
boolean in the `Object()` wrapper function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive boolean object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBooleanObject } from "jsr:@nick/is/boolean-object";

isBooleanObject(Object(true)); // true
isBooleanObject(new Boolean(true)); // true

isBooleanObject(Boolean(true)); // false
isBooleanObject(true); // false
```
