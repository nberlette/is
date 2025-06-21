# @nick/is/data-view

## `isDataView`

#### Signature

```ts ignore
function isDataView(it: unknown): it is DataView;
```

Checks if a given value is a `DataView`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `DataView`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isDataView } from "jsr:@nick/is/data-view";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
console.log(isDataView(view)); // true
console.log(isDataView(buffer)); // false
```
