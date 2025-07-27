# @nick/is/type/omit

## `OmitAny`

#### Signature

```ts ignore
export type OmitAny<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitAny<T[K], true> : T[K]
    } : T;
```

Omit properties from an object type where the value is `any`.

This relies on the [`IsAny`](#isany "Jump to symbol: 'IsAny'") utility type.

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

## `OmitAnyOrNever`

#### Signature

```ts ignore
export type OmitAnyOrNever<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitAnyOrNever<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `any` or `never`.

This relies on the
[`IsAnyOrNever`](#isanyornever "Jump to symbol: 'IsAnyOrNever'") utility type.

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

## `OmitIndexSignature`

#### Signature

```ts ignore
export type OmitIndexSignature<T> = {
     [K in [object Object]]: T[K]
  };
```

Omit generic index signatures from an object type. This is useful for filtering
out index signatures that are too broad, allowing you to clean up a type so it
only contains literal properties.

This relies on the
[`IsIndexSignature`](#isindexsignature "Jump to symbol: 'IsIndexSignature'")
utility type.

##### Type Parameters

- **`T`**

---

#### Examples

```ts
import type { OmitIndexSignature } from "@nick/is/type";

type A = { 0: "foo"; length: 1; [y: number]: string };
type B = OmitIndexSignature<A>;
//   ^? type B = { 0: "foo"; length: 1 }
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
import type { OmitNever } from "@nick/is/type";

type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
//   ^? type A = { a: string; b: never; c: number }

type B = OmitNever<A>;
//   ^? type B = { a: string; c: number }
```

## `OmitNullable`

#### Signature

```ts ignore
export type OmitNullable<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitNullable<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type whose value is `null` or `undefined`.

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
import type { OmitNullable } from "@nick/is/type";

type A = { a: string; b: null; c: number; d: undefined };
type B = OmitNullable<A>;
//   ^? type B = { a: string; c: number }
```

## `OmitUndefined`

#### Signature

```ts ignore
export type OmitUndefined<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitUndefined<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type whose value is `undefined`.

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
import type { OmitUndefined } from "@nick/is/type";

type A = { a: string; b: undefined; c: number };
type B = OmitUndefined<A>;
//   ^? type B = { a: string; c: number }
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
