# @nick/is/reader

## `isReader`

#### Signature

```ts ignore
function isReader(it: unknown): it is Reader;
```

Checks if a given value is an asynchronous reader, which is an object that
implements the `read` method as per Deno's `Reader` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an asynchronous Reader, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isReader } from "jsr:@nick/is/reader";

const file = await Deno.open("file.txt");
isReader(file); // true

const socket = new WebSocket("ws://example.com");
isReader(socket); // false
```

## `Reader`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer asynchronously.

###### Category

`I/O`

### Methods

#### read

```ts
read(
    p: Uint8Array,
  ): Promise<number | null>;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`read()` resolves to `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`read()` conventionally resolves to what is available instead of waiting for
more.

When `read()` encounters end-of-file condition, it resolves to EOF (null). When
`read()` encounters an error, it rejects with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---
