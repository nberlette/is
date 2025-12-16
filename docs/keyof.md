# @nick/is/keyof

## `isKeyOf`

#### Signature

```ts ignore
function isKeyOf<T extends {}, K extends PropertyKey = keyof T>(
  o: T,
  k: K,
): k is K & keyof T;
```

###### Category

`Objects`

#### Examples

```ts
import { isKeyOf } from "jsr:@nick/is/keyof";

const obj = { a: 1, b: 2, c: 3 };

console.log(isKeyOf(obj, "a")); // true
console.log(isKeyOf(obj, "b")); // true
console.log(isKeyOf(obj, "c")); // true
console.log(isKeyOf(obj, "d")); // false
```
