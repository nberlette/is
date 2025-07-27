# @nick/is/number/positive

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
