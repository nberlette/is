# @nick/is/empty-object

## `isEmptyObject`

#### Signature

```ts ignore
function isEmptyObject(it: unknown): it is EmptyObject;
```

Check if a value is an empty object.

##### Parameters

| Name        | Info                |
| :---------- | :------------------ |
| **`value`** | The value to check. |

##### Returns

`true` if the value is an empty object, or `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isEmptyObject } from "jsr:@nick/is/empty-object";

console.log(isEmptyObject({})); // true
console.log(isEmptyObject(new Object())); // true

console.log(isEmptyObject({ a: 1 })); // false
console.log(isEmptyObject({ a: 1, b: 2 })); // false
console.log(isEmptyObject([])); // false
console.log(isEmptyObject(null)); // false
console.log(isEmptyObject(undefined)); // false
console.log(isEmptyObject(1)); // false
```

## `EmptyObject`

#### Signature

```ts ignore
export type EmptyObject = {
  [_ in undefined]?: never;
};
```

Represents an empty object with no own properties.

###### Category

`Objects`

#### Examples

```ts
import type { EmptyObject } from "jsr:@nick/is/empty-object";

const foo: EmptyObject = {}; // OK
const bar: EmptyObject = []; // ts(6133): Type 'never[]' has no properties in common with type 'EmptyObject'.
```

## `IsEmptyObject`

#### Signature

```ts ignore
export type IsEmptyObject<T, True = true, False = false> = [T] extends [never]
  ? False
  : boolean extends (T extends never ? true : false) ? False
  : [T] extends [EmptyObject] ? True
  : T extends object
    ? object extends T ? False
    : [Exclude<keyof T, kEmptyObject>] extends [never] ? True
    : False
  : False;
```

Type-level predicate that checks if a value is an empty object. This is the type
equivalent of the
[`isEmptyObject`](#isemptyobject "Jump to symbol: 'isEmptyObject'") function.

It also supports custom true/false types, allowing you to construct your own
type guards with the desired return type, or create conditional types that
depend on the emptiness of an object.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Categories

`Objects` `Type Guards`

###### See Also

- [`EmptyObject`](#emptyobject "Jump to symbol: 'EmptyObject'") for the type
  that represents an empty object.
- [`isEmptyObject`](#isemptyobject "Jump to symbol: 'isEmptyObject'") for the
  runtime equivalent of this type.

#### Examples

```ts
import type { IsEmptyObject } from "jsr:@nick/is/empty-object";

type A = IsEmptyObject<{}>; // true
type B = IsEmptyObject<{ a: 1 }>; // false
type C = IsEmptyObject<[]>; // false
```

```ts
import type { IsEmptyObject } from "jsr:@nick/is/empty-object";

type PickEmptyObjectProperties<T> = {
  [K in keyof T as IsEmptyObject<T[K], K, never>]: T[K];
  // shorthand conditionals       true ^  ^ false
  // equivalent to: IsEmptyObject<T[K]> extends true ? K : never
};
```
