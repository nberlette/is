# @nick/is/string

## `isString`

#### Signature

```ts ignore
function isString(it: unknown): it is string;
```

Checks if the given value is a string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isString } from "jsr:@nick/is/string";

const x: unknown = "hello";
if (isString(x)) {
  console.log(x.toUpperCase());
  //          ^? const x: string
}
```
