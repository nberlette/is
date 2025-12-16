# @nick/is/array-iterator

## `isArrayIterator`

#### Signature

```ts ignore
function isArrayIterator<T>(it: unknown): it is ArrayIterator<T>;
```

Check if the given value is an array iterator, which is an iterable iterator
that yields key-value pairs from an Array. This is the type of value that is
returned by `Array.prototype.values` and `Array.prototype[Symbol.iterator]`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a array iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isArrayIterator } from "jsr:@nick/is/array-iterator";

const array = ["foo", "bar", "foo"];
const iter = array[Symbol.iterator]();
console.log(isArrayIterator(iterator)); // true
console.log(isArrayIterator(array)); // false
```

## `ArrayIterator`

Represents a array iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "Array Iterator";
```

---
