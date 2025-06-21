# @nick/is/weak-key

## `isWeakKey`

#### Signature

```ts ignore
function isWeakKey(it: unknown): it is WeakKey;
```

Checks if a value is valid as a weak key, meaning it can be used as a key in a
`WeakMap`, a value in a `WeakSet`, or as the target of a `WeakRef`. Weak keys
can also be used as the "unregister token" argument in both the `register` and
`unregister` methods of the `FinalizationRegistry` API.

This always includes non-null objects, arrays, and functions. Since ES2023+ it
also includes symbols that are not globally registered via `Symbol.for`.

##### Parameters

| Name     | Info                 |
| :------- | :------------------- |
| **`it`** | The value you check. |

##### Returns

`true` if it is a valid WeakKey, otherwise `false`.

###### Category

`Weak Collections`

###### See Also

- https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.

#### Examples

```ts
import { isWeakKey } from "jsr:@nick/is/weak-key";

// objects and functions are always valid weak keys:
console.log(isWeakKey({})); // true
console.log(isWeakKey(() => {})); // true

// starting in ES2023+, symbols are also valid weak keys:
console.log(isWeakKey(Symbol("a"))); // true
console.log(isWeakKey(Symbol.iterator)); // true

// however, globally registered symbols are not:
console.log(isWeakKey(Symbol.for("a"))); // false

// primitives are never valid weak keys:
console.log(isWeakKey(1)); // false
console.log(isWeakKey("a")); // false
```

## `WeakKey`

#### Signature

```ts ignore
export type WeakKey = WeakKeyTypes[keyof WeakKeyTypes];
```

A value that can be used as a key in a `WeakMap`, a value in a `WeakSet`, or as
the target of a `WeakRef`. Weak keys can also be used as the "unregister token"
argument in both the `register` and `unregister` methods of the
`FinalizationRegistry` API.

This always includes non-null objects, arrays, and functions. Since ES2023+ it
also includes symbols that are not globally registered via `Symbol.for`.

###### Category

`Weak Collections`

###### Tags

`WeakKey`

###### See Also

- https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.

## `WeakKeyTypes`

The types that can be used as a weak key.

###### Category

`Weak Collections`

### Properties

#### object

```ts
object: object;
```

#### symbol

```ts
symbol: symbol;
```

---
