# @nick/is/type/exact

## `IsExact`

#### Signature

```ts ignore
export type IsExact<T, U, True = true, False = false> = Matches<
  Eq<Prep<T>>,
  Eq<Prep<U>>,
  True,
  False
>;
```

Type-level predicate to check if [`T`](#t "Jump to symbol: 'T'") and
[`U`](#u "Jump to symbol: 'U'") are exactly the same type in terms of their
structural assignability. If the types are an exact match, it will resolve to
[`True`](#true "Jump to symbol: 'True'") (default: true). If not, it will
resolve to [`False`](#false "Jump to symbol: 'False'") (default: false).

You can override the `True` and `False` type parameters to customize the
behavior of this type predicate, and effectively create a type-level ternery
operation. Be mindful that while you _can_ create nested conditional type checks
with this, it is usually not recommended to do so (for the same reasons why it's
discouraged to do so with a runtime ternary operator).

This is a strict comparison that leverages TypeScript's internal semantics
surrounding type variance and assignability, and is not just a simple
`T
extends U` check.

##### Type Parameters

- **`T`**
- **`U`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

#### Examples

```ts
import type { IsExact } from "@nick/is/type/exact";

type A = IsExact<"hello", "hello">; // true
type B = IsExact<{ a: string | null }, { a: string | null }>; // true
type C = IsExact<any, any>; // true
type D = IsExact<never, never>; // true

type E = IsExact<any, unknown>; // false
type F = IsExact<never, any>; // false
type G = IsExact<{ a: string | null }, { a: string }>; // false
type H = IsExact<{ a: string | null }, { a: string | undefined }>; // false
type I = IsExact<{ a: string; b?: number }, { a: string; b: number }>; // false
type J = IsExact<{ a: void }, { a: undefined }>; // false
type K = T.IsExact<{ a: boolean }, { a: any }>; // false
```
