# @nick/is/bigint

## `isBigInt`

#### Signature

```ts ignore
function isBigInt(it: unknown): it is bigint;
```

Checks if the given value is a primitive bigint value.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a primitive bigint, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isBigInt } from "jsr:@nick/is/bigint";

const x: unknown = 123n;
if (isBigInt(x)) {
  console.log(x + 1n);
  //          ^? const x: bigint
}
```
