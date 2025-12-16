# @nick/is/defined

## `isDefined`

#### Signature

```ts ignore
function isDefined<T>(it: T | undefined): it is T;
```

Checks if a value is not `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is not `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isDefined } from "jsr:@nick/is/defined";

isDefined(null); // true
isDefined(undefined); // false
isDefined(0); // true
isDefined(void 0); // false
isDefined(""); // true
```

```ts
import { isDefined } from "jsr:@nick/is/defined";

let value: number | undefined;
if (isDefined(value)) {
  value += 1;
  // ^? let value: number
} else {
  value;
  // ^? let value: undefined
  value = 0;
  // ^? let value: number | undefined
}
```
