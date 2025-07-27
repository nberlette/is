# @nick/is/number/in-range

## `inRange`

#### Signature

```ts ignore
function inRange<
  V extends number,
  R extends Derange,
  Min extends number = R extends [infer M extends number, number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? 0
    : R[0],
  Max extends number = R extends [number, infer M extends number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? R[0]
    : R[1],
  Tex extends Exclusivity = Either<
    R extends [number, number, infer T extends Exclusivity] ? T
      : R[1] extends Exclusivity ? R[1]
      : undefined,
    "[)"
  >,
>(value: V, ...range: [...R] | Derange): value is InRange<V, Min, Max, Tex>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: Derange): value is InRange<number>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: any[]): undefined;
```

## `isExclusivity`

#### Signature

```ts ignore
function isExclusivity(it: unknown): it is Exclusivity;
```

Checks if a given value is a valid range exclusivity string (either "[]", "(]",
"[)", or "()").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid range exclusivity string, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isExclusivity } from "jsr:@nick/is/number/in_range";

console.log(isExclusivity("[]")); // true
console.log(isExclusivity("(]")); // true
console.log(isExclusivity("[)")); // true
console.log(isExclusivity("()")); // true
console.log(isExclusivity("")); // false
console.log(isExclusivity("[")); // false
console.log(isExclusivity("]")); // false
```

## `AnyRange`

#### Signature

```ts ignore
export type AnyRange<Min extends number = number, Max extends number = number> =
  | RangeInclusiveMin<Min, Max>
  | RangeInclusive<Min, Max>
  | RangeInclusiveMax<Min, Max>
  | RangeExclusive<Min, Max>;
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `Derange`

#### Signature

```ts ignore
export type Derange =
  | readonly [number, number, "[]"]
  | readonly [number, "[]"]
  | readonly [number, number, "[)"]
  | readonly [number, "[)"]
  | readonly [number, number, "(]"]
  | readonly [number, "(]"]
  | readonly [number, number, "()"]
  | readonly [number, "()"]
  | readonly [number, number, Exclusivity]
  | readonly [number, Exclusivity];
```

## `Exclusivity`

#### Signature

```ts ignore
export type Exclusivity = AnyRange[2];
```

## `InRange`

#### Signature

```ts ignore
export type InRange<
  N extends number,
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> =
  & (number extends N ? IsInRange<Min, Max, Tex>
    : `${Min}|${Max}` extends `-${number}|-${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${Min}|${Max}` extends `${number}|-${number}` ? never
    : `${Min}|${Max}` extends `-${number}|${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${N}` extends `-${number}` ? never
    : IsInRange<Min, Max, Tex>)
  & N;
```

Type-level equivalent to the [`inRange`](#inrange "Jump to symbol: 'inRange'")
function, which (naively) checks if a number is within a given range. The range
can be specified in multiple ways, with one of four different exclusivity types.

##### Type Parameters

- **`N`** extends `number`
- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

###### See Also

- [`inRange`](#inrange "Jump to symbol: 'inRange'") for more information.

## `Range`

#### Signature

```ts ignore
export type Range<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = never,
> = [Tex] extends [never] ?
    | RangeInclusiveMin<Min, Max>
    | RangeInclusive<Min, Max>
    | RangeInclusiveMax<Min, Max>
    | RangeExclusive<Min, Max>
    | RangeUnknown<Min, Max>
  : Either<
    Extract<Range<Min, Max, never>, Required<RangeUnknown<Min, Max, Tex>>>,
    RangeUnknown<Min, Max, Exclusivity>
  >;
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `never`)

---

## `RangeExclusive`

#### Signature

```ts ignore
export type RangeExclusive<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "()"] | readonly [Max, "()"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusive`

#### Signature

```ts ignore
export type RangeInclusive<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "[]"] | readonly [Max, "[]"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusiveMax`

#### Signature

```ts ignore
export type RangeInclusiveMax<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "(]"] | readonly [Max, "(]"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeInclusiveMin`

#### Signature

```ts ignore
export type RangeInclusiveMin<
  Min extends number = number,
  Max extends number = number,
> = readonly [Min, Max, "[)"] | readonly [Max, "[)"];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)

---

## `RangeUnknown`

#### Signature

```ts ignore
export type RangeUnknown<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> = readonly [Min, Max, Tex] | readonly [Max, Tex];
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

## `IsInRange`

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

### Properties

#### RANGE

```ts
readonly RANGE: readonly [Min,Max,Tex];
```

---
