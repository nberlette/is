# @nick/is/float32-array

## `isFloat32Array`

#### Signature

```ts ignore
function isFloat32Array(it: unknown): it is Float32Array;
```

Check if the given value is a `Float32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat32Array } from "jsr:@nick/is/float32array";

const arr = new Float32Array(8);
isFloat32Array(arr); // true
isFloat32Array(arr.buffer); // false
```
