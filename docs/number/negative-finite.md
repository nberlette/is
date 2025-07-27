# @nick/is/number/negative-finite

## `isNegativeFiniteNumber`

#### Signature

```ts ignore
function isNegativeFiniteNumber<N = number>(it: N): it is NegativeFinite<N>;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `isNegativeFiniteNumber`

#### Signature

```ts ignore
function isNegativeFiniteNumber(it: unknown): it is NegativeFinite;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `MaybeNegativeFinite`

#### Signature

```ts ignore
export type MaybeNegativeFinite<N = number> = Cast<N, MAYBE_NEGATIVE_FINITE>;
```

Casts a value into a partial negative finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeFinite`

#### Signature

```ts ignore
export type NegativeFinite<N = number> = Cast<N, NEGATIVE_FINITE>;
```

Casts a value into a negative finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
