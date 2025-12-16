# @nick/is/number/nan

## `isNaN`

#### Signature

```ts ignore
function isNaN<N = number>(it: N): it is NaN<N>;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `isNaN`

#### Signature

```ts ignore
function isNaN(it: unknown): it is NaN;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `MaybeNaN`

#### Signature

```ts ignore
export type MaybeNaN<N = number> = Cast<N, MAYBE_NAN>;
```

Casts a value into a partial `NaN` type. This is a more forgiving form of the
[`NaN`](#nan "Jump to symbol: 'NaN'") type, which allows for the assignment of
other numeric values, but still retains the ability to distinguish itself from
generic numbers. This is often called a "Flavored" type, whereas the stricter
[`NaN`](#nan "Jump to symbol: 'NaN'") is known as a "Branded" type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN, type MaybeNaN } from "jsr:@type/number";

let x = NaN as MaybeNaN, y = 0;

if (isNaN(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = NaN; // <- No error! (this is the main difference from `NaN`)
```

## `NaN`

#### Signature

```ts ignore
export type NaN<N = number> = Cast<N, NAN>;
```

Casts a value into a branded type that represents the special numeric value
`NaN` (not a number). This is a very strict type, and it prevents any other type
from being assigned unless they pass the
[`isNaN`](#isnan "Jump to symbol: 'isNaN'") type guard. If the value is not a
subtype of `number`, this will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNan, type NaN } from "jsr:@type/number";

let x = NaN as NaN, y = 0;

if (isNan(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NaN'.
```
