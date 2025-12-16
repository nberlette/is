# @nick/is/shared-array-buffer

## `isSharedArrayBuffer`

#### Signature

```ts ignore
function isSharedArrayBuffer(it: unknown): it is SharedArrayBuffer;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is a `SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `SharedArrayBuffer`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isSharedArrayBuffer } from "jsr:@nick/is/shared-array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);

isSharedArrayBuffer(buffer); // false
isSharedArrayBuffer(shared); // true
```
