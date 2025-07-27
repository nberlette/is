# @nick/is/number/int32

## `isInt32`

#### Signature

```ts ignore
function isInt32<N = number>(it: N): it is Int32<N>;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `isInt32`

#### Signature

```ts ignore
function isInt32(it: unknown): it is Int32;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { isInt32 } from "jsr:@type/number/int32";

console.log(isInt32(0x7FFFFFFF)); // <- true
console.log(isInt32(-2147483649)); // <- false
```

## `Int32`

#### Signature

```ts ignore
export type Int32<N = number> = Cast<N, INT32>;
```

Casts a value into a signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: Int32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `MaybeInt32`

#### Signature

```ts ignore
export type MaybeInt32<N = number> = Cast<N, MAYBE_INT32>;
```

Casts a value into a partial signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int32` `number`

#### Examples

```ts
import { isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as MaybeInt32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!
value = -2147483649; // <- No error! (this is the main difference from `Int32`)
```
