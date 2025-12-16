# @nick/is/bigint-object

## `isBigIntObject`

#### Signature

```ts ignore
function isBigIntObject(it: unknown): it is BigInt;
```

Checks if a value is a BigInt object, which is a boxed-primitive BigInt that was
created by wrapping a primitive BigInt (bigint) in the `Object()` wrapper
function.

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

`true` if the value is a boxed-primitive BigInt object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBigIntObject } from "jsr:@nick/is/bigint-object";

isBigIntObject(Object(BigInt("2"))); // true

isBigIntObject(BigInt("2")); // false
isBigIntObject(2n); // false
```
