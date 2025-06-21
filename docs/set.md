# @nick/is/set

## `isSet`

#### Signature

```ts ignore
function isSet<T>(it: unknown): it is Set<T>;
```

Checks if a given value is a `Set` instance. This is a more reliable check than
`it instanceof Set` because it also works across different realms.

It's also more strict than `instanceof` operations, only recognizing an object
as a `Set` instance if it was created with a valid construct operation of either
the `Set` constructor or a subclass of it. As such,
`Object.create(Set.prototype)` and similar avenues will return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Set` instance, `false` otherwise.

###### Category

`Keyed Collections`

#### Examples

```ts
import { isSet } from "jsr:@nick/is/set";

isSet(new Set()); // true
isSet(new WeakSet()); // false
isSet(new Map()); // false
isSet([]); // false
isSet(Object.create(Set.prototype)); // false
```
