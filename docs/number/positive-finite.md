# @nick/is/number/positive-finite

## `isPositiveFiniteNumber`

#### Signature

```ts ignore
function isPositiveFiniteNumber<N = number>(it: N): it is PositiveFinite<N>;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `isPositiveFiniteNumber`

#### Signature

```ts ignore
function isPositiveFiniteNumber(it: unknown): it is PositiveFinite;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `MaybePositiveFinite`

#### Signature

```ts ignore
export type MaybePositiveFinite<N = number> = Cast<N, MAYBE_POSITIVE_FINITE>;
```

Casts a value into a partial positive finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveFinite`

#### Signature

```ts ignore
export type PositiveFinite<N = number> = Cast<N, POSITIVE_FINITE>;
```

Casts a value into a positive finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
