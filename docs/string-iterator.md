# @nick/is/string-iterator

## `isStringIterator`

#### Signature

```ts ignore
function isStringIterator<T extends string = string>(
  it: unknown,
): it is StringIterator<T>;
```

Check if the given value is a string iterator, which is an iterable iterator
that yields individual characters from a string literal or String object. This
is the type of object returned by `String.prototype[Symbol.iterator]`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isStringIterator } from "jsr:@nick/is/string-iterator";

const str = "foo";
console.log(isStringIterator(str)); // false

const iter = str[Symbol.iterator]();
console.log(isStringIterator(iter)); // true
```

## `StringIterator`

Represents a string iterator.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

##### Extends `IterableIterator<string extends T ? string : Split<T, "">[number]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "String Iterator";
```

---
