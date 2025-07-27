# @nick/is/number/negative

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
