# @nick/is/type/boolean

## `IsBoolean`

#### Signature

```ts ignore
export type IsBoolean<T, True = true, False = false> = [T] extends [boolean]
  ? [boolean] extends [T] ? True : False
  : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is the generic type
`boolean`, returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

This predicate is not satisfied by just `true` or `false`; the type must be a
union of both (`true | false`, which is what the `boolean` type actually
represents) to result in a positive match.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Categories

`Types` `Boolean`

#### Examples

```ts
import type { IsBoolean } from "@nick/is/type/boolean";

type A = IsBoolean<true>; // false
type B = IsBoolean<false>; // false
type C = IsBoolean<boolean | 0>; // false

type Y = IsBoolean<true | false>; // true
type Z = IsBoolean<boolean>; // true
```

## `IsFalse`

#### Signature

```ts ignore
export type IsFalse<T, True = true, False = false> = [T, false] extends
  [false, T] ? True : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is specifically `false`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Categories

`Types` `Boolean`

#### Examples

```ts
import type { IsFalse } from "@nick/is/type/boolean";

type A = IsFalse<true>; // false
type B = IsFalse<false>; // true
type C = IsFalse<boolean>; // false
```

## `IsTrue`

#### Signature

```ts ignore
export type IsTrue<T, True = true, False = false> = [T, true] extends [true, T]
  ? True
  : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is specifically `true`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Categories

`Types` `Boolean`

#### Examples

```ts
import type { IsTrue } from "@nick/is/type/boolean";

type A = IsTrue<true>; // true
type B = IsTrue<false>; // false
type C = IsTrue<boolean>; // false
```
