# @nick/is/set-iterator

## `isSetIterator`

#### Signature

```ts ignore
function isSetIterator<T>(it: unknown): it is SetIterator<T>;
```

Check if the given value is a set iterator, which is an iterable iterator that
yields key-value pairs from a Set object. This is the type of object returned by
the `Set.prototype.entries` and `Set.prototype[Symbol.iterator]` methods.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a set iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isSetIterator } from "jsr:@nick/is/set-iterator";

const set = new Set(["foo", "bar", "foo"]);
const iter = set[Symbol.iterator]();
console.log(isSetIterator(iterator)); // true
console.log(isSetIterator(set)); // false
```

## `SetIterator`

Represents a set iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Set Iterator" | "Set Entries";
```

---
