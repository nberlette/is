# @nick/is/number/odd

## `isOdd`

#### Signature

```ts ignore
function isOdd<T = Numeric>(it: T): it is Odd<T>;
```

Checks if a given number / bigint is odd. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                                               |
| :------- | :----------------------------------------------------------------- |
| **`it`** | The number or bigint to check, either literal or in string format. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `isOdd`

#### Signature

```ts ignore
function isOdd(it: number | `${number}`): it is Odd<number>;
```

Checks if a given number / numeric string is odd. Returns `true` if the value is
not divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                   |
| :------- | :------------------------------------- |
| **`it`** | The number or numeric string to check. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `isOdd`

#### Signature

```ts ignore
function isOdd(it: bigint | `${bigint}`): it is Odd<bigint>;
```

Checks if a given bigint or bigint string is an odd number. Returns `true` if
the value is not divisible by `2`, and `false` otherwise. This usually
corresponds to integers that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                  |
| :------- | :------------------------------------ |
| **`it`** | The bigint or bigint string to check. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `isOdd`

#### Signature

```ts ignore
function isOdd(it: unknown): it is Odd;
```

Checks if a given number / bigint is odd. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an odd finite integer, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `IsOdd`

#### Signature

```ts ignore
export type IsOdd<T extends Numeric, True = true, False = false> =
  `${number}` extends `${T}` ? True
    : `${bigint}` extends `${T}` ? True
    : `${T}` extends `${infer _}${1 | 3 | 5 | 7 | 9}` ? True
    : False;
```

Type-level equivalent of [`isOdd`](#isodd "Jump to symbol: 'isOdd'"), which
checks if a given numeric type (number or bigint) ends in an odd number. Returns
[True](#true "Jump to symbol: 'True'") if so, and
[False](#false "Jump to symbol: 'False'") otherwise.

##### Type Parameters

- **`T`** extends `Numeric`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Numeric`

## `Odd`

#### Signature

```ts ignore
export type Odd<T = number> = Cast<
  IsOdd<Extract<T, Numeric>, Extract<T, Numeric>, never>,
  ODD
>;
```

Branded type representing an odd number. Used by overloads of the
[`isOdd`](#isodd "Jump to symbol: 'isOdd'") function to differentiate between
odd and even numbers.

##### Type Parameters

- **`T`** (default: `number`)

---

###### Category

`Numeric`
