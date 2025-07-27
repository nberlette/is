# @nick/is/number/negative-finite-integer

## `isNegativeFiniteInteger`

#### Signature

```ts ignore
function isNegativeFiniteInteger<N = number>(
  it: N,
): it is NegativeFiniteInteger<N>;
```

Checks if a given value is a negative finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteInteger(0)); // false
console.log(isNegativeFiniteInteger(1)); // false
console.log(isNegativeFiniteInteger(-1)); // true
console.log(isNegativeFiniteInteger(1.5)); // false
console.log(isNegativeFiniteInteger(NaN)); // false
console.log(isNegativeFiniteInteger(Infinity)); // false
```

## `isNegativeFiniteInteger`

#### Signature

```ts ignore
function isNegativeFiniteInteger(it: unknown): it is NegativeFiniteInteger;
```

Checks if a given value is a negative finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteInteger(0)); // false
console.log(isNegativeFiniteInteger(1)); // false
console.log(isNegativeFiniteInteger(-1)); // true
console.log(isNegativeFiniteInteger(1.5)); // false
console.log(isNegativeFiniteInteger(NaN)); // false
console.log(isNegativeFiniteInteger(Infinity)); // false
```

## `NegativeFiniteInteger`

#### Signature

```ts ignore
export type NegativeFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & FINITE & INTEGER
>;
```

Casts a value into a negative finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
