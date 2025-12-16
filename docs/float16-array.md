# @nick/is/float16-array

## `isFloat16Array`

#### Signature

```ts ignore
function isFloat16Array(it: unknown): it is Float16Array;
```

Check if the given value is a `Float16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat16Array } from "jsr:@nick/is/float16array";

const arr = new Float16Array(8);
isFloat16Array(arr); // true
isFloat16Array(arr.buffer); // false
```
