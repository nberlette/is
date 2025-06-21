# @nick/is/class

## `isClass`

#### Signature

```ts ignore
function isClass<
  T,
  A extends readonly unknown[] = readonly any[],
  P extends object | null = Is<T, object | null>,
>(it: unknown): it is Class<T, A, P>;
```

Checks if a given value is a constructor function, also known as a class.

This includes all **pure** functions - no generators, arrow functions, or
getters/setters - that also have an own `prototype` propertty which is a
non-null object. The prototype must have an own `constructor` property that
points back to the class constructor function itself. Lastly, the function's
source code is inspected for the `class` keyword, to ensure that it is a class
and not just a regular function.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a class, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isClass } from "jsr:@nick/is/class";

class Foo {}
console.log(isClass(Foo)); // true

const Bar = function () {
  this.foo = "bar";
  return this;
};
console.log(isClass(Bar)); // false

const Baz = () => {};
console.log(isClass(Baz)); // false
```

## `Class`

###### Category

`Types`

#### Examples

```ts
import { isClass } from "jsr:@nick/is/class";

class Foo {}
console.log(isClass(Foo)); // true

const Bar = function () {
  this.foo = "bar";
  return this;
};
console.log(isClass(Bar)); // false

const Baz = () => {};
console.log(isClass(Baz)); // false
```

##### Type Parameters

- **`T`** (default: `any`)
- **`A`** extends `readonly unknown[]` (default: `readonly any[]`)
- **`P`** extends `object | null` (default: `Is<T,  object | null>`)

---

### Properties

#### prototype

```ts
readonly prototype: P;
```

---
