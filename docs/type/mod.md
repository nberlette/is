# @nick/is/type/mod

## `expectType`

#### Signature

```ts ignore
function expectType<T>(value: T): void;
```

A no-op function that is used for explicit type checking in TypeScript.

This function is a generic function that takes a single type parameter `T` and a
single argument of type `T`. The function does not perform any operations at
runtime, but it is used to check that the type of the argument passed to it is a
match for type `T`. This is useful for testing purposes.

##### Parameters

| Name        | Info                             |
| :---------- | :------------------------------- |
| **`value`** | THe value to assert the type of. |

##### Returns

Nothing.

###### Category

`Testing`

#### Examples

```ts
import { expectType } from "@nick/is/type/expect";

let result: string | number = "hello world".toString();

// This will raise a type error if `result` is not a `string`
expectType<string>(result);

const literal = "hello world";

// This will raise a type error if `literal` is not a string literal
expectType<"hello world">(literal);
```

## `Assertion`

#### Signature

```ts ignore
export type Assertion<
  Type extends Base = any,
  Base = unknown,
  Args extends readonly unknown[] = readonly any[],
> = Expand<(it: Base, ...args: Args) => asserts it is Type>;
```

Represents an assertion function that checks if a given value of the base type
`Base` is also of the derived type `Type`. If the value is not of the derived
type, it will throw an error.

##### Type Parameters

- **`Type`** extends `Base` (default: `any`)
- **`Base`** (default: `unknown`)
- **`Args`** extends `readonly unknown[]` (default: `readonly any[]`)

---

#### Examples

```ts
const assertString: Assertion<string> = (it: unknown): asserts it is string => {
  if (typeof it !== "string") {
    throw new TypeError("Expected a string");
  }
};
```

## `ExpectType`

#### Signature

```ts ignore
export type ExpectType<TExpected, TActual extends TExpected> = TActual;
```

Type-level equivalent to the
[`expectType`](#expecttype "Jump to symbol: 'expectType'") function.

This type alias accepts 2 type parameters: `TExpected` and `TActual`. If the
type of `TActual` is not assignable to `TExpected`, it will raise a compiler
error indicating as much. This is useful for testing purposes.

##### Type Parameters

- **`TExpected`**
- **`TActual`** extends `TExpected`

---

###### Category

`Types`

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

## `IsAnyOrNever`

#### Signature

```ts ignore
export type IsAnyOrNever<T, True = true, False = false> = IsNever<
  T,
  True,
  IsAny<T, True, False>
>;
```

Check if the type [`T`](#t "Jump to symbol: 'T'") is either `any` or `never`,
returning [`True`](#true "Jump to symbol: 'True'") if it is, and
[`False`](#false "Jump to symbol: 'False'") if not.

This type guard is useful when you need to check if a value can be of any type
_or_ if it is unreachable. If you only need to check if a type is `any`, use the
[`IsAny`](#isany "Jump to symbol: 'IsAny'") type guard instead.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsAnyOrNever } from "@nick/is/type/any-or-never";

type A = IsAnyOrNever<never>; // true
type B = IsAnyOrNever<any>; // true
type C = IsAnyOrNever<unknown>; // false
```

## `IsAnyOrUnknownOrNever`

#### Signature

```ts ignore
export type IsAnyOrUnknownOrNever<T, True = true, False = false> = IsAny<
  T,
  True,
  IsUnknownOrNever<T, True, False>
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if `A` is `any`, `unknown`,
or `never`. Otherwise, it resolves to
[`False`](#false "Jump to symbol: 'False'").

This composite type combines [`IsAny`](#isany "Jump to symbol: 'IsAny'"),
[`IsNever`](#isnever "Jump to symbol: 'IsNever'"), and
[`IsUnknown`](#isunknown "Jump to symbol: 'IsUnknown'") into a single type-level
predicate. It's useful when creating your own custom type-level predicates, as
its usually a good idea to first check the input type is **not** `any`,
`unknown`, or `never` before moving on to the assignability of the type you're
actually interested in.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

#### Examples

```ts
import type { IsAnyOrUnknownOrNever } from "@nick/is/type";

type A = IsAnyOrUnknownOrNever<unknown>; // true
type B = IsAnyOrUnknownOrNever<never>; // true
type C = IsAnyOrUnknownOrNever<any>; // true

type D = IsAnyOrUnknownOrNever<true>; // false
type E = IsAnyOrUnknownOrNever<"hello">; // false
type F = IsAnyOrUnknownOrNever<1>; // false
```

## `IsArray`

#### Signature

```ts ignore
export type IsArray<T, True = true, False = false> = IsAnyOrUnknownOrNever<
  T,
  False,
  T extends readonly unknown[] ? True : False
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is an array, which is a list of variable length
with values that can be of any type. This check **does** include tuples like
`[1, 2, 3]`, standard arrays like `string[]`, and also generic arrays like
`Array<number>` in what it considers valid. Any other type resolves to
[`False`](#false "Jump to symbol: 'False'").

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsArray } from "@nick/is/type";

type A = IsArray<[1, 2, 3]>; // true
type B = IsArray<[unknown, unkown, unknown, unknown, unknown]>; // true
type C = IsArray<string[]>; // true
type D = IsArray<Array<number>>; // true
type E = IsArray<ReadonlyArray<string>>; // true
type F = IsArray<readonly (string | number)[]>; // true

type G = IsArray<string>; // false
type H = IsArray<string[] | number>; // false
```

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

## `IsNonTupleArray`

#### Signature

```ts ignore
export type IsNonTupleArray<T, True = true, False = false> = IsArray<
  T,
  IsTuple<T, False, True>,
  False
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is an array, but **not** a tuple. This check
includes standard arrays like `string[]` and generic arrays like
`Array<number>`, but **excludes** tuples like `[1, 2, 3]`.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsNonTupleArray } from "@nick/is/type";

type A = IsNonTupleArray<[1, 2, 3]>; // false
type B = IsNonTupleArray<[unknown, unkown, unknown]>; // false
type C = IsNonTupleArray<string[]>; // true
type D = IsNonTupleArray<Array<number>>; // true
```

## `IsNull`

#### Signature

```ts ignore
export type IsNull<T, True = true, False = false> = [T] extends [never] ? False
  : [T] extends [null] ? True
  : False;
```

Checks if the type [`T`](#t "Jump to symbol: 'T'") is specifically `null`,
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
import type { IsNull } from "@nick/is/type";

type A = IsNull<null>; // true
type B = IsNull<undefined>; // false
type C = IsNull<never>; // false
```

## `IsNumeric`

#### Signature

```ts ignore
export type IsNumeric<T, True = true, False = false> = T extends number | bigint
  ? True
  : T extends `${number}` | `${bigint}` ? True
  : T extends `${number}${string}` ? True
  : False;
```

If the given string [`T`](#t "Jump to symbol: 'T'") is numeric (meaning a
literal number like `0`, a literal bigint like `0n`, the generic types `number`
or `bigint`, or generic numeric string like `${number}` or `${bigint}`), this
type resolves to the [`True`](#true "Jump to symbol: 'True'") type parameter
(defaults: `true`). Everything else will resolve to the
[`False`](#false "Jump to symbol: 'False'") parameter (default: `false`).

Similar to the other utility types in this module, the parameterization of this
type's conditional `true` and `false` branches allows for both simple inline
conditional type checks as well as more complex nested conditionals, without the
need for any `x extends y ? a : b` ternaries.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
// simplified tuple traversal
declare function map<const A extends readonly unknown[], const B>(
  array: [...A],
  fn: (input: A[number], index: number) => B,
): [...{ [K in keyof A]: IsNumeric<K, B, A[K]> }];

const result = map([1, 2, 3], (x) => x * 2);
//     ^? const result: [number, number, number]
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

## `IsTuple`

#### Signature

```ts ignore
export type IsTuple<T, True = true, False = false> = T extends
  readonly [] | readonly [unknown, ...unknown[]] ? True : False;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is a tuple, which is an array with a
pre-determined length and type for each of its elements. This check **does not**
resolve to [`True`](#true "Jump to symbol: 'True'") for arrays such as
`string[]` or `Array<number>` (since they are not tuples), but **does** for
`[1, 2, 3]`. Any other type of value will resolve to
[`False`](#false "Jump to symbol: 'False'").

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsTuple } from "@nick/is/type";

type A = IsTuple<[1, 2, 3]>; // true
type B = IsTuple<string[]>; // false
type C = IsTuple<Array<number>>; // false
```

```ts
import type { IsTuple } from "@nick/is/type";

// using the conditional type parameters in a custom type
type EnsureTuple<T> = IsTuple<T, T, never>;

type A = EnsureTuple<[1, 2, 3]>; // [1, 2, 3]
type B = EnsureTuple<readonly []>; // readonly []
type C = EnsureTuple<string[]>; // never
type D = EnsureTuple<Array<number>>; // never
```

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

## `IsUnknownOrNever`

#### Signature

```ts ignore
export type IsUnknownOrNever<A, True = true, False = false> = IsNever<
  A,
  True,
  IsUnknown<A, True, False>
>;
```

Resolves to [`True`](#true "Jump to symbol: 'True'") if
[`A`](#a "Jump to symbol: 'A'") is `unknown` or is `never`, and nothing else.
Otherwise, it resolves to [`False`](#false "Jump to symbol: 'False'"). This is a
convenience type combining the
[IsUnknown](#isunknown "Jump to symbol: 'IsUnknown'") and
[IsNever](#isnever "Jump to symbol: 'IsNever'") guards into a single type.

##### Type Parameters

- **`A`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { IsUnknownOrNever } from "@nick/is/type";

type A = IsUnknownOrNever<unknown>; // true
type B = IsUnknownOrNever<never>; // true
type C = IsUnknownOrNever<any>; // false
type D = IsUnknownOrNever<string>; // false
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

## `OmitAnyOrNever`

#### Signature

```ts ignore
export type OmitAnyOrNever<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitAnyOrNever<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `any` or `never`. This
relies on the [`IsAnyOrNever`](#isanyornever "Jump to symbol: 'IsAnyOrNever'")
utility type.

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

## `OmitAnyUnknownNever`

#### Signature

```ts ignore
export type OmitAnyUnknownNever<U, Deep extends boolean = false> = U extends infer T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitAnyUnknownNever<T[K], true> : T[K]
    } : IsAnyOrUnknownOrNever<U, never, U>;
```

Omit properties from an object type where the value is `any`, `unknown`, or
`never`. This relies on the
[`IsAnyOrUnknownOrNever`](#isanyorunknownornever "Jump to symbol: 'IsAnyOrUnknownOrNever'")
utility type.

##### Type Parameters

- **`U`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitAnyUnknownNever } from "@nick/is/type";

type A = { a: string; b: any; c: number; d: unknown; e: ""; f: never };
type B = OmitAnyUnknownNever<A>;
//   ^? type B = { a: string; c: number; e: "" }
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

###### Category

`Types`

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
import type { OmitNever } from "@nick/is/type/never";

type A = Required<{ a: string; b: number } & { b: bigint; c: number }>;
//   ^? type A = { a: string; b: never; c: number }

type B = OmitNever<A>;
//   ^? type B = { a: string; c: number }
```

## `OmitNull`

#### Signature

```ts ignore
export type OmitNull<T, Deep extends boolean = false> = T extends object ? {
         [K in [object Object]]: Deep extends true ? OmitNull<T[K], Deep> : T[K]
    } : T;
```

Omit properties from an object type where the value is `null`. This relies on
the [`IsNever`](#isnever "Jump to symbol: 'IsNever'") utility type.

##### Type Parameters

- **`T`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitNull } from "@nick/is/type";

type A = { a: string; b: null; c: number };
type B = OmitNull<A>;
//   ^? type B = { a: string; c: number }
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

## `OmitUnknownOrNever`

#### Signature

```ts ignore
export type OmitUnknownOrNever<U, Deep extends boolean = false> = U extends infer T extends object ? {
         [K in [object Object]]:
      Deep extends true ? OmitUnknownOrNever<T[K], true> : T[K]
    } : IsUnknownOrNever<U, never, U>;
```

Omit properties from an object type where the value is `unknown` or `never`.
This relies on the
[`IsUnknownOrNever`](#isunknownornever "Jump to symbol: 'IsUnknownOrNever'")
utility type.

##### Type Parameters

- **`U`**
- **`Deep`** extends `boolean` (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
import type { OmitUnknownOrNever } from "@nick/is/type";

type A = { a: string; b: unknown; c: number };
type B = OmitUnknownOrNever<A>;
//   ^? type B = { a: string; c: number }
```

## `Predicate`

#### Signature

```ts ignore
export type Predicate<
  Type extends Base = any,
  Base = unknown,
  Args extends readonly unknown[] = any[],
> = Expand<(it: Base, ...args: Args) => it is Type>;
```

Represents a type guard (predicate function) that checks if a given value of the
base type `Base` is also of the derived type `Type`.

##### Type Parameters

- **`Type`** extends `Base` (default: `any`)
- **`Base`** (default: `unknown`)
- **`Args`** extends `readonly unknown[]` (default: `any[]`)

---

#### Examples

```ts
const isString: Predicate<string> = (it: unknown): it is string => (
  typeof it === "string"
);
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
