# @nick/is/boxed-primitive

## `isBoxedPrimitive`

Checks if a value is a boxed-primitive object, which is an object that was
created by wrapping a primitive value in the `Object()` wrapper function, or by
using the `new` operator with the `String`, `Number`, or `Boolean` constructors
(`Symbol` and `BigInt` do not support the `new` operator).

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

#### Signature

```ts ignore
function isBoxedPrimitive<T extends BoxedPrimitive>(
  it: T | {} | null | undefined,
): it is T;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBoxedPrimitive } from "jsr:@nick/is/boxed-primitive";

isBoxedPrimitive(new String("abc")); // true
isBoxedPrimitive(new Number(42)); // true
isBoxedPrimitive(new Boolean(true)); // true

isBoxedPrimitive("abc"); // false
isBoxedPrimitive(42); // false
isBoxedPrimitive(true); // false
```

---

## `BoxedPrimitive`

Type representing a boxed-primitive object, which is an object created by
wrapping a primitive value in the `Object()` wrapper function, or by using the
`new` operator with the `String`, `Number`, or `Boolean` constructors (`Symbol`
and `BigInt` do not support the `new` operator).

#### Signature

```ts ignore
export type BoxedPrimitive = String | Number | Boolean | Symbol | BigInt;
```

###### Category

`Boxed Primitives`
