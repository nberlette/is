# @nick/is/number/positive-nonzero-integer

## `isPositiveNonZeroInteger`

#### Signature

```ts ignore
function isPositiveNonZeroInteger<N = number>(
  it: N,
): it is PositiveNonZeroInteger<N>;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `isPositiveNonZeroInteger`

#### Signature

```ts ignore
function isPositiveNonZeroInteger(it: unknown): it is PositiveNonZeroInteger;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `PositiveNonZeroInteger`

#### Signature

```ts ignore
export type PositiveNonZeroInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a positive nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
