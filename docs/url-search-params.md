# @nick/is/url-search-params

## `isURLSearchParams`

#### Signature

```ts ignore
function isURLSearchParams(it: unknown): it is URLSearchParams;
```

Checks if a value is a URLSearchParams object.

This function is useful for checking if a value is an instance of the native
`URLSearchParams` class, without leaning on the `instanceof` operator (which
known to be unreliable in certain environments and across different realms).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a URLSearchParams object, `false` otherwise.

###### Category

`Web APIs`

#### Examples

```ts
import { isURLSearchParams } from "jsr:@nick/is/url-search-params";

console.log(isURLSearchParams(new URLSearchParams())); // true
console.log(isURLSearchParams(new URLSearchParams("a=1&b=2"))); // true
console.log(isURLSearchParams(new URL("https://foobar.com?a=1").searchParams)); // true
console.log(isURLSearchParams({})); // false
console.log(isURLSearchParams(new URL("data:"))); // false
```
