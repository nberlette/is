# @nick/is/string-object

## `isStringObject`

#### Signature

```ts ignore
function isStringObject(it: unknown): it is String;
```

Checks if a value is a string object, which is a boxed-primitive string that was
created via the `new String()` constructor, or by wrapping a primitive string in
the `Object()` wrapper function.

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

`true` if the value is a string object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isStringObject } from "jsr:@nick/is/string-object";

isStringObject(new String("abc")); // true
isStringObject(Object("abc")); // true

isStringObject("abc"); // false
isStringObject("abc" as unknown); // false
```
