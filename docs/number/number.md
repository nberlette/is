# @nick/is/number/number

## `isNumber`

#### Signature

```ts ignore
function isNumber(it: unknown): it is number;
```

Checks if the given value is a number. This includes all numbers, without
distinguishing between `NaN`, `Infinity`, and other special values.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a number, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isNumber } from "jsr:@nick/is/number";

isNumber("123"); // false
isNumber(123); // true
```

```ts
import { isNumber } from "jsr:@nick/is/number";

const x: unknown = 123;
if (isNumber(x)) {
  console.log(x + 1);
  //          ^? const x: number
}
```
