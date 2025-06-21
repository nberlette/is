# @nick/is/iterable-iterator

## `isIterableIterator`

#### Signature

```ts ignore
function isIterableIterator<T>(it: unknown): it is IterableIterator<T>;
```

Checks if a given value is an `IterableIterator`, which is an iterator object
that also has a `Symbol.iterator` method that returns a reference to itself.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `IterableIterator`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterableIterator } from "jsr:@nick/is/iterable-iterator";

const iter = [1, 2][Symbol.iterator](); // Array iterator
console.log(isIterableIterator(iter)); // true
console.log(isIterableIterator(iter[Symbol.iterator]())); // true
console.log(isIterableIterator("foo"[Symbol.iterator]())); // false
```
