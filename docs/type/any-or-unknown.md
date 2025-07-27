# @nick/is/type/any-or-unknown

## `IsAnyOrUnknownOrNever`

#### Signature

```ts ignore
export type IsAnyOrUnknownOrNever<T, True = true, False = false> = IsAny<
  T,
  True,
  IsUnknownOrNever<T, True, False>
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if `A` is `any`, `unknown`,
or `never`. Otherwise, it resolves to
[`False`](#false "Jump to symbol: 'False'").

This composite type combines [`IsAny`](#isany "Jump to symbol: 'IsAny'"),
[`IsNever`](#isnever "Jump to symbol: 'IsNever'"), and
[`IsUnknown`](#isunknown "Jump to symbol: 'IsUnknown'") into a single type-level
predicate. It's useful when creating your own custom type-level predicates, as
its usually a good idea to first check the input type is **not** `any`,
`unknown`, or `never` before moving on to the assignability of the type you're
actually interested in.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

#### Examples

```ts
import type { IsAnyOrUnknownOrNever } from "@nick/is/type";

type A = IsAnyOrUnknownOrNever<unknown>; // true
type B = IsAnyOrUnknownOrNever<never>; // true
type C = IsAnyOrUnknownOrNever<any>; // true

type D = IsAnyOrUnknownOrNever<true>; // false
type E = IsAnyOrUnknownOrNever<"hello">; // false
type F = IsAnyOrUnknownOrNever<1>; // false
```

## `OmitAnyUnknownNever`

#### Signature

```ts ignore
export type OmitAnyUnknownNever<U, Deep extends boolean = false> = U extends infer T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitAnyUnknownNever<T[K], true> : T[K]
    } : IsAnyOrUnknownOrNever<U, never, U>;
```

Omit properties from an object type where the value is `any`, `unknown`, or
`never`. This relies on the
[`IsAnyOrUnknownOrNever`](#isanyorunknownornever "Jump to symbol: 'IsAnyOrUnknownOrNever'")
utility type.

##### Type Parameters

- **`U`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitAnyUnknownNever } from "@nick/is/type";

type A = { a: string; b: any; c: number; d: unknown; e: ""; f: never };
type B = OmitAnyUnknownNever<A>;
//   ^? type B = { a: string; c: number; e: "" }
```
