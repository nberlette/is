# @nick/is/type/literal

## `IsLiteral`

#### Signature

```ts ignore
export type IsLiteral<T, True = true, False = false> = [T] extends [never]
  ? False
  : [T] extends [null] ? True
  : [T] extends [undefined] ? True
  : [T] extends [boolean] ? IsBoolean<T, False, True>
  : [T] extends [number] ? number extends T ? False : True
  : [T] extends [string] ? string extends T ? False : True
  : [T] extends [bigint] ? bigint extends T ? False : True
  : [T] extends [symbol] ? symbol extends T ? False : True
  : [T] extends [Record<PropertyKey, any>]
    ? Record<PropertyKey, any> extends T ? False : True
  : T extends readonly [] | readonly [any, ...readonly any[]]
    ? number extends T["length"] ? False : True
  : [T] extends [object] ? object extends T ? False : True
  : False;
```

If the given type [`T`](#t "Jump to symbol: 'T'") is a literal value (meaning a
string, number, boolean, bigint, symbol, object literal, or a tuple), this type
will resolve to the [`True`](#true "Jump to symbol: 'True'") type parameter,
which has a default value of `true`. Otherwise it resolves to the
[`False`](#false "Jump to symbol: 'False'") type parameter, which has a default
value of `false`.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsLiteral } from "@nick/is/type";

type A1 = IsLiteral<"foo">; // true
type A2 = IsLiteral<string | 420>; // false
```
