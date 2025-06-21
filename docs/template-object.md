# @nick/is/template-object

## `isTemplateObject`

#### Signature

```ts ignore
function isTemplateObject(it: unknown): it is TemplateObject;
```

Checks if the given value is a template strings object, which is an object with
a `raw` property that is an array of strings.

This type fulfills the requirements of the `String.raw` method without
necessarily being an array of strings, as well. Useful for validating template
literal call sites in tagged template functions, which often times are called
with just a plain object with a `raw` property.

For a more strict check see
[`isTemplateStringsArray`](#istemplatestringsarray "Jump to symbol: 'isTemplateStringsArray'"),
which checks if the value is _also_ an array of strings.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a template strings object, `false` otherwise.

###### Category

`Template Literals`

#### Examples

```ts
import {
  isTemplateObject,
} from "jsr:@nick/is/template-object";

console.log(
  isTemplateObject({ raw: ["a", "b", "c"] })
); // true

// Additional properties are allowed:
console.log(
  isTemplateObject({ raw: ["a", "b", "c"], other: 1 })
); // true

// Mimicking a template strings array will pass:
console.log(
  isTemplateObject(Object.assign(["\1"], { raw: ["\\1"] })
); // true

// However, just having any old `raw` property is not enough:
console.log(
  isTemplateObject({ raw: 1 })
); // false
```

## `TemplateObject`

A template strings object is an object with a `raw` property containing an array
of strings. This type is used to loosely represent the first argument passed to
a tagged template function, which is a template strings array.

Note: while all `TemplateStringsArray` values are `TemplateObject`s, not all
`TemplateObject`s are `TemplateStringsArray`s.

###### Category

`Template Literals`

### Properties

#### raw

```ts
readonly raw: readonly string[];
```

---
