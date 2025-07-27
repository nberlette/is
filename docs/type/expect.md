# @nick/is/type/expect

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
