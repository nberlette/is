# @nick/is/iterator

## `isIterator`

#### Signature

```ts ignore
function isIterator<T>(it: unknown): it is Iterator<T>;
```

Check if the given value is an iterator object. This includes arrays, maps,
sets, and any other value with a `.next` method.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterator } from "jsr:@nick/is/iterator";

const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
console.log(isIterator(iterator)); // true
console.log(isIterator(iterable)); // false
```
