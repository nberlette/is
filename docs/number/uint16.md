# @nick/is/number/uint16

## `isUint16`

#### Signature

```ts ignore
function isUint16<N = number>(it: N): it is Uint16<N>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `isUint16`

#### Signature

```ts ignore
function isUint16(it: unknown): it is Uint16<number>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `MaybeUint16`

#### Signature

```ts ignore
export type MaybeUint16<N = number> = Cast<N, MAYBE_UINT16>;
```

Casts a value into a partial unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `Uint16`

#### Signature

```ts ignore
export type Uint16<N = number> = Cast<N, UINT16>;
```

Casts a value into an unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```
