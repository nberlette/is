# @nick/is/array-buffer

## `isArrayBuffer`

#### Signature

```ts ignore
function isArrayBuffer(it: unknown): it is ArrayBuffer;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer`. This
does not include instances of the `SharedArrayBuffer`, which has its own type
guard. To check for either type, use
[`isArrayBufferLike`](#isarraybufferlike "Jump to symbol: 'isArrayBufferLike'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBuffer`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBuffer } from "jsr:@nick/is/array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);
const array = new Uint8Array(buffer);

isArrayBuffer(buffer); // true
isArrayBuffer(shared); // false
isArrayBuffer(array); // false
isArrayBuffer(array.buffer); // true
```
