# @nick/is/falsy

## `isFalsy`

#### Signature

```ts ignore
function isFalsy(it: unknown): it is Falsy;
```

Check if the given value is falsy.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is falsy, `false` otherwise.

#### Examples

```ts
import { isFalsy } from "@nick/is/falsy";

isFalsy(null); // true
isFalsy(undefined); // true
isFalsy(0); // true
isFalsy(""); // true
isFalsy(false); // true
isFalsy([]); // false
```

## `Falsy`

#### Signature

```ts ignore
export type Falsy = null | undefined | void | false | 0 | 0n | "" | NaN;
```

A type that represents all falsy values.

###### Category

`Primitives`

## `IsFalsy`

#### Signature

```ts ignore
export type IsFalsy<T, True = true, False = false> = [T] extends [never] ? False
  : [Exclude<T, Falsy>] extends [never] ? True
  : False;
```

If type [`T`](#t "Jump to symbol: 'T'") is falsy, returns
[`True`](#true "Jump to symbol: 'True'") (default: true), otherwise returns
[`False`](#false "Jump to symbol: 'False'") (default: false).

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

#### Signature

```ts ignore
type X = IsFalsy<null>; // true
type Y = IsFalsy<"">; // true
type Z = IsFalsy<0>; // true
type A = IsFalsy<false>; // true
type B = IsFalsy<[]>; // false
```
