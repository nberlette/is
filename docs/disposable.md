# @nick/is/disposable

## `isDisposable`

#### Signature

```ts ignore
function isDisposable(it: unknown): it is Disposable;
```

Checks if a value is an object that implements the `Disposable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that implements the `Disposable` API, or
`false` otherwise.

###### Category

`Explicit Resource Management`

#### Examples

```ts
import { isDisposable } from "@nick/is/disposable";

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

isDisposable(disposable); // true
isDisposable(asyncDisposable); // false
```

## `Disposable`

An object that can have its resources explicitly released when it is no longer
needed. Objects that implement this interface can be used with the `using` and
`await using` statements, which automatically dispose of their resources when
they are no longer needed.

###### Category

`Explicit Resource Management`

### Methods

#### SymbolDispose

```ts
SymbolDispose(): void;
```

Releases the resources held by this object.

---
