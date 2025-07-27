# @nick/is/number/zero

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
