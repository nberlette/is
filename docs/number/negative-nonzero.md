# @nick/is/number/negative-nonzero

## `isNegativeNonZeroNumber`

#### Signature

```ts ignore
function isNegativeNonZeroNumber<N = number>(it: N): it is NegativeNonZero<N>;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `isNegativeNonZeroNumber`

#### Signature

```ts ignore
function isNegativeNonZeroNumber(it: unknown): it is NegativeNonZero;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `MaybeNegativeNonZero`

#### Signature

```ts ignore
export type MaybeNegativeNonZero<N = number> = Cast<
  N,
  MAYBE_NEGATIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial negative nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZero`

#### Signature

```ts ignore
export type NegativeNonZero<N = number> = Cast<N, NEGATIVE & NON_ZERO>;
```

Casts a value into a negative nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
