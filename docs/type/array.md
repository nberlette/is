# @nick/is/type/array

## `IsArray`

#### Signature

```ts ignore
export type IsArray<T, True = true, False = false> = IsAnyOrUnknownOrNever<
  T,
  False,
  T extends readonly unknown[] ? True : False
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is an array, which is a list of variable length
with values that can be of any type. This check **does** include tuples like
`[1, 2, 3]`, standard arrays like `string[]`, and also generic arrays like
`Array<number>` in what it considers valid. Any other type resolves to
[`False`](#false "Jump to symbol: 'False'").

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsArray } from "@nick/is/type";

type A = IsArray<[1, 2, 3]>; // true
type B = IsArray<[unknown, unkown, unknown, unknown, unknown]>; // true
type C = IsArray<string[]>; // true
type D = IsArray<Array<number>>; // true
type E = IsArray<ReadonlyArray<string>>; // true
type F = IsArray<readonly (string | number)[]>; // true

type G = IsArray<string>; // false
type H = IsArray<string[] | number>; // false
```

## `IsNonTupleArray`

#### Signature

```ts ignore
export type IsNonTupleArray<T, True = true, False = false> = IsArray<
  T,
  IsTuple<T, False, True>,
  False
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is an array, but **not** a tuple. This check
includes standard arrays like `string[]` and generic arrays like
`Array<number>`, but **excludes** tuples like `[1, 2, 3]`.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsNonTupleArray } from "@nick/is/type";

type A = IsNonTupleArray<[1, 2, 3]>; // false
type B = IsNonTupleArray<[unknown, unkown, unknown]>; // false
type C = IsNonTupleArray<string[]>; // true
type D = IsNonTupleArray<Array<number>>; // true
```
