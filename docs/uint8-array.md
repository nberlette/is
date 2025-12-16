# @nick/is/uint8-array

## `isUint8Array`

#### Signature

```ts ignore
function isUint8Array(it: unknown): it is Uint8Array;
```

Check if the given value is a `Uint8Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint8Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint8Array } from "jsr:@nick/is/uint8array";

const arr = new Uint8Array(8);
isUint8Array(arr); // true
isUint8Array(arr.buffer); // false
```
