# @nick/is/weak-map

## `isWeakMap`

#### Signature

```ts ignore
function isWeakMap<K extends WeakKey, V = any>(
  it: WeakMap<K, V> | null | undefined,
): it is WeakMap<K, V>;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is a `WeakMap` object. For more
information on this language feature, refer to the
[MDN Documentation](https://mdn.io/WeakMap).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

true if it is a `WeakMap`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakMap`

#### Examples

```ts
import { isWeakMap } from "jsr:@nick/is/weak-map";

const strong = new Map([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
const weak1 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
const weak2 = new WeakSet([{ a: 1 }, { b: 2 }]);

isWeakMap(strong); // false
isWeakMap(weak1); // true
isWeakMap(weak2); // false
```

## `isWeakMap`

#### Signature

```ts ignore
function isWeakMap<K extends WeakKey, V = any>(
  it: unknown,
): it is WeakMap<K, V>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a `WeakMap` object. For more
information on this language feature, see the
[MDN Reference](https://mdn.io/WeakMap).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakMap`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakMap`

## `isWeakMap`

#### Signature

```ts ignore
function isWeakMap<K extends WeakKey, V = any>(
  obj: unknown,
): obj is WeakMap<K, V>;
```
