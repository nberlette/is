# @nick/is/uint16-array

## `isUint16Array`

#### Signature

```ts ignore
function isUint16Array(it: unknown): it is Uint16Array;
```

Check if the given value is a `Uint16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint16Array } from "jsr:@nick/is/uint16array";

const arr = new Uint16Array(8);
isUint16Array(arr); // true
isUint16Array(arr.buffer); // false
```
