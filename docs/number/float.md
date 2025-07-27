# @nick/is/number/float

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
