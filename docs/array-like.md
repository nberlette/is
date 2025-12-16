# @nick/is/array-like

## `isArrayLike`

#### Signature

```ts ignore
function isArrayLike<T>(it: unknown): it is ArrayLike<T>;
```

Checks if a given value is `ArrayLike`, which is defined as
`any
non-function value with an own property named 'length' that is an integer,
and where 'length' >= '0' and <= 'Number.MAX_SAFE_INTEGER'`.

This condition includes strings. If you'd like to check specifically for
`ArrayLike` _objects_, see
[`isArrayLikeObject`](#isarraylikeobject "Jump to symbol: 'isArrayLikeObject'")
instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is an ArrayLike value

###### Category

`Indexed Collections`

#### Examples

```ts
import { isArrayLike } from "jsr:@nick/is/array-like";

isArrayLike([]); // true
isArrayLike("abc"); // true
isArrayLike({ length: 0 }); // true
isArrayLike({ length: 1, 0: "a" }); // true
isArrayLike({ length: Infinity }); // false
isArrayLike({ length: -1 }); // false
```
