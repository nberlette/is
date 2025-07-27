# @nick/is/number/negative-zero

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
