# @nick/is/biguint64-array

## `isBigUint64Array`

#### Signature

```ts ignore
function isBigUint64Array(it: unknown): it is BigUint64Array;
```

Check if the given value is a `BigUint64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `BigUint64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBigUint64Array } from "jsr:@nick/is/biguint64array";

const arr = new BigUint64Array(8);
isBigUint64Array(arr); // true
isBigUint64Array(arr.buffer); // false
```
