# @nick/is/number-object

## `isNumberObject`

#### Signature

```ts ignore
function isNumberObject(it: unknown): it is Number;
```

Checks if a value is a Number object, which is a boxed-primitive number that was
created either with the `new Number()` syntax, or by wrapping a primitive number
in the `Object()` wrapper function.

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

`true` if the value is a boxed-primitive number object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isNumberObject } from "jsr:@nick/is/number-object";

isNumberObject(Object(1)); // true
isNumberObject(new Number(1)); // true

isNumberObject(Number(1)); // false
isNumberObject(1); // false
```
