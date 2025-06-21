# @nick/is/async-generator-function

## `isAsyncGeneratorFunction`

#### Signature

```ts ignore
function isAsyncGeneratorFunction(it: unknown): it is AsyncGeneratorFunction;
```

Checks if a given value is an async generator function, which is a function that
returns an async generator object when called, and was created with the
`async function*() { ... }` syntax.

To check if a value is an async generator object, use `isAsyncGenerator`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an async generator function, `false` otherwise.

###### Category

`Generators`

#### Examples

```ts
import {
  isAsyncGeneratorFunction,
} from "jsr:@nick/is/async-generator-function";

const genFnAsync = async function* () {
  yield 1;
};
isAsyncGeneratorFunction(genFnAsync); // true

const genObjAsync = genFnAsync();
isAsyncGeneratorFunction(genObjAsync); // false

const genFn = function* () {
  yield 1;
};
isAsyncGeneratorFunction(genFn); // false

const genObj = genFn();
isAsyncGeneratorFunction(genObj); // false
```
