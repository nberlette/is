# @nick/is/uint8-clamped-array

## `isUint8ClampedArray`

#### Signature

```ts ignore
function isUint8ClampedArray(it: unknown): it is Uint8ClampedArray;
```

Check if the given value is a `Uint8ClampedArray` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint8ClampedArray` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint8ClampedArray } from "jsr:@nick/is/uint8clampedarray";

const arr = new Uint8ClampedArray(8);
isUint8ClampedArray(arr); // true
isUint8ClampedArray(arr.buffer); // false
```
