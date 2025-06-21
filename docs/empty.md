# @nick/is/empty

## `isEmpty`

#### Signature

```ts ignore
function isEmpty(it: string): it is "";
```

Checks if a given value is an empty string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty string, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty(""); // true
isEmpty("a"); // false
```

## `isEmpty`

#### Signature

```ts ignore
function isEmpty(it: readonly unknown[]): it is readonly [];
```

Checks if a given value is an empty Array object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty Array object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty([]); // true
isEmpty([1]); // false
```

## `isEmpty`

#### Signature

```ts ignore
function isEmpty<U extends ArrayLike<any>>(it: U): it is U & {
  readonly length: 0;
};
```

Checks if a given value is an empty ArrayLike object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty ArrayLike object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty([]); // true
isEmpty([1]); // false
```

## `isEmpty`

#### Signature

```ts ignore
function isEmpty(it: unknown): it is {
  [K in undefined]: never;
};
```

Checks if a given value is an empty object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

## `isEmpty`

#### Signature

```ts ignore
function isEmpty(it: unknown): it is
  | ""
  | {
    length: 0;
  }
  | {
    [K in undefined]: never;
  };
```

Checks if a given value is an empty object, array, or string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty object, array, or string, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty({}); // true
isEmpty([]); // true
isEmpty(""); // true

isEmpty({ a: 1 }); // false
isEmpty([1]); // false
isEmpty("a"); // false
```
