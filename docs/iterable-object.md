# @nick/is/iterable-object

## `isIterableObject`

#### Signature

```ts ignore
function isIterableObject<T>(it: unknown): it is IterableObject<T>;
```

Checks if a given value is an iterable object. This includes arrays, maps, and
sets, but not strings or other non-object iterables.

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
import { isIterableObject } from "jsr:@nick/is/iterable-object";

console.log(isIterableObject([1, 2])); // true
console.log(isIterableObject(new Map())); // true
console.log(isIterableObject(new Set())); // true
console.log(isIterableObject({ [Symbol.iterator]: () => {} })); // true
console.log(isIterableObject("foo")); // false
```

## `IterableObject`

#### Signature

```ts ignore
export type IterableObject<T = unknown> = Iterable<T> & object;
```

Represents an object that is also an iterable. This is the type of arrays, maps,
sets, and objects with a Symbol.iterator method. It is a subtype of both
`Iterable` and `object`. This is also the type that the function
[isIterableObject](#isiterableobject "Jump to symbol: 'isIterableObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Iterables`
