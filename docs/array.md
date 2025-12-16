# @nick/is/array

## `isArray`

#### Signature

```ts ignore
function isArray<T>(a: unknown, test?: Predicate<T>): a is T[];
```

Checks if the given value is an array, optionally verifying that each of its
elements are of a specific type.

##### Parameters

| Name       | Info                                                    |
| :--------- | :------------------------------------------------------ |
| **`it`**   | The value to check.                                     |
| **`test`** | The type guard to check the type of the array elements. |

##### Returns

`true` if it is an array, and the predicate (if provided) is satisfied by each
of its values. Otherwise, returns `false`.

###### Category

`Indexed Collections`

#### Examples

```ts
import { isArray, isNumber, isString } from "jsr:@nick/is";
import { expectType } from "jsr:@nick/is/type/expect";

const arr: unknown[] = ["a", "b", "c"];

if (isArray(arr, isString)) {
  console.log(arr, "is an array of strings");
  //           ^? const arr: string[]
  expectType<string[]>(arr);
} else if (isArray(arr, isNumber)) {
  console.log(arr, "is an array of numbers");
  //           ^? const arr: number[]
  expectType<number[]>(arr);
} else {
  console.log(arr, "is not an array of strings or numbers");
  //           ^? const arr: unknown[]
  expectType<unknown[]>(arr);
}
```
