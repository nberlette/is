# @nick/is/array-buffer-view

## `isArrayBufferView`

#### Signature

```ts ignore
function isArrayBufferView(it: unknown): it is ArrayBufferView;
```

Checks if a value is an `ArrayBufferView`, which includes all typed arrays and
`DataView` objects, but not `ArrayBuffer` or `SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBufferView`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBufferView } from "jsr:@nick/is/array-buffer-view";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);

isArrayBufferView(buffer); // false
isArrayBufferView(view); // true
isArrayBufferView(array); // true
```
