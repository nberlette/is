# @nick/is/boolean

## `isBoolean`

#### Signature

```ts ignore
function isBoolean(it: unknown): it is boolean;
```

Checks if the given value is a boolean.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boolean, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isBoolean } from "jsr:@nick/is/boolean";
isBoolean("true"); // false
isBoolean(true); // true
```
