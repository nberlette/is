# @nick/is/non-empty-array

## `isNonEmptyArray`

#### Signature

```ts ignore
function isNonEmptyArray<T>(
  a: MaybeArray<T>,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

Checks if the given value is an array with at least one element of a specific
type.

##### Parameters

| Name       | Info                                                    |
| :--------- | :------------------------------------------------------ |
| **`it`**   | The value to check.                                     |
| **`test`** | The type guard to check the type of the array elements. |

##### Returns

`true` if the value is an array with at least one element of the specific type
(if a `test` predicate is provided), `false` otherwise.

###### Category

`Indexed Collections`

#### Examples

```ts
import { isNonEmptyArray } from "jsr:@nick/is/array";

console.log(isNonEmptyArray([])); // false
console.log(isNonEmptyArray([1, 2, 3])); // true
console.log(isNonEmptyArray({})); // false
```

```ts
import { isNonEmptyArray } from "jsr:@nick/is/array";
import { isString } from "jsr:@nick/is/string";
import { isNumber } from "jsr:@nick/is/number";
import { expectType } from "jsr:@nick/is/type/expect";

const arr: unknown[] = ["a", "b", "c"];

if (isNonEmptyArray(arr, isString)) {
  console.log(arr, "is an array of strings");
  //           ^? const arr: readonly [string, ...string[]]
  expectType<readonly [string, ...string[]]>(arr);
} else if (isNonEmptyArray(arr, isNumber)) {
  console.log(arr, "is an array of numbers");
  //           ^? const arr: readonly [number, ...number[]]
  expectType<readonly [number, ...number[]]>(arr);
} else {
  console.log(arr, "is not an array of strings or numbers");
  //           ^? const arr: readonly unknown[]
  expectType<readonly unknown[]>(arr);
}
```

## `isNonEmptyArray`

#### Signature

```ts ignore
function isNonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

## `isNonEmptyArray`

#### Signature

```ts ignore
function isNonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

## `NonEmptyArray`

#### Signature

```ts ignore
export type NonEmptyArray<T = unknown> = [T, ...T[]];
```

Represents an array with 1 or more element of the specific type `T`.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`
