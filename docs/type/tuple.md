# @nick/is/type/tuple

## `IsTuple`

#### Signature

```ts ignore
export type IsTuple<T, True = true, False = false> = T extends
  readonly [] | readonly [unknown, ...unknown[]] ? True : False;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is a tuple, which is an array with a
pre-determined length and type for each of its elements. This check **does not**
resolve to [`True`](#true "Jump to symbol: 'True'") for arrays such as
`string[]` or `Array<number>` (since they are not tuples), but **does** for
`[1, 2, 3]`. Any other type of value will resolve to
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
import type { IsTuple } from "@nick/is/type";

type A = IsTuple<[1, 2, 3]>; // true
type B = IsTuple<string[]>; // false
type C = IsTuple<Array<number>>; // false
```

```ts
import type { IsTuple } from "@nick/is/type";

// using the conditional type parameters in a custom type
type EnsureTuple<T> = IsTuple<T, T, never>;

type A = EnsureTuple<[1, 2, 3]>; // [1, 2, 3]
type B = EnsureTuple<readonly []>; // readonly []
type C = EnsureTuple<string[]>; // never
type D = EnsureTuple<Array<number>>; // never
```
