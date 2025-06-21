# @nick/is/non-array-object

## `isNonArrayObject`

#### Signature

```ts ignore
function isNonArrayObject<T>(it: T): it is NonArrayObject<T>;
```

Check if the given value is a non-null object. This includes all non-null and
non-array values where `typeof === "object"`. If you want to check for arrays
and functions, too, use
[isObjectLike](#isobjectlike "Jump to symbol: 'isObjectLike'") instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-null object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isNonArrayObject } from "jsr:@nick/is/non-array-object";

console.log(isNonArrayObject({})); // true
console.log(isNonArrayObject(new class {}())); // true
console.log(isNonArrayObject(new Object())); // true
```

## `isNonArrayObject`

#### Signature

```ts ignore
function isNonArrayObject<T>(it: unknown): it is Record<PropertyKey, T>;
```

Check if the given value is a non-null object. This includes all non-null and
non-array values where `typeof === "object"`. If you want to check for arrays
and functions, too, use
[isObjectLike](#isobjectlike "Jump to symbol: 'isObjectLike'") instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-null object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isNonArrayObject } from "jsr:@nick/is/non-array-object";

console.log(isNonArrayObject({})); // true
console.log(isNonArrayObject(new class {}())); // true
console.log(isNonArrayObject(new Object())); // true

console.log(isNonArrayObject([])); // false
console.log(isNonArrayObject(() => {})); // false
console.log(isNonArrayObject(null)); // false
console.log(isNonArrayObject(undefined)); // false
console.log(isNonArrayObject(1)); // false
```

## `isNonArrayObject`

#### Signature

```ts ignore
function isNonArrayObject(it: unknown): it is NonArrayObject;
```

## `AsNonArrayObject`

#### Signature

```ts ignore
export type AsNonArrayObject<T> = IsAnyOrUnknownOrNever<
  T,
  never,
  IsArray<
    T,
    never,
    NonArrayObject<
      IsExact<
        T,
        object,
        T,
        T extends (...args: any) => any ? never : T
      >
    >
  >
>;
```

Converts a given type `T` into a non-array object type, if possible. If `T` is
`any`, `unknown`, or `never`, it resolves to `never`. If `T` is an array or a
function, it also resolves to `never`. If `T` is an object type, it resolves to
`NonArrayObject<T>`, branding it with the unique symbol that marks it as a valid
non-array object.

##### Type Parameters

- **`T`**

---

###### Category

`Objects`

###### Tags

`NonArrayObject` `branded`

## `NonArrayObject`

#### Signature

```ts ignore
export type NonArrayObject<T = EmptyObject> =
  & IsAnyOrUnknownOrNever<
    T,
    Record<PropertyKey, any>,
    Exclude<T, readonly unknown[]>
  >
  & NonArrayObjectBrand;
```

Represents a non-null object that is neither an array nor a function. This is
**generic** nominal (branded) type, that can either be used as is to represent a
non-null object that is neither an array nor a function, or can be parameterized
with a specific type.

When parameterized, the type it receives will be intersected with an unforgeable
unique brand to ensure it is distinct from the base type (and any other type for
that matter). This allows you to create custom subtypes of your own that have
been validated at runtime, providing a level of type safety that is just not
possible with a plain object type.

##### Type Parameters

- **`T`** (default: `EmptyObject`)

---

###### Category

`Objects`

###### Tags

`NonArrayObject` `branded`

#### Examples

```ts
import nonArray, { type NonArrayObject } from "jsr:@nick/is/non-array-object";

let obj: readonly unknown[] | Record<number, unknown> = {};

const doesntLikeArrays = <T>(obj: NonArrayObject<T>) => {
  // do something with obj
};

doesntLikeArrays(obj); // error
```
