# @nick/is/async-iterable-object

## `isAsyncIterableObject`

#### Signature

```ts ignore
function isAsyncIterableObject<T>(it: unknown): it is AsyncIterableObject<T>;
```

Checks if a given value is an `AsyncIterable` object.

Similar to its synchronous counterpart, `isIterableObject`, this function
requires the value to be a non-primitive (and non-null) object, and also
implement a `[Symbol.asyncIterator]` method as per the `AsyncIterable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterable object, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";

// synchronous iterables will not pass
console.log(isAsyncIterableObject([1, 2])); // false
console.log(isAsyncIterableObject(new Map())); // false
console.log(isAsyncIterableObject(new Set())); // false

// non-object iterables will not pass
console.log(isAsyncIterableObject("foo")); // false

// only asynchronous iterable objects will pass
const iter = {
  async *[Symbol.asyncIterator]() {
    yield await Promise.resolve(1);
  },
};
console.log(isAsyncIterableObject(iter)); // true
```

```ts
import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";

const kv = await Deno.openKv();
console.log(isAsyncIterableObject(kv)); // false

const iter = kv.list({ prefix: [] });
console.log(isAsyncIterableObject(iter)); // true

kv.close();
```

## `AsyncIterableObject`

#### Signature

```ts ignore
export type AsyncIterableObject<T> = AsyncIterable<T> & object;
```

An object that implements the `AsyncIterable` interface. This is the type that
the
[isAsyncIterableObject](#isasynciterableobject "Jump to symbol: 'isAsyncIterableObject'")
function checks for and (narrows to).

##### Type Parameters

- **`T`**

---

###### Category

`Iterables`
