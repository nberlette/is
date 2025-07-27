# @nick/is/number/types

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

## `CastInt`

#### Signature

```ts ignore
export type CastInt<N, T> = Extract<N, bigint | `${bigint}`> & T;
```

Casts a value into a specific integer type. If the value is not a bigint, it
will resolve to `never`, indicating its incompatibility with the type.

This is a low-level utility type that primarily serves as an internal helper for
more user-friendly types like
[BigInteger](#biginteger "Jump to symbol: 'BigInteger'") or
[PositiveBigInteger](#positivebiginteger "Jump to symbol: 'PositiveBigInteger'").
Unless you're building custom numeric types with your own branding, you most
likely will never directly handle this type in the wild.

##### Type Parameters

- **`N`**
- **`T`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { CastInt } from "jsr:@nick/is/number";

declare const INTEGER: unique symbol;
type INTEGER<N extends bigint = bigint> = CastInt<N, typeof INTEGER>;

let x = 3n as INTEGER;
let y = 5n as INTEGER;

console.log(x + y); // 8n
```

## `Numeric`

#### Signature

```ts ignore
export type Numeric = number | bigint | `${number | bigint}`;
```

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

## `EVEN`

### Properties

#### IS_EVEN

```ts
readonly IS_EVEN: true;
```

---

## `EVEN_INTEGER`

## `FINITE`

### Properties

#### IS_INFINITE

```ts
readonly IS_INFINITE: false;
```

#### IS_FINITE

```ts
readonly IS_FINITE: true;
```

---

## `FLOAT`

### Properties

#### IS_FLOAT

```ts
readonly IS_FLOAT: true;
```

---

## `FLOAT16`

##### Extends `FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION: 0.5;
```

---

## `FLOAT32`

##### Extends `FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION: 1;
```

---

## `FLOAT64`

##### Extends `FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION: 2;
```

---

## `INFINITE`

### Properties

#### IS_FINITE

```ts
readonly IS_FINITE: false;
```

#### IS_INFINITE

```ts
readonly IS_INFINITE: true;
```

---

## `INT16`

##### Extends `INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH: 16;
```

---

## `INT32`

##### Extends `INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH: 32;
```

---

## `INT64`

##### Extends `INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH: 64;
```

---

## `INT8`

##### Extends `INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH: 8;
```

---

## `INTEGER`

### Properties

#### IS_INTEGER

```ts
readonly IS_INTEGER: true;
```

---

## `MAYBE_EVEN`

### Properties

#### IS_EVEN

```ts
readonly IS_EVEN?: true;
```

---

## `MAYBE_EVEN_INTEGER`

## `MAYBE_FINITE`

### Properties

#### IS_INFINITE

```ts
readonly IS_INFINITE?: false;
```

#### IS_FINITE

```ts
readonly IS_FINITE?: true;
```

---

## `MAYBE_FLOAT`

### Properties

#### IS_FLOAT

```ts
readonly IS_FLOAT?: true;
```

---

## `MAYBE_FLOAT16`

##### Extends `MAYBE_FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION?: 0.5;
```

---

## `MAYBE_FLOAT32`

##### Extends `MAYBE_FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION?: 1;
```

---

## `MAYBE_FLOAT64`

##### Extends `MAYBE_FLOAT`

### Properties

#### PRECISION

```ts
readonly PRECISION?: 2;
```

---

## `MAYBE_INFINITE`

### Properties

#### IS_FINITE

```ts
readonly IS_FINITE?: false;
```

#### IS_INFINITE

```ts
readonly IS_INFINITE?: true;
```

---

## `MAYBE_INT16`

##### Extends `MAYBE_INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH?: 16;
```

---

## `MAYBE_INT32`

##### Extends `MAYBE_INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH?: 32;
```

---

## `MAYBE_INT64`

##### Extends `MAYBE_INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH?: 64;
```

---

## `MAYBE_INT8`

##### Extends `MAYBE_INTEGER`

### Properties

#### BIT_LENGTH

```ts
readonly BIT_LENGTH?: 8;
```

---

## `MAYBE_INTEGER`

### Properties

#### IS_INTEGER

```ts
readonly IS_INTEGER?: true;
```

---

## `MAYBE_NAN`

### Properties

#### IS_NAN

```ts
readonly IS_NAN?: true;
```

---

## `MAYBE_NEGATIVE`

### Properties

#### IS_POSITIVE

```ts
readonly IS_POSITIVE?: false;
```

#### IS_NEGATIVE

```ts
readonly IS_NEGATIVE?: true;
```

---

## `MAYBE_NEGATIVE_FINITE`

## `MAYBE_NEGATIVE_INFINITY`

## `MAYBE_NEGATIVE_INTEGER`

## `MAYBE_NEGATIVE_NON_ZERO_FINITE`

## `MAYBE_NEGATIVE_NON_ZERO_INTEGER`

## `MAYBE_NEGATIVE_ZERO`

## `MAYBE_NON_ZERO`

### Properties

#### IS_ZERO

```ts
readonly IS_ZERO?: false;
```

#### IS_NON_ZERO

```ts
readonly IS_NON_ZERO?: true;
```

---

## `MAYBE_NON_ZERO_FINITE`

## `MAYBE_NON_ZERO_INTEGER`

## `MAYBE_ODD`

### Properties

#### IS_ODD

```ts
readonly IS_ODD?: true;
```

---

## `MAYBE_ODD_INTEGER`

## `MAYBE_POSITIVE`

### Properties

#### IS_NEGATIVE

```ts
readonly IS_NEGATIVE?: false;
```

#### IS_POSITIVE

```ts
readonly IS_POSITIVE?: true;
```

---

## `MAYBE_POSITIVE_FINITE`

## `MAYBE_POSITIVE_INFINITY`

## `MAYBE_POSITIVE_INTEGER`

## `MAYBE_POSITIVE_NON_ZERO_FINITE`

## `MAYBE_POSITIVE_NON_ZERO_INTEGER`

## `MAYBE_POSITIVE_ODD_INTEGER`

## `MAYBE_POSITIVE_ZERO`

## `MAYBE_UINT16`

## `MAYBE_UINT32`

## `MAYBE_UINT64`

## `MAYBE_UINT8`

## `MAYBE_UNSIGNED`

##### Extends `MAYBE_INTEGER`

### Properties

#### IS_UNSIGNED

```ts
readonly IS_UNSIGNED?: true;
```

---

## `MAYBE_ZERO`

### Properties

#### IS_NON_ZERO

```ts
readonly IS_NON_ZERO?: false;
```

#### IS_ZERO

```ts
readonly IS_ZERO?: true;
```

---

## `NAN`

### Properties

#### IS_NAN

```ts
readonly IS_NAN: true;
```

---

## `NEGATIVE`

### Properties

#### IS_POSITIVE

```ts
readonly IS_POSITIVE: false;
```

#### IS_NEGATIVE

```ts
readonly IS_NEGATIVE: true;
```

---

## `NEGATIVE_FINITE`

## `NEGATIVE_INFINITY`

## `NEGATIVE_INTEGER`

## `NEGATIVE_NON_ZERO_FINITE`

## `NEGATIVE_NON_ZERO_INTEGER`

## `NEGATIVE_ZERO`

## `NON_ZERO`

### Properties

#### IS_ZERO

```ts
readonly IS_ZERO: false;
```

#### IS_NON_ZERO

```ts
readonly IS_NON_ZERO: true;
```

---

## `NON_ZERO_FINITE`

## `NON_ZERO_INTEGER`

## `ODD`

### Properties

#### IS_ODD

```ts
readonly IS_ODD: true;
```

---

## `ODD_INTEGER`

## `POSITIVE`

### Properties

#### IS_NEGATIVE

```ts
readonly IS_NEGATIVE: false;
```

#### IS_POSITIVE

```ts
readonly IS_POSITIVE: true;
```

---

## `POSITIVE_FINITE`

## `POSITIVE_INFINITY`

## `POSITIVE_INTEGER`

## `POSITIVE_NON_ZERO_FINITE`

## `POSITIVE_NON_ZERO_INTEGER`

## `POSITIVE_ODD_INTEGER`

## `POSITIVE_ZERO`

## `UINT16`

## `UINT32`

## `UINT64`

## `UINT8`

## `UNSIGNED`

##### Extends `INTEGER`

### Properties

#### IS_UNSIGNED

```ts
readonly IS_UNSIGNED: true;
```

---

## `ZERO`

### Properties

#### IS_NON_ZERO

```ts
readonly IS_NON_ZERO: false;
```

#### IS_ZERO

```ts
readonly IS_ZERO: true;
```

---
