# @nick/is/iterable

## `isIterable`

#### Signature

```ts ignore
function isIterable<T>(it: unknown): it is Iterable<T>;
```

Checks if a given value is an iterable. This includes arrays, strings, maps,
sets, and any other value with a `Symbol.iterator` method. If you need to check
for iterable objects specifically, use `isIterableObject`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterable, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterable } from "jsr:@nick/is/iterable";

console.log(isIterable([1, 2])); // true
console.log(isIterable("foo")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({ [Symbol.iterator]: () => {} })); // true
console.log(isIterable({})); // false
```
