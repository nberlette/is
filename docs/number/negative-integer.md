# @nick/is/number/negative-integer

## `isNegativeInteger`

#### Signature

```ts ignore
function isNegativeInteger<N = number>(it: N): it is NegativeInteger<N>;
```

Checks if a given value is a negative integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeInteger } from "jsr:@nick/is/integer";

console.log(isNegativeInteger(0)); // false
console.log(isNegativeInteger(1)); // false
console.log(isNegativeInteger(-1)); // true
console.log(isNegativeInteger(1.5)); // false
console.log(isNegativeInteger(NaN)); // false
console.log(isNegativeInteger(Infinity)); // false
```

## `isNegativeInteger`

#### Signature

```ts ignore
function isNegativeInteger(it: unknown): it is NegativeInteger<number>;
```

Checks if a given value is a negative integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeInteger } from "jsr:@nick/is/integer";

console.log(isNegativeInteger(0)); // false
console.log(isNegativeInteger(1)); // false
console.log(isNegativeInteger(-1)); // true
console.log(isNegativeInteger(1.5)); // false
console.log(isNegativeInteger(NaN)); // false
console.log(isNegativeInteger(Infinity)); // false
```

## `NegativeInteger`

#### Signature

```ts ignore
export type NegativeInteger<N = number> = Cast<N, NEGATIVE & INTEGER>;
```

Casts a value into a negative integer type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`
