# @nick/is/number/finite-integer

## `isFiniteInteger`

#### Signature

```ts ignore
function isFiniteInteger<N = number>(it: N): it is FiniteInteger<N>;
```

Checks if a given value is a finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFiniteInteger } from "jsr:@nick/is/integer";

console.log(isFiniteInteger(0)); // true
console.log(isFiniteInteger(1)); // true
console.log(isFiniteInteger(-1)); // true
console.log(isFiniteInteger(1.5)); // false
console.log(isFiniteInteger(NaN)); // false
console.log(isFiniteInteger(Infinity)); // false
```

## `isFiniteInteger`

#### Signature

```ts ignore
function isFiniteInteger(it: unknown): it is FiniteInteger;
```

Checks if a given value is a finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFiniteInteger } from "jsr:@nick/is/integer";

console.log(isFiniteInteger(0)); // true
console.log(isFiniteInteger(1)); // true
console.log(isFiniteInteger(-1)); // true
console.log(isFiniteInteger(1.5)); // false
console.log(isFiniteInteger(NaN)); // false
console.log(isFiniteInteger(Infinity)); // false
```

## `FiniteInteger`

#### Signature

```ts ignore
export type FiniteInteger<N = number> = Cast<N, FINITE & INTEGER>;
```

Casts a value into a finite integer type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
