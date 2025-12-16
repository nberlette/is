# @nick/is/number/uint8

## `isUint8`

#### Signature

```ts ignore
function isUint8<N = number>(it: N): it is Uint8<N>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `isUint8`

#### Signature

```ts ignore
function isUint8(it: unknown): it is Uint8<number>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `MaybeUint8`

#### Signature

```ts ignore
export type MaybeUint8<N = number> = Cast<N, MAYBE_UINT8>;
```

Casts a value into a partial unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint8, type MaybeUint8 } from "@nick/is/uint8";

let i = 1 as MaybeUint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Uint8`)
```

## `Uint8`

#### Signature

```ts ignore
export type Uint8<N = number> = Cast<N, UINT8>;
```

Casts a value into an unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint8, type Uint8 } from "@nick/is/uint8";

let i = 1 as Uint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint8'.
```
