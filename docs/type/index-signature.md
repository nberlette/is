# @nick/is/type/index-signature

## `IsIndexSignature`

#### Signature

```ts ignore
export type IsIndexSignature<K, True = true, False = false> = K extends
  PropertyKey ? {} extends Record<K, any> ? True : False : False;
```

If [`K`](#k "Jump to symbol: 'K'") is a valid index signature of an
object-literal type, this resolves to [`True`](#true "Jump to symbol: 'True'").
Otherwise, it resolves to [`False`](#false "Jump to symbol: 'False'").

Index signatures are not like literal keys of an object. They do share the same
supertypes (either a string, symbol, or number), but instead of them specifying
a single property's key on the object, they define _ranges_ of keys that an
object can accept, based on their type.

Visually, they are surrounded with square brackets, similar to computed
properties. Inside of the square brackets, the index signature's label and type
are defined.

##### Type Parameters

- **`K`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

#### Signature

```ts ignore
type ArrayLike<T> = {
  readonly length: number; // <- standard property
  [index: number]: T | undefined; // <- index signature
};

// using `IsIndexSignature` to filter out index signatures
type WithoutIndexSignature<T> = {
  [K in keyof T as IsIndexSignature<K, never, K>]: T[K];
};

type IsolateIndexSignature<T> = {
  [K in keyof T as IsIndexSignature<K, K, never>]: T[K];
};

type A = WithoutIndexSignature<ArrayLike<string>>;
//   ^? type A = { readonly length: number }

type B = IsolateIndexSignature<ArrayLike<string>>;
//   ^? type B = { readonly [index: number]: string | undefined }
```

This type is often used for mostly cosmetic purposes, as index signatures tend
to make a type look less clean; however, it also serves a practical purpose,
allowing you to make a type more specific and restrict the keys that can be used
with it to only those that are explicitly defined.

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

###### Category

`Types`

#### Examples

```ts
import type { OmitIndexSignature } from "@nick/is/type";

type A = { 0: "foo"; length: 1; [y: number]: string };
type B = OmitIndexSignature<A>;
//   ^? type B = { 0: "foo"; length: 1 }
```
