# @nick/is/number/mod

## `inRange`

#### Signature

```ts ignore
function inRange<
  V extends number,
  R extends Derange,
  Min extends number = R extends [infer M extends number, number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? 0
    : R[0],
  Max extends number = R extends [number, infer M extends number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? R[0]
    : R[1],
  Tex extends Exclusivity = Either<
    R extends [number, number, infer T extends Exclusivity] ? T
      : R[1] extends Exclusivity ? R[1]
      : undefined,
    "[)"
  >,
>(value: V, ...range: [...R] | Derange): value is InRange<V, Min, Max, Tex>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: Derange): value is InRange<number>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: any[]): undefined;
```

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

## `isEvenNumber`

#### Signature

```ts ignore
function isEvenNumber<T extends Numeric>(it: T): IsEven<T>;
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

## `isEvenNumber`

#### Signature

```ts ignore
function isEvenNumber(it: number | `${number}`): it is Even<number>;
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

## `isEvenNumber`

#### Signature

```ts ignore
function isEvenNumber(it: bigint | `${bigint}`): it is Even<bigint>;
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

## `isEvenNumber`

#### Signature

```ts ignore
function isEvenNumber(it: unknown): it is Even;
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

## `isExclusivity`

#### Signature

```ts ignore
function isExclusivity(it: unknown): it is Exclusivity;
```

Checks if a given value is a valid range exclusivity string (either "[]", "(]",
"[)", or "()").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid range exclusivity string, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isExclusivity } from "jsr:@nick/is/number/in_range";

console.log(isExclusivity("[]")); // true
console.log(isExclusivity("(]")); // true
console.log(isExclusivity("[)")); // true
console.log(isExclusivity("()")); // true
console.log(isExclusivity("")); // false
console.log(isExclusivity("[")); // false
console.log(isExclusivity("]")); // false
```

## `isFinite`

#### Signature

```ts ignore
function isFinite<N = number>(it: N): it is Finite<N>;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

## `isFinite`

#### Signature

```ts ignore
function isFinite(it: unknown): it is Finite;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

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

## `isFiniteNumber`

#### Signature

```ts ignore
function isFiniteNumber<N = number>(it: N): it is Finite<N>;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

## `isFiniteNumber`

#### Signature

```ts ignore
function isFiniteNumber(it: unknown): it is Finite;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

## `isFloat`

#### Signature

```ts ignore
function isFloat<N = number>(it: N): it is Float<N>;
```

Checks if the value is a floating-point number. Supports both single and double
precision floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a floating-point number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat } from "@nick/is/float";

isFloat(1); // false
isFloat(1.0); // false
isFloat(1.1); // true
isFloat(1.00001e1); // true
```

## `isFloat`

#### Signature

```ts ignore
function isFloat(it: unknown): it is Float;
```

Checks if the value is a floating-point number. Supports both single and double
precision floating-point numbers.

## Rules for what is (and isn't) seen as a floating-point number

- `0`, `-0` are considered valid floating-point numbers, and return `true`.
- `1`, `-1` and other integers (or _"non-floating"_ values) return `false`.
- Special cases like `Infinity`, `-Infinity`, and `NaN` return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a floating-point number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat } from "@nick/is/float";

isFloat(0); // true
isFloat(1); // false
isFloat(1.0); // false
isFloat(1.1); // true
isFloat(1.00001e1); // true
```

## `isFloat16`

#### Signature

```ts ignore
function isFloat16<N = number>(it: N): it is Float16<N>;
```

Checks if a value is a 16-bit half-precision floating-point number, also known
as `float16` or `binary16`, as defined by the IEEE 754 standard.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a half-precision floating-point number. Otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat16 } from "@nick/is/float16";

isFloat16(1); // true
isFloat16(1.5); // true
isFloat16(3.140625); // true
isFloat16(NaN); // false
isFloat16(1.1); // false
isFloat16(Math.PI); // false
isFloat16(Infinity); // false
```

## `isFloat16`

#### Signature

```ts ignore
function isFloat16(it: unknown): it is Float16;
```

Checks if a value is a 16-bit half-precision floating-point number, also known
as `float16` or `binary16`, as defined by the IEEE 754 standard.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a half-precision floating-point number. Otherwise
`false`.

###### Category

`Numbers`

## `isFloat16`

#### Signature

```ts ignore
function isFloat16(it: any): it is Float16;
```

## `isFloat32`

#### Signature

```ts ignore
function isFloat32<N = number>(it: N): it is Float32<N>;
```

Checks if the value is a floating-point number. Supports single-precision
floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a single-precision floating-point number, otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat32 } from "@nick/is/float32";

isFloat32(1); // false
isFloat32(1.0); // false
isFloat32(1.1); // true
isFloat32(1.00001e1); // true
```

## `isFloat32`

#### Signature

```ts ignore
function isFloat32(it: unknown): it is Float32;
```

Checks if the value is a floating-point number. Supports single-precision
floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a single-precision floating-point number, otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat32 } from "@nick/is/float32";

isFloat32(1); // false
isFloat32(1.0); // false
isFloat32(1.1); // true
isFloat32(1.00001e1); // true
```

## `isFloat64`

#### Signature

```ts ignore
function isFloat64<N = number>(it: N): it is Float64<N>;
```

Checks if the value is a float64-precision floating-point number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a float64-precision floating-point number, `false`
otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat64 } from "jsr:@nick/is/float64";

console.log(isFloat64(1.5)); // true
console.log(isFloat64(0)); // false
console.log(isFloat64(1)); // false
console.log(isFloat64(-1)); // false
console.log(isFloat64(NaN)); // false
console.log(isFloat64(Infinity)); // false
```

## `isFloat64`

#### Signature

```ts ignore
function isFloat64(it: unknown): it is Float64;
```

Checks if the value is a float64-precision floating-point number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a float64-precision floating-point number, `false`
otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat64 } from "jsr:@nick/is/float64";

console.log(isFloat64(1.5)); // true
console.log(isFloat64(0)); // false
console.log(isFloat64(1)); // false
console.log(isFloat64(-1)); // false
console.log(isFloat64(NaN)); // false
console.log(isFloat64(Infinity)); // false
```

## `isInfinity`

#### Signature

```ts ignore
function isInfinity(it: unknown): it is Infinity;
```

Checks if a given value is a non-finite number (`Infinity` or `-Infinity`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInfinity } from "@nick/is/number/infinity";

console.log(isInfinity(Infinity)); // true
console.log(isInfinity(-Infinity)); // true
console.log(isInfinity(1)); // false
console.log(isInfinity(-1)); // false
console.log(isInfinity(NaN)); // false
```

## `isInt16`

#### Signature

```ts ignore
function isInt16<N = number>(it: unknown): it is Int16<N>;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/number";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `isInt16`

#### Signature

```ts ignore
function isInt16(it: unknown): it is Int16;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt16 } from "@nick/is/number";

isInt16(32768); // false
isInt16(-32769); // false
isInt16(1); // true
isInt16(32767); // true
isInt16(-32768); // true
```

## `isInt32`

#### Signature

```ts ignore
function isInt32<N = number>(it: N): it is Int32<N>;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `isInt32`

#### Signature

```ts ignore
function isInt32(it: unknown): it is Int32;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { isInt32 } from "jsr:@type/number/int32";

console.log(isInt32(0x7FFFFFFF)); // <- true
console.log(isInt32(-2147483649)); // <- false
```

## `isInt8`

#### Signature

```ts ignore
function isInt8<N = number>(it: N): it is Int8<N>;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

isInt8(1); // true
isInt8(1.0); // false
isInt8(1.1); // false
isInt8(1.00001e1); // false
```

## `isInt8`

#### Signature

```ts ignore
function isInt8(it: unknown): it is Int8;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

console.log(isInt8(1)); // true
console.log(isInt8(1.0)); // false
console.log(isInt8(1.1)); // false
console.log(isInt8(1.00001e1)); // false
```

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

## `isNaN`

#### Signature

```ts ignore
function isNaN<N = number>(it: N): it is NaN<N>;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `isNaN`

#### Signature

```ts ignore
function isNaN(it: unknown): it is NaN;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `isNegative`

#### Signature

```ts ignore
function isNegative<N = number>(it: N): it is Negative<N>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

## `isNegative`

#### Signature

```ts ignore
function isNegative(it: unknown): it is Negative<number>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

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

## `isNegativeFiniteNumber`

#### Signature

```ts ignore
function isNegativeFiniteNumber<N = number>(it: N): it is NegativeFinite<N>;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `isNegativeFiniteNumber`

#### Signature

```ts ignore
function isNegativeFiniteNumber(it: unknown): it is NegativeFinite;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `isNegativeInfinity`

#### Signature

```ts ignore
function isNegativeInfinity(it: unknown): it is NegativeInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `negative` `infinity`

#### Examples

```ts
import { isNegativeInfinity } from "@nick/is/number/infinity";

console.log(isNegativeInfinity(Infinity)); // false
console.log(isNegativeInfinity(-Infinity)); // true
console.log(isNegativeInfinity(1)); // false
console.log(isNegativeInfinity(-1)); // false
console.log(isNegativeInfinity(NaN)); // false
```

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

## `isNegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteInteger<N = number>(
  it: N,
): it is NegativeNonZeroFiniteInteger<N>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `isNegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteInteger(
  it: unknown,
): it is NegativeNonZeroFiniteInteger<number>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `isNegativeNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteNumber<N = number>(
  it: N,
): it is NegativeNonZeroFinite<N>;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `isNegativeNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNegativeNonZeroFiniteNumber(
  it: unknown,
): it is NegativeNonZeroFinite;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `isNegativeNonZeroInteger`

#### Signature

```ts ignore
function isNegativeNonZeroInteger<N = number>(
  it: N,
): it is NegativeNonZeroInteger<N>;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `isNegativeNonZeroInteger`

#### Signature

```ts ignore
function isNegativeNonZeroInteger(it: unknown): it is NegativeNonZeroInteger;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `isNegativeNonZeroNumber`

#### Signature

```ts ignore
function isNegativeNonZeroNumber<N = number>(it: N): it is NegativeNonZero<N>;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `isNegativeNonZeroNumber`

#### Signature

```ts ignore
function isNegativeNonZeroNumber(it: unknown): it is NegativeNonZero;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `isNegativeNumber`

#### Signature

```ts ignore
function isNegativeNumber<N = number>(it: N): it is Negative<N>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

## `isNegativeNumber`

#### Signature

```ts ignore
function isNegativeNumber(it: unknown): it is Negative<number>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

## `isNegativeZero`

#### Signature

```ts ignore
function isNegativeZero<N = number>(it: N): it is NegativeZero<N>;
```

Checks if a given value is negative zero, which is a special numeric value in
JavaScript, distinctly different from it's positive counterpart. Checking for
negative zero involves more than simply `x === -0`, as `-0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `-0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero } from "jsr:@nick/is/number";

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(1)); // false
```

## `isNegativeZero`

#### Signature

```ts ignore
function isNegativeZero(it: unknown): it is NegativeZero;
```

Checks if a given value is negative zero, which is a special numeric value in
JavaScript, distinctly different from it's positive counterpart. Checking for
negative zero involves more than simply `x === -0`, as `-0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `-0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero } from "jsr:@nick/is/number";

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(1)); // false
```

## `isNonZero`

#### Signature

```ts ignore
function isNonZero<N = number>(it: N): it is NonZero<N>;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `isNonZero`

#### Signature

```ts ignore
function isNonZero(it: unknown): it is NonZero;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `isNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNonZeroFiniteInteger<N = number>(
  it: N,
): it is NonZeroFiniteInteger<N>;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `isNonZeroFiniteInteger`

#### Signature

```ts ignore
function isNonZeroFiniteInteger(it: unknown): it is NonZeroFiniteInteger;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `isNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNonZeroFiniteNumber<N = number>(it: N): it is NonZeroFinite<N>;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

## `isNonZeroFiniteNumber`

#### Signature

```ts ignore
function isNonZeroFiniteNumber(it: unknown): it is NonZeroFinite;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

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

## `isNonZeroNumber`

#### Signature

```ts ignore
function isNonZeroNumber<N = number>(it: N): it is NonZero<N>;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `isNonZeroNumber`

#### Signature

```ts ignore
function isNonZeroNumber(it: unknown): it is NonZero;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `isNumber`

#### Signature

```ts ignore
function isNumber(it: unknown): it is number;
```

Checks if the given value is a number. This includes all numbers, without
distinguishing between `NaN`, `Infinity`, and other special values.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a number, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isNumber } from "jsr:@nick/is/number";

isNumber("123"); // false
isNumber(123); // true
```

```ts
import { isNumber } from "jsr:@nick/is/number";

const x: unknown = 123;
if (isNumber(x)) {
  console.log(x + 1);
  //          ^? const x: number
}
```

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

## `isOddNumber`

#### Signature

```ts ignore
function isOddNumber<T = Numeric>(it: T): it is Odd<T>;
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

## `isOddNumber`

#### Signature

```ts ignore
function isOddNumber(it: number | `${number}`): it is Odd<number>;
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

## `isOddNumber`

#### Signature

```ts ignore
function isOddNumber(it: bigint | `${bigint}`): it is Odd<bigint>;
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

## `isOddNumber`

#### Signature

```ts ignore
function isOddNumber(it: unknown): it is Odd;
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

## `isPositive`

#### Signature

```ts ignore
function isPositive<N = number>(it: N): it is Positive<N>;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `isPositive`

#### Signature

```ts ignore
function isPositive(it: unknown): it is Positive;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `isPositiveFiniteInteger`

#### Signature

```ts ignore
function isPositiveFiniteInteger<N = number>(
  it: N,
): it is PositiveFiniteInteger<N>;
```

Checks if a given value is a positive finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteInteger(0)); // false
console.log(isPositiveFiniteInteger(1)); // true
console.log(isPositiveFiniteInteger(-1)); // false
console.log(isPositiveFiniteInteger(1.5)); // false
console.log(isPositiveFiniteInteger(NaN)); // false
console.log(isPositiveFiniteInteger(Infinity)); // false
```

## `isPositiveFiniteInteger`

#### Signature

```ts ignore
function isPositiveFiniteInteger(it: unknown): it is PositiveFiniteInteger;
```

Checks if a given value is a positive finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteInteger(0)); // false
console.log(isPositiveFiniteInteger(1)); // true
console.log(isPositiveFiniteInteger(-1)); // false
console.log(isPositiveFiniteInteger(1.5)); // false
console.log(isPositiveFiniteInteger(NaN)); // false
console.log(isPositiveFiniteInteger(Infinity)); // false
```

## `isPositiveFiniteNumber`

#### Signature

```ts ignore
function isPositiveFiniteNumber<N = number>(it: N): it is PositiveFinite<N>;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `isPositiveFiniteNumber`

#### Signature

```ts ignore
function isPositiveFiniteNumber(it: unknown): it is PositiveFinite;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `isPositiveInfinity`

#### Signature

```ts ignore
function isPositiveInfinity(it: unknown): it is PositiveInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `positive` `infinity`

#### Examples

```ts
import { isPositiveInfinity } from "@nick/is/number/infinity";

console.log(isPositiveInfinity(Infinity)); // false
console.log(isPositiveInfinity(-Infinity)); // true
console.log(isPositiveInfinity(1)); // false
console.log(isPositiveInfinity(-1)); // false
console.log(isPositiveInfinity(NaN)); // false
```

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

## `isPositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteInteger<N = number>(
  it: N,
): it is PositiveNonZeroFiniteInteger<N>;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `isPositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteInteger(
  it: unknown,
): it is PositiveNonZeroFiniteInteger;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `isPositiveNonZeroFiniteNumber`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteNumber<N = number>(
  it: N,
): it is PositiveNonZeroFinite<N>;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `isPositiveNonZeroFiniteNumber`

#### Signature

```ts ignore
function isPositiveNonZeroFiniteNumber(
  it: unknown,
): it is PositiveNonZeroFinite;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `isPositiveNonZeroInteger`

#### Signature

```ts ignore
function isPositiveNonZeroInteger<N = number>(
  it: N,
): it is PositiveNonZeroInteger<N>;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `isPositiveNonZeroInteger`

#### Signature

```ts ignore
function isPositiveNonZeroInteger(it: unknown): it is PositiveNonZeroInteger;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber<N = number>(it: N): it is PositiveNonZero<N>;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `isPositiveNonZeroNumber`

#### Signature

```ts ignore
function isPositiveNonZeroNumber(it: unknown): it is PositiveNonZero;
```

## `isPositiveNumber`

#### Signature

```ts ignore
function isPositiveNumber<N = number>(it: N): it is Positive<N>;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `isPositiveNumber`

#### Signature

```ts ignore
function isPositiveNumber(it: unknown): it is Positive;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `isPositiveZero`

#### Signature

```ts ignore
function isPositiveZero<N = number>(it: N): it is PositiveZero<N>;
```

Checks if a given value is positive zero, which is a special numeric value in
JavaScript, distinctly different from it's negative counterpart. Checking for
positive zero involves more than simply `x === +0`, as `+0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `+0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero } from "jsr:@nick/is/number";

console.log(isPositiveZero(-0)); // false
console.log(isPositiveZero(0)); // true
console.log(isPositiveZero(-1)); // false
console.log(isPositiveZero(1)); // false
```

## `isPositiveZero`

#### Signature

```ts ignore
function isPositiveZero(it: unknown): it is PositiveZero;
```

Checks if a given value is positive zero, which is a special numeric value in
JavaScript, distinctly different from it's negative counterpart. Checking for
positive zero involves more than simply `x === +0`, as `+0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `+0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero } from "jsr:@nick/is/number";

console.log(isPositiveZero(-0)); // false
console.log(isPositiveZero(0)); // true
console.log(isPositiveZero(-1)); // false
console.log(isPositiveZero(1)); // false
```

## `isUint16`

#### Signature

```ts ignore
function isUint16<N = number>(it: N): it is Uint16<N>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

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

## `isUint16`

#### Signature

```ts ignore
function isUint16(it: unknown): it is Uint16<number>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

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

## `isUint32`

#### Signature

```ts ignore
function isUint32<N = number>(it: N): it is Uint32<N>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

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

## `isUint32`

#### Signature

```ts ignore
function isUint32(it: unknown): it is Uint32<number>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

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

## `isUint8`

#### Signature

```ts ignore
function isUint8<N = number>(it: N): it is Uint8<N>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `isUint8`

#### Signature

```ts ignore
function isUint8(it: unknown): it is Uint8<number>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `isZero`

#### Signature

```ts ignore
function isZero<N = number>(it: N): it is Zero<N>;
```

Checks if a given value is a zero number. This includes both positive and
negative zero. It also supports numbers and numeric strings.

- To check exclusively for `-0`, use
  [isNegativeZero](#isnegativezero "Jump to symbol: 'isNegativeZero'") instead.
- To check exclusively for `+0` (meaning zero, but **not** negative zero), use
  [isPositiveZero](#ispositivezero "Jump to symbol: 'isPositiveZero'") instead.

###### Category

`Numbers`

## `isZero`

#### Signature

```ts ignore
function isZero(it: unknown): it is Zero;
```

Checks if a given value is a zero number. This includes both positive and
negative zero. It also supports numbers and numeric strings.

- To check exclusively for `-0`, use
  [isNegativeZero](#isnegativezero "Jump to symbol: 'isNegativeZero'") instead.
- To check exclusively for `+0` (meaning zero, but **not** negative zero), use
  [isPositiveZero](#ispositivezero "Jump to symbol: 'isPositiveZero'") instead.

###### Category

`Numbers`

## `AnyRange`

#### Signature

```ts ignore
export type AnyRange<Min extends number = number, Max extends number = number> =
  | RangeInclusiveMin<Min, Max>
  | RangeInclusive<Min, Max>
  | RangeInclusiveMax<Min, Max>
  | RangeExclusive<Min, Max>;
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

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

## `Derange`

#### Signature

```ts ignore
export type Derange =
  | readonly [number, number, "[]"]
  | readonly [number, "[]"]
  | readonly [number, number, "[)"]
  | readonly [number, "[)"]
  | readonly [number, number, "(]"]
  | readonly [number, "(]"]
  | readonly [number, number, "()"]
  | readonly [number, "()"]
  | readonly [number, number, Exclusivity]
  | readonly [number, Exclusivity];
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

## `MaybeFloat`

#### Signature

```ts ignore
export type MaybeFloat<N = number> = Cast<N, MAYBE_FLOAT>;
```

Casts a value into a partial floating-point type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float` `number`

#### Examples

```ts
import { isFloat, type MaybeFloat } from "@nick/is/float";

let x = 1.5 as MaybeFloat, y = 0;

if (isFloat(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Float`)
```

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

## `MaybeNaN`

#### Signature

```ts ignore
export type MaybeNaN<N = number> = Cast<N, MAYBE_NAN>;
```

Casts a value into a partial `NaN` type. This is a more forgiving form of the
[`NaN`](#nan "Jump to symbol: 'NaN'") type, which allows for the assignment of
other numeric values, but still retains the ability to distinguish itself from
generic numbers. This is often called a "Flavored" type, whereas the stricter
[`NaN`](#nan "Jump to symbol: 'NaN'") is known as a "Branded" type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN, type MaybeNaN } from "jsr:@type/number";

let x = NaN as MaybeNaN, y = 0;

if (isNaN(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = NaN; // <- No error! (this is the main difference from `NaN`)
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

## `Numeric`

#### Signature

```ts ignore
export type Numeric = number | bigint | `${number | bigint}`;
```

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

## `Range`

#### Signature

```ts ignore
export type Range<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = never,
> = [Tex] extends [never] ?
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

## `RangeExclusive`

#### Signature

```ts ignore
export type RangeExclusive<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "()"] | readonly [Max, "()"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusive`

#### Signature

```ts ignore
export type RangeInclusive<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "[]"] | readonly [Max, "[]"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusiveMax`

#### Signature

```ts ignore
export type RangeInclusiveMax<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "(]"] | readonly [Max, "(]"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusiveMin`

#### Signature

```ts ignore
export type RangeInclusiveMin<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "[)"] | readonly [Max, "[)"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeUnknown`

#### Signature

```ts ignore
export type RangeUnknown<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> = readonly [Min, Max, Tex] | readonly [Max, Tex];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

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

## `IsInRange`

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

### Properties

#### RANGE

```ts
readonly RANGE: readonly [Min,Max,Tex];
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
