# @nick/is/null

## `isNull`

#### Signature

```ts ignore
function isNull(it: unknown): it is null;
```

Checks if the value is `null`, and nothing else.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `null`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isNull } from "jsr:@nick/is/null";

isNull(null); // true
isNull(undefined); // false
isNull(0); // false
isNull(""); // false
isNull(false); // false
```
