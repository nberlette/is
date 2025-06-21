# @nick/is/buffer-source

## `isBufferSource`

#### Signature

```ts ignore
function isBufferSource(it: unknown): it is BufferSource;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer`,
`SharedArrayBuffer`, or an `ArrayBufferView`, which includes `TypedArray`s and
`DataView`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a BufferSource object, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBufferSource } from "jsr:@nick/is/buffer-source";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);

isBufferSource(buffer); // true
isBufferSource(view); // true
isBufferSource(array); // true
```
