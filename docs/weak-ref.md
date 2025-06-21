# @nick/is/weak-ref

## `isWeakRef`

#### Signature

```ts ignore
function isWeakRef<T extends WeakKey>(
  obj: WeakRef<T> | null | undefined,
): obj is WeakRef<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a WeakRef. For more
information on this type of object, refer to the
[MDN Documentation](https://mdn.io/WeakRef).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakRef`, otherwise false.

###### Category

`Weak Collections`

#### Examples

```ts
import { isWeakRef } from "jsr:@nick/is/weak-ref";

const strong = { a: 1 };
const weak1 = new WeakRef(strong);
const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);

console.log(isWeakRef(strong)); // false
console.log(isWeakRef(weak1)); // true
console.log(isWeakRef(weak2)); // false
```

## `isWeakRef`

#### Signature

```ts ignore
function isWeakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a WeakRef. For more
information on this type of object, refer to the
[MDN Documentation](https://mdn.io/WeakRef).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakRef`, otherwise false.

## `isWeakRef`

#### Signature

```ts ignore
function isWeakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T>;
```
