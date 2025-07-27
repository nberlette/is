# @nick/is/number/positive-finite-integer

## `isPositiveFiniteInteger`

#### Signature

```ts ignore
function isPositiveFiniteInteger<N = number>(
  it: N,
): it is PositiveFiniteInteger<N>;
```

Checks if a given value is a positive finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteInteger(0)); // false
console.log(isPositiveFiniteInteger(1)); // true
console.log(isPositiveFiniteInteger(-1)); // false
console.log(isPositiveFiniteInteger(1.5)); // false
console.log(isPositiveFiniteInteger(NaN)); // false
console.log(isPositiveFiniteInteger(Infinity)); // false
```

## `isPositiveFiniteInteger`

#### Signature

```ts ignore
function isPositiveFiniteInteger(it: unknown): it is PositiveFiniteInteger;
```

Checks if a given value is a positive finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteInteger(0)); // false
console.log(isPositiveFiniteInteger(1)); // true
console.log(isPositiveFiniteInteger(-1)); // false
console.log(isPositiveFiniteInteger(1.5)); // false
console.log(isPositiveFiniteInteger(NaN)); // false
console.log(isPositiveFiniteInteger(Infinity)); // false
```

## `PositiveFiniteInteger`

#### Signature

```ts ignore
export type PositiveFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & FINITE & INTEGER
>;
```

Casts a value into a positive finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
