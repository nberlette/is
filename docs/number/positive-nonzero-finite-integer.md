# @nick/is/number/positive-nonzero-finite-integer

## `isPositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteInteger<N = number>(
  it: N,
): it is PositiveNonZeroFiniteInteger<N>;
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
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `isPositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteInteger(
  it: unknown,
): it is PositiveNonZeroFiniteInteger;
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
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `PositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
export type PositiveNonZeroFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a positive nonzero finite integer type. If the value is not a
number, it will resolve to `never`.s

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
