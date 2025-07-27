# @nick/is/type/undefined

## `IsUndefined`

#### Signature

```ts ignore
export type IsUndefined<T, True = true, False = false> = [T] extends [never]
  ? False
  : [T] extends [undefined] ? [void] extends [T] ? False : True
  : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is specifically `undefined`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not. This does not recognize
`void` as `undefined`.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsUndefined } from "@nick/is/type";

type A = IsUndefined<undefined>; // true
type B = IsUndefined<null>; // false
type C = IsUndefined<never>; // false
type D = IsUndefined<void>; // false
```

## `OmitUndefined`

#### Signature

```ts ignore
export type OmitUndefined<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitUndefined<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `undefined`. This relies
on the [`IsNever`](#isnever "Jump to symbol: 'IsNever'") utility type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitUndefined } from "@nick/is/type";

type A = { a: string; b: undefined; c: number };
type B = OmitUndefined<A>;
//   ^? type B = { a: string; c: number }
```
