# @nick/is/number/nonzero-integer

## `isNonZeroInteger`

#### Signature

```ts ignore
function isNonZeroInteger<N = number>(it: N): it is NonZeroInteger<N>;
```

Checks if a given value is a nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroInteger(0)); // false
console.log(isNonZeroInteger(1)); // true
console.log(isNonZeroInteger(-1)); // true
console.log(isNonZeroInteger(1.5)); // false
console.log(isNonZeroInteger(NaN)); // false
console.log(isNonZeroInteger(Infinity)); // true
```

## `isNonZeroInteger`

#### Signature

```ts ignore
function isNonZeroInteger(it: unknown): it is NonZeroInteger;
```

Checks if a given value is a nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroInteger(0)); // false
console.log(isNonZeroInteger(1)); // true
console.log(isNonZeroInteger(-1)); // true
console.log(isNonZeroInteger(1.5)); // false
console.log(isNonZeroInteger(NaN)); // false
console.log(isNonZeroInteger(Infinity)); // true
```

## `NonZeroInteger`

#### Signature

```ts ignore
export type NonZeroInteger<N = number> = Cast<N, NON_ZERO & INTEGER>;
```

Casts a value into a nonzero integer type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
