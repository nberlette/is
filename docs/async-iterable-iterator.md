# @nick/is/async-iterable-iterator

## `isAsyncIterableIterator`

#### Signature

```ts ignore
function isAsyncIterableIterator<T>(
  it: unknown,
): it is AsyncIterableIterator<T>;
```

Checks if a value is an `AsyncIterableIterator`, which is an `AsyncIterator`
with a `Symbol.asyncIterator` method that returns a reference to itself.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `AsyncIterableIterator`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import isAsyncIterableIterator from "jsr:@nick/is/async-iterable-iterator";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterableIterator(iter)); // true
console.log(isAsyncIterableIterator(iter[Symbol.asyncIterator]())); // true
```
