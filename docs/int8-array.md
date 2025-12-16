# @nick/is/int8-array

## `isInt8Array`

#### Signature

```ts ignore
function isInt8Array(it: unknown): it is Int8Array;
```

Check if the given value is a `Int8Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int8Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt8Array } from "jsr:@nick/is/int8array";

const arr = new Int8Array(8);
isInt8Array(arr); // true
isInt8Array(arr.buffer); // false
```
