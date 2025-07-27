# @nick/is/number/positive-integer

## `isPositiveInteger`

#### Signature

```ts ignore
function isPositiveInteger<N = number>(it: N): it is PositiveInteger<N>;
```

Checks if a given value is a positive integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveInteger } from "jsr:@nick/is/integer";

console.log(isPositiveInteger(0)); // true
console.log(isPositiveInteger(1)); // true
console.log(isPositiveInteger(-1)); // false
console.log(isPositiveInteger(1.5)); // false
console.log(isPositiveInteger(NaN)); // false
console.log(isPositiveInteger(Infinity)); // false
```

## `isPositiveInteger`

#### Signature

```ts ignore
function isPositiveInteger(it: unknown): it is PositiveInteger;
```

Checks if a given value is a positive integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveInteger } from "jsr:@nick/is/integer";

console.log(isPositiveInteger(0)); // true
console.log(isPositiveInteger(1)); // true
console.log(isPositiveInteger(-1)); // false
console.log(isPositiveInteger(1.5)); // false
console.log(isPositiveInteger(NaN)); // false
console.log(isPositiveInteger(Infinity)); // false
```

## `PositiveInteger`

#### Signature

```ts ignore
export type PositiveInteger<N = number> = Cast<N, POSITIVE & INTEGER>;
```

Casts a value into a positive finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
