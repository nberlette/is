# @nick/is/float64-array

## `isFloat64Array`

#### Signature

```ts ignore
function isFloat64Array(it: unknown): it is Float64Array;
```

Check if the given value is a `Float64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat64Array } from "jsr:@nick/is/float64array";

const arr = new Float64Array(8);
isFloat64Array(arr); // true
isFloat64Array(arr.buffer); // false
```
