# @nick/is/async-disposable

## `isAsyncDisposable`

#### Signature

```ts ignore
function isAsyncDisposable(it: unknown): it is AsyncDisposable;
```

Checks if a value is an object that implements the `AsyncDisposable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that implements the `AsyncDisposable` API, or
`false` otherwise.

###### Category

`Explicit Resource Management`

#### Examples

```ts
import { isAsyncDisposable } from "@nick/is/async_disposable";

const disposable = {
  [Symbol.dispose]() {
    return;
  },
};

const asyncDisposable = {
  async [Symbol.asyncDispose]() {
    await Promise.resolve();
  },
};

isAsyncDisposable(disposable); // false
isAsyncDisposable(asyncDisposable); // true
```

## `AsyncDisposable`

Represents an object that can be asynchronously disposed of.

###### Category

`Explicit Resource Management`

### Methods

#### SymbolAsyncDispose

```ts
SymbolAsyncDispose(): Promise<
    void
  >;
```

Asynchronously disposes of the resources held by this object.

---
