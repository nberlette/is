# @nick/is/plain-object

## `isPlainObject`

#### Signature

```ts ignore
function isPlainObject<T extends Record<string, any>>(it: unknown): it is T;
```

Check if the given value is a plain object, which is an object that either has a
prototype of `null` or `Object.prototype`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a plain object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isPlainObject } from "jsr:@nick/is/plain-object";

console.log(isPlainObject({})); // true
console.log(isPlainObject(new class {}())); // true
console.log(isPlainObject(new Object())); // true

console.log(isPlainObject([])); // false
console.log(isPlainObject(() => {})); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(undefined)); // false
console.log(isPlainObject(1)); // false
```
