# @nick/is/map-iterator

## `isMapIterator`

#### Signature

```ts ignore
function isMapIterator<K, V>(it: unknown): it is MapIterator<K, V>;
```

Check if the given value is a map iterator, which is an iterable iterator that
yields key-value pairs from a Map object. This is the type of object returned by
the `Map.prototype.entries` and `Map.prototype[Symbol.iterator]` methods.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a map iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isMapIterator } from "jsr:@nick/is/map-iterator";

const map = new Map([["foo", 1], ["bar", 2]]);
const iterator = map.entries();
console.log(isMapIterator(iterator)); // true
console.log(isMapIterator(map)); // false
```

## `MapIterator`

Represents a map iterator.

##### Type Parameters

- **`K`**
- **`V`**

---

##### Extends `IterableIterator<[K,V]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Map Iterator" | "Map Entries";
```

---
