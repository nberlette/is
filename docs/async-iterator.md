# @nick/is/async-iterator

## `isAsyncIterator`

#### Signature

```ts ignore
function isAsyncIterator<T>(it: unknown): it is AsyncIterator<T>;
```

Check if the given value is an async iterator, which is an object that has a
`"next"` method that returns a promise for an iterator result.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an async iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterator } from "jsr:@nick/is/async-iterator";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterator(iter)); // true
console.log(isAsyncIterator(iter[Symbol.asyncIterator]())); // true
```
