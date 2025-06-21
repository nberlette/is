# @nick/is/promise

## `isPromise`

#### Signature

```ts ignore
function isPromise<T>(it: unknown): it is Promise<T>;
```

Checks if a given value is a native `Promise` instance. This is a more reliable
alternative to `it instanceof Promise` because it also works across different
realms (e.g., iframes, workers, etc.).

Note: This guard does not consider custom promise-like objects with `.then`
methods to be promises. If your use case requires that, use `isPromiseLike`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Promise`, `false` otherwise.

###### Category

`Async/Await`

#### Examples

```ts
import { isPromise } from "jsr:@nick/is/promise";

console.log(isPromise(Promise.resolve())); // true
console.log(isPromise({ then: () => {} })); // false
console.log(isPromise({})); // false
```
