# @nick/is/number/positive-zero

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
