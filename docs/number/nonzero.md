# @nick/is/number/nonzero

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
