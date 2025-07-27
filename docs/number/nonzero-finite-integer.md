# @nick/is/number/nonzero-finite-integer

## `isNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNonZeroFiniteInteger<N = number>(
  it: N,
): it is NonZeroFiniteInteger<N>;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `isNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNonZeroFiniteInteger(it: unknown): it is NonZeroFiniteInteger;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `NonZeroFiniteInteger`

#### Signature

```ts ignore
export type NonZeroFiniteInteger<N = number> = Cast<
  N,
  NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a nonzero finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
