# @nick/is/regexp

## `isRegExp`

#### Signature

```ts ignore
function isRegExp(it: unknown): it is RegExp;
```

Check if the given value is a regular expression, which is an object that
represents a pattern of text that can be used to perform pattern matching with
strings.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a regular expression, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isRegExp } from "jsr:@nick/is/regexp";

const regex = /foo/;
console.log(isRegExp(regex)); // true
console.log(isRegExp("foo")); // false
```
