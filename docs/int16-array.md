# @nick/is/int16-array

## `isInt16Array`

#### Signature

```ts ignore
function isInt16Array(it: unknown): it is Int16Array;
```

Check if the given value is a `Int16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt16Array } from "jsr:@nick/is/int16array";

const arr = new Int16Array(8);
isInt16Array(arr); // true
isInt16Array(arr.buffer); // false
```
