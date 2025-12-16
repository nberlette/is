# @nick/is/number/infinity

## `isInfinity`

#### Signature

```ts ignore
function isInfinity(it: unknown): it is Infinity;
```

Checks if a given value is a non-finite number (`Infinity` or `-Infinity`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInfinity } from "@nick/is/number/infinity";

console.log(isInfinity(Infinity)); // true
console.log(isInfinity(-Infinity)); // true
console.log(isInfinity(1)); // false
console.log(isInfinity(-1)); // false
console.log(isInfinity(NaN)); // false
```

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

## `Infinity`

#### Signature

```ts ignore
export type Infinity = PositiveInfinity | NegativeInfinity;
```

Special type representing either positive or negative infinity.

###### Category

`Numbers`

###### Tags

`types` `number` `infinity`

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
