# @nick/is/number/integer

## `isInteger`

#### Signature

```ts ignore
function isInteger<N = number>(it: N): it is Integer<N>;
```

Checks if a given value is an integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInteger } from "jsr:@nick/is/integer";

console.log(isInteger(0)); // true
console.log(isInteger(1)); // true
console.log(isInteger(-1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
```

## `isInteger`

#### Signature

```ts ignore
function isInteger(it: unknown): it is Integer;
```

Checks if a given value is an integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInteger } from "jsr:@nick/is/integer";

console.log(isInteger(0)); // true
console.log(isInteger(1)); // true
console.log(isInteger(-1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
```

## `BigInteger`

#### Signature

```ts ignore
export type BigInteger<N = bigint> = CastInt<N, INTEGER>;
```

Casts a value into a big integer type (which is really just a bigint). If the
value is not a bigint or a string containing a valid integer, it will resolve to
`never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `Cast`

#### Signature

```ts ignore
export type Cast<N, T> = Extract<N, number> & T;
```

Casts a value into a specific numeric type. If the value is not a number, it
will resolve to `never`, indicating its incompatibility with the type.

This is a low-level utility type that primarily serves as an internal helper for
more user-friendly types like [Integer](#integer "Jump to symbol: 'Integer'")
and [Positive](#positive "Jump to symbol: 'Positive'"). Unless you're building
custom numeric types with your own branding, you most likely never directly
handle this type in the wild.

##### Type Parameters

- **`N`**
- **`T`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { Cast } from "jsr:@nick/is/number";

declare const MY_DOUBLE: unique symbol;
type DOUBLE<N extends number = number> = Cast<N, typeof MY_DOUBLE>;

let x = 4.3210123210 as DOUBLE;
let y = 3.1415926535 as DOUBLE;

console.log(x + y); // 7.4626049745

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'DOUBLE'.
```

## `Integer`

#### Signature

```ts ignore
export type Integer<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & Integer<I> : never
  : N extends number ? number extends N ? N & INTEGER
    : `${N}` extends `${bigint}` ? N & INTEGER
    : never
  : never;
```

Casts a value into an integer type. If the value is not an number, or is a
non-integral number like 3.14, it will resolve to `never`.

**Note**: once a value is cast to a type with this narrow of a constraint,
TypeScript's compiler will refuse any assignment to it that is not _exactly_
compatible with the type. If you find yourself encountering errors about
incompatible types, try using the
[MaybeInteger](#maybeinteger "Jump to symbol: 'MaybeInteger'") type instead.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { type Integer, isInteger } from "jsr:@type/number";

function add(a: Integer, b: Integer) {
  return (a + b) as Integer;
}

let x = 1 as Integer, y = 2 as Integer, z = 3;

if (isInteger(z)) {
  console.log(add(add(x, y), z));
} else {
  console.log(add(x, y));
}

// These will raise TypeScript compiler errors:
add(x, z);
add(y, 3);

// This level of strictness can be a bit silly in the wrong application:
x = 1; // <- TS4321 (`MaybeInteger` would be a better choice here)
```

## `MaybeInteger`

#### Signature

```ts ignore
export type MaybeInteger<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & MaybeInteger<I> : never
  : N extends number ? number extends N ? N & MAYBE_INTEGER
    : `${N}` extends `${bigint}` ? N & MAYBE_INTEGER
    : never
  : never;
```

Casts a value into a partial integer type. If the value is not an number, or is
a non-integral number like 3.14, it will resolve to `never`. This type is nearly
identical to [Integer](#integer "Jump to symbol: 'Integer'"), except it allows
assignment of values that are not precisely compatible with the type, while
still providing an extra level of type safety over the base `number` type.

Once a value is cast to a type of this constraint, TypeScript's compiler will
refuse any incompatible assignment to it. To demonstrate, consider this example:

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import {
  isInteger,
  type MaybeFloat,
  type MaybeInteger,
} from "jsr:@type/number";

function add(a: MaybeInteger, b: MaybeInteger) {
  return (a + b) as MaybeInteger;
}

let x = 1 as MaybeInteger, y = 2 as MaybeInteger, z = 3;
let xx = 1.1 as MaybeFloat, yy = 2.2 as MaybeFloat, zz = 3.3;

if (isInteger(z)) {
  console.log(add(add(x, y), z));
} else {
  console.log(add(x, y));
}

// These will raise TypeScript compiler errors:
add(x, yy); // <- TS2345 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.
y = yy; // <- TS2322 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.

y = 2; // <- No error! (this is the main difference from `Integer`)
```

## `NegativeBigInteger`

#### Signature

```ts ignore
export type NegativeBigInteger<N = bigint> = CastInt<N, NEGATIVE & INTEGER>;
```

Casts a value into a negative big integer type. If the value is not a bigint or
a string containing a valid integer, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `PositiveBigInteger`

#### Signature

```ts ignore
export type PositiveBigInteger<N = bigint> = CastInt<N, POSITIVE & INTEGER>;
```

Casts a value into a positive big integer type. If the value is not a bigint or
a string containing a valid integer, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `Unwrap`

#### Signature

```ts ignore
export type Unwrap<U> = U extends Cast<infer N, infer T> ? [N, T] : [U, never];
```

Unwraps a type that has been cast with [Cast](#cast "Jump to symbol: 'Cast'")
into a tuple of the original value and the specific type it was cast to (or
"branded" with). If the given type was _not_ cast with
[Cast](#cast "Jump to symbol: 'Cast'"), it will resolve to a tuple containing
the original value and `never`, respectively.

##### Type Parameters

- **`U`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { Cast, Unwrap } from "jsr:@nick/is/number";

type Int_3 = Cast<3, INTEGER>;

function unwrap<T>(value: T): Unwrap<T>[0] {
  return value as Unwrap<T>[0];
}
```
