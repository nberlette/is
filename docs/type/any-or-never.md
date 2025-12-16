# @nick/is/type/any-or-never

## `IsAnyOrNever`

#### Signature

```ts ignore
export type IsAnyOrNever<T, True = true, False = false> = IsNever<
  T,
  True,
  IsAny<T, True, False>
>;
```

Check if the type [`T`](#t "Jump to symbol: 'T'") is either `any` or `never`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

This type guard is useful when you need to check if a value can be of any type
_or_ if it is unreachable. If you only need to check if a type is `any`, use the
[`IsAny`](#isany "Jump to symbol: 'IsAny'") type guard instead.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsAnyOrNever } from "@nick/is/type/any-or-never";

type A = IsAnyOrNever<never>; // true
type B = IsAnyOrNever<any>; // true
type C = IsAnyOrNever<unknown>; // false
```

## `OmitAnyOrNever`

#### Signature

```ts ignore
export type OmitAnyOrNever<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitAnyOrNever<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `any` or `never`. This
relies on the [`IsAnyOrNever`](#isanyornever "Jump to symbol: 'IsAnyOrNever'")
utility type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitAnyOrNever } from "@nick/is/type";

type A = { a: string; b: any; c: number; d: never };
type B = OmitAnyOrNever<A>;
//   ^? type B = { a: string; c: number }
```
