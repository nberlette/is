# @nick/is/number/int16

## `isInt16`

#### Signature

```ts ignore
function isInt16<N = number>(it: unknown): it is Int16<N>;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/number";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `isInt16`

#### Signature

```ts ignore
function isInt16(it: unknown): it is Int16;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt16 } from "@nick/is/number";

isInt16(32768); // false
isInt16(-32769); // false
isInt16(1); // true
isInt16(32767); // true
isInt16(-32768); // true
```

## `Int16`

#### Signature

```ts ignore
export type Int16<N = number> = Cast<N, INT16>;
```

Casts a value into a signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `MaybeInt16`

#### Signature

```ts ignore
export type MaybeInt16<N = number> = Cast<N, MAYBE_INT16>;
```

Casts a value into a partial signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

value = -32769; // Error: Type '-32769' is not assignable to type 'Int16'.
```
