# @nick/is/present

## `isPresent`

#### Signature

```ts ignore
function isPresent<T>(it: T | null | undefined): it is NonNullable<T>;
```

Check if the given value is not `null` or `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is not null or undefined, or `false` otherwise.

###### Category

`Primitives`

###### See Also

- [isMissing](#ismissing "Jump to symbol: 'isMissing'") for the opposite of this
  function.

#### Examples

```ts
import { isPresent } from "jsr:@nick/is/present";

isPresent(null); // false
isPresent(undefined); // false
isPresent(0); // true
isPresent(""); // true
isPresent(false); // true
```

## `NonNullable`

#### Signature

```ts ignore
export type NonNullable<T> = T & {};
```

##### Type Parameters

- **`T`**

---
