# @nick/is/async-iterable

## `isAsyncIterable`

#### Signature

```ts ignore
function isAsyncIterable<T>(it: unknown): it is AsyncIterable<T>;
```

Checks if a given value is an object with a `Symbol.asyncIterator` method.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `AsyncIterable`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterable } from "jsr:@nick/is/async-iterable";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterable(iter)); // true
```
