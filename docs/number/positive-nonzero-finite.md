# @nick/is/number/positive-nonzero-finite

## `isPositiveNonZeroFiniteNumber`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteNumber<N = number>(
  it: N,
): it is PositiveNonZeroFinite<N>;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `isPositiveNonZeroFiniteNumber`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteNumber(
  it: unknown,
): it is PositiveNonZeroFinite;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `MaybePositiveNonZeroFinite`

#### Signature

```ts ignore
export type MaybePositiveNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial positive nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroFinite`

#### Signature

```ts ignore
export type PositiveNonZeroFinite<N = number> = Cast<
  N,
  POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a positive nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
