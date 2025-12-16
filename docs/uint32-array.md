# @nick/is/uint32-array

## `isUint32Array`

#### Signature

```ts ignore
function isUint32Array(it: unknown): it is Uint32Array;
```

Check if the given value is a `Uint32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint32Array } from "jsr:@nick/is/uint32array";

const arr = new Uint32Array(8);
isUint32Array(arr); // true
isUint32Array(arr.buffer); // false
```
