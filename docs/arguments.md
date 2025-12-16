# @nick/is/arguments

## `isArguments`

#### Signature

```ts ignore
function isArguments(it: unknown): it is IArguments;
```

Check if the given value is an instance of the native `Arguments` object, which
is a special type of Array-like object that corresponds to the binding arguments
of a particular JavaScript function.

This check will return `false` for any other kind of array-like object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `Arguments` object, `false` otherwise.

###### Category

`Indexed Collections`

#### Examples

```ts
import { isArguments } from "jsr:@nick/is/arguments";

function foo() {
  console.log(isArguments(arguments)); // true
  console.log(isArguments([1, 2, 3])); // false
}
```
