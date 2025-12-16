# @nick/is/types

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace<S extends string>(
  it: S,
): it is IsWhitespace<S, S, string extends S ? WhitespaceString<S> : never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespace } from "jsr:@nick/is/whitespace";

console.log(isWhitespace("   ")); // true
console.log(isWhitespace("abc")); // false
console.log(isWhitespace("  a ")); // false
console.log(isWhitespace("")); // false
console.log(isWhitespace(" \n\t ")); // true
```

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace(it: unknown): it is WhitespaceString;
```

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace(it: unknown): it is WhitespaceString;
```

## `isWhitespaceChar`

#### Signature

```ts ignore
function isWhitespaceChar(it: unknown): it is Whitespace;
```

Checks if a given character is a whitespace character.

This function checks if the provided character is one of the recognized
whitespace characters, including spaces, tabs, newlines, and additional Unicode
whitespace characters.

##### Parameters

| Name     | Info                    |
| :------- | :---------------------- |
| **`it`** | The character to check. |

##### Returns

`true` if the character is a whitespace character, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespaceChar } from "jsr:@nick/is/whitespace";

console.log(isWhitespaceChar(" ")); // true
console.log(isWhitespaceChar("\n")); // true
console.log(isWhitespaceChar("\t")); // true
console.log(isWhitespaceChar("a")); // false
```

## `isWhitespaceCode`

#### Signature

```ts ignore
function isWhitespaceCode(it: unknown): it is WhitespaceCode;
```

Checks if a given value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike<S extends string>(
  it: S,
): it is IsWhitespace<S, S, never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike<N extends number>(
  it: N,
): it is IsWhitespaceCode<N, N, never>;
```

Checks if the provided value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: Iterable<string>): it is Iterable<Whitespace>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: number): it is WhitespaceCode;
```

Checks if the provided value is a whitespace character code.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: unknown): it is WhitespaceLike;
```

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(
  it: unknown,
): it is string | WhitespaceCode | Iterable<Whitespace>;
```

## `ArrayBufferLike`

#### Signature

```ts ignore
export type ArrayBufferLike = ArrayBuffer | SharedArrayBuffer;
```

Represents an "ArrayBuffer-like" value, which is either an `ArrayBuffer` or
`SharedArrayBuffer` instance.

###### Category

`Binary Data Structures`

## `ArrayLikeObject`

#### Signature

```ts ignore
export type ArrayLikeObject<T = unknown> = ArrayLike<T> & object;
```

Represents an object that has a `length` property that is a finite unsigned
integer, and where the object is not a function. This is the type that the
function
[`isArrayLikeObject`](#isarraylikeobject "Jump to symbol: 'isArrayLikeObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`

## `AsyncIterableObject`

#### Signature

```ts ignore
export type AsyncIterableObject<T> = AsyncIterable<T> & object;
```

An object that implements the `AsyncIterable` interface. This is the type that
the
[isAsyncIterableObject](#isasynciterableobject "Jump to symbol: 'isAsyncIterableObject'")
function checks for and (narrows to).

##### Type Parameters

- **`T`**

---

###### Category

`Iterables`

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

## `DateString`

#### Signature

```ts ignore
export type DateString = string & IsDateString;
```

Represents a valid date string that can be parsed by the native `Date`
constructor without any additional formatting or help from external tools.

This is a branded nominal type that can be used to strictly distinguish between
regular strings and those that have been validated as date strings through a
runtime check like
[`isDateString`](#isdatestring "Jump to symbol: 'isDateString'").

Combined with the aforementioned type guard, this type allows you to enforce the
validity of date strings both at runtime and compile time. If your users are not
exposed to this type alias, the only way a value of this type can be created is
by satisfying the `isDateString` function check.

###### Category

`Types`

###### Tags

`date-string` `nominal`

## `Enum`

#### Signature

```ts ignore
export type Enum<T extends EnumLike = EnumLike> = EnumLike & T;
```

Represents a TypeScript `enum` object, which is defined as a plain object that
satisfies one of the following conditions:

- String or numeric keys mapped to string or numeric values.
- Values can be constant or computed.

> Declared keys may only be literal static strings. Numeric keys are not allowed
> in the declaration of an enum. The only legal way to create an enum with
> numeric keys like `"0"` is for the compiler to generate them.

String-to-string enums **may not** have reverse mappings. It is only supported
for constant numeric values (whether explicitly specified via initializers, or
implicitly assigned by the TS compiler).

> When defined with the `enum` keyword and constant numeric values (or no
> explicit values specified at all, which defaults to `0` for the first key and
> increments by `1` for each subsequent key), the TypeScript compiler
> auto-generates an implicit reverse-mapping from the values back to their
> respective keys.

##### Type Parameters

- **`T`** extends `EnumLike` (default: `EnumLike`)

---

#### Examples

Constant enum definition

```ts
enum Abc {
  B = 0,
  C = 1,
}
```

Mixed-value enum definition (no reverse mapping)

```ts
// Mixing string and numeric values in an enum definition will
// prevent the compiler from generating reverse mappings (since
// it only generates such mappings for constant numeric values).
enum Abc {
  B = 0,
  C = "c",
}
```

Constant enum definition (implicit value assignment)

```ts
// auto-generates a reverse mapping from 0 => B and 1 => C
enum Abc {
  B, // = 0
  C, // = 1
  // "0" = "B",
  // "1" = "C",
}
```

Computed enum definition

```ts
enum C {
  D = "e" + "f", // "ef"
}
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

## `Exclusivity`

#### Signature

```ts ignore
export type Exclusivity = AnyRange[2];
```

## `Falsy`

#### Signature

```ts ignore
export type Falsy = null | undefined | void | false | 0 | 0n | "" | NaN;
```

A type that represents all falsy values.

###### Category

`Primitives`

## `Finite`

#### Signature

```ts ignore
export type Finite<N = number> = Cast<N, FINITE>;
```

Casts a value into a finite type. If the value is not a number, it will resolve
to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `Float`

#### Signature

```ts ignore
export type Float<N = number> = Cast<N, FLOAT>;
```

Casts a value into a floating-point type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float` `number`

#### Examples

```ts
import { type Float, isFloat } from "@nick/is/float";

let x = 1.5 as Float, y = 0;

if (isFloat(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float'.
```

## `Float16`

#### Signature

```ts ignore
export type Float16<N = number> = Cast<N, FLOAT16>;
```

Casts a value into a 16-bit floating-point type (half-precision).

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float16` `number`

#### Examples

```ts
import { type Float16, isFloat16 } from "@nick/is/float16";

let i = 1.5 as Float16, y = 0;

if (isFloat16(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = 1; // <- TS2322 Type '1' is not assignable to type 'Float16'.
```

## `Float32`

#### Signature

```ts ignore
export type Float32<N = number> = Cast<N, FLOAT32>;
```

Casts a value into a floating-point type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float32` `number`

#### Examples

```ts
import { type Float32, isFloat32 } from "@nick/is/float32";

let x = 1.5 as Float32, y = 0;

if (isFloat32(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float32'.
```

## `Float64`

#### Signature

```ts ignore
export type Float64<N = number> = Cast<N, FLOAT64>;
```

Casts a value into a float64-precision floating-point type. If the value is not
a number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float64` `number`

#### Examples

```ts
import { type Float64, isFloat64 } from "jsr:@type/number/float64";

let x = 1.5 as Float64, y = 0;

if (isFloat64(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float64'.
```

## `Identifier`

#### Signature

```ts ignore
export type Identifier<T extends string = string> = Brand<T, "Identifier">;
```

Utility type brand that represents a valid JavaScript identifier. This is a
string that can be used as a name of a variable, function, property, label, or
export. It is a subtype of `string` and is used to distinguish between regular
strings and identifiers.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

###### Category

`Primitives`

## `Infinity`

#### Signature

```ts ignore
export type Infinity = PositiveInfinity | NegativeInfinity;
```

Special type representing either positive or negative infinity.

###### Category

`Numbers`

###### Tags

`types` `number` `infinity`

## `InRange`

#### Signature

```ts ignore
export type InRange<
  N extends number,
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> =
  & (number extends N ? IsInRange<Min, Max, Tex>
    : `${Min}|${Max}` extends `-${number}|-${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${Min}|${Max}` extends `${number}|-${number}` ? never
    : `${Min}|${Max}` extends `-${number}|${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${N}` extends `-${number}` ? never
    : IsInRange<Min, Max, Tex>)
  & N;
```

Type-level equivalent to the [`inRange`](#inrange "Jump to symbol: 'inRange'")
function, which (naively) checks if a number is within a given range. The range
can be specified in multiple ways, with one of four different exclusivity types.

##### Type Parameters

- **`N`** extends `number`
- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

###### See Also

- [`inRange`](#inrange "Jump to symbol: 'inRange'") for more information.

## `Int16`

#### Signature

```ts ignore
export type Int16<N = number> = Cast<N, INT16>;
```

Casts a value into a signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `Int32`

#### Signature

```ts ignore
export type Int32<N = number> = Cast<N, INT32>;
```

Casts a value into a signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: Int32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `Int8`

#### Signature

```ts ignore
export type Int8<N = number> = Cast<N, INT8>;
```

Casts a value into a signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int8` `number`

#### Examples

```ts
import { type Int8, isInt8 } from "@nick/is/int8";

let i = 1 as Int8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = 1.5; // <- TS2322 Type '1.5' is not assignable to type 'Int8'.
```

## `Integer`

#### Signature

```ts ignore
export type Integer<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & Integer<I> : never
  : N extends number
    ? number extends N ? N & INTEGER
    : `${N}` extends `${bigint}` ? N & INTEGER : never
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

## `IsWhitespace`

#### Signature

```ts ignore
export type IsWhitespace<T extends string, True = true, False = false> =
  IsNever<T> extends true ? False
    : IsAny<T> extends true ? True : T extends Whitespace ? True
    : T extends `${Whitespace}${infer R}` ? IsWhitespace<R, True, False>
    : False;
```

If the given string [`T`](#t "Jump to symbol: 'T'") is whitespace, this type
will resolve to the [`True`](#true "Jump to symbol: 'True'") type parameter
(default: `true`). Otherwise, it will resolve to the
[`False`](#false "Jump to symbol: 'False'") type parameter (default: `false`).

##### Type Parameters

- **`T`** extends `string`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

###### Tags

`whitespace`

## `IsWhitespaceChar`

#### Signature

```ts ignore
export type IsWhitespaceChar<T extends string, True = true, False = false> =
  T extends Whitespace ? True : False;
```

Type-level predicate that checks if a given string
[`T`](#t "Jump to symbol: 'T'") is a whitespace character. If
[`T`](#t "Jump to symbol: 'T'") is a whitespace character, it will resolve to
the [`True`](#true "Jump to symbol: 'True'") type parameter (default: `true`).
Otherwise, it will resolve to the [`False`](#false "Jump to symbol: 'False'")
type parameter (default: `false`).

The compile-time equivalent of the
[`isWhitespaceChar`](#iswhitespacechar "Jump to symbol: 'isWhitespaceChar'")
function.

##### Type Parameters

- **`T`** extends `string`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

## `IsWhitespaceCode`

#### Signature

```ts ignore
export type IsWhitespaceCode<T extends number, True = true, False = false> =
  T extends WhitespaceCode ? True : False;
```

Type-level predicate that checks if a given string
[`T`](#t "Jump to symbol: 'T'") is a whitespace character code. If
[`T`](#t "Jump to symbol: 'T'") is a whitespace character code, it will resolve
to the [`True`](#true "Jump to symbol: 'True'") type parameter (default:
`true`). Otherwise, it will resolve to the
[`False`](#false "Jump to symbol: 'False'") type parameter (default: `false`).

The compile-time equivalent of the
[`isWhitespaceCode`](#iswhitespacecode "Jump to symbol: 'isWhitespaceCode'")
function.

##### Type Parameters

- **`T`** extends `number`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

## `IterableObject`

#### Signature

```ts ignore
export type IterableObject<T = unknown> = Iterable<T> & object;
```

Represents an object that is also an iterable. This is the type of arrays, maps,
sets, and objects with a Symbol.iterator method. It is a subtype of both
`Iterable` and `object`. This is also the type that the function
[isIterableObject](#isiterableobject "Jump to symbol: 'isIterableObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Iterables`

## `MaybeFinite`

#### Signature

```ts ignore
export type MaybeFinite<N = number> = Cast<N, MAYBE_FINITE>;
```

Casts a value into a partial finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeFloat16`

#### Signature

```ts ignore
export type MaybeFloat16<N = number> = Cast<N, MAYBE_FLOAT16>;
```

Casts a value into a partial 16-bit floating-point type (half-precision).

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float16` `number`

## `MaybeFloat32`

#### Signature

```ts ignore
export type MaybeFloat32<N = number> = Cast<N, MAYBE_FLOAT32>;
```

Casts a value into a partial floating-point type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float32` `number`

#### Examples

```ts
import { isFloat32, type MaybeFloat32 } from "@nick/is/float32";

let x = 1.5 as MaybeFloat32, y = 0;

if (isFloat32(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Float32`)
```

## `MaybeFloat64`

#### Signature

```ts ignore
export type MaybeFloat64<N = number> = Cast<N, MAYBE_FLOAT64>;
```

Casts a value into a partial float64-precision floating-point type. If the value
is not a number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float64` `number`

#### Examples

```ts
import { isFloat64, type MaybeFloat64 } from "jsr:@type/number/float64";

let x = 1.5 as MaybeFloat64, y = 0;

if (isFloat64(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Float64`)
```

## `MaybeInt16`

#### Signature

```ts ignore
export type MaybeInt16<N = number> = Cast<N, MAYBE_INT16>;
```

Casts a value into a partial signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

value = -32769; // Error: Type '-32769' is not assignable to type 'Int16'.
```

## `MaybeInt32`

#### Signature

```ts ignore
export type MaybeInt32<N = number> = Cast<N, MAYBE_INT32>;
```

Casts a value into a partial signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int32` `number`

#### Examples

```ts
import { isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as MaybeInt32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!
value = -2147483649; // <- No error! (this is the main difference from `Int32`)
```

## `MaybeInt8`

#### Signature

```ts ignore
export type MaybeInt8<N = number> = Cast<N, MAYBE_INT8>;
```

Casts a value into a partial signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int8` `number`

#### Examples

```ts
import { isInt8, type MaybeInt8 } from "@nick/is/int8";

let i = 1 as MaybeInt8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Int8`)
```

## `MaybeInteger`

#### Signature

```ts ignore
export type MaybeInteger<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & MaybeInteger<I> : never
  : N extends number
    ? number extends N ? N & MAYBE_INTEGER
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

## `MaybeNegative`

#### Signature

```ts ignore
export type MaybeNegative<N = number> = Cast<N, MAYBE_NEGATIVE>;
```

Casts a value into a partial negative type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Types` `Numbers`

###### Tags

`maybe` `negative` `number`

#### Examples

```ts
import { isNegative, type MaybeNegative } from "jsr:@type/number";

let x = -1 as MaybeNegative, y = 0;

if (isNegative(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = -1; // <- No error! (this is the main difference from `Negative`)
```

## `MaybeNegativeFinite`

#### Signature

```ts ignore
export type MaybeNegativeFinite<N = number> = Cast<N, MAYBE_NEGATIVE_FINITE>;
```

Casts a value into a partial negative finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeNonZero`

#### Signature

```ts ignore
export type MaybeNegativeNonZero<N = number> = Cast<
  N,
  MAYBE_NEGATIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial negative nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNegativeNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial negative nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeZero`

#### Signature

```ts ignore
export type MaybeNegativeZero<N = number> = Cast<N, MAYBE_NEGATIVE_ZERO>;
```

Casts a value into a partial negative zero type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero, type MaybeNegativeZero } from "jsr:@type/number";

let x = -0 as MaybeNegativeZero, y = 0;

if (isNegativeZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = -0; // <- No error! (this is the main difference from `NegativeZero`)
```

## `MaybeNonZero`

#### Signature

```ts ignore
export type MaybeNonZero<N = number> = Cast<N, MAYBE_NON_ZERO>;
```

Casts a value into a partial nonzero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero, type MaybeNonZero } from "jsr:@type/number";

let x = 1 as MaybeNonZero, y = 0;

if (isNonZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `NonZero`)
```

## `MaybeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNonZeroFinite<N = number> = Cast<N, MAYBE_NON_ZERO_FINITE>;
```

Casts a value into a partial nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

## `MaybePositive`

#### Signature

```ts ignore
export type MaybePositive<N = number> = Cast<N, MAYBE_POSITIVE>;
```

Casts a value into a partial positive type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `positive` `number`

#### Examples

```ts
import { isPositive, type MaybePositive } from "jsr:@type/number";

let x = 1 as MaybePositive, y = 0;

if (isPositive(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Positive`)
```

## `MaybePositiveFinite`

#### Signature

```ts ignore
export type MaybePositiveFinite<N = number> = Cast<N, MAYBE_POSITIVE_FINITE>;
```

Casts a value into a partial positive finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveNonZero`

#### Signature

```ts ignore
export type MaybePositiveNonZero<N = number> = Cast<
  N,
  MAYBE_POSITIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial positive nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveNonZeroFinite`

#### Signature

```ts ignore
export type MaybePositiveNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial positive nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveZero`

#### Signature

```ts ignore
export type MaybePositiveZero<N = number> = Cast<N, MAYBE_POSITIVE_ZERO>;
```

Casts a value into a partial positive zero type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero, type MaybePositiveZero } from "jsr:@type/number";

let x = 0 as MaybePositiveZero, y = 1;

if (isPositiveZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 0; // <- No error! (this is the main difference from `PositiveZero`)
```

## `MaybeUint16`

#### Signature

```ts ignore
export type MaybeUint16<N = number> = Cast<N, MAYBE_UINT16>;
```

Casts a value into a partial unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `MaybeUint32`

#### Signature

```ts ignore
export type MaybeUint32<N = number> = Cast<N, MAYBE_UINT32>;
```

Casts a value into a partial unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `MaybeUint8`

#### Signature

```ts ignore
export type MaybeUint8<N = number> = Cast<N, MAYBE_UINT8>;
```

Casts a value into a partial unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint8, type MaybeUint8 } from "@nick/is/uint8";

let i = 1 as MaybeUint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Uint8`)
```

## `MaybeZero`

#### Signature

```ts ignore
export type MaybeZero<N = number> = Cast<N, MAYBE_ZERO>;
```

Casts a value into a partial zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isZero, type MaybeZero } from "jsr:@type/number";

let x = 0 as MaybeZero, y = 1;

if (isZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 0; // <- No error! (this is the main difference from `Zero`)
```

## `NaN`

#### Signature

```ts ignore
export type NaN<N = number> = Cast<N, NAN>;
```

Casts a value into a branded type that represents the special numeric value
`NaN` (not a number). This is a very strict type, and it prevents any other type
from being assigned unless they pass the
[`isNaN`](#isnan "Jump to symbol: 'isNaN'") type guard. If the value is not a
subtype of `number`, this will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNan, type NaN } from "jsr:@type/number";

let x = NaN as NaN, y = 0;

if (isNan(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NaN'.
```

## `Negative`

#### Signature

```ts ignore
export type Negative<N = number> = Cast<N, NEGATIVE>;
```

Casts a value into a negative type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`negative` `number`

#### Examples

```ts
import { isNegative, type Negative } from "jsr:@type/number";

let x = -1 as Negative, y = 0;

if (isNegative(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'Negative'.
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

## `NegativeFinite`

#### Signature

```ts ignore
export type NegativeFinite<N = number> = Cast<N, NEGATIVE_FINITE>;
```

Casts a value into a negative finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

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

## `NegativeInfinity`

#### Signature

```ts ignore
export type NegativeInfinity = -Infinity;
```

Special type representing negative infinity (`Number.NEGATIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `negative`

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

## `NegativeNonZero`

#### Signature

```ts ignore
export type NegativeNonZero<N = number> = Cast<N, NEGATIVE & NON_ZERO>;
```

Casts a value into a negative nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroFinite`

#### Signature

```ts ignore
export type NegativeNonZeroFinite<N = number> = Cast<
  N,
  NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a negative nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
export type NegativeNonZeroFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a negative nonzero finite integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroInteger`

#### Signature

```ts ignore
export type NegativeNonZeroInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a negative nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeZero`

#### Signature

```ts ignore
export type NegativeZero<N = number> = Cast<N, NEGATIVE_ZERO>;
```

Casts a value into a negative zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero, type NegativeZero } from "jsr:@type/number";

let x = -0 as NegativeZero, y = 0;

if (isNegativeZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NegativeZero'.
```

## `NonEmptyArray`

#### Signature

```ts ignore
export type NonEmptyArray<T = unknown> = [T, ...T[]];
```

Represents an array with 1 or more element of the specific type `T`.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`

## `NonZero`

#### Signature

```ts ignore
export type NonZero<N = number> = Cast<N, NON_ZERO>;
```

Casts a value into a nonzero type. If the value is not a number, it will resolve
to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero, type NonZero } from "jsr:@type/number";

let x = 1 as NonZero, y = 0;

if (isNonZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NonZero'.
```

## `NonZeroFinite`

#### Signature

```ts ignore
export type NonZeroFinite<N = number> = Cast<N, NON_ZERO_FINITE>;
```

Casts a value into a nonzero finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NonZeroFiniteInteger`

#### Signature

```ts ignore
export type NonZeroFiniteInteger<N = number> = Cast<
  N,
  NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a nonzero finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

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

## `Positive`

#### Signature

```ts ignore
export type Positive<N = number> = Cast<N, POSITIVE>;
```

Casts a value into a positive type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive, type Positive } from "jsr:@type/number";

let x = 1 as Positive, y = 0;

if (isPositive(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'Positive'.
```

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

## `PositiveFinite`

#### Signature

```ts ignore
export type PositiveFinite<N = number> = Cast<N, POSITIVE_FINITE>;
```

Casts a value into a positive finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

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

## `PositiveInfinity`

#### Signature

```ts ignore
export type PositiveInfinity = Infinity;
```

Special type representing positive infinity (`Number.POSITIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `positive`

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

## `PositiveNonZero`

#### Signature

```ts ignore
export type PositiveNonZero<N = number> = Cast<N, POSITIVE & NON_ZERO>;
```

Casts a value into a positive nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroFinite`

#### Signature

```ts ignore
export type PositiveNonZeroFinite<N = number> = Cast<
  N,
  POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a positive nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
export type PositiveNonZeroFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a positive nonzero finite integer type. If the value is not a
number, it will resolve to `never`.s

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroInteger`

#### Signature

```ts ignore
export type PositiveNonZeroInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a positive nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveZero`

#### Signature

```ts ignore
export type PositiveZero<N = number> = Cast<N, POSITIVE_ZERO>;
```

Casts a value into a positive zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero, type PositiveZero } from "jsr:@type/number";

let x = 0 as PositiveZero, y = 1;

if (isPositiveZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'PositiveZero'.
```

## `Primitive`

#### Signature

```ts ignore
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;
```

Represents a primitive value. This includes strings, numbers, bigints, booleans,
symbols, null, and undefined.

###### Category

`Primitives`

## `Printable`

#### Signature

```ts ignore
export type Printable = string | number | bigint | boolean | null | undefined;
```

Represents a value that can be printed in a template literal type string, which
means it is either a `string`, `number`, `bigint`, `boolean`, `null` or
`undefined`. Any other type of value will raise a compiler error if you attempt
to construct a template literal type with it.

#### Examples

```ts
import type { Printable } from "jsr:@nick/is/printable";

type Join<T, D extends string = ""> = T extends
  [infer F extends Printable, ...infer R]
  ? `${F}${R extends [] ? "" : D}${Join<R, D>}`
  : "";

type Result = Join<[1, "two", 3n, true, null, undefined]>;
//   ^? type Result = "1two3true"
```

## `Range`

#### Signature

```ts ignore
export type Range<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = never,
> = [Tex] extends [never]
  ?
    | RangeInclusiveMin<Min, Max>
    | RangeInclusive<Min, Max>
    | RangeInclusiveMax<Min, Max>
    | RangeExclusive<Min, Max>
    | RangeUnknown<Min, Max>
  : Either<
    Extract<Range<Min, Max, never>, Required<RangeUnknown<Min, Max, Tex>>>,
    RangeUnknown<Min, Max, Exclusivity>
  >;
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `never`)

---

## `RegisteredSymbol`

#### Signature

```ts ignore
export type RegisteredSymbol = Brand<symbol, "registered-symbol">;
```

Branded type representing a symbol that is registered in the global symbol
registry, which means it was created using the `Symbol.for()` function. This
kind of symbol is **not** allowed as keys in Weak Collections like `WeakMap` or
`WeakSet` objects, as they are not truly unique.

This is the type that the
[`isRegisteredSymbol`](#isregisteredsymbol "Jump to symbol: 'isRegisteredSymbol'")
type guard narrows its input values to. It is provided as an export for you to
use in tandem with that type guard, to ensure your code is handling registered
symbols in a strict, type-safe manner.

###### Categories

`Primitives` `Types`

#### Examples

```ts
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function doSomething(key: RegisteredSymbol): void {
  // ...
}

const key = Symbol.for("foo");
if (isRegisteredSymbol(key)) {
  doSomething(key);
}
```

```ts
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function assertRegisteredSymbol(
  value: unknown,
): asserts value is RegisteredSymbol {
  if (!isRegisteredSymbol(value)) {
    throw new Error("Expected a registered symbol.");
  }
}
```

## `SemVer`

#### Signature

```ts ignore
export type SemVer = Brand<string, "SemVer">;
```

Represents a validated Semantic Version (SemVer v2.0.0) string. This is the type
the [`isSemVer`](#issemver "Jump to symbol: 'isSemVer'") function narrows its
input values to.

###### Category

`Strings`

## `SupportedSetLike`

#### Signature

```ts ignore
export type SupportedSetLike<T = unknown> =
  Exclude<keyof ExtendedSetLike<T>, keyof SetLike<T>> extends
    keyof globalThis.Set<T> ? ExtendedSetLike<T> : SetLike<T>;
```

This type represents either the full
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
interface, or the [`SetLike`](#setlike "Jump to symbol: 'SetLike'") interface,
depending on whether the current environment supports composition methods
introduced by the TC39 Set Methods Proposal.

If the current environment supports the composition methods, this type will
resolve to the
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
interface. Otherwise, it will resolve to the
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") interface.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### See Also

- [`SupportedSetLikeConstructor`](#supportedsetlikeconstructor "Jump to symbol: 'SupportedSetLikeConstructor'")
  for a similar type that represents the constructor function for the supported
  set-like object.

## `SupportedSetLikeConstructor`

#### Signature

```ts ignore
export type SupportedSetLikeConstructor =
  Exclude<keyof ExtendedSetLikeConstructor, keyof SetLikeConstructor> extends
    keyof globalThis.SetConstructor ? ExtendedSetLikeConstructor
    : SetLikeConstructor;
```

This type represents either the full
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
interface, or the
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
interface, depending on whether the current environment supports composition
methods introduced by the TC39 Set Methods Proposal.

If the current environment supports the composition methods, this type will
resolve to the
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
interface. Otherwise, it will resolve to the
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
interface.

###### See Also

- [`SupportedSetLike`](#supportedsetlike "Jump to symbol: 'SupportedSetLike'")
  for a similar type that represents the full set-like object.

## `TypedArray`

#### Signature

```ts ignore
export type TypedArray<T extends ArrayBufferLike = ArrayBufferLike> =
  InstanceType<TypedArrayConstructor<T>>;
```

Represents an instance of a typed array, which is a view over a raw binary data
buffer (e.g. `ArrayBuffer`) of a fixed-size. The following are the supported
native typed array types:

- `Uint8Array`
- `Uint8ClampedArray`
- `Uint16Array`
- `Uint32Array`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Float16Array` (ES2024)
- `Float32Array`
- `Float64Array`
- `BigInt64Array`
- `BigUint64Array`

##### Type Parameters

- **`T`** extends `ArrayBufferLike` (default: `ArrayBufferLike`)

---

###### Category

`Binary Data Structures`

###### See Also

- [isTypedArray](#istypedarray "Jump to symbol: 'isTypedArray'") to check if a
  value is this type at runtime.

## `Uint16`

#### Signature

```ts ignore
export type Uint16<N = number> = Cast<N, UINT16>;
```

Casts a value into an unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `Uint32`

#### Signature

```ts ignore
export type Uint32<N = number> = Cast<N, UINT32>;
```

Casts a value into an unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `Uint8`

#### Signature

```ts ignore
export type Uint8<N = number> = Cast<N, UINT8>;
```

Casts a value into an unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint8, type Uint8 } from "@nick/is/uint8";

let i = 1 as Uint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint8'.
```

## `UniqueSymbol`

#### Signature

```ts ignore
export type UniqueSymbol = Brand<symbol, "unique-symbol">;
```

Branded type representing a unique symbol, which is a primitive symbol that was
created using the `Symbol()` function, and is not a registered symbol created
with `Symbol.for()`, nor a well-known symbol defined on the global `Symbol`
object.

###### Category

`Primitives`

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

## `WellKnownSymbol`

#### Signature

```ts ignore
export type WellKnownSymbol = ValueOf<{
     [K in [object Object]]: SymbolConstructor[K]
  }>;
```

Union type representing all of the well-known symbols defined on the global
`Symbol` object in the current runtime environment.

###### Category

`Primitives`

## `Whitespace`

#### Signature

```ts ignore
export type Whitespace = typeof WHITESPACE_CHARS[number] & {};
```

A union of all whitespace characters, as defined by the Unicode standard. This
includes characters such as spaces, tabs, newlines, and additional Unicode
whitespace characters that are not typically visible in text.

This type is particularly useful for type-level programming, specifically when
developing string manipulation types that need to account for various types of
whitespace characters rather than a simple ASCII space.

For example, if one wanted to create a type-level utility to split a string
literal into its constituent parts using whitespace and punctuation as its
delimiters, it could be done quite easily using this type.

###### Category

`Types`

###### Tags

`whitespace`

## `WhitespaceCode`

#### Signature

```ts ignore
export type WhitespaceCode = typeof WHITESPACE_CODES[number];
```

Union of all whitespace character codes, as defined by the Unicode standard.
This includes characters such as spaces, tabs, newlines, and additional Unicode
whitespace characters that are not typically visible.

###### Category

`Types`

###### Tags

`whitespace` `char code`

## `WhitespaceLike`

#### Signature

```ts ignore
export type WhitespaceLike = WhitespaceString | Whitespace | WhitespaceCode;
```

A union type that can be either a string or a whitespace character code.

This is the type used in the
[`isWhitespaceLike`](#iswhitespacelike "Jump to symbol: 'isWhitespaceLike'")
function to determine if a value is either a string or a whitespace character
code.

###### Category

`Types`

###### Tags

`whitespace`

## `WhitespaceString`

#### Signature

```ts ignore
export type WhitespaceString<S extends string = string> = S & WhitespaceBrand;
```

Represents a string that has been verified at runtime to only consist of
whitespace characters. This is a nominal (branded) type that is distinct from a
regular string type.

##### Type Parameters

- **`S`** extends `string` (default: `string`)

---

###### Category

`Types`

###### Tags

`whitespace` `branded`

## `Zero`

#### Signature

```ts ignore
export type Zero<N = number> = Cast<N, ZERO>;
```

Casts a value into a zero type. If the value is not a number, it will resolve to
`never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isZero, type Zero } from "jsr:@type/number/zero";

let x = 0 as Zero, y = 1;

if (isZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Zero'.
```

## `ArrayIterator`

Represents a array iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "Array Iterator";
```

---

## `AsyncFunction`

##### Type Parameters

- **`TReturn`** (default: `any`)

---

### Call Signatures

```ts
<T extends TReturn = TReturn>(...args: any[]): Promise<T>;
```

---

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "AsyncFunction";
```

---

## `Class`

###### Category

`Types`

#### Examples

```ts
import { isClass } from "jsr:@nick/is/class";

class Foo {}
console.log(isClass(Foo)); // true

const Bar = function () {
  this.foo = "bar";
  return this;
};
console.log(isClass(Bar)); // false

const Baz = () => {};
console.log(isClass(Baz)); // false
```

##### Type Parameters

- **`T`** (default: `any`)
- **`A`** extends `readonly unknown[]` (default: `readonly any[]`)
- **`P`** extends `object | null` (default: `Is<T,  object | null>`)

---

### Properties

#### prototype

```ts
readonly prototype: P;
```

---

## `Closer`

An abstract interface which when implemented provides an interface to close
files/resources that were previously opened.

###### Category

`I/O`

### Methods

#### close

```ts
close(): void;
```

Closes the resource, "freeing" the backing file/resource.

---

## `Constructor`

Represents a constructor function that creates instances of type `T`.

###### Category

`Types`

##### Type Parameters

- **`T`** (default: `unknown`)
- **`A`** extends `readonly unknown[]` (default: `readonly unknown[]`)

---

### Properties

#### prototype

```ts
readonly prototype: Prototype<T, this>;
```

---

## `EnumLike`

Represents an "enum-like" object, which is a plain object composed of either all
string keys and string values, or a two-way mapping of string keys to numeric
values (and vice versa).

This is a supertype of the type of object created by TypeScript's builtin `enum`
keyword. Its primary consumer is the
[`isEnum`](#isenum "Jump to symbol: 'isEnum'") function.

###### Category

`Types`

###### Tags

`enum` `objects`

#### Examples

```ts
// when we create an enum with constant numeric values, the TypeScript
// compiler auto-generates an implicit reverse-mapping from the values
// back to their respective keys, providing us with the capability to
// access the keys by their values.
enum Priority {
  Low = 0x0,
  Medium = 0x1,
  High = 0x2,
  Insane = 0xFF,
}

// the actual object generated by the enum syntax above looks like this:
const Priority = {
  Low: 0,
  Medium: 1,
  High: 2,
  Insane: 255,
  "0": "Low",
  "1": "Medium",
  "2": "High",
  "255": "Insane",
} satisfies EnumLike;

// this provides us with the ability to access a key even when we only have
// its value, a language feature that is popular in other OOP languages such
// as C#, Java, and C++:

console.log(Priority.High); // 2
console.log(Priority[2]); // "High"
console.assert(Priority.High === Priority[Priority[2]]);
console.assert(Priority[2] === Priority[Priority.High]);
```

##### Type Parameters

- **`K`** extends `string | number` (default: `string | number`)
- **`V`** extends `string | number` (default: `string | number`)

---

### Index Signatures

#### EnumLike

```ts
readonly [key: string]:  K | V | undefined
```

#### EnumLike

```ts
readonly [index: number]: K
```

---

## `ExtendedSetLike`

A `ExtendedSetLike` object is a collection of values, where each value may only
occur once. The values in a `ExtendedSetLike` can be either primitive values or
object references. The keys of a `ExtendedSetLike` are the same as the values.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `SetLike<T>`

### Methods

#### union

```ts
union<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T | U>;
```

##### Parameters

| Name        | Info                                              |
| :---------- | :------------------------------------------------ |
| **`other`** | The other set-like object to merge with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
and also all the elements in the [`other`](#other "Jump to symbol: 'other'").

#### intersection

```ts
intersection<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T & U>;
```

##### Parameters

| Name        | Info                                                  |
| :---------- | :---------------------------------------------------- |
| **`other`** | The other set-like object to intersect with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements which are both in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
and in the [`other`](#other "Jump to symbol: 'other'").

#### difference

```ts
difference<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T>;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
which are not also in the [`other`](#other "Jump to symbol: 'other'").

#### symmetricDifference

```ts
symmetricDifference<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T | U>;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a new ExtendedSetLike object containing all the elements which are in either
this [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object or in the [`other`](#other "Jump to symbol: 'other'"), but not in both.

#### isSubsetOf

```ts
isSubsetOf<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
are also in the [`other`](#other "Jump to symbol: 'other'").

#### isSupersetOf

```ts
isSupersetOf<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether all the elements in the
[`other`](#other "Jump to symbol: 'other'") are also in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object.

#### isDisjointFrom

```ts
isDisjointFrom<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
has no elements in common with the [`other`](#other "Jump to symbol: 'other'").

---

## `ExtendedSetLikeConstructor`

Represents a constructor function for an
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object.

### Properties

#### prototype

```ts
readonly prototype: ExtendedSetLike<any>;
```

---

## `MapIterator`

Represents a map iterator.

##### Type Parameters

- **`K`**
- **`V`**

---

##### Extends `IterableIterator<[K,V]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Map Iterator" | "Map Entries";
```

---

## `MapLike`

Map-like objects are collections of keys and values, where each key may only
appear once in the collection.

###### Category

`Types`

##### Type Parameters

- **`K`**
- **`V`**

---

##### Extends `Iterable<[K,V]>`

### Properties

#### size

```ts
readonly size: number;
```

Gets the number of elements in the collection.

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: string;
```

---

### Methods

#### has

```ts
has(key: K): boolean;
```

Tests whether a key is present in the collection.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to lookup. |

##### Returns

`true` if the key is present in the collection; otherwise, `false`.

#### get

```ts
get(key: K): V | undefined;
```

Gets the value associated with the provided key, if it exists.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to lookup. |

##### Returns

The value associated with the provided key, or `undefined`.

#### set

```ts
set(key: K, value: V): this;
```

Sets the value in the collection associated with the provided key.

##### Parameters

| Name        | Info              |
| :---------- | :---------------- |
| **`key`**   | The key to set.   |
| **`value`** | The value to set. |

##### Returns

The collection.

#### clear

```ts
clear(): void;
```

Removes all entries from the collection.

#### delete

```ts
delete(key: K): boolean;
```

Removes a key from the collection.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to remove. |

##### Returns

`true` if the delete operation was successful, otherwise `false`.

#### keys

```ts
keys(): IterableIterator<K>;
```

Returns an `IterableIterator` for the keys present in the collection.

#### values

```ts
values(): IterableIterator<V>;
```

Returns an `IterableIterator` for the values present in the collection.

#### entries

```ts
entries(): IterableIterator<
    [K, V]
  >;
```

Returns an `IterableIterator` for the entries present in the collection. Each
entry is a tuple containing the key and value for each element.

#### forEach

```ts
forEach<This = void>(
    cb: (this: This, value: V, key: K, map: MapLike<K, V>) => void,
    thisArg?: This,
  ): void;
```

Executes a provided function once per each key/value pair in the collection.

##### Parameters

| Name          | Info                                                    |
| :------------ | :------------------------------------------------------ |
| **`cb`**      | The callback to execute.                                |
| **`thisArg`** | The value to use as `this` when executing the callback. |

##### Returns

Nothing.

#### [Symbol.iterator]

```ts
[Symbol.iterator](): IterableIterator<
    [K, V]
  >;
```

Returns an `IterableIterator` for the entries present in the collection.

---

## `MapLikeConstructor`

A constructor function for creating new `MapLike` objects.

###### Category

`Types`

### Properties

#### prototype

```ts
readonly prototype: MapLike<unknown, unknown>;
```

---

## `Reader`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer asynchronously.

###### Category

`I/O`

### Methods

#### read

```ts
read(
    p: Uint8Array,
  ): Promise<number | null>;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`read()` resolves to `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`read()` conventionally resolves to what is available instead of waiting for
more.

When `read()` encounters end-of-file condition, it resolves to EOF (null). When
`read()` encounters an error, it rejects with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---

## `ReaderSync`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer synchronously.

###### Category

`I/O`

### Methods

#### readSync

```ts
readSync(
    p: Uint8Array,
  ): number | null;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`readSync()` returns `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`readSync()` conventionally returns what is available instead of waiting for
more.

When `readSync()` encounters end-of-file condition, it returns EOF (`null`).

When `readSync()` encounters an error, it throws with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---

## `ReadonlyCollection`

Set-like objects are collections of unique values (each value may only occur
once). The `ReadonlyCollection` interface defines the bare minimum requirements
for an object to be considered "set-like" in JavaScript; that is, it must have:

- a `has` method, which tests whether a given value is present in the set,
  returning a boolean value indicating the result.
- a `keys` method, which returns an `IterableIterator` for the keys present in
  the set. Since set collections are keyed by their values, the `keys` method
  actually iterates over the **_values_** in the set.
- a read-only `size` property (getter), which returns the number of values in
  the set at any given time.

This interface the base for the `SetLike` interface (hence its name), which
extends it with additional methods like `add`, `delete`, `clear`, `forEach`,
`values`, and `entries` to provide a more complete API for working with Set-
like collections in JavaScript. Prior to the TC39 Proposal for Set Methods, the
`SetLike` interface was the shape of the native `Set` API in JavaScript.

Following the introduction of the TC39 Proposal for Set Methods, the methods for
set composition (`union`, `intersection`, `difference`, etc.) were added to the
`Set` API, which necessitated the creation of the `ExtendedSetLike` interface to
represent the full API for set-like collections in JavaScript.

Those methods require their arguments to implement the
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
interface, rather than the full
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") or
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'"). This
means you can call `Set.prototype.union` with a `Set`, `Map`, or even an
`IterableWeakSet` object, since they all implement the `ReadonlyCollection` API.

###### See Also

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects

##### Type Parameters

- **`T`** (default: `unknown`)

---

### Properties

#### size

```ts
readonly size: number;
```

##### Returns

The number of elements in the collection.

---

### Methods

#### has

```ts
has(value: T): boolean;
```

Tests whether a given value is present in the collection.

##### Parameters

| Name        | Info                 |
| :---------- | :------------------- |
| **`value`** | The value to lookup. |

##### Returns

`true` if the value is in the collection; otherwise, `false`.

#### keys

```ts
keys(): IterableIterator<T>;
```

Gets an `IterableIterator` for the keys present in the collection.

##### Returns

An iterator of the keys in the collection.

---

## `ReadonlyCollectionConstructor`

Represents a constructor function for a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object, which is the base implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any of the additional composition methods like `union` or
`intersection`.

###### See Also

- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLike`](#setlike "Jump to symbol: 'SetLike'") for the core interface
  without composition methods.

### Properties

#### prototype

```ts
readonly prototype: ReadonlyCollection<unknown>;
```

---

## `SetIterator`

Represents a set iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Set Iterator" | "Set Entries";
```

---

## `SetLike`

Represents the core functionality of a `SetLike` object, which is the base
implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any additional composition methods (`union`, `intersection`,
`difference`, etc). This was the native `Set` API prior to the TC39 Set Methods
Proposal's introduction.

###### See Also

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
  for the constructor interface.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `Iterable<T>`, `ReadonlyCollection<T>`

### Properties

#### size

```ts
readonly size: number;
```

##### Returns

The number of elements in the collection.

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: string;
```

---

### Methods

#### add

```ts
add(value: T): this;
```

Adds the given value to the collection, if it does not already exist.

##### Parameters

| Name        | Info              |
| :---------- | :---------------- |
| **`value`** | The value to add. |

##### Returns

The collection.

#### has

```ts
has(value: T): boolean;
```

Tests whether a key is present in the collection.

##### Parameters

| Name        | Info               |
| :---------- | :----------------- |
| **`value`** | The key to lookup. |

##### Returns

`true` if the value is in the collection; otherwise, `false`.

#### clear

```ts
clear(): void;
```

Removes all values from the collection.

#### delete

```ts
delete(value: T): boolean;
```

Removes a value from the collection.

##### Parameters

| Name        | Info                 |
| :---------- | :------------------- |
| **`value`** | The vakue to remove. |

##### Returns

`true` if the operation was successful; otherwise, `false`.

#### forEach

```ts
forEach<This = void>(
    cb: (this: This, value: T, value2: T, set: this) => void,
    thisArg?: This,
  ): void;
```

Executes a provided function once per each entry in the collection. The callback
is invoked with the current value for both the first and second arguments (to
maintain a similar signature as `forEach` on other iterable objects like `Map`
and `Array`).

##### Parameters

| Name          | Info                                                    |
| :------------ | :------------------------------------------------------ |
| **`cb`**      | The callback to execute.                                |
| **`thisArg`** | The value to use as `this` when executing the callback. |

##### Returns

Nothing.

#### keys

```ts
keys(): IterableIterator<T>;
```

##### Returns

an Iterable of the values in the collection.

#### values

```ts
values(): IterableIterator<T>;
```

##### Returns

an `IterableIterator` for the values present in the collection.

#### entries

```ts
entries(): IterableIterator<
    [T, T]
  >;
```

##### Returns

an `IterableIterator` of the entries present in the collection. Each entry is a
tuple containing the key and value for each element.

#### [Symbol.iterator]

```ts
[Symbol.iterator](): IterableIterator<
    T
  >;
```

Returns an iterator of the [`values`](#values "Jump to symbol: 'values'") in the
set.

---

## `SetLikeConstructor`

Represents a constructor function for a
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") object, which is the base
implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any of the additional composition methods like `union` or
`intersection`.

###### See Also

- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLike`](#setlike "Jump to symbol: 'SetLike'") for the core interface
  without composition methods.

### Properties

#### prototype

```ts
readonly prototype: SetLike<any>;
```

---

## `StringIterator`

Represents a string iterator.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

##### Extends `IterableIterator<string extends T ? string : Split<T, "">[number]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "String Iterator";
```

---

## `TemplateObject`

A template strings object is an object with a `raw` property containing an array
of strings. This type is used to loosely represent the first argument passed to
a tagged template function, which is a template strings array.

Note: while all `TemplateStringsArray` values are `TemplateObject`s, not all
`TemplateObject`s are `TemplateStringsArray`s.

###### Category

`Template Literals`

### Properties

#### raw

```ts
readonly raw: readonly string[];
```

---

## `TemplateStringsArray`

A template strings array is an array of strings with an own property named `raw`
that is also an array of strings. This is the type of array provided to tagged
template literals for the first argument, and is represented as the type
`TemplateStringsArray` in TypeScript.

Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s, not
all `TemplateStringsObject`s are `TemplateStringsArray`s.

###### Category

`Types`

###### Tags

`TemplateStringsArray`

##### Extends `ReadonlyArray<string>`

### Properties

#### raw

```ts
readonly raw: ReadonlyArray<string>;
```

---

## `Writer`

An abstract interface which when implemented provides an interface to write
bytes from an array buffer to a file/resource asynchronously.

###### Category

`I/O`

### Methods

#### write

```ts
write(
    p: Uint8Array,
  ): Promise<number>;
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It resolves
to the number of bytes written from `p` (`0` <= `n` <= `p.byteLength`) or reject
with the error encountered that caused the write to stop early. `write()` must
reject with a non-null error if would resolve to `n` < `p.byteLength`. `write()`
must not modify the slice data, even temporarily.

This function is one of the lowest level APIs and most users should not work
with this directly, but rather use
[`writeAll()`](https://deno.land/std/streams/write_all.ts?s=writeAll) from
`std/streams/write_all.ts` instead.

Implementations should not retain a reference to `p`.

---

## `WriterSync`

An abstract interface which when implemented provides an interface to write
bytes from an array buffer to a file/resource synchronously.

###### Category

`I/O`

### Methods

#### writeSync

```ts
writeSync(
    p: Uint8Array,
  ): number;
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It returns
the number of bytes written from `p` (`0` <= `n` <= `p.byteLength`) and any
error encountered that caused the write to stop early. `writeSync()` must throw
a non-null error if it returns `n` < `p.byteLength`. `writeSync()` must not
modify the slice data, even temporarily.

Implementations should not retain a reference to `p`.

---
