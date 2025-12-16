# @nick/is/array-like-object

## `isArrayLikeObject`

#### Signature

```ts ignore
function isArrayLikeObject<T>(it: unknown): it is ArrayLikeObject<T>;
```

Checks if a given value is an `ArrayLike` object. This is a stricter form of the
[`isArrayLike`](#isarraylike "Jump to symbol: 'isArrayLike'") check that only
returns `true` if a value is an **_object_** that also meets all of the
`ArrayLike` conditions:

- it is not a function
- it has an own property named `length` that is a finite unsigned integer:
  - an integer between `0` and `Number.MAX_SAFE_INTEGER`
  - it is non-negative, `NaN`, `Infinity`, nor `-Infinity`

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that meets all of the `ArrayLike` conditions,
otherwise `false`.

###### Category

`Indexed Collections`

###### See Also

- [`isArrayLike`](#isarraylike "Jump to symbol: 'isArrayLike'") for a version
  that allows for non-object values such as strings (but not functions).

#### Examples

```ts
import { isArrayLikeObject } from "jsr:@nick/is/array-like";

isArrayLikeObject([]); // true
isArrayLikeObject({ length: 0 }); // true
isArrayLikeObject({ length: 1, 0: "a" }); // true

// strings are not considered ArrayLike objects
isArrayLikeObject("abc"); // false

// length must be a finite unsigned integer
isArrayLikeObject({ length: Infinity }); // false

// length must be non-negative
isArrayLikeObject({ length: -1 }); // false

// length cannot be a non-number or NaN
isArrayLikeObject({ length: "a" }); // false
isArrayLikeObject({ length: NaN }); // false

// functions are not considered ArrayLike objects, despite meeting the
// requirements for the 'length' property. this is because they are not
// indexed collections like an array or string.
isArrayLikeObject(() => {});
```

## `ArrayLikeObject`

#### Signature

```ts ignore
export type ArrayLikeObject<T = unknown> = ArrayLike<T> & object;
```

Represents an object that has a `length` property that is a finite unsigned
integer, and where the object is not a function. This is the type that the
function
[`isArrayLikeObject`](#isarraylikeobject "Jump to symbol: 'isArrayLikeObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`
