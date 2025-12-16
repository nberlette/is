# @nick/is/type/any

## `IsAny`

#### Signature

```ts ignore
export type IsAny<A, True = true, False = false> = IsBoolean<
  A extends never ? true : false,
  True,
  False
>;
```

Checks if the type [`A`](#a "Jump to symbol: 'A'") is the `any` type, and
nothing else. This is useful for creating your own type guards, conditional
types, and other utilities where you need to determine whether or not a specific
type or type parameter is the `any` type.

This type will resolve to [`True`](#true "Jump to symbol: 'True'") (default
`true`) if `A` is `any`. Otherwise, it resolves to the
[`False`](#false "Jump to symbol: 'False'") parameter (default `false`). This
allows you to create complex/nested conditional types with a minimal amount of
boilerplate.

##### Type Parameters

- **`A`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsAny } from "@nick/is/type";

type A = IsAny<any>; // true
type B = IsAny<unknown, "any", "not any">; // "not any"
```

```ts
import type { IsAny } from "@nick/is/type";

type IsNotAny<T> = IsAny<T, never, T>;

type A = IsNotAny<any>; // never
type B = IsNotAny<unknown>; // unknown
type C = IsNotAny<never>; // never
type D = IsNotAny<any[]>; // any[]
type E = IsNotAny<string>; // string
```

```ts
import type { IsAny } from "@nick/is/type";

type OmitAny<U, Deep extends boolean = false> = U extends
  infer T extends U & object ? {
    [K in keyof T as IsAny<T[K], never, K>]: Deep extends true
      ? OmitAny<T[K], true>
      : T[K];
  }
  : IsAny<U, never, U>;

declare const userData: OmitAny<{
  id: string;
  name: string;
  age: number;
  data: any; // <-- this will be omitted
}>;

userData;
// ^? const userData: { id: string; name: string; age: number }
```

## `OmitAny`

#### Signature

```ts ignore
export type OmitAny<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitAny<T[K], true> : T[K]
    } : T;
```

Omit properties from an object type where the value is `any`. This relies on the
[`IsAny`](#isany "Jump to symbol: 'IsAny'") utility type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitAny } from "@nick/is/type";

type A = { a: string; b: any; c: number };
type B = OmitAny<A>;
//   ^? type B = { a: string; c: number }
```
