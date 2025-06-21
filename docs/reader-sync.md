# @nick/is/reader-sync

## `isReaderSync`

#### Signature

```ts ignore
function isReaderSync(it: unknown): it is ReaderSync;
```

Checks if a given value is a synchronous reader, which is an object that
implements the `readSync` method as per Deno's `ReaderSync` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a synchronous Reader, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isReaderSync } from "jsr:@nick/is/reader-sync";

const file = Deno.openSync("file.txt");
isReaderSync(file); // true

const socket = new WebSocket("ws://example.com");
isReaderSync(socket); // false
```

## `ReaderSync`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer synchronously.

###### Category

`I/O`

### Methods

#### readSync

```ts
readSync(
    p: Uint8Array,
  ): number | null;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`readSync()` returns `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`readSync()` conventionally returns what is available instead of waiting for
more.

When `readSync()` encounters end-of-file condition, it returns EOF (`null`).

When `readSync()` encounters an error, it throws with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---
