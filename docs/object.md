# @nick/is/object

## `isObject`

#### Signature

```ts ignore
function isObject(it: unknown): it is object;
```

Check if the given value is a non-null object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-null object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isObject } from "jsr:@nick/is/object";

console.log(isObject({})); // true
console.log(isObject(new class {}())); // true
console.log(isObject(new Object())); // true
console.log(isObject([])); // true

console.log(isObject(() => {})); // false
console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject(1)); // false
```
