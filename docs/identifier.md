# @nick/is/identifier

## `isIdentifier`

#### Signature

```ts ignore
function isIdentifier<T extends string>(it: T): it is Identifier<T>;
```

Checks if a given string is a valid JavaScript identifier, meaning it can be
used as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("export")); // false
```

## `isIdentifier`

#### Signature

```ts ignore
function isIdentifier(it: unknown): it is Identifier;
```

Checks if a given value is a valid JavaScript identifier, meaning it can be used
as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("export")); // false
```

## `isIdentifier`

#### Signature

```ts ignore
function isIdentifier(it: unknown): it is Identifier;
```

Checks if a given value is a valid JavaScript identifier, meaning it can be used
as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("exportm z=-0fdxz")); // true
```

## `Identifier`

#### Signature

```ts ignore
export type Identifier<T extends string = string> = Brand<T, "Identifier">;
```

Utility type brand that represents a valid JavaScript identifier. This is a
string that can be used as a name of a variable, function, property, label, or
export. It is a subtype of `string` and is used to distinguish between regular
strings and identifiers.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

###### Category

`Primitives`

## `ReservedWord`

#### Signature

```ts ignore
export type ReservedWord = reserved[number];
```

Represents a reserved word in JavaScript that cannot be used as an identifier,
such as `export`, `default`, `class`, etc.

###### Category

`Primitives`

###### Tags

`identifier` `reserved`
