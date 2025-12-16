# @nick/is/undefined

## `isUndefined`

#### Signature

```ts ignore
function isUndefined(it: unknown): it is undefined;
```

Checks if the value is `undefined`, and nothing else.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isUndefined } from "jsr:@nick/is/undefined";

isUndefined(null); // false
isUndefined(undefined); // true
isUndefined(0); // false
isUndefined(void 0); // true
isUndefined(""); // false
```

```ts
import { isUndefined } from "jsr:@nick/is/undefined";

let value: number | undefined;
if (isUndefined(value)) {
  value;
  // ^? let value: undefined
  value = 0;
  // ^? let value: number | undefined
} else {
  value += 1;
  // ^? let value: number
}
```
