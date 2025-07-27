# @nick/is/number/uint32

## `isUint32`

#### Signature

```ts ignore
function isUint32<N = number>(it: N): it is Uint32<N>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `isUint32`

#### Signature

```ts ignore
function isUint32(it: unknown): it is Uint32<number>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `MaybeUint32`

#### Signature

```ts ignore
export type MaybeUint32<N = number> = Cast<N, MAYBE_UINT32>;
```

Casts a value into a partial unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `Uint32`

#### Signature

```ts ignore
export type Uint32<N = number> = Cast<N, UINT32>;
```

Casts a value into an unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```
