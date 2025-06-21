# @nick/is/closer

## `isCloser`

#### Signature

```ts ignore
function isCloser(it: unknown): it is Closer;
```

Checks if a given value implments the `Deno.Closer` interface, which means it
has a `close` method that can be called to release associated resources.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value implements `Deno.Closer`, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isCloser } from "jsr:@nick/is/closer";

const file = await Deno.open("file.txt");
isCloser(file); // true

const socket = new WebSocket("ws://example.com");
isCloser(socket); // true
```

## `Closer`

An abstract interface which when implemented provides an interface to close
files/resources that were previously opened.

###### Category

`I/O`

### Methods

#### close

```ts
close(): void;
```

Closes the resource, "freeing" the backing file/resource.

---
