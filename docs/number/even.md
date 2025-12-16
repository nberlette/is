# @nick/is/number/even

## `isEven`

#### Signature

```ts ignore
function isEven<T extends Numeric>(it: T): IsEven<T>;
```

Checks if a given number / bigint is an even number. Returns `true` if it is
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                                               |
| :------- | :----------------------------------------------------------------- |
| **`it`** | The number or bigint to check, either literal or in string format. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `isEven`

#### Signature

```ts ignore
function isEven(it: number | `${number}`): it is Even<number>;
```

Checks if a given number / numeric string is even. Returns `true` if the value
is divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                   |
| :------- | :------------------------------------- |
| **`it`** | The number or numeric string to check. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `isEven`

#### Signature

```ts ignore
function isEven(it: bigint | `${bigint}`): it is Even<bigint>;
```

Checks if a given bigint or bigint string is an even number. Returns `true` if
the value is divisible by `2`, and `false` otherwise. This usually corresponds
to integers that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                  |
| :------- | :------------------------------------ |
| **`it`** | The bigint or bigint string to check. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `isEven`

#### Signature

```ts ignore
function isEven(it: unknown): it is Even;
```

Checks if a given number / bigint is even. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an even finite integer, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `Even`

#### Signature

```ts ignore
export type Even<T extends Numeric = Numeric> = Cast<T, EVEN>;
```

Branded type representing an even number or bigint. Used by overloads of the
[`isEven`](#iseven "Jump to symbol: 'isEven'") function to differentiate between
odd and even numbers.

##### Type Parameters

- **`T`** extends `Numeric` (default: `Numeric`)

---

###### Category

`Numeric`

## `IsEven`

#### Signature

```ts ignore
export type IsEven<T extends Numeric, True = T, False = never> = `${T}` extends
  `${"" | bigint}${1 | 3 | 5 | 7 | 9}` ? True : False;
```

Type-level equivalent of [`isEven`](#iseven "Jump to symbol: 'isEven'"), which
checks if a given numeric type (number or bigint) ends in an even number.
Returns [True](#true "Jump to symbol: 'True'") if so, and
[False](#false "Jump to symbol: 'False'") otherwise.

##### Type Parameters

- **`T`** extends `Numeric`
- **`True`** (default: `T`)
- **`False`** (default: `never`)

---

###### Category

`Numeric`
