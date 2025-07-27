# @nick/is/number/nonzero-finite

## `isNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNonZeroFiniteNumber<N = number>(it: N): it is NonZeroFinite<N>;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

## `isNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNonZeroFiniteNumber(it: unknown): it is NonZeroFinite;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

## `MaybeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNonZeroFinite<N = number> = Cast<N, MAYBE_NON_ZERO_FINITE>;
```

Casts a value into a partial nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

## `NonZeroFinite`

#### Signature

```ts ignore
export type NonZeroFinite<N = number> = Cast<N, NON_ZERO_FINITE>;
```

Casts a value into a nonzero finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
