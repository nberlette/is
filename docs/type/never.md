# @nick/is/type/never

## `IsNever`

#### Signature

```ts ignore
export type IsNever<T, True = true, False = false> = [T] extends [never] ? True
  : False;
```

Check if the type [`T`](#t "Jump to symbol: 'T'") is specifically `never`,
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
import type { IsNever } from "@nick/is/type/never";

type A = IsNever<never>; // true
type B = IsNever<never, "never", "not never">; // "never"
```

## `OmitNever`

#### Signature

```ts ignore
export type OmitNever<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitNever<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `never`.

This relies on the [`IsNever`](#isnever "Jump to symbol: 'IsNever'") utility
type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitNever } from "@nick/is/type/never";

type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
//   ^? type A = { a: string; b: never; c: number }

type B = OmitNever<A>;
//   ^? type B = { a: string; c: number }
```
