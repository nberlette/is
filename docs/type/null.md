# @nick/is/type/null

## `IsNull`

#### Signature

```ts ignore
export type IsNull<T, True = true, False = false> = [T] extends [never] ? False
  : [T] extends [null] ? True
  : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is specifically `null`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsNull } from "@nick/is/type";

type A = IsNull<null>; // true
type B = IsNull<undefined>; // false
type C = IsNull<never>; // false
```

## `OmitNull`

#### Signature

```ts ignore
export type OmitNull<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitNull<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `null`. This relies on
the [`IsNever`](#isnever "Jump to symbol: 'IsNever'") utility type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitNull } from "@nick/is/type";

type A = { a: string; b: null; c: number };
type B = OmitNull<A>;
//   ^? type B = { a: string; c: number }
```
