# @nick/is/truthy

## `isTruthy`

#### Signature

```ts ignore
function isTruthy<U>(it: U): it is Exclude<U, Falsy>;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is truthy, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isTruthy } from "jsr:@nick/is/truthy";

isTruthy(1); // true
isTruthy("foo"); // true
isTruthy(true); // true
isTruthy({}); // true

isTruthy(0); // false
isTruthy(""); // false
isTruthy(false); // false
isTruthy(null); // false
isTruthy(undefined); // false
```
