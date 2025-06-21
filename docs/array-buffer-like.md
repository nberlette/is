# @nick/is/array-buffer-like

## `isArrayBufferLike`

#### Signature

```ts ignore
function isArrayBufferLike(it: unknown): it is ArrayBufferLike;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer` or a
`SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBuffer` or a `SharedArrayBuffer`, or `false`
otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBufferLike } from "jsr:@nick/is/any-array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);
const array = new Uint8Array(buffer);

isArrayBufferLike(buffer); // true
isArrayBufferLike(shared); // true
isArrayBufferLike(array); // false
isArrayBufferLike(array.buffer); // true
```

## `ArrayBufferLike`

#### Signature

```ts ignore
export type ArrayBufferLike = ArrayBuffer | SharedArrayBuffer;
```

Represents an "ArrayBuffer-like" value, which is either an `ArrayBuffer` or
`SharedArrayBuffer` instance.

###### Category

`Binary Data Structures`
