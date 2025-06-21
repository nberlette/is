# @nick/is/writer-sync

## `isWriterSync`

#### Signature

```ts ignore
function isWriterSync(it: unknown): it is WriterSync;
```

Checks if a given value is a synchronous writer, which is an object that
implements a `writeSync` method as per Deno's `WriterSync` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a synchronous writer, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isWriterSync } from "jsr:@nick/is/writer-sync";

const file = Deno.openSync("file.txt", { write: true });
isWriterSync(file); // true

const socket = new WebSocket("ws://example.com");
isWriterSync(socket); // false
```

## `WriterSync`

An abstract interface which when implemented provides an interface to write
bytes from an array buffer to a file/resource synchronously.

###### Category

`I/O`

### Methods

#### writeSync

```ts
writeSync(p: Uint8Array): number;
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It returns
the number of bytes written from `p` (`0` <= `n` <= `p.byteLength`) and any
error encountered that caused the write to stop early. `writeSync()` must throw
a non-null error if it returns `n` < `p.byteLength`. `writeSync()` must not
modify the slice data, even temporarily.

Implementations should not retain a reference to `p`.

---
