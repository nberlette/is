# @nick/is/promise-like

## `isPromiseLike`

#### Signature

```ts ignore
function isPromiseLike<T>(it: unknown): it is PromiseLike<T>;
```

Check if the given value is a `PromiseLike` type, which includes both native
`Promise` instances and custom promise-like objects with a `.then` method
(sometimes referred to as "thenables").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `PromiseLike`, `false` otherwise.

###### Category

`Async/Await`

#### Examples

```ts
import { isPromiseLike } from "jsr:@nick/is/promise-like";

console.log(isPromiseLike(Promise.resolve())); // true
console.log(isPromiseLike({ then: () => {} })); // true
console.log(isPromiseLike({})); // false
```
