# @nick/is/date

## `isDate`

#### Signature

```ts ignore
function isDate(it: unknown): it is Date;
```

Checks if a given value is a `Date` instance. This is a more reliable check than
`it instanceof Date` because it also works across different realms.

This only returns `true` for values that are valid `Date` instances, meaning
`Object.create(Date.prototype)` and similar constructs will return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Date` instance, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isDate } from "jsr:@nick/is/date";

isDate(new Date()); // true
isDate(new Date(0)); // true
isDate(new Date("2021-01-01")); // true
```
