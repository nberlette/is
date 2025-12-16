# @nick/is/number/positive-nonzero

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber<N = number>(it: N): it is PositiveNonZero<N>;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero;
```

## `MaybePositiveNonZero`

#### Signature

```ts ignore
export type MaybePositiveNonZero<N = number> = Cast<
  N,
  MAYBE_POSITIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial positive nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZero`

#### Signature

```ts ignore
export type PositiveNonZero<N = number> = Cast<N, POSITIVE & NON_ZERO>;
```

Casts a value into a positive nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
