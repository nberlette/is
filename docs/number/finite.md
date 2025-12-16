# @nick/is/number/finite

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
