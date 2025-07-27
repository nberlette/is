# @nick/is/number/int8

## `isInt8`

#### Signature

```ts ignore
function isInt8<N = number>(it: N): it is Int8<N>;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

isInt8(1); // true
isInt8(1.0); // false
isInt8(1.1); // false
isInt8(1.00001e1); // false
```

## `isInt8`

#### Signature

```ts ignore
function isInt8(it: unknown): it is Int8;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

console.log(isInt8(1)); // true
console.log(isInt8(1.0)); // false
console.log(isInt8(1.1)); // false
console.log(isInt8(1.00001e1)); // false
```

## `Int8`

#### Signature

```ts ignore
export type Int8<N = number> = Cast<N, INT8>;
```

Casts a value into a signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int8` `number`

#### Examples

```ts
import { type Int8, isInt8 } from "@nick/is/int8";

let i = 1 as Int8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = 1.5; // <- TS2322 Type '1.5' is not assignable to type 'Int8'.
```

## `MaybeInt8`

#### Signature

```ts ignore
export type MaybeInt8<N = number> = Cast<N, MAYBE_INT8>;
```

Casts a value into a partial signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int8` `number`

#### Examples

```ts
import { isInt8, type MaybeInt8 } from "@nick/is/int8";

let i = 1 as MaybeInt8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Int8`)
```
