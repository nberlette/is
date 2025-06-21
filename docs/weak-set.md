# @nick/is/weak-set

## `isWeakSet`

#### Signature

```ts ignore
function isWeakSet<T extends WeakKey>(
  it: WeakSet<T> | null | undefined,
): it is WeakSet<T>;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is a `WeakSet` object. For more
information on this language feature, refer to the
[MDN Documentation](https://mdn.io/WeakSet).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

true if it is a `WeakSet`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakSet`

#### Examples

```ts
import { isWeakSet } from "jsr:@nick/is/weak-set";

const strong = new Set([1, 2]);
const weak1 = new WeakSet([{ a: 1 }, { b: 2 }]);
const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);

console.log(isWeakSet(strong)); // false
console.log(isWeakSet(weak1)); // true
console.log(isWeakSet(weak2)); // false
```

## `isWeakSet`

#### Signature

```ts ignore
function isWeakSet<T extends WeakKey>(it: unknown): it is WeakSet<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a `WeakSet` object. For more
information on this language feature, see the
[MDN Reference](https://mdn.io/WeakSet).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakSet`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakSet`

## `isWeakSet`

#### Signature

```ts ignore
function isWeakSet<T extends WeakKey>(obj: unknown): obj is WeakSet<T>;
```
