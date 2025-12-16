# @nick/is/template-strings-array

## `isTemplateStringsArray`

#### Signature

```ts ignore
function isTemplateStringsArray(it: unknown): it is TemplateStringsArray;
```

Checks if the given value is a template strings array, which is an array of
strings with an own property named `raw` that also is an array of strings. This
is the type of array provided to tagged template literals for the first
argument, and is represented as the type `TemplateStringsArray` in TypeScript.

This predicate's type is a supertype of the one checked by its more lenient
counterpart,
[`isTemplateObject`](#istemplateobject "Jump to symbol: 'isTemplateObject'"),
which only checks if the value is an object with a `raw` property that is an
array of strings.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a TemplateStringsArray, `false` otherwise.

###### Category

`Template Literals`

#### Examples

```ts
import { isTemplateStringsArray } from "jsr:@nick/is/template-strings-array";

console.log(isTemplateStringsArray(["a", "b", "c"])); // false
console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false

function print(strings: TemplateStringsArray, ...values: any[]): string;
function print(...vals: unknown[]): string;
function print(...vals: unknown[]): string {
  const [strings, ...values] = vals;
  if (isTemplateStringsArray(strings)) {
    return String.raw(strings, ...values);
  } else {
    return JSON.stringify(vals);
  }
}

print(["a", "b", "c"], 1, 2, 3); // '[["a", "b", "c"], 1, 2, 3]'
print`a${1}b${2}c${3}`; // a1b2c3
```

## `TemplateStringsArray`

A template strings array is an array of strings with an own property named `raw`
that is also an array of strings. This is the type of array provided to tagged
template literals for the first argument, and is represented as the type
`TemplateStringsArray` in TypeScript.

Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s, not
all `TemplateStringsObject`s are `TemplateStringsArray`s.

###### Category

`Types`

###### Tags

`TemplateStringsArray`

##### Extends `ReadonlyArray<string>`

### Properties

#### raw

```ts
readonly raw: ReadonlyArray<string>;
```

---
