# @nick/is/writable-stream

## `isWritableStream`

#### Signature

```ts ignore
function isWritableStream<W>(it: unknown): it is WritableStream<W>;
```

Checks if [it](#it "Jump to symbol: 'it'") is a `WritableStream` object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `WritableStream`, `false` otherwise.

###### Category

`Streams`

#### Examples

```ts
import { isWritableStream } from "jsr:@nick/is/writable-stream";

const stream = new WritableStream();
isWritableStream(stream); // true

const stream2 = new TransformStream();
isWritableStream(stream2); // false

const stream3 = new ReadableStream();
isWritableStream(stream3); // false
```
