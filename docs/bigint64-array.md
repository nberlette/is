# @nick/is/bigint64-array

## `isBigInt64Array`

#### Signature

```ts ignore
function isBigInt64Array(it: unknown): it is BigInt64Array;
```

Check if the given value is a `BigInt64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `BigInt64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBigInt64Array } from "jsr:@nick/is/bigint64array";

const arr = new BigInt64Array(8);
isBigInt64Array(arr); // true
isBigInt64Array(arr.buffer); // false
```
