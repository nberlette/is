# @nick/is/url

## `isURL`

#### Signature

```ts ignore
function isURL(it: unknown): it is URL;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a URL object, `false` otherwise.

###### Category

`Web APIs`

#### Examples

```ts
import { isURL } from "jsr:@nick/is/url";

console.log(isURL(new URL("https://example.com"))); // true
console.log(isURL(new URL("https://example.com").toString())); // false
console.log(isURL({ href: "https://example.com" })); // false
console.log(isURL({ ...new URL("https://example.com") })); // false
```
