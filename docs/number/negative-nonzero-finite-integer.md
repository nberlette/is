# @nick/is/number/negative-nonzero-finite-integer

## `isNegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteInteger<N = number>(
  it: N,
): it is NegativeNonZeroFiniteInteger<N>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `isNegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteInteger(
  it: unknown,
): it is NegativeNonZeroFiniteInteger<number>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `NegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
export type NegativeNonZeroFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a negative nonzero finite integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
