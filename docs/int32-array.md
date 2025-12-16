# @nick/is/int32-array

## `isInt32Array`

#### Signature

```ts ignore
function isInt32Array(it: unknown): it is Int32Array;
```

Check if the given value is a `Int32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt32Array } from "jsr:@nick/is/int32array";

const arr = new Int32Array(8);
isInt32Array(arr); // true
isInt32Array(arr.buffer); // false
```
