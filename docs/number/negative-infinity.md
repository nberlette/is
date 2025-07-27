# @nick/is/number/negative-infinity

## `isNegativeInfinity`

#### Signature

```ts ignore
function isNegativeInfinity(it: unknown): it is NegativeInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `negative` `infinity`

#### Examples

```ts
import { isNegativeInfinity } from "@nick/is/number/infinity";

console.log(isNegativeInfinity(Infinity)); // false
console.log(isNegativeInfinity(-Infinity)); // true
console.log(isNegativeInfinity(1)); // false
console.log(isNegativeInfinity(-1)); // false
console.log(isNegativeInfinity(NaN)); // false
```

## `NegativeInfinity`

#### Signature

```ts ignore
export type NegativeInfinity = -Infinity;
```

Special type representing negative infinity (`Number.NEGATIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `negative`
