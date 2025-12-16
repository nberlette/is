# @nick/is/number/negative-nonzero-integer

## `isNegativeNonZeroInteger`

#### Signature

```ts ignore
function isNegativeNonZeroInteger<N = number>(
  it: N,
): it is NegativeNonZeroInteger<N>;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `isNegativeNonZeroInteger`

#### Signature

```ts ignore
function isNegativeNonZeroInteger(it: unknown): it is NegativeNonZeroInteger;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `NegativeNonZeroInteger`

#### Signature

```ts ignore
export type NegativeNonZeroInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a negative nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
