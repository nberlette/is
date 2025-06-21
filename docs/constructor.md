# @nick/is/constructor

## `isConstructor`

#### Signature

```ts ignore
function isConstructor<T>(it: unknown): it is Constructor<T>;
```

Checks whether a given value is a constructor function.

In this context, a constructor is defined as a function with a `prototype` own
property that contains an object with an own `constructor` property that points
back to the constructor function itself.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a constructor function; otherwise, `false`.

###### Category

`Guards`

#### Examples

```ts
import { isConstructor } from "jsr:@nick/is/constructor";

class Foo {}
console.log(isConstructor(Foo)); // true
console.log(isConstructor(Foo.prototype.constructor)); // true
console.log(isConstructor(class {})); // true
console.log(isConstructor(function () {})); // true

console.log(isConstructor({})); // false
console.log(isConstructor(null)); // false
console.log(isConstructor(Foo.prototype)); // false
console.log(isConstructor(() => new Foo())); // false
```

## `Constructor`

Represents a constructor function that creates instances of type `T`.

###### Category

`Types`

##### Type Parameters

- **`T`** (default: `unknown`)
- **`A`** extends `readonly unknown[]` (default: `readonly unknown[]`)

---

### Properties

#### prototype

```ts
readonly prototype: Prototype<T, this>;
```

---
