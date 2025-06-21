# @nick/is/generator

## `isGenerator`

#### Signature

```ts ignore
function isGenerator<T = unknown, TReturn = any, TNext = unknown>(
  it: unknown,
): it is Generator<T, TReturn, TNext>;
```

Check if the given value is a generator, which is an iterable iterator that was
created with the `function*() { ... }` syntax.

This is the type of value **_returned_** when a generator function
(`function*() { ... }`) is called, and not the type of the function itself. To
check for the function itself, use `isGeneratorFunction` instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a generator, `false` otherwise.

###### Category

`Generators`

#### Examples

```ts
import { isGenerator } from "jsr:@nick/is/generator";

function* gen() {
  yield 1;
}
const iter = gen();

console.log(isGenerator(iter)); // true
console.log(isGenerator(gen)); // false
```
