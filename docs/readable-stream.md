# @nick/is/readable-stream

## `isReadableStream`

#### Signature

```ts ignore
function isReadableStream<R>(it: unknown): it is ReadableStream<R>;
```

Checks if [it](#it "Jump to symbol: 'it'") is a `ReadableStream` object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `ReadableStream`, `false` otherwise.

###### Category

`Streams`

#### Examples

```ts
import { isReadableStream } from "jsr:@nick/is/readable-stream";

const stream = new ReadableStream();
isReadableStream(stream); // true

const stream2 = new TransformStream();
isReadableStream(stream2); // false

const stream3 = new WritableStream();
isReadableStream(stream3); // false
```
