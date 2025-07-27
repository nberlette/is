# @nick/is/number/positive-infinity

## `isPositiveInfinity`

#### Signature

```ts ignore
function isPositiveInfinity(it: unknown): it is PositiveInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `positive` `infinity`

#### Examples

```ts
import { isPositiveInfinity } from "@nick/is/number/infinity";

console.log(isPositiveInfinity(Infinity)); // false
console.log(isPositiveInfinity(-Infinity)); // true
console.log(isPositiveInfinity(1)); // false
console.log(isPositiveInfinity(-1)); // false
console.log(isPositiveInfinity(NaN)); // false
```

## `PositiveInfinity`

#### Signature

```ts ignore
export type PositiveInfinity = Infinity;
```

Special type representing positive infinity (`Number.POSITIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `positive`
