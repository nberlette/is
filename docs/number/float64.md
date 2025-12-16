# @nick/is/number/float64

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
