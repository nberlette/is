# @nick/is/type/unknown-or-never

## `IsUnknownOrNever`

#### Signature

```ts ignore
export type IsUnknownOrNever<A, True = true, False = false> = IsNever<
  A,
  True,
  IsUnknown<A, True, False>
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is `unknown` or is `never`, and nothing else.
Otherwise, it resolves to [`False`](#false "Jump to symbol: 'False'"). This is a
convenience type combining the
[IsUnknown](#isunknown "Jump to symbol: 'IsUnknown'") and
[IsNever](#isnever "Jump to symbol: 'IsNever'") guards into a single type.

##### Type Parameters

- **`A`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsUnknownOrNever } from "@nick/is/type";

type A = IsUnknownOrNever<unknown>; // true
type B = IsUnknownOrNever<never>; // true
type C = IsUnknownOrNever<any>; // false
type D = IsUnknownOrNever<string>; // false
```

## `OmitUnknownOrNever`

#### Signature

```ts ignore
export type OmitUnknownOrNever<U, Deep extends boolean = false> = U extends infer T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitUnknownOrNever<T[K], true> : T[K]
    } : IsUnknownOrNever<U, never, U>;
```

Omit properties from an object type where the value is `unknown` or `never`.
This relies on the
[`IsUnknownOrNever`](#isunknownornever "Jump to symbol: 'IsUnknownOrNever'")
utility type.

##### Type Parameters

- **`U`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitUnknownOrNever } from "@nick/is/type";

type A = { a: string; b: unknown; c: number };
type B = OmitUnknownOrNever<A>;
//   ^? type B = { a: string; c: number }
```
