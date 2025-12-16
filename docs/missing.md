# @nick/is/missing

## `isMissing`

#### Signature

```ts ignore
function isMissing(it: unknown): it is null | undefined;
```

Check if a given value is missing, which is either `null` or `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `null` or `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isMissing } from "jsr:@nick/is/missing";

isMissing(null); // true
isMissing(undefined); // true
isMissing(0); // false
isMissing(""); // false
isMissing(false); // false
```
