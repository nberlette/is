# @nick/is/object-like

## `isObjectLike`

#### Signature

```ts ignore
function isObjectLike(it: unknown): it is object;
```

Check if a given value is a non-null object-like value, which includes plain
objects, arrays, functions, classes, class instances, and other objects.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is a non-null object-like value, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isObjectLike } from "jsr:@nick/is/object-like";

console.log(isObjectLike({})); // true
console.log(isObjectLike([])); // true
console.log(isObjectLike(() => {})); // true
console.log(isObjectLike(new class {}())); // true
console.log(isObjectLike(new Object())); // true
console.log(isObjectLike(null)); // false
console.log(isObjectLike(undefined)); // false
console.log(isObjectLike(1)); // false
```
