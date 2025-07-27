# @nick/is/number/negative-nonzero-finite

## `isNegativeNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteNumber<N = number>(
  it: N,
): it is NegativeNonZeroFinite<N>;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `isNegativeNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteNumber(
  it: unknown,
): it is NegativeNonZeroFinite;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `MaybeNegativeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNegativeNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial negative nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroFinite`

#### Signature

```ts ignore
export type NegativeNonZeroFinite<N = number> = Cast<
  N,
  NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a negative nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
