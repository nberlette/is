# @nick/is/async-generator

## `isAsyncGenerator`

#### Signature

```ts ignore
function isAsyncGenerator<T = unknown, TReturn = any, TNext = unknown>(
  it: unknown,
): it is AsyncGenerator<T, TReturn, TNext>;
```

Check if the given value is an async generator, which is an asynchronous
iterable iterator (`AsyncIterableIterator`) that was created using the
`async function*() { ... }` syntax.

This is the type of value **_returned_** when an async generator function
(`async function*() {}`) is called. To check for the function itself, use
`isAsyncGeneratorFunction` instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an AsyncGenerator, `false` otherwise.

###### Category

`Generators`

#### Examples

```ts
import { isAsyncGenerator } from "jsr:@nick/is/async-generator";

async function* genFn() {
  yield await Promise.resolve(1);
}
const gen = genFn();

console.log(isAsyncGenerator(gen)); // true
console.log(isAsyncGenerator(genFn)); // false
```
