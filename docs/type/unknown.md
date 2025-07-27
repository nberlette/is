# @nick/is/type/unknown

## `IsUnknown`

#### Signature

```ts ignore
export type IsUnknown<A, True = true, False = false> = IsAny<
  A,
  False,
  unknowns extends A ? True : False
>;
```

Checks if a given type is the `unknown` type, resolving to
[`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not. The `unknown` type is the
"safer" alternative to `any` in TypeScript, introduced in the TypeScript 3.0
release (July 2018). It is a "bottom" type, meaning it is assignable to _any_
other type, but not vice versa. This makes it a safer choice for use in type
definitions where you want to allow for any type, but still

##### Type Parameters

- **`A`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsUnknown } from "@nick/is/type";

type A = IsUnknown<unknown>; // true
type B = IsUnknown<any, "unknown", "not unknown">; // "not unknown"
```

```ts
import type { IsUnknown } from "@nick/is/type";

type IsNotUnknown<T> = IsUnknown<T, never, T>;

type A = IsNotUnknown<unknown>; // never
type B = IsNotUnknown<any>; // any
type C = IsNotUnknown<never>; // never
type D = IsNotUnknown<unknown[]>; // unknown[]
type E = IsNotUnknown<string>; // string
```

```ts
import type { IsUnknown } from "@nick/is/type";

type OmitUnknown<U, Deep extends boolean = false> = U extends
  infer T extends object ? {
    [K in keyof T as IsUnknown<T[K], never, K>]: Deep extends true
      ? OmitUnknown<T[K], true>
      : T[K];
  }
  : IsUnknown<U, never, U>;

declare const userData: OmitUnknown<{
  id: string;
  name: string;
  age: number;
  data: unknown; // <-- this will be omitted
}>;
userData;
// ^? const userData: { id: string; name: string; age: number }
```

## `OmitUnknown`

#### Signature

```ts ignore
export type OmitUnknown<U, Deep extends boolean = false> = U extends infer T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitUnknown<T[K], true> : T[K]
    } : IsUnknown<U, never, U>;
```

Omit properties from an object type where the value is `unknown`.

This relies on the [`IsUnknown`](#isunknown "Jump to symbol: 'IsUnknown'")
utility type.

##### Type Parameters

- **`U`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitUnknown } from "@nick/is/type";

type A = { a: string; b: unknown; c: number };
type B = OmitUnknown<A>;
//   ^? type B = { a: string; c: number }
```

## `unknown`

#### Signature

```ts ignore
export type unknown =
  | {}
  | null
  | undefined;
```

This is an alias for the built-in `unknown` type in TypeScript. It is used by
the [`IsUnknown`](#isunknown "Jump to symbol: 'IsUnknown'") type guard, and
represents any value that is not `null` or `undefined`.

This is provided as a public export for users who want to use it in their own
type definitions but without relying on built-in `unknown` types; it's also
provided for users who are using an older version of TypeScript that does not
support `unknown` yet.

###### Category

`Types`

## `unknowns`

#### Signature

```ts ignore
export type unknowns =
  | {}
  | null
  | undefined;
```

This is an alias for the built-in `unknown` type in TypeScript. It is used by
the [`IsUnknown`](#isunknown "Jump to symbol: 'IsUnknown'") type guard, and
represents any value that is not `null` or `undefined`.

This is provided as a public export for users who want to use it in their own
type definitions but without relying on built-in `unknown` types; it's also
provided for users who are using an older version of TypeScript that does not
support `unknown` yet.

###### Category

`Types`
