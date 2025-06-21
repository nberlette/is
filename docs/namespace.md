# @nick/is/namespace

## `arguments`

#### Signature

```ts ignore
function arguments(it: unknown): it is IArguments;
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

## `array`

#### Signature

```ts ignore
function array<T>(a: unknown, test?: Predicate<T>): a is T[];
```

Checks if the given value is an array, optionally verifying that each of its
elements are of a specific type.

##### Parameters

| Name       | Info                                                    |
| :--------- | :------------------------------------------------------ |
| **`it`**   | The value to check.                                     |
| **`test`** | The type guard to check the type of the array elements. |

##### Returns

`true` if it is an array, and the predicate (if provided) is satisfied by each
of its values. Otherwise, returns `false`.

###### Category

`Indexed Collections`

#### Examples

```ts
import { isArray, isNumber, isString } from "jsr:@nick/is";
import { expectType } from "jsr:@nick/is/type/expect";

const arr: unknown[] = ["a", "b", "c"];

if (isArray(arr, isString)) {
  console.log(arr, "is an array of strings");
  //           ^? const arr: string[]
  expectType<string[]>(arr);
} else if (isArray(arr, isNumber)) {
  console.log(arr, "is an array of numbers");
  //           ^? const arr: number[]
  expectType<number[]>(arr);
} else {
  console.log(arr, "is not an array of strings or numbers");
  //           ^? const arr: unknown[]
  expectType<unknown[]>(arr);
}
```

## `arrayBuffer`

#### Signature

```ts ignore
function arrayBuffer(it: unknown): it is ArrayBuffer;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer`. This
does not include instances of the `SharedArrayBuffer`, which has its own type
guard. To check for either type, use
[`isArrayBufferLike`](#isarraybufferlike "Jump to symbol: 'isArrayBufferLike'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBuffer`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBuffer } from "jsr:@nick/is/array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);
const array = new Uint8Array(buffer);

isArrayBuffer(buffer); // true
isArrayBuffer(shared); // false
isArrayBuffer(array); // false
isArrayBuffer(array.buffer); // true
```

## `arrayBufferLike`

#### Signature

```ts ignore
function arrayBufferLike(it: unknown): it is ArrayBufferLike;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer` or a
`SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBuffer` or a `SharedArrayBuffer`, or `false`
otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBufferLike } from "jsr:@nick/is/any-array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);
const array = new Uint8Array(buffer);

isArrayBufferLike(buffer); // true
isArrayBufferLike(shared); // true
isArrayBufferLike(array); // false
isArrayBufferLike(array.buffer); // true
```

## `arrayBufferView`

#### Signature

```ts ignore
function arrayBufferView(it: unknown): it is ArrayBufferView;
```

Checks if a value is an `ArrayBufferView`, which includes all typed arrays and
`DataView` objects, but not `ArrayBuffer` or `SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `ArrayBufferView`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isArrayBufferView } from "jsr:@nick/is/array-buffer-view";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);

isArrayBufferView(buffer); // false
isArrayBufferView(view); // true
isArrayBufferView(array); // true
```

## `arrayIterator`

#### Signature

```ts ignore
function arrayIterator<T>(it: unknown): it is ArrayIterator<T>;
```

Check if the given value is an array iterator, which is an iterable iterator
that yields key-value pairs from an Array. This is the type of value that is
returned by `Array.prototype.values` and `Array.prototype[Symbol.iterator]`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a array iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isArrayIterator } from "jsr:@nick/is/array-iterator";

const array = ["foo", "bar", "foo"];
const iter = array[Symbol.iterator]();
console.log(isArrayIterator(iterator)); // true
console.log(isArrayIterator(array)); // false
```

## `arrayLike`

#### Signature

```ts ignore
function arrayLike<T>(it: unknown): it is ArrayLike<T>;
```

Checks if a given value is `ArrayLike`, which is defined as
`any
non-function value with an own property named 'length' that is an integer,
and where 'length' >= '0' and <= 'Number.MAX_SAFE_INTEGER'`.

This condition includes strings. If you'd like to check specifically for
`ArrayLike` _objects_, see
[`isArrayLikeObject`](#isarraylikeobject "Jump to symbol: 'isArrayLikeObject'")
instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is an ArrayLike value

###### Category

`Indexed Collections`

#### Examples

```ts
import { isArrayLike } from "jsr:@nick/is/array-like";

isArrayLike([]); // true
isArrayLike("abc"); // true
isArrayLike({ length: 0 }); // true
isArrayLike({ length: 1, 0: "a" }); // true
isArrayLike({ length: Infinity }); // false
isArrayLike({ length: -1 }); // false
```

## `arrayLikeObject`

#### Signature

```ts ignore
function arrayLikeObject<T>(it: unknown): it is ArrayLikeObject<T>;
```

Checks if a given value is an `ArrayLike` object. This is a stricter form of the
[`isArrayLike`](#isarraylike "Jump to symbol: 'isArrayLike'") check that only
returns `true` if a value is an **_object_** that also meets all of the
`ArrayLike` conditions:

- it is not a function
- it has an own property named `length` that is a finite unsigned integer:
  - an integer between `0` and `Number.MAX_SAFE_INTEGER`
  - it is non-negative, `NaN`, `Infinity`, nor `-Infinity`

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that meets all of the `ArrayLike` conditions,
otherwise `false`.

###### Category

`Indexed Collections`

###### See Also

- [`isArrayLike`](#isarraylike "Jump to symbol: 'isArrayLike'") for a version
  that allows for non-object values such as strings (but not functions).

#### Examples

```ts
import { isArrayLikeObject } from "jsr:@nick/is/array-like";

isArrayLikeObject([]); // true
isArrayLikeObject({ length: 0 }); // true
isArrayLikeObject({ length: 1, 0: "a" }); // true

// strings are not considered ArrayLike objects
isArrayLikeObject("abc"); // false

// length must be a finite unsigned integer
isArrayLikeObject({ length: Infinity }); // false

// length must be non-negative
isArrayLikeObject({ length: -1 }); // false

// length cannot be a non-number or NaN
isArrayLikeObject({ length: "a" }); // false
isArrayLikeObject({ length: NaN }); // false

// functions are not considered ArrayLike objects, despite meeting the
// requirements for the 'length' property. this is because they are not
// indexed collections like an array or string.
isArrayLikeObject(() => {});
```

## `asyncDisposable`

#### Signature

```ts ignore
function asyncDisposable(it: unknown): it is AsyncDisposable;
```

Checks if a value is an object that implements the `AsyncDisposable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that implements the `AsyncDisposable` API, or
`false` otherwise.

###### Category

`Explicit Resource Management`

#### Examples

```ts
import { isAsyncDisposable } from "@nick/is/async_disposable";

const disposable = {
  [Symbol.dispose]() {
    return;
  },
};

const asyncDisposable = {
  async [Symbol.asyncDispose]() {
    await Promise.resolve();
  },
};

isAsyncDisposable(disposable); // false
isAsyncDisposable(asyncDisposable); // true
```

## `asyncFunction`

#### Signature

```ts ignore
function asyncFunction<T = any>(it: unknown): it is AsyncFunction<T>;
```

## `asyncGenerator`

#### Signature

```ts ignore
function asyncGenerator<T = unknown, TReturn = any, TNext = unknown>(
  it: unknown,
): it is AsyncGenerator<T, TReturn, TNext>;
```

Check if the given value is an async generator, which is an asynchronous
iterable iterator (`AsyncIterableIterator`) that was created using the
`async function*() { ... }` syntax.

This is the type of value **_returned_** when an async generator function
(`async function*() {}`) is called. To check for the function itself, use
`isAsyncGeneratorFunction` instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an AsyncGenerator, `false` otherwise.

###### Category

`Generators`

#### Examples

```ts
import { isAsyncGenerator } from "jsr:@nick/is/async-generator";

async function* genFn() {
  yield await Promise.resolve(1);
}
const gen = genFn();

console.log(isAsyncGenerator(gen)); // true
console.log(isAsyncGenerator(genFn)); // false
```

## `asyncGeneratorFunction`

#### Signature

```ts ignore
function asyncGeneratorFunction(it: unknown): it is AsyncGeneratorFunction;
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

## `asyncIterable`

#### Signature

```ts ignore
function asyncIterable<T>(it: unknown): it is AsyncIterable<T>;
```

Checks if a given value is an object with a `Symbol.asyncIterator` method.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `AsyncIterable`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterable } from "jsr:@nick/is/async-iterable";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterable(iter)); // true
```

## `asyncIterableIterator`

#### Signature

```ts ignore
function asyncIterableIterator<T>(it: unknown): it is AsyncIterableIterator<T>;
```

Checks if a value is an `AsyncIterableIterator`, which is an `AsyncIterator`
with a `Symbol.asyncIterator` method that returns a reference to itself.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `AsyncIterableIterator`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import isAsyncIterableIterator from "jsr:@nick/is/async-iterable-iterator";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterableIterator(iter)); // true
console.log(isAsyncIterableIterator(iter[Symbol.asyncIterator]())); // true
```

## `asyncIterableObject`

#### Signature

```ts ignore
function asyncIterableObject<T>(it: unknown): it is AsyncIterableObject<T>;
```

Checks if a given value is an `AsyncIterable` object.

Similar to its synchronous counterpart, `isIterableObject`, this function
requires the value to be a non-primitive (and non-null) object, and also
implement a `[Symbol.asyncIterator]` method as per the `AsyncIterable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterable object, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";

// synchronous iterables will not pass
console.log(isAsyncIterableObject([1, 2])); // false
console.log(isAsyncIterableObject(new Map())); // false
console.log(isAsyncIterableObject(new Set())); // false

// non-object iterables will not pass
console.log(isAsyncIterableObject("foo")); // false

// only asynchronous iterable objects will pass
const iter = {
  async *[Symbol.asyncIterator]() {
    yield await Promise.resolve(1);
  },
};
console.log(isAsyncIterableObject(iter)); // true
```

```ts
import { isAsyncIterableObject } from "jsr:@nick/is/async-iterable-object";

const kv = await Deno.openKv();
console.log(isAsyncIterableObject(kv)); // false

const iter = kv.list({ prefix: [] });
console.log(isAsyncIterableObject(iter)); // true

kv.close();
```

## `asyncIterator`

#### Signature

```ts ignore
function asyncIterator<T>(it: unknown): it is AsyncIterator<T>;
```

Check if the given value is an async iterator, which is an object that has a
`"next"` method that returns a promise for an iterator result.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an async iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isAsyncIterator } from "jsr:@nick/is/async-iterator";

const iter = (async function* () {
  yield 1;
})();
console.log(isAsyncIterator(iter)); // true
console.log(isAsyncIterator(iter[Symbol.asyncIterator]())); // true
```

## `bigint`

#### Signature

```ts ignore
function bigint(it: unknown): it is bigint;
```

Checks if the given value is a primitive bigint value.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a primitive bigint, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isBigInt } from "jsr:@nick/is/bigint";

const x: unknown = 123n;
if (isBigInt(x)) {
  console.log(x + 1n);
  //          ^? const x: bigint
}
```

## `bigInt`

#### Signature

```ts ignore
function bigInt(it: unknown): it is bigint;
```

Checks if the given value is a primitive bigint value.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a primitive bigint, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isBigInt } from "jsr:@nick/is/bigint";

const x: unknown = 123n;
if (isBigInt(x)) {
  console.log(x + 1n);
  //          ^? const x: bigint
}
```

## `bigInt64Array`

#### Signature

```ts ignore
function bigInt64Array(it: unknown): it is BigInt64Array;
```

Check if the given value is a `BigInt64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `BigInt64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBigInt64Array } from "jsr:@nick/is/bigint64array";

const arr = new BigInt64Array(8);
isBigInt64Array(arr); // true
isBigInt64Array(arr.buffer); // false
```

## `bigintObject`

#### Signature

```ts ignore
function bigintObject(it: unknown): it is BigInt;
```

Checks if a value is a BigInt object, which is a boxed-primitive BigInt that was
created by wrapping a primitive BigInt (bigint) in the `Object()` wrapper
function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive BigInt object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBigIntObject } from "jsr:@nick/is/bigint-object";

isBigIntObject(Object(BigInt("2"))); // true

isBigIntObject(BigInt("2")); // false
isBigIntObject(2n); // false
```

## `bigIntObject`

#### Signature

```ts ignore
function bigIntObject(it: unknown): it is BigInt;
```

Checks if a value is a BigInt object, which is a boxed-primitive BigInt that was
created by wrapping a primitive BigInt (bigint) in the `Object()` wrapper
function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive BigInt object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBigIntObject } from "jsr:@nick/is/bigint-object";

isBigIntObject(Object(BigInt("2"))); // true

isBigIntObject(BigInt("2")); // false
isBigIntObject(2n); // false
```

## `bigUint64Array`

#### Signature

```ts ignore
function bigUint64Array(it: unknown): it is BigUint64Array;
```

Check if the given value is a `BigUint64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `BigUint64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBigUint64Array } from "jsr:@nick/is/biguint64array";

const arr = new BigUint64Array(8);
isBigUint64Array(arr); // true
isBigUint64Array(arr.buffer); // false
```

## `boolean`

#### Signature

```ts ignore
function boolean(it: unknown): it is boolean;
```

Checks if the given value is a boolean.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boolean, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isBoolean } from "jsr:@nick/is/boolean";
isBoolean("true"); // false
isBoolean(true); // true
```

## `booleanObject`

#### Signature

```ts ignore
function booleanObject(it: unknown): it is Boolean;
```

Checks if a value is a Boolean object, which is a boxed-primitive boolean that
was created either with the `new Boolean()` syntax, or by wrapping a primitive
boolean in the `Object()` wrapper function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive boolean object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBooleanObject } from "jsr:@nick/is/boolean-object";

isBooleanObject(Object(true)); // true
isBooleanObject(new Boolean(true)); // true

isBooleanObject(Boolean(true)); // false
isBooleanObject(true); // false
```

## `both`

#### Signature

```ts ignore
function both<L, R>(
  left: (it: any, ...args: any[]) => it is L,
  right: (it: any, ...args: any[]) => it is R,
): (it: unknown) => it is L & R;
```

Combine two different predicates into one, such that the resulting function
returns `true` if a given input satisfies **both** of the two predicates.

This creates a logical AND between the two predicates, narrowing types to an
intersection of the two original predicates' return types. This helps you
compose custom reusable type guards with ease, reducing boilerplate and
repetition.

**Note**: just like in the rest of TypeScript code, if you attempt to use an
incompatible pair of predicates in this function, the resulting type it will
narrow to will probably be `never`. For this reason, don't use this function to
combine mutually exclusive predicates like `isString` and `isNumber`.

##### Parameters

| Name        | Info                           |
| :---------- | :----------------------------- |
| **`left`**  | The first predicate to check.  |
| **`right`** | The second predicate to check. |

##### Returns

A new predicate that returns `true` if both
[left](#left "Jump to symbol: 'left'") and
[right](#right "Jump to symbol: 'right'") are satisfies by a given input.

###### Category

`Composition`

#### Examples

```ts
import { is, isBoth } from "@nick/is";

// creating a custom type guard by hand
const isEmpty = <T>(
  it: T,
): it is T & { readonly length: 0 } => (
  "length" in Object(it) && Object(it).length === 0
);

// composing a custom type guard with `isBoth`
const isEmptyString = isBoth(is.string, isEmpty);
//    ^? const isEmptyString: (it: unknown) => it is string & { readonly length: 0 }

// using the custom type guard
isEmptyString(""); // true
isEmptyString("foo"); // false
isEmptyString([]); // false
```

## `boxedPrimitive`

#### Signature

```ts ignore
function boxedPrimitive<T extends BoxedPrimitive>(
  it: T | {} | null | undefined,
): it is T;
```

Checks if a value is a boxed-primitive object, which is an object that was
created by wrapping a primitive value in the `Object()` wrapper function, or by
using the `new` operator with the `String`, `Number`, or `Boolean` constructors
(`Symbol` and `BigInt` do not support the `new` operator).

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isBoxedPrimitive } from "jsr:@nick/is/boxed-primitive";

isBoxedPrimitive(new String("abc")); // true
isBoxedPrimitive(new Number(42)); // true
isBoxedPrimitive(new Boolean(true)); // true

isBoxedPrimitive("abc"); // false
isBoxedPrimitive(42); // false
isBoxedPrimitive(true); // false
```

## `boxedPrimitive`

#### Signature

```ts ignore
function boxedPrimitive(it: unknown): it is BoxedPrimitive;
```

## `boxedPrimitive`

#### Signature

```ts ignore
function boxedPrimitive(it: unknown): it is BoxedPrimitive;
```

## `bufferSource`

#### Signature

```ts ignore
function bufferSource(it: unknown): it is BufferSource;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is an `ArrayBuffer`,
`SharedArrayBuffer`, or an `ArrayBufferView`, which includes `TypedArray`s and
`DataView`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a BufferSource object, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isBufferSource } from "jsr:@nick/is/buffer-source";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);

isBufferSource(buffer); // true
isBufferSource(view); // true
isBufferSource(array); // true
```

## `class`

#### Signature

```ts ignore
function class<T, A extends readonly unknown[] = readonly any[], P extends  object | null = Is<T,  object | null>>(it: unknown): it is Class<T, A, P>;
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

## `closer`

#### Signature

```ts ignore
function closer(it: unknown): it is Closer;
```

Checks if a given value implments the `Deno.Closer` interface, which means it
has a `close` method that can be called to release associated resources.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value implements `Deno.Closer`, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isCloser } from "jsr:@nick/is/closer";

const file = await Deno.open("file.txt");
isCloser(file); // true

const socket = new WebSocket("ws://example.com");
isCloser(socket); // true
```

## `constructor`

#### Signature

```ts ignore
function constructor<T>(it: unknown): it is Constructor<T>;
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

## `dataView`

#### Signature

```ts ignore
function dataView(it: unknown): it is DataView;
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

## `date`

#### Signature

```ts ignore
function date(it: unknown): it is Date;
```

Checks if a given value is a `Date` instance. This is a more reliable check than
`it instanceof Date` because it also works across different realms.

This only returns `true` for values that are valid `Date` instances, meaning
`Object.create(Date.prototype)` and similar constructs will return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Date` instance, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isDate } from "jsr:@nick/is/date";

isDate(new Date()); // true
isDate(new Date(0)); // true
isDate(new Date("2021-01-01")); // true
```

## `dateString`

#### Signature

```ts ignore
function dateString(it: unknown): it is DateString;
```

Checks if a given value is a valid date string.

The term "date string" refers to any string that can be parsed by the native
`Date` constructor as-is, without the help of any external libraries or any
preparatory formatting. One of the most common formats is ISO 8601, which is
what the native `Date` constructor itself uses in the `toDateString()` and
`toISOString()` methods.

Note: This function does not check if the date string is in a specific format
like ISO 8601. It only checks if the string can be parsed into a valid Date
instance.

Values that fail to pass this check would be expected to result in `NaN` when
passed to the `Date` constructor and coerced to a primitive number (e.g.
`+new Date("2023-13-01")`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid date string; otherwise, `false`.

###### Category

`Guards`

#### Examples

```ts
import { isDateString } from "@nick/is/date_string";

console.assert(isDateString("4/20/2024"), "it works!");
console.assert(isDateString("2024-04-20"), "it works!");
console.assert(isDateString("02.32.2025"), "wtf lol");
```

## `defined`

#### Signature

```ts ignore
function defined<T>(it: T | undefined): it is T;
```

Checks if a value is not `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is not `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isDefined } from "jsr:@nick/is/defined";

isDefined(null); // true
isDefined(undefined); // false
isDefined(0); // true
isDefined(void 0); // false
isDefined(""); // true
```

```ts
import { isDefined } from "jsr:@nick/is/defined";

let value: number | undefined;
if (isDefined(value)) {
  value += 1;
  // ^? let value: number
} else {
  value;
  // ^? let value: undefined
  value = 0;
  // ^? let value: number | undefined
}
```

## `disposable`

#### Signature

```ts ignore
function disposable(it: unknown): it is Disposable;
```

Checks if a value is an object that implements the `Disposable` API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an object that implements the `Disposable` API, or
`false` otherwise.

###### Category

`Explicit Resource Management`

#### Examples

```ts
import { isDisposable } from "@nick/is/disposable";

const disposable = {
  [Symbol.dispose]() {
    return;
  },
};

const asyncDisposable = {
  async [Symbol.asyncDispose]() {
    await Promise.resolve();
  },
};

isDisposable(disposable); // true
isDisposable(asyncDisposable); // false
```

## `either`

#### Signature

```ts ignore
function either<L, R>(
  left: (it: any, ...args: any[]) => it is L,
  right: (it: any, ...args: any[]) => it is R,
): (it: unknown) => it is L | R;
```

Combine two different predicates into one, such that the resulting function
returns `true` if a given input satisfies **either** of the two predicates.

This creates a logical OR between the two predicates, narrowing types to a union
of the two original predicates' return types. This helps you compose custom
reusable type guards with ease, reducing boilerplate and repetition.

##### Parameters

| Name        | Info                           |
| :---------- | :----------------------------- |
| **`left`**  | The first predicate to check.  |
| **`right`** | The second predicate to check. |

##### Returns

A new predicate that returns `true` if either
[left](#left "Jump to symbol: 'left'") or
[right](#right "Jump to symbol: 'right'") are satisfies by a given input.

###### Category

`Composition`

#### Examples

```ts
import { isEither, isString, isSymbol } from "@nick/is";

// creating a custom type guard that checks for strings or symbols
const isStringOrSymbol = isEither(isString, isSymbol);
//    ^? const isStringOrSymbol: (it: unknown) => it is string | symbol

// using the custom type guard
isStringOrSymbol("foo"); // true
isStringOrSymbol(Symbol.iterator); // true
isStringOrSymbol(123); // false
```

## `empty`

#### Signature

```ts ignore
function empty(it: string): it is "";
```

Checks if a given value is an empty string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty string, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty(""); // true
isEmpty("a"); // false
```

## `empty`

#### Signature

```ts ignore
function empty(it: readonly unknown[]): it is readonly [];
```

Checks if a given value is an empty Array object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty Array object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty([]); // true
isEmpty([1]); // false
```

## `empty`

#### Signature

```ts ignore
function empty<U extends ArrayLike<any>>(it: U): it is U & {
  readonly length: 0;
};
```

Checks if a given value is an empty ArrayLike object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty ArrayLike object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty([]); // true
isEmpty([1]); // false
```

## `empty`

#### Signature

```ts ignore
function empty(it: unknown): it is {
  [K in undefined]: never;
};
```

Checks if a given value is an empty object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty object, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

## `empty`

#### Signature

```ts ignore
function empty(it: unknown): it is
  | ""
  | {
    length: 0;
  }
  | {
    [K in undefined]: never;
  };
```

Checks if a given value is an empty object, array, or string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an empty object, array, or string, `false` otherwise.

###### Category

`Chain`

#### Examples

```ts
import { isEmpty } from "@nick/is/empty";

isEmpty({}); // true
isEmpty([]); // true
isEmpty(""); // true

isEmpty({ a: 1 }); // false
isEmpty([1]); // false
isEmpty("a"); // false
```

## `enum`

#### Signature

```ts ignore
function enum<T extends EnumLike>(it: T | unknowns): it is Enum<T>;
```

Check if the given value appears to be a TypeScript `enum` object, which is a
plain object with either all string keys that point to numeric or string values,
or string/numeric keys that point to string/numeric values, which are inversely
mapped to each other (e.g. `A.B === 1 && A[1] === "B"`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value appears to be a TypeScript `enum` object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isEnum } from "@nick/is/enum";

enum Foo {
  Bar, // 0
  Baz, // 1
  Qux, // 2
  // implicit reverse mapping:
  // 0: "Bar", 1: "Baz", 2: "Qux",
}

isEnum(Foo); // true

const obj = { Bar: 0, Baz: 1, Qux: 2 };
isEnum(obj); // false
```

## `enum`

#### Signature

```ts ignore
function enum<T extends EnumLike = EnumLike>(it: unknown): it is Enum<T>;
```

## `enum`

#### Signature

```ts ignore
function enum(it: unknown): it is Enum;
```

## `error`

#### Signature

```ts ignore
function error(it: unknown): it is Error;
```

Check if the given value is an instance of the native Error class, or of a
subclass that inherits from it, like `TypeError` or `RangeError`.

This is more reliable than `instanceof Error`, because it also works across
different realms (e.g. iframes / web workers / browser tabs). It's also more
strict than `instanceof` because it **does not** recognize objects that were
created with `Object.create(Error.prototype)` or `Object.setPrototypeOf` as
being a subclass of `Error`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an error, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isError } from "jsr:@nick/is/error";

const err = new Error("Something went wrong");
console.log(isError(err)); // true
console.log(isError(err.message)); // false
```

## `even`

#### Signature

```ts ignore
function even<T extends Numeric>(it: T): IsEven<T>;
```

Checks if a given number / bigint is an even number. Returns `true` if it is
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                                               |
| :------- | :----------------------------------------------------------------- |
| **`it`** | The number or bigint to check, either literal or in string format. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `even`

#### Signature

```ts ignore
function even(it: number | `${number}`): it is Even<number>;
```

Checks if a given number / numeric string is even. Returns `true` if the value
is divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                   |
| :------- | :------------------------------------- |
| **`it`** | The number or numeric string to check. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `even`

#### Signature

```ts ignore
function even(it: bigint | `${bigint}`): it is Even<bigint>;
```

Checks if a given bigint or bigint string is an even number. Returns `true` if
the value is divisible by `2`, and `false` otherwise. This usually corresponds
to integers that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                                  |
| :------- | :------------------------------------ |
| **`it`** | The bigint or bigint string to check. |

##### Returns

`true` if the value is even, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `even`

#### Signature

```ts ignore
function even(it: unknown): it is Even;
```

Checks if a given number / bigint is even. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `0`, `2`, `4`, `6`, or `8`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an even finite integer, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isEven } from "@nick/is/even";

isEven(0); // true
isEven(1); // false
isEven(2n); // true
isEven(3n); // false
```

## `extendedSetLike`

#### Signature

```ts ignore
function extendedSetLike<T>(it: unknown): it is ExtendedSetLike<T>;
```

Checks whether the provided value is a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object. The `ExtendedSetLike` interface is the full implementation of a
`ExtendedSetLike` object, including all the composition methods like `union`,
`intersection`, `difference`, and `symmetricDifference`.

The `ExtendedSetLike` type is the shape of the native `Set` object in JavaScript
**after** the introduction of the TC39 Proposal for Set Methods, which added the
composition methods to the API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object; otherwise, `false`.

###### Category

`Guards`

## `falsy`

#### Signature

```ts ignore
function falsy(it: unknown): it is Falsy;
```

Check if the given value is falsy.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is falsy, `false` otherwise.

#### Examples

```ts
import { isFalsy } from "@nick/is/falsy";

isFalsy(null); // true
isFalsy(undefined); // true
isFalsy(0); // true
isFalsy(""); // true
isFalsy(false); // true
isFalsy([]); // false
```

## `finite`

#### Signature

```ts ignore
function finite<N = number>(it: N): it is Finite<N>;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

## `finite`

#### Signature

```ts ignore
function finite(it: unknown): it is Finite;
```

Checks if a given value is a finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFinite } from "jsr:@nick/is/integer";

console.log(isFinite(0)); // true
console.log(isFinite(1)); // true
console.log(isFinite(-1)); // true
console.log(isFinite(1.5)); // true
console.log(isFinite(NaN)); // false
console.log(isFinite(Infinity)); // false
```

## `finiteInteger`

#### Signature

```ts ignore
function finiteInteger<N = number>(it: N): it is FiniteInteger<N>;
```

Checks if a given value is a finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFiniteInteger } from "jsr:@nick/is/integer";

console.log(isFiniteInteger(0)); // true
console.log(isFiniteInteger(1)); // true
console.log(isFiniteInteger(-1)); // true
console.log(isFiniteInteger(1.5)); // false
console.log(isFiniteInteger(NaN)); // false
console.log(isFiniteInteger(Infinity)); // false
```

## `finiteInteger`

#### Signature

```ts ignore
function finiteInteger(it: unknown): it is FiniteInteger;
```

Checks if a given value is a finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFiniteInteger } from "jsr:@nick/is/integer";

console.log(isFiniteInteger(0)); // true
console.log(isFiniteInteger(1)); // true
console.log(isFiniteInteger(-1)); // true
console.log(isFiniteInteger(1.5)); // false
console.log(isFiniteInteger(NaN)); // false
console.log(isFiniteInteger(Infinity)); // false
```

## `float`

#### Signature

```ts ignore
function float<N = number>(it: N): it is Float<N>;
```

Checks if the value is a floating-point number. Supports both single and double
precision floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a floating-point number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat } from "@nick/is/float";

isFloat(1); // false
isFloat(1.0); // false
isFloat(1.1); // true
isFloat(1.00001e1); // true
```

## `float`

#### Signature

```ts ignore
function float(it: unknown): it is Float;
```

Checks if the value is a floating-point number. Supports both single and double
precision floating-point numbers.

## Rules for what is (and isn't) seen as a floating-point number

- `0`, `-0` are considered valid floating-point numbers, and return `true`.
- `1`, `-1` and other integers (or _"non-floating"_ values) return `false`.
- Special cases like `Infinity`, `-Infinity`, and `NaN` return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a floating-point number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat } from "@nick/is/float";

isFloat(0); // true
isFloat(1); // false
isFloat(1.0); // false
isFloat(1.1); // true
isFloat(1.00001e1); // true
```

## `float16`

#### Signature

```ts ignore
function float16<N = number>(it: N): it is Float16<N>;
```

Checks if a value is a 16-bit half-precision floating-point number, also known
as `float16` or `binary16`, as defined by the IEEE 754 standard.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a half-precision floating-point number. Otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat16 } from "@nick/is/float16";

isFloat16(1); // true
isFloat16(1.5); // true
isFloat16(3.140625); // true
isFloat16(NaN); // false
isFloat16(1.1); // false
isFloat16(Math.PI); // false
isFloat16(Infinity); // false
```

## `float16`

#### Signature

```ts ignore
function float16(it: unknown): it is Float16;
```

Checks if a value is a 16-bit half-precision floating-point number, also known
as `float16` or `binary16`, as defined by the IEEE 754 standard.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a half-precision floating-point number. Otherwise
`false`.

###### Category

`Numbers`

## `float16`

#### Signature

```ts ignore
function float16(it: any): it is Float16;
```

## `float16Array`

#### Signature

```ts ignore
function float16Array(it: unknown): it is Float16Array;
```

Check if the given value is a `Float16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat16Array } from "jsr:@nick/is/float16array";

const arr = new Float16Array(8);
isFloat16Array(arr); // true
isFloat16Array(arr.buffer); // false
```

## `float32`

#### Signature

```ts ignore
function float32<N = number>(it: N): it is Float32<N>;
```

Checks if the value is a floating-point number. Supports single-precision
floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a single-precision floating-point number, otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat32 } from "@nick/is/float32";

isFloat32(1); // false
isFloat32(1.0); // false
isFloat32(1.1); // true
isFloat32(1.00001e1); // true
```

## `float32`

#### Signature

```ts ignore
function float32(it: unknown): it is Float32;
```

Checks if the value is a floating-point number. Supports single-precision
floating-point numbers.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a single-precision floating-point number, otherwise
`false`.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat32 } from "@nick/is/float32";

isFloat32(1); // false
isFloat32(1.0); // false
isFloat32(1.1); // true
isFloat32(1.00001e1); // true
```

## `float32Array`

#### Signature

```ts ignore
function float32Array(it: unknown): it is Float32Array;
```

Check if the given value is a `Float32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat32Array } from "jsr:@nick/is/float32array";

const arr = new Float32Array(8);
isFloat32Array(arr); // true
isFloat32Array(arr.buffer); // false
```

## `float64`

#### Signature

```ts ignore
function float64<N = number>(it: N): it is Float64<N>;
```

Checks if the value is a float64-precision floating-point number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a float64-precision floating-point number, `false`
otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat64 } from "jsr:@nick/is/float64";

console.log(isFloat64(1.5)); // true
console.log(isFloat64(0)); // false
console.log(isFloat64(1)); // false
console.log(isFloat64(-1)); // false
console.log(isFloat64(NaN)); // false
console.log(isFloat64(Infinity)); // false
```

## `float64`

#### Signature

```ts ignore
function float64(it: unknown): it is Float64;
```

Checks if the value is a float64-precision floating-point number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a float64-precision floating-point number, `false`
otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isFloat64 } from "jsr:@nick/is/float64";

console.log(isFloat64(1.5)); // true
console.log(isFloat64(0)); // false
console.log(isFloat64(1)); // false
console.log(isFloat64(-1)); // false
console.log(isFloat64(NaN)); // false
console.log(isFloat64(Infinity)); // false
```

## `float64Array`

#### Signature

```ts ignore
function float64Array(it: unknown): it is Float64Array;
```

Check if the given value is a `Float64Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Float64Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isFloat64Array } from "jsr:@nick/is/float64array";

const arr = new Float64Array(8);
isFloat64Array(arr); // true
isFloat64Array(arr.buffer); // false
```

## `function`

#### Signature

```ts ignore
function function<T extends FunctionOrConstructor>(it:  T | unknowns): it is FunctionOrConstructor<any, any, any> extends T ? Function : T;
```

Check if the given value is a function.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a function, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isFunction } from "jsr:@nick/is/function";

console.log(isFunction(() => {})); // true
console.log(isFunction(function () {})); // true
console.log(isFunction(class {})); // true
console.log(isFunction(new Function())); // true
console.log(isFunction({})); // false
console.log(isFunction(1)); // false
```

## `function`

#### Signature

```ts ignore
function function<T = any, A extends readonly any[] = any[]>(it:  Fn<T, A> | unknowns): it is Fn<T, A>;
```

## `function`

#### Signature

```ts ignore
function function<T = any, A extends readonly any[] = any[], R = any>(it:  ThisFn<T, A, R> | unknowns): it is ThisFn<T, A, R>;
```

## `function`

#### Signature

```ts ignore
function function(it: unknown): it is Function;
```

## `function`

#### Signature

```ts ignore
function function(it: unknown): it is FunctionOrConstructor;
```

## `generator`

#### Signature

```ts ignore
function generator<T = unknown, TReturn = any, TNext = unknown>(
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

## `generatorFunction`

#### Signature

```ts ignore
function generatorFunction(it: unknown): it is GeneratorFunction;
```

Checks if a given value is a generator function, which is a function that uses a
distinct syntax and returns a generator object when called.

To check if a value is a generator object (the actual iterable iterator that is
typically used within `for..of` loops), use
[isGenerator](#isgenerator "Jump to symbol: 'isGenerator'") instead.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a generator function, `false` otherwise.

###### Category

`Generators`

#### Examples

```ts
import { isGeneratorFunction } from "jsr:@nick/is/generator-function";

function* gen() {
  yield 1;
}
const iter = gen();

console.log(isGeneratorFunction(gen)); // true
console.log(isGeneratorFunction(iter)); // false
```

Another example, highlighting the differences between a generator function and a
generator object, using a custom iterable class:

```ts
import { isGenerator, isGeneratorFunction, isIterable } from "jsr:@nick/is";

class Foo {
  *delegate() {
    return yield* this; // <- thanks to the [Symbol.iterator] method below
  }

  *[Symbol.iterator](): IterableIterator<number> {
    for (let i = 0; i < 10; i++) yield i;
  }
}

const foo = new Foo();

// Since Foo.prototype has a [Symbol.iterator] method, it is iterable:
if (isIterable(foo)) {
  // This will log the numbers 1 through 10
  for (const value of foo) console.log(value);
}

// However, it is _not_ a generator not generator function:
isGenerator(foo); // false
isGeneratorFunction(foo); // false

// It's delegate and [Symbol.iterator] methods _are_ generator functions:
isGeneratorFunction(foo.delegate); // true
isGeneratorFunction(foo[Symbol.iterator]); // true

// And they _return_ generator objects...:
const iter1 = foo.delegate();
const iter2 = foo[Symbol.iterator]();
isGenerator(iter1); // true
isGenerator(iter2); // true

// ...which are also iterable:
isIterable(iter1); // true
isIterable(iter2); // true
```

#### Notes

This function will **_not_** return `true` for async generator functions, as
they are a distinctly different type of function that returns a different type
of object. Use
[isAsyncGeneratorFunction](#isasyncgeneratorfunction "Jump to symbol: 'isAsyncGeneratorFunction'")
to check for an async generator function instead.

## `identifier`

#### Signature

```ts ignore
function identifier<T extends string>(it: T): it is Identifier<T>;
```

Checks if a given string is a valid JavaScript identifier, meaning it can be
used as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("export")); // false
```

## `identifier`

#### Signature

```ts ignore
function identifier(it: unknown): it is Identifier;
```

Checks if a given value is a valid JavaScript identifier, meaning it can be used
as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("export")); // false
```

## `identifier`

#### Signature

```ts ignore
function identifier(it: unknown): it is Identifier;
```

Checks if a given value is a valid JavaScript identifier, meaning it can be used
as the name of a variable, function, property, label, or export.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a valid identifier, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isIdentifier } from "jsr:@nick/is/identifier";

console.log(isIdentifier("a")); // true
console.log(isIdentifier("1")); // false
console.log(isIdentifier("exportm z=-0fdxz")); // true
```

## `infinity`

#### Signature

```ts ignore
function infinity(it: unknown): it is Infinity;
```

Checks if a given value is a non-finite number (`Infinity` or `-Infinity`).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInfinity } from "@nick/is/number/infinity";

console.log(isInfinity(Infinity)); // true
console.log(isInfinity(-Infinity)); // true
console.log(isInfinity(1)); // false
console.log(isInfinity(-1)); // false
console.log(isInfinity(NaN)); // false
```

## `inRange`

#### Signature

```ts ignore
function inRange<
  V extends number,
  R extends Derange,
  Min extends number = R extends [infer M extends number, number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? 0
    : R[0],
  Max extends number = R extends [number, infer M extends number, Exclusivity?]
    ? M
    : R[1] extends Exclusivity ? R[0]
    : R[1],
  Tex extends Exclusivity = Either<
    R extends [number, number, infer T extends Exclusivity] ? T
      : R[1] extends Exclusivity ? R[1]
      : undefined,
    "[)"
  >,
>(value: V, ...range: [...R] | Derange): value is InRange<V, Min, Max, Tex>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: Derange): value is InRange<number>;
```

Checks if a given number is within a given range. The range can be specified in
multiple ways:

- As a tuple with the minimum and maximum values, and optional exclusivity
  string of either "[]", "(]", "[)", or "()".
- As a tuple with a maximum value and an optional exclusivity string. This
  assumes a minimum value of `0`.
- As a single number, which is assumed to be the maximum value, with an assumed
  minimum value of `0` and an assumed exclusivity string of "[]".

##### Parameters

| Name        | Info                        |
| :---------- | :-------------------------- |
| **`value`** | The number to check.        |
| **`range`** | The range to check against. |

##### Returns

`true` if the number is within the range, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { inRange } from "jsr:@nick/is/number/in_range";

console.log(inRange(1, 0, 2)); // true
console.log(inRange(1, 2, 0)); // false
console.log(inRange(1, 2)); // true
console.log(inRange(1, 2, "(]")); // true
```

## `inRange`

#### Signature

```ts ignore
function inRange(value: number, ...range: any[]): undefined;
```

## `instance`

#### Signature

```ts ignore
function instance<T>(it: unknown, constructor: Constructor<T>): it is T;
```

Checks if a given value is an instance of a specific class or constructor.

This is a type guard function that can be used to determine if a value is an
instance of a class or constructor function, even if the class is not directly
accessible in the current scope.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `instance`

#### Signature

```ts ignore
function instance<T extends Constructor<any>>(
  it: unknown,
  constructor: T,
): it is InstanceType<T>;
```

Checks if a given value is an instance of a particular class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `instance`

#### Signature

```ts ignore
function instance<T extends Constructor<P>, P = InstanceType<T>>(
  it: unknown,
  constructor: T | Constructor<P> | P,
): it is InstanceType<T>;
```

Checks if a given value is an instance of a specific class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `instanceof`

#### Signature

```ts ignore
function instanceof<T>(it: unknown, constructor: Constructor<T>): it is T;
```

Checks if a given value is an instance of a specific class or constructor.

This is a type guard function that can be used to determine if a value is an
instance of a class or constructor function, even if the class is not directly
accessible in the current scope.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `instanceof`

#### Signature

```ts ignore
function instanceof<T extends Constructor<any>>(it: unknown, constructor: T): it is InstanceType<T>;
```

Checks if a given value is an instance of a particular class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `instanceof`

#### Signature

```ts ignore
function instanceof<T extends Constructor<P>, P = InstanceType<T>>(it: unknown, constructor:  T | Constructor<P> | P): it is InstanceType<T>;
```

Checks if a given value is an instance of a specific class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `int16`

#### Signature

```ts ignore
function int16<N = number>(it: unknown): it is Int16<N>;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/number";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `int16`

#### Signature

```ts ignore
function int16(it: unknown): it is Int16;
```

Checks if a value is a 16-bit integer (between -32768 and 32767).

To check for an **unsigned** 16-bit integer (0-65535), use
[isUint16](#isuint16 "Jump to symbol: 'isUint16'").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a 16-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt16 } from "@nick/is/number";

isInt16(32768); // false
isInt16(-32769); // false
isInt16(1); // true
isInt16(32767); // true
isInt16(-32768); // true
```

## `int16Array`

#### Signature

```ts ignore
function int16Array(it: unknown): it is Int16Array;
```

Check if the given value is a `Int16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt16Array } from "jsr:@nick/is/int16array";

const arr = new Int16Array(8);
isInt16Array(arr); // true
isInt16Array(arr.buffer); // false
```

## `int32`

#### Signature

```ts ignore
function int32<N = number>(it: N): it is Int32<N>;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `int32`

#### Signature

```ts ignore
function int32(it: unknown): it is Int32;
```

Checks if a given value is a signed 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is a signed 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`int32` `number`

#### Examples

```ts
import { isInt32 } from "jsr:@type/number/int32";

console.log(isInt32(0x7FFFFFFF)); // <- true
console.log(isInt32(-2147483649)); // <- false
```

## `int32Array`

#### Signature

```ts ignore
function int32Array(it: unknown): it is Int32Array;
```

Check if the given value is a `Int32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt32Array } from "jsr:@nick/is/int32array";

const arr = new Int32Array(8);
isInt32Array(arr); // true
isInt32Array(arr.buffer); // false
```

## `int8`

#### Signature

```ts ignore
function int8<N = number>(it: N): it is Int8<N>;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

isInt8(1); // true
isInt8(1.0); // false
isInt8(1.1); // false
isInt8(1.00001e1); // false
```

## `int8`

#### Signature

```ts ignore
function int8(it: unknown): it is Int8;
```

Checks if a given value is a signed 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a signed 8-bit integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInt8 } from "@nick/is/int8";

console.log(isInt8(1)); // true
console.log(isInt8(1.0)); // false
console.log(isInt8(1.1)); // false
console.log(isInt8(1.00001e1)); // false
```

## `int8Array`

#### Signature

```ts ignore
function int8Array(it: unknown): it is Int8Array;
```

Check if the given value is a `Int8Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Int8Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isInt8Array } from "jsr:@nick/is/int8array";

const arr = new Int8Array(8);
isInt8Array(arr); // true
isInt8Array(arr.buffer); // false
```

## `integer`

#### Signature

```ts ignore
function integer<N = number>(it: N): it is Integer<N>;
```

Checks if a given value is an integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInteger } from "jsr:@nick/is/integer";

console.log(isInteger(0)); // true
console.log(isInteger(1)); // true
console.log(isInteger(-1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
```

## `integer`

#### Signature

```ts ignore
function integer(it: unknown): it is Integer;
```

Checks if a given value is an integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isInteger } from "jsr:@nick/is/integer";

console.log(isInteger(0)); // true
console.log(isInteger(1)); // true
console.log(isInteger(-1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
```

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace<S extends string>(
  it: S,
): it is IsWhitespace<S, S, string extends S ? WhitespaceString<S> : never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespace } from "jsr:@nick/is/whitespace";

console.log(isWhitespace("   ")); // true
console.log(isWhitespace("abc")); // false
console.log(isWhitespace("  a ")); // false
console.log(isWhitespace("")); // false
console.log(isWhitespace(" \n\t ")); // true
```

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace(it: unknown): it is WhitespaceString;
```

## `isWhitespace`

#### Signature

```ts ignore
function isWhitespace(it: unknown): it is WhitespaceString;
```

## `isWhitespaceChar`

#### Signature

```ts ignore
function isWhitespaceChar(it: unknown): it is Whitespace;
```

Checks if a given character is a whitespace character.

This function checks if the provided character is one of the recognized
whitespace characters, including spaces, tabs, newlines, and additional Unicode
whitespace characters.

##### Parameters

| Name     | Info                    |
| :------- | :---------------------- |
| **`it`** | The character to check. |

##### Returns

`true` if the character is a whitespace character, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespaceChar } from "jsr:@nick/is/whitespace";

console.log(isWhitespaceChar(" ")); // true
console.log(isWhitespaceChar("\n")); // true
console.log(isWhitespaceChar("\t")); // true
console.log(isWhitespaceChar("a")); // false
```

## `isWhitespaceCode`

#### Signature

```ts ignore
function isWhitespaceCode(it: unknown): it is WhitespaceCode;
```

Checks if a given value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike<S extends string>(
  it: S,
): it is IsWhitespace<S, S, never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike<N extends number>(
  it: N,
): it is IsWhitespaceCode<N, N, never>;
```

Checks if the provided value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: Iterable<string>): it is Iterable<Whitespace>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: number): it is WhitespaceCode;
```

Checks if the provided value is a whitespace character code.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(it: unknown): it is WhitespaceLike;
```

## `isWhitespaceLike`

#### Signature

```ts ignore
function isWhitespaceLike(
  it: unknown,
): it is string | WhitespaceCode | Iterable<Whitespace>;
```

## `iterable`

#### Signature

```ts ignore
function iterable<T>(it: unknown): it is Iterable<T>;
```

Checks if a given value is an iterable. This includes arrays, strings, maps,
sets, and any other value with a `Symbol.iterator` method. If you need to check
for iterable objects specifically, use `isIterableObject`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterable, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterable } from "jsr:@nick/is/iterable";

console.log(isIterable([1, 2])); // true
console.log(isIterable("foo")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({ [Symbol.iterator]: () => {} })); // true
console.log(isIterable({})); // false
```

## `iterableIterator`

#### Signature

```ts ignore
function iterableIterator<T>(it: unknown): it is IterableIterator<T>;
```

Checks if a given value is an `IterableIterator`, which is an iterator object
that also has a `Symbol.iterator` method that returns a reference to itself.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an `IterableIterator`, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterableIterator } from "jsr:@nick/is/iterable-iterator";

const iter = [1, 2][Symbol.iterator](); // Array iterator
console.log(isIterableIterator(iter)); // true
console.log(isIterableIterator(iter[Symbol.iterator]())); // true
console.log(isIterableIterator("foo"[Symbol.iterator]())); // false
```

## `iterableObject`

#### Signature

```ts ignore
function iterableObject<T>(it: unknown): it is IterableObject<T>;
```

Checks if a given value is an iterable object. This includes arrays, maps, and
sets, but not strings or other non-object iterables.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterable object, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterableObject } from "jsr:@nick/is/iterable-object";

console.log(isIterableObject([1, 2])); // true
console.log(isIterableObject(new Map())); // true
console.log(isIterableObject(new Set())); // true
console.log(isIterableObject({ [Symbol.iterator]: () => {} })); // true
console.log(isIterableObject("foo")); // false
```

## `iterator`

#### Signature

```ts ignore
function iterator<T>(it: unknown): it is Iterator<T>;
```

Check if the given value is an iterator object. This includes arrays, maps,
sets, and any other value with a `.next` method.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isIterator } from "jsr:@nick/is/iterator";

const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
console.log(isIterator(iterator)); // true
console.log(isIterator(iterable)); // false
```

## `keyof`

#### Signature

```ts ignore
function keyof<T extends {}, K extends PropertyKey = keyof T>(
  o: T,
  k: K,
): k is K & keyof T;
```

###### Category

`Objects`

#### Examples

```ts
import { isKeyOf } from "jsr:@nick/is/keyof";

const obj = { a: 1, b: 2, c: 3 };

console.log(isKeyOf(obj, "a")); // true
console.log(isKeyOf(obj, "b")); // true
console.log(isKeyOf(obj, "c")); // true
console.log(isKeyOf(obj, "d")); // false
```

## `keyOf`

#### Signature

```ts ignore
function keyOf<T extends {}, K extends PropertyKey = keyof T>(
  o: T,
  k: K,
): k is K & keyof T;
```

###### Category

`Objects`

#### Examples

```ts
import { isKeyOf } from "jsr:@nick/is/keyof";

const obj = { a: 1, b: 2, c: 3 };

console.log(isKeyOf(obj, "a")); // true
console.log(isKeyOf(obj, "b")); // true
console.log(isKeyOf(obj, "c")); // true
console.log(isKeyOf(obj, "d")); // false
```

## `map`

#### Signature

```ts ignore
function map<K = unknown, V = unknown>(it: unknown): it is Map<K, V>;
```

Checks if a given value is a `Map` instance. This is a more reliable check than
`it instanceof Map` because it works across different realms, and it does not
require the `Map` constructor to be the same as the one in the current
environment that the code is running in.

It also is more strict than `it instanceof Map`, and does not consider any
objects created via `Object.create(Map.prototype)` (or similar constructs) as
valid `Map` instances, while they would pass the `instanceof` check.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Map` instance, `false` otherwise.

###### Category

`Keyed Collections`

#### Examples

```ts
import { isMap } from "jsr:@nick/is/map";

isMap(new Map()); // true
isMap(new WeakMap()); // false
isMap({}); // false
isMap(new Set()); // false
```

```ts
import { isMap } from "jsr:@nick/is/map";

const fakeMap = Object.create(Map.prototype);
console.log(isMap(fakeMap)); // false
console.log(fakeMap instanceof Map); // true (?!)
```

## `mapIterator`

#### Signature

```ts ignore
function mapIterator<K, V>(it: unknown): it is MapIterator<K, V>;
```

Check if the given value is a map iterator, which is an iterable iterator that
yields key-value pairs from a Map object. This is the type of object returned by
the `Map.prototype.entries` and `Map.prototype[Symbol.iterator]` methods.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a map iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isMapIterator } from "jsr:@nick/is/map-iterator";

const map = new Map([["foo", 1], ["bar", 2]]);
const iterator = map.entries();
console.log(isMapIterator(iterator)); // true
console.log(isMapIterator(map)); // false
```

## `mapLike`

#### Signature

```ts ignore
function mapLike<K, V>(it: unknown): it is MapLike<K, V>;
```

Checks whether a given value is a
[`MapLike`](#maplike "Jump to symbol: 'MapLike'") object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `MapLike` object; otherwise, `false`.

## `missing`

#### Signature

```ts ignore
function missing(it: unknown): it is null | undefined;
```

Check if a given value is missing, which is either `null` or `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `null` or `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isMissing } from "jsr:@nick/is/missing";

isMissing(null); // true
isMissing(undefined); // true
isMissing(0); // false
isMissing(""); // false
isMissing(false); // false
```

## `nan`

#### Signature

```ts ignore
function nan<N = number>(it: N): it is NaN<N>;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `nan`

#### Signature

```ts ignore
function nan(it: unknown): it is NaN;
```

Checks if a given value is `NaN` (not a number). This is a type-safe alias of
the global `isNaN` function,

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `NaN`, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNaN } from "jsr:@type/number";

console.log(isNaN(0)); // false
console.log(isNaN(1)); // false
console.log(isNaN(1.5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
```

## `negative`

#### Signature

```ts ignore
function negative<N = number>(it: N): it is Negative<N>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

## `negative`

#### Signature

```ts ignore
function negative(it: unknown): it is Negative<number>;
```

Checks if a given value is a negative number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`negative`

#### Examples

```ts
import { isNegative } from "jsr:@nick/is/integer";

console.log(isNegative(0)); // false
console.log(isNegative(1)); // false
console.log(isNegative(1.5)); // false
console.log(isNegative(NaN)); // false
console.log(isNegative(Infinity)); // false

console.log(isNegative(-0)); // true
console.log(isNegative(-1)); // true
console.log(isNegative(-Infinity)); // true
```

## `negativeFinite`

#### Signature

```ts ignore
function negativeFinite<N = number>(it: N): it is NegativeFinite<N>;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `negativeFinite`

#### Signature

```ts ignore
function negativeFinite(it: unknown): it is NegativeFinite;
```

Checks if a given value is a negative finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeFiniteNumber(0)); // false
console.log(isNegativeFiniteNumber(1)); // false
console.log(isNegativeFiniteNumber(-1)); // true
console.log(isNegativeFiniteNumber(1.5)); // false
console.log(isNegativeFiniteNumber(NaN)); // false
console.log(isNegativeFiniteNumber(Infinity)); // false
```

## `negativeInfinity`

#### Signature

```ts ignore
function negativeInfinity(it: unknown): it is NegativeInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `negative` `infinity`

#### Examples

```ts
import { isNegativeInfinity } from "@nick/is/number/infinity";

console.log(isNegativeInfinity(Infinity)); // false
console.log(isNegativeInfinity(-Infinity)); // true
console.log(isNegativeInfinity(1)); // false
console.log(isNegativeInfinity(-1)); // false
console.log(isNegativeInfinity(NaN)); // false
```

## `negativeInteger`

#### Signature

```ts ignore
function negativeInteger<N = number>(it: N): it is NegativeInteger<N>;
```

Checks if a given value is a negative integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeInteger } from "jsr:@nick/is/integer";

console.log(isNegativeInteger(0)); // false
console.log(isNegativeInteger(1)); // false
console.log(isNegativeInteger(-1)); // true
console.log(isNegativeInteger(1.5)); // false
console.log(isNegativeInteger(NaN)); // false
console.log(isNegativeInteger(Infinity)); // false
```

## `negativeInteger`

#### Signature

```ts ignore
function negativeInteger(it: unknown): it is NegativeInteger<number>;
```

Checks if a given value is a negative integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeInteger } from "jsr:@nick/is/integer";

console.log(isNegativeInteger(0)); // false
console.log(isNegativeInteger(1)); // false
console.log(isNegativeInteger(-1)); // true
console.log(isNegativeInteger(1.5)); // false
console.log(isNegativeInteger(NaN)); // false
console.log(isNegativeInteger(Infinity)); // false
```

## `negativeNonZero`

#### Signature

```ts ignore
function negativeNonZero<N = number>(it: N): it is NegativeNonZero<N>;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `negativeNonZero`

#### Signature

```ts ignore
function negativeNonZero(it: unknown): it is NegativeNonZero;
```

Checks if a given value is a negative nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero number, `false` otherwise.

#### Examples

```ts
import { isNegativeNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroNumber(0)); // false
console.log(isNegativeNonZeroNumber(1)); // false
console.log(isNegativeNonZeroNumber(-1)); // true
console.log(isNegativeNonZeroNumber(1.5)); // false
console.log(isNegativeNonZeroNumber(NaN)); // false
console.log(isNegativeNonZeroNumber(Infinity)); // false
```

## `negativeNonZeroFinite`

#### Signature

```ts ignore
function negativeNonZeroFinite<N = number>(
  it: N,
): it is NegativeNonZeroFinite<N>;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `negativeNonZeroFinite`

#### Signature

```ts ignore
function negativeNonZeroFinite(it: unknown): it is NegativeNonZeroFinite;
```

Checks if a given value is a negative nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteNumber(0)); // false
console.log(isNegativeNonZeroFiniteNumber(1)); // false
console.log(isNegativeNonZeroFiniteNumber(-1)); // true
console.log(isNegativeNonZeroFiniteNumber(1.5)); // false
console.log(isNegativeNonZeroFiniteNumber(NaN)); // false
console.log(isNegativeNonZeroFiniteNumber(Infinity)); // false
```

## `negativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function negativeNonZeroFiniteInteger<N = number>(
  it: N,
): it is NegativeNonZeroFiniteInteger<N>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `negativeNonZeroFiniteInteger`

#### Signature

```ts ignore
function negativeNonZeroFiniteInteger(
  it: unknown,
): it is NegativeNonZeroFiniteInteger<number>;
```

Checks if a given value is a negative nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroFiniteInteger(0)); // false
console.log(isNegativeNonZeroFiniteInteger(1)); // false
console.log(isNegativeNonZeroFiniteInteger(-1)); // true
console.log(isNegativeNonZeroFiniteInteger(1.5)); // false
console.log(isNegativeNonZeroFiniteInteger(NaN)); // false
console.log(isNegativeNonZeroFiniteInteger(Infinity)); // false
```

## `negativeNonZeroInteger`

#### Signature

```ts ignore
function negativeNonZeroInteger<N = number>(
  it: N,
): it is NegativeNonZeroInteger<N>;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `negativeNonZeroInteger`

#### Signature

```ts ignore
function negativeNonZeroInteger(it: unknown): it is NegativeNonZeroInteger;
```

Checks if a given value is a negative nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a negative nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNegativeNonZeroInteger(0)); // false
console.log(isNegativeNonZeroInteger(1)); // false
console.log(isNegativeNonZeroInteger(-1)); // true
console.log(isNegativeNonZeroInteger(1.5)); // false
console.log(isNegativeNonZeroInteger(NaN)); // false
console.log(isNegativeNonZeroInteger(Infinity)); // true
```

## `negativeZero`

#### Signature

```ts ignore
function negativeZero<N = number>(it: N): it is NegativeZero<N>;
```

Checks if a given value is negative zero, which is a special numeric value in
JavaScript, distinctly different from it's positive counterpart. Checking for
negative zero involves more than simply `x === -0`, as `-0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `-0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero } from "jsr:@nick/is/number";

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(1)); // false
```

## `negativeZero`

#### Signature

```ts ignore
function negativeZero(it: unknown): it is NegativeZero;
```

Checks if a given value is negative zero, which is a special numeric value in
JavaScript, distinctly different from it's positive counterpart. Checking for
negative zero involves more than simply `x === -0`, as `-0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `-0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is negative zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero } from "jsr:@nick/is/number";

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(1)); // false
```

## `nonEmptyArray`

#### Signature

```ts ignore
function nonEmptyArray<T>(
  a: MaybeArray<T>,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

Checks if the given value is an array with at least one element of a specific
type.

##### Parameters

| Name       | Info                                                    |
| :--------- | :------------------------------------------------------ |
| **`it`**   | The value to check.                                     |
| **`test`** | The type guard to check the type of the array elements. |

##### Returns

`true` if the value is an array with at least one element of the specific type
(if a `test` predicate is provided), `false` otherwise.

###### Category

`Indexed Collections`

#### Examples

```ts
import { isNonEmptyArray } from "jsr:@nick/is/array";

console.log(isNonEmptyArray([])); // false
console.log(isNonEmptyArray([1, 2, 3])); // true
console.log(isNonEmptyArray({})); // false
```

```ts
import { isNonEmptyArray } from "jsr:@nick/is/array";
import { isString } from "jsr:@nick/is/string";
import { isNumber } from "jsr:@nick/is/number";
import { expectType } from "jsr:@nick/is/type/expect";

const arr: unknown[] = ["a", "b", "c"];

if (isNonEmptyArray(arr, isString)) {
  console.log(arr, "is an array of strings");
  //           ^? const arr: readonly [string, ...string[]]
  expectType<readonly [string, ...string[]]>(arr);
} else if (isNonEmptyArray(arr, isNumber)) {
  console.log(arr, "is an array of numbers");
  //           ^? const arr: readonly [number, ...number[]]
  expectType<readonly [number, ...number[]]>(arr);
} else {
  console.log(arr, "is not an array of strings or numbers");
  //           ^? const arr: readonly unknown[]
  expectType<readonly unknown[]>(arr);
}
```

## `nonEmptyArray`

#### Signature

```ts ignore
function nonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

## `nonEmptyArray`

#### Signature

```ts ignore
function nonEmptyArray<T>(
  a: unknown,
  test?: Predicate<T>,
): a is NonEmptyArray<T>;
```

## `nonZero`

#### Signature

```ts ignore
function nonZero<N = number>(it: N): it is NonZero<N>;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `nonZero`

#### Signature

```ts ignore
function nonZero(it: unknown): it is NonZero;
```

Checks if a given value is a nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero } from "jsr:@nick/is/number/nonzero";

console.log(isNonZero(1)); // true
console.log(isNonZero(-1)); // true
console.log(isNonZero(1.5)); // true

console.log(isNonZero(0)); // false
console.log(isNonZero(-0)); // false
console.log(isNonZero(NaN)); // false
console.log(isNonZero(Infinity)); // true
```

## `nonZeroFinite`

#### Signature

```ts ignore
function nonZeroFinite<N = number>(it: N): it is NonZeroFinite<N>;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

## `nonZeroFinite`

#### Signature

```ts ignore
function nonZeroFinite(it: unknown): it is NonZeroFinite;
```

Checks if a given value is a nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteNumber(0)); // false
console.log(isNonZeroFiniteNumber(1)); // true
console.log(isNonZeroFiniteNumber(-1)); // true
console.log(isNonZeroFiniteNumber(1.5)); // true
console.log(isNonZeroFiniteNumber(NaN)); // false
console.log(isNonZeroFiniteNumber(Infinity)); // true
```

## `nonZeroFiniteInteger`

#### Signature

```ts ignore
function nonZeroFiniteInteger<N = number>(it: N): it is NonZeroFiniteInteger<N>;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `nonZeroFiniteInteger`

#### Signature

```ts ignore
function nonZeroFiniteInteger(it: unknown): it is NonZeroFiniteInteger;
```

Checks if a given value is a nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroFiniteInteger(0)); // false
console.log(isNonZeroFiniteInteger(1)); // true
console.log(isNonZeroFiniteInteger(-1)); // true
console.log(isNonZeroFiniteInteger(1.5)); // false
console.log(isNonZeroFiniteInteger(NaN)); // false
console.log(isNonZeroFiniteInteger(Infinity)); // true
```

## `nonZeroInteger`

#### Signature

```ts ignore
function nonZeroInteger<N = number>(it: N): it is NonZeroInteger<N>;
```

Checks if a given value is a nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroInteger(0)); // false
console.log(isNonZeroInteger(1)); // true
console.log(isNonZeroInteger(-1)); // true
console.log(isNonZeroInteger(1.5)); // false
console.log(isNonZeroInteger(NaN)); // false
console.log(isNonZeroInteger(Infinity)); // true
```

## `nonZeroInteger`

#### Signature

```ts ignore
function nonZeroInteger(it: unknown): it is NonZeroInteger;
```

Checks if a given value is a nonzero integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a nonzero integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isNonZeroInteger(0)); // false
console.log(isNonZeroInteger(1)); // true
console.log(isNonZeroInteger(-1)); // true
console.log(isNonZeroInteger(1.5)); // false
console.log(isNonZeroInteger(NaN)); // false
console.log(isNonZeroInteger(Infinity)); // true
```

## `null`

#### Signature

```ts ignore
function null(it: unknown): it is null;
```

Checks if the value is `null`, and nothing else.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `null`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isNull } from "jsr:@nick/is/null";

isNull(null); // true
isNull(undefined); // false
isNull(0); // false
isNull(""); // false
isNull(false); // false
```

## `number`

#### Signature

```ts ignore
function number(it: unknown): it is number;
```

Checks if the given value is a number. This includes all numbers, without
distinguishing between `NaN`, `Infinity`, and other special values.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a number, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isNumber } from "jsr:@nick/is/number";

isNumber("123"); // false
isNumber(123); // true
```

```ts
import { isNumber } from "jsr:@nick/is/number";

const x: unknown = 123;
if (isNumber(x)) {
  console.log(x + 1);
  //          ^? const x: number
}
```

## `numberObject`

#### Signature

```ts ignore
function numberObject(it: unknown): it is Number;
```

Checks if a value is a Number object, which is a boxed-primitive number that was
created either with the `new Number()` syntax, or by wrapping a primitive number
in the `Object()` wrapper function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive number object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isNumberObject } from "jsr:@nick/is/number-object";

isNumberObject(Object(1)); // true
isNumberObject(new Number(1)); // true

isNumberObject(Number(1)); // false
isNumberObject(1); // false
```

## `object`

#### Signature

```ts ignore
function object(it: unknown): it is object;
```

Check if the given value is a non-null object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a non-null object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isObject } from "jsr:@nick/is/object";

console.log(isObject({})); // true
console.log(isObject(new class {}())); // true
console.log(isObject(new Object())); // true
console.log(isObject([])); // true

console.log(isObject(() => {})); // false
console.log(isObject(null)); // false
console.log(isObject(undefined)); // false
console.log(isObject(1)); // false
```

## `objectLike`

#### Signature

```ts ignore
function objectLike(it: unknown): it is object;
```

Check if a given value is a non-null object-like value, which includes plain
objects, arrays, functions, classes, class instances, and other objects.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is a non-null object-like value, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isObjectLike } from "jsr:@nick/is/object-like";

console.log(isObjectLike({})); // true
console.log(isObjectLike([])); // true
console.log(isObjectLike(() => {})); // true
console.log(isObjectLike(new class {}())); // true
console.log(isObjectLike(new Object())); // true
console.log(isObjectLike(null)); // false
console.log(isObjectLike(undefined)); // false
console.log(isObjectLike(1)); // false
```

## `odd`

#### Signature

```ts ignore
function odd<T = Numeric>(it: T): it is Odd<T>;
```

Checks if a given number / bigint is odd. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                                               |
| :------- | :----------------------------------------------------------------- |
| **`it`** | The number or bigint to check, either literal or in string format. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `odd`

#### Signature

```ts ignore
function odd(it: number | `${number}`): it is Odd<number>;
```

Checks if a given number / numeric string is odd. Returns `true` if the value is
not divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                   |
| :------- | :------------------------------------- |
| **`it`** | The number or numeric string to check. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `odd`

#### Signature

```ts ignore
function odd(it: bigint | `${bigint}`): it is Odd<bigint>;
```

Checks if a given bigint or bigint string is an odd number. Returns `true` if
the value is not divisible by `2`, and `false` otherwise. This usually
corresponds to integers that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                                  |
| :------- | :------------------------------------ |
| **`it`** | The bigint or bigint string to check. |

##### Returns

`true` if the value is odd, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `odd`

#### Signature

```ts ignore
function odd(it: unknown): it is Odd;
```

Checks if a given number / bigint is odd. Returns `true` if the value is not
divisible by `2`, and `false` otherwise. This usually corresponds to numbers
that end in `1`, `3`, `5`, `7`, or `9`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an odd finite integer, `false` otherwise.

###### Category

`Numeric`

#### Examples

```ts
import { isOdd } from "@nick/is/odd";

isOdd(1); // true
isOdd(2); // false
isOdd(3n); // true
isOdd(4n); // false
```

## `plainObject`

#### Signature

```ts ignore
function plainObject<T extends Record<string, any>>(it: unknown): it is T;
```

Check if the given value is a plain object, which is an object that either has a
prototype of `null` or `Object.prototype`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a plain object, `false` otherwise.

###### Category

`Objects`

#### Examples

```ts
import { isPlainObject } from "jsr:@nick/is/plain-object";

console.log(isPlainObject({})); // true
console.log(isPlainObject(new class {}())); // true
console.log(isPlainObject(new Object())); // true

console.log(isPlainObject([])); // false
console.log(isPlainObject(() => {})); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(undefined)); // false
console.log(isPlainObject(1)); // false
```

## `positive`

#### Signature

```ts ignore
function positive<N = number>(it: N): it is Positive<N>;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `positive`

#### Signature

```ts ignore
function positive(it: unknown): it is Positive;
```

Checks if a given value is a positive number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive number, `false` otherwise.

###### Category

`Numbers`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive } from "jsr:@nick/is/integer";

console.log(isPositive(0)); // true
console.log(isPositive(1)); // true
console.log(isPositive(-1)); // false
console.log(isPositive(1.5)); // true
console.log(isPositive(NaN)); // false
console.log(isPositive(Infinity)); // true
```

## `positiveFinite`

#### Signature

```ts ignore
function positiveFinite<N = number>(it: N): it is PositiveFinite<N>;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `positiveFinite`

#### Signature

```ts ignore
function positiveFinite(it: unknown): it is PositiveFinite;
```

Checks if a given value is a positive finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveFiniteNumber(0)); // false
console.log(isPositiveFiniteNumber(1)); // true
console.log(isPositiveFiniteNumber(-1)); // false
console.log(isPositiveFiniteNumber(1.5)); // true
console.log(isPositiveFiniteNumber(NaN)); // false
console.log(isPositiveFiniteNumber(Infinity)); // false
```

## `positiveInfinity`

#### Signature

```ts ignore
function positiveInfinity(it: unknown): it is PositiveInfinity;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive infinity, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `positive` `infinity`

#### Examples

```ts
import { isPositiveInfinity } from "@nick/is/number/infinity";

console.log(isPositiveInfinity(Infinity)); // false
console.log(isPositiveInfinity(-Infinity)); // true
console.log(isPositiveInfinity(1)); // false
console.log(isPositiveInfinity(-1)); // false
console.log(isPositiveInfinity(NaN)); // false
```

## `positiveInteger`

#### Signature

```ts ignore
function positiveInteger<N = number>(it: N): it is PositiveInteger<N>;
```

Checks if a given value is a positive integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveInteger } from "jsr:@nick/is/integer";

console.log(isPositiveInteger(0)); // true
console.log(isPositiveInteger(1)); // true
console.log(isPositiveInteger(-1)); // false
console.log(isPositiveInteger(1.5)); // false
console.log(isPositiveInteger(NaN)); // false
console.log(isPositiveInteger(Infinity)); // false
```

## `positiveInteger`

#### Signature

```ts ignore
function positiveInteger(it: unknown): it is PositiveInteger;
```

Checks if a given value is a positive integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveInteger } from "jsr:@nick/is/integer";

console.log(isPositiveInteger(0)); // true
console.log(isPositiveInteger(1)); // true
console.log(isPositiveInteger(-1)); // false
console.log(isPositiveInteger(1.5)); // false
console.log(isPositiveInteger(NaN)); // false
console.log(isPositiveInteger(Infinity)); // false
```

## `positiveNonZero`

#### Signature

```ts ignore
function positiveNonZero<N = number>(it: N): it is PositiveNonZero<N>;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `positiveNonZero`

#### Signature

```ts ignore
function positiveNonZero(it: unknown): it is PositiveNonZero;
```

Checks if a given value is a positive nonzero number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroNumber(0)); // false
console.log(isPositiveNonZeroNumber(1)); // true
console.log(isPositiveNonZeroNumber(-1)); // false
console.log(isPositiveNonZeroNumber(1.5)); // true
console.log(isPositiveNonZeroNumber(NaN)); // false
console.log(isPositiveNonZeroNumber(Infinity)); // true
```

## `positiveNonZero`

#### Signature

```ts ignore
function positiveNonZero(it: unknown): it is PositiveNonZero;
```

## `positiveNonZeroFinite`

#### Signature

```ts ignore
function positiveNonZeroFinite<N = number>(
  it: N,
): it is PositiveNonZeroFinite<N>;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `positiveNonZeroFinite`

#### Signature

```ts ignore
function positiveNonZeroFinite(it: unknown): it is PositiveNonZeroFinite;
```

Checks if a given value is a positive nonzero finite number.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite number, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteNumber } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteNumber(0)); // false
console.log(isPositiveNonZeroFiniteNumber(1)); // true
console.log(isPositiveNonZeroFiniteNumber(-1)); // false
console.log(isPositiveNonZeroFiniteNumber(1.5)); // true
console.log(isPositiveNonZeroFiniteNumber(NaN)); // false
console.log(isPositiveNonZeroFiniteNumber(Infinity)); // true
```

## `positiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function positiveNonZeroFiniteInteger<N = number>(
  it: N,
): it is PositiveNonZeroFiniteInteger<N>;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `positiveNonZeroFiniteInteger`

#### Signature

```ts ignore
function positiveNonZeroFiniteInteger(
  it: unknown,
): it is PositiveNonZeroFiniteInteger;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroFiniteInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroFiniteInteger(0)); // false
console.log(isPositiveNonZeroFiniteInteger(1)); // true
console.log(isPositiveNonZeroFiniteInteger(-1)); // false
console.log(isPositiveNonZeroFiniteInteger(1.5)); // false
console.log(isPositiveNonZeroFiniteInteger(NaN)); // false
console.log(isPositiveNonZeroFiniteInteger(Infinity)); // true
```

## `positiveNonZeroInteger`

#### Signature

```ts ignore
function positiveNonZeroInteger<N = number>(
  it: N,
): it is PositiveNonZeroInteger<N>;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `positiveNonZeroInteger`

#### Signature

```ts ignore
function positiveNonZeroInteger(it: unknown): it is PositiveNonZeroInteger;
```

Checks if a given value is a positive nonzero finite integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a positive nonzero finite integer, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveNonZeroInteger } from "jsr:@nick/is/integer";

console.log(isPositiveNonZeroInteger(0)); // false
console.log(isPositiveNonZeroInteger(1)); // true
console.log(isPositiveNonZeroInteger(-1)); // false
console.log(isPositiveNonZeroInteger(1.5)); // false
console.log(isPositiveNonZeroInteger(NaN)); // false
console.log(isPositiveNonZeroInteger(Infinity)); // true
```

## `positiveZero`

#### Signature

```ts ignore
function positiveZero<N = number>(it: N): it is PositiveZero<N>;
```

Checks if a given value is positive zero, which is a special numeric value in
JavaScript, distinctly different from it's negative counterpart. Checking for
positive zero involves more than simply `x === +0`, as `+0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `+0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero } from "jsr:@nick/is/number";

console.log(isPositiveZero(-0)); // false
console.log(isPositiveZero(0)); // true
console.log(isPositiveZero(-1)); // false
console.log(isPositiveZero(1)); // false
```

## `positiveZero`

#### Signature

```ts ignore
function positiveZero(it: unknown): it is PositiveZero;
```

Checks if a given value is positive zero, which is a special numeric value in
JavaScript, distinctly different from it's negative counterpart. Checking for
positive zero involves more than simply `x === +0`, as `+0` is coerced into `0`
in most contexts.

This function is designed to handle this edge case, and will return `true` only
if the value is **exactly** `+0`, and `false` for anything else.

This is quite useful for mathematical operations and projects where data
integrity and accuracy are paramount.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is positive zero, `false` otherwise.

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero } from "jsr:@nick/is/number";

console.log(isPositiveZero(-0)); // false
console.log(isPositiveZero(0)); // true
console.log(isPositiveZero(-1)); // false
console.log(isPositiveZero(1)); // false
```

## `present`

#### Signature

```ts ignore
function present<T>(it: T | null | undefined): it is NonNullable<T>;
```

Check if the given value is not `null` or `undefined`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is not null or undefined, or `false` otherwise.

###### Category

`Primitives`

###### See Also

- [isMissing](#ismissing "Jump to symbol: 'isMissing'") for the opposite of this
  function.

#### Examples

```ts
import { isPresent } from "jsr:@nick/is/present";

isPresent(null); // false
isPresent(undefined); // false
isPresent(0); // true
isPresent(""); // true
isPresent(false); // true
```

## `primitive`

#### Signature

```ts ignore
function primitive(it: unknown): it is Primitive;
```

Checks if a given value is a primitive string, number, bigint, boolean, symbol,
null, or undefined.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a primitive, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPrimitive } from "jsr:@nick/is/primitive";

isPrimitive("foo"); // true
isPrimitive(42); // true
isPrimitive(BigInt(42)); // true
isPrimitive(true); // true
isPrimitive(Symbol("foo")); // true
isPrimitive(null); // true
isPrimitive(undefined); // true

isPrimitive({}); // false
isPrimitive(new String("foo")); // false
isPrimitive(new Number(42)); // false
isPrimitive(new Boolean(true)); // false
```

## `printable`

#### Signature

```ts ignore
function printable(x: unknown): x is Printable;
```

Check if a value is printable, meaning it is either a `string`, `number`,
`bigint`, `boolean`, `null` or `undefined`. This is useful for logging and
debugging purposes. The complentary type
[`Printable`](#printable "Jump to symbol: 'Printable'") can be used on the
type-level to represent values that are usable within a template literal type
syntax.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is printable, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPrintable } from "jsr:@nick/is/printable";

console.log(isPrintable("hello")); // true
console.log(isPrintable(1)); // true
console.log(isPrintable(BigInt(1))); // true
console.log(isPrintable(true)); // true
console.log(isPrintable(null)); // true
console.log(isPrintable(undefined)); // true
console.log(isPrintable({})); // false
console.log(isPrintable(Symbol())); // false
```

## `promise`

#### Signature

```ts ignore
function promise<T>(it: unknown): it is Promise<T>;
```

Checks if a given value is a native `Promise` instance. This is a more reliable
alternative to `it instanceof Promise` because it also works across different
realms (e.g., iframes, workers, etc.).

Note: This guard does not consider custom promise-like objects with `.then`
methods to be promises. If your use case requires that, use `isPromiseLike`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Promise`, `false` otherwise.

###### Category

`Async/Await`

#### Examples

```ts
import { isPromise } from "jsr:@nick/is/promise";

console.log(isPromise(Promise.resolve())); // true
console.log(isPromise({ then: () => {} })); // false
console.log(isPromise({})); // false
```

## `promiseLike`

#### Signature

```ts ignore
function promiseLike<T>(it: unknown): it is PromiseLike<T>;
```

Check if the given value is a `PromiseLike` type, which includes both native
`Promise` instances and custom promise-like objects with a `.then` method
(sometimes referred to as "thenables").

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `PromiseLike`, `false` otherwise.

###### Category

`Async/Await`

#### Examples

```ts
import { isPromiseLike } from "jsr:@nick/is/promise-like";

console.log(isPromiseLike(Promise.resolve())); // true
console.log(isPromiseLike({ then: () => {} })); // true
console.log(isPromiseLike({})); // false
```

## `propertyKey`

#### Signature

```ts ignore
function propertyKey(value: unknown): value is PropertyKey;
```

Checks if the given value is of the `PropertyKey` type (i.e. string, number, or
symbol).

In JavaScript, a property key can technically only be a string or a symbol, and
all other values are coerced to strings. TypeScript includes numbers in its
definition of this type, and therefore so does this function. But it is worth
noting that even though a number _can_ be used to indexed access an array-like
object, the number is coerced to a string behind the scenes.

##### Parameters

| Name        | Info                |
| :---------- | :------------------ |
| **`value`** | The value to check. |

##### Returns

`true` if the value is a property key, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isPropertyKey } from "jsr:@nick/is/property-key";

isPropertyKey("foo"); // true
isPropertyKey(42); // true
isPropertyKey(Symbol("foo")); // true
isPropertyKey({ foo: "bar" }); // false
```

## `readableStream`

#### Signature

```ts ignore
function readableStream<R>(it: unknown): it is ReadableStream<R>;
```

Checks if [it](#it "Jump to symbol: 'it'") is a `ReadableStream` object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `ReadableStream`, `false` otherwise.

###### Category

`Streams`

#### Examples

```ts
import { isReadableStream } from "jsr:@nick/is/readable-stream";

const stream = new ReadableStream();
isReadableStream(stream); // true

const stream2 = new TransformStream();
isReadableStream(stream2); // false

const stream3 = new WritableStream();
isReadableStream(stream3); // false
```

## `reader`

#### Signature

```ts ignore
function reader(it: unknown): it is Reader;
```

Checks if a given value is an asynchronous reader, which is an object that
implements the `read` method as per Deno's `Reader` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an asynchronous Reader, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isReader } from "jsr:@nick/is/reader";

const file = await Deno.open("file.txt");
isReader(file); // true

const socket = new WebSocket("ws://example.com");
isReader(socket); // false
```

## `readerSync`

#### Signature

```ts ignore
function readerSync(it: unknown): it is ReaderSync;
```

Checks if a given value is a synchronous reader, which is an object that
implements the `readSync` method as per Deno's `ReaderSync` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a synchronous Reader, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isReaderSync } from "jsr:@nick/is/reader-sync";

const file = Deno.openSync("file.txt");
isReaderSync(file); // true

const socket = new WebSocket("ws://example.com");
isReaderSync(socket); // false
```

## `readonlyCollection`

#### Signature

```ts ignore
function readonlyCollection<T>(it: unknown): it is ReadonlyCollection<T>;
```

Checks whether the provided value is a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object. The `ReadonlyCollection` interface is the minimum requirement for a
value to be used in the composition methods found in `ExtendedSetLike`
implementations, such as `union`, `intersection`, `difference`, and
`symmetricDifference`.

This type is the **bare minimal** requirement for a value to be considered a
"set-like" object in JavaScript, and only requires the `has`, `keys`, and `size`
members to be present. As such, native `Set` objects and also native `Map`
objects both qualify as `ReadonlyCollection` objects. For a more specific check,
see [`isSetLike`](#issetlike "Jump to symbol: 'isSetLike'") or
[`isExtendedSetLike`](#isextendedsetlike "Jump to symbol: 'isExtendedSetLike'"),
which check for the full API of a Set object, with or without the composition
methods added by the TC39 proposal, respectively.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object; otherwise, `false`.

###### Category

`Guards`

## `readonlySetLike`

#### Signature

```ts ignore
function readonlySetLike<T>(it: unknown): it is ReadonlyCollection<T>;
```

Checks whether the provided value is a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object. The `ReadonlyCollection` interface is the minimum requirement for a
value to be used in the composition methods found in `ExtendedSetLike`
implementations, such as `union`, `intersection`, `difference`, and
`symmetricDifference`.

This type is the **bare minimal** requirement for a value to be considered a
"set-like" object in JavaScript, and only requires the `has`, `keys`, and `size`
members to be present. As such, native `Set` objects and also native `Map`
objects both qualify as `ReadonlyCollection` objects. For a more specific check,
see [`isSetLike`](#issetlike "Jump to symbol: 'isSetLike'") or
[`isExtendedSetLike`](#isextendedsetlike "Jump to symbol: 'isExtendedSetLike'"),
which check for the full API of a Set object, with or without the composition
methods added by the TC39 proposal, respectively.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object; otherwise, `false`.

###### Category

`Guards`

## `regexp`

#### Signature

```ts ignore
function regexp(it: unknown): it is RegExp;
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

## `regExp`

#### Signature

```ts ignore
function regExp(it: unknown): it is RegExp;
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

## `registeredSymbol`

#### Signature

```ts ignore
function registeredSymbol(it: unknown): it is RegisteredSymbol;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a registered symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isRegisteredSymbol } from "jsr:@nick/is/registered-symbol";

isRegisteredSymbol(Symbol.for("foo")); // true

isRegisteredSymbol(Symbol("foo")); // false
isRegisteredSymbol(Symbol.iterator); // false
isRegisteredSymbol("@@foo"); // false
```

```ts
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function doSomething(key: RegisteredSymbol): void {
  if (isRegisteredSymbol(key)) {
    // ... do something ...
  }
}

const key = Symbol.for("foo");
doSomething(key);
```

```ts
import {
  isRegisteredSymbol,
  RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function assertRegisteredSymbol(
  value: unknown,
): asserts value is RegisteredSymbol {
  if (!isRegisteredSymbol(value)) {
    throw new Error("Expected a registered symbol.");
  }
}
```

## `semver`

#### Signature

```ts ignore
function semver(it: unknown): it is SemVer;
```

Check if the given value is a valid semantic version string, according to the
Semantic Versioning 2.0.0 specification as per https://semver.org. This function
does not check if the version is a valid version range, but simply validates it
against the regular expression pattern from the specification.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is a valid semantic version string, `false` otherwise.

###### Category

`Strings`

#### Examples

```ts
import { isSemVer } from "jsr:@nick/is/semver";

console.log(isSemVer("1.2.3")); // true
console.log(isSemVer("1.2.3-alpha")); // true
console.log(isSemVer("1.2.3+build")); // true
console.log(isSemVer("1.2.3-alpha+build")); // true
console.log(isSemVer("1.2.3-alpha.1")); // true
console.log(isSemVer("1.2")); // false
```

## `set`

#### Signature

```ts ignore
function set<T>(it: unknown): it is Set<T>;
```

Checks if a given value is a `Set` instance. This is a more reliable check than
`it instanceof Set` because it also works across different realms.

It's also more strict than `instanceof` operations, only recognizing an object
as a `Set` instance if it was created with a valid construct operation of either
the `Set` constructor or a subclass of it. As such,
`Object.create(Set.prototype)` and similar avenues will return `false`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Set` instance, `false` otherwise.

###### Category

`Keyed Collections`

#### Examples

```ts
import { isSet } from "jsr:@nick/is/set";

isSet(new Set()); // true
isSet(new WeakSet()); // false
isSet(new Map()); // false
isSet([]); // false
isSet(Object.create(Set.prototype)); // false
```

## `setIterator`

#### Signature

```ts ignore
function setIterator<T>(it: unknown): it is SetIterator<T>;
```

Check if the given value is a set iterator, which is an iterable iterator that
yields key-value pairs from a Set object. This is the type of object returned by
the `Set.prototype.entries` and `Set.prototype[Symbol.iterator]` methods.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a set iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isSetIterator } from "jsr:@nick/is/set-iterator";

const set = new Set(["foo", "bar", "foo"]);
const iter = set[Symbol.iterator]();
console.log(isSetIterator(iterator)); // true
console.log(isSetIterator(set)); // false
```

## `setLike`

#### Signature

```ts ignore
function setLike<T>(it: unknown): it is SetLike<T>;
```

Checks whether the provided value is a
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") object. The `SetLike`
interface is the base implementation of a `ExtendedSetLike` object, without any
additional composition methods like `union` or `intersection`.

This type is the shape of the native `Set` object in JavaScript **prior** to the
introduction of the TC39 Proposal for Set Methods, which added the composition
methods to the API.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a [`SetLike`](#setlike "Jump to symbol: 'SetLike'")
object; otherwise, `false`.

###### Category

`Guards`

## `sharedArrayBuffer`

#### Signature

```ts ignore
function sharedArrayBuffer(it: unknown): it is SharedArrayBuffer;
```

Returns `true` if [`it`](#it "Jump to symbol: 'it'") is a `SharedArrayBuffer`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `SharedArrayBuffer`, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isSharedArrayBuffer } from "jsr:@nick/is/shared-array-buffer";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);

isSharedArrayBuffer(buffer); // false
isSharedArrayBuffer(shared); // true
```

## `string`

#### Signature

```ts ignore
function string(it: unknown): it is string;
```

Checks if the given value is a string.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isString } from "jsr:@nick/is/string";

const x: unknown = "hello";
if (isString(x)) {
  console.log(x.toUpperCase());
  //          ^? const x: string
}
```

## `stringIterator`

#### Signature

```ts ignore
function stringIterator<T extends string = string>(
  it: unknown,
): it is StringIterator<T>;
```

Check if the given value is a string iterator, which is an iterable iterator
that yields individual characters from a string literal or String object. This
is the type of object returned by `String.prototype[Symbol.iterator]`.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string iterator, `false` otherwise.

###### Category

`Iterables`

#### Examples

```ts
import { isStringIterator } from "jsr:@nick/is/string-iterator";

const str = "foo";
const iter = str[Symbol.iterator]();
console.log(isStringIterator(iterator)); // true
console.log(isStringIterator(str)); // false
```

## `stringObject`

#### Signature

```ts ignore
function stringObject(it: unknown): it is String;
```

Checks if a value is a string object, which is a boxed-primitive string that was
created via the `new String()` constructor, or by wrapping a primitive string in
the `Object()` wrapper function.

Boxed primitives are strongly discouraged in JavaScript, as they can lead to all
sorts of unexpected behavior and performance issues. As such, this function -
and the other boxed primitive functions like it - are provided for your
convenience, to help you easily ensure your code is not on the receiving end of
such behavior.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isStringObject } from "jsr:@nick/is/string-object";

isStringObject(new String("abc")); // true
isStringObject(Object("abc")); // true

isStringObject("abc"); // false
isStringObject("abc" as unknown); // false
```

## `symbol`

#### Signature

```ts ignore
function symbol(it: unknown): it is symbol;
```

Check if the given value is a symbol.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isSymbol } from "jsr:@nick/is/symbol";

isSymbol(Symbol("foo")); // true
isSymbol(Symbol.iterator); // true
isSymbol(Symbol.for("foo")); // true
isSymbol("@@foo"); // false
```

## `symbolObject`

#### Signature

```ts ignore
function symbolObject(it: unknown): it is Symbol;
```

Checks if a value is a symbol object, which is a boxed-primitive symbol that was
created by wrapping a primitive symbol in the `Object()` wrapper function.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a boxed-primitive symbol object; otherwise, `false`.

###### Category

`Boxed Primitives`

#### Examples

```ts
import { isSymbolObject } from "jsr:@nick/is/symbol-object";

isSymbolObject(Object(Symbol("abc"))); // true

isSymbolObject(Symbol("abc")); // false
isSymbolObject(Symbol.iterator); // false
isSymbolObject(Symbol.for("abc")); // false
isSymbolObject("@@abc"); // false
```

## `tagged`

#### Signature

```ts ignore
function tagged<O = {}, T extends string = string>(it: O): it is O & {
  readonly [Symbol.toStringTag]: NormalizeTag<T>;
};
```

Checks if a given value has a `Symbol.toStringTag` property, and optionally
checks if the value of that property matches the given
[tag](#tag "Jump to symbol: 'tag'").

##### Parameters

| Name      | Info                        |
| :-------- | :-------------------------- |
| **`it`**  | The value to check.         |
| **`tag`** | The value to check against. |

##### Returns

`true` if the value has a `Symbol.toStringTag` property that matches the given
[tag](#tag "Jump to symbol: 'tag'") (if provided), otherwise `false`.

###### Category

`Objects`

## `templateObject`

#### Signature

```ts ignore
function templateObject(it: unknown): it is TemplateObject;
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

## `templateStringsArray`

#### Signature

```ts ignore
function templateStringsArray(it: unknown): it is TemplateStringsArray;
```

Checks if the given value is a template strings array, which is an array of
strings with an own property named `raw` that also is an array of strings. This
is the type of array provided to tagged template literals for the first
argument, and is represented as the type `TemplateStringsArray` in TypeScript.

This predicate's type is a supertype of the one checked by its more lenient
counterpart,
[`isTemplateObject`](#istemplateobject "Jump to symbol: 'isTemplateObject'"),
which only checks if the value is an object with a `raw` property that is an
array of strings.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a TemplateStringsArray, `false` otherwise.

###### Category

`Template Literals`

#### Examples

```ts
import { isTemplateStringsArray } from "jsr:@nick/is/template-strings-array";

console.log(isTemplateStringsArray(["a", "b", "c"])); // false
console.log(isTemplateStringsArray({ raw: ["a", "b", "c"] })); // false

function print(strings: TemplateStringsArray, ...values: any[]): string;
function print(...vals: unknown[]): string;
function print(...vals: unknown[]): string {
  const [strings, ...values] = vals;
  if (isTemplateStringsArray(strings)) {
    return String.raw(strings, ...values);
  } else {
    return JSON.stringify(vals);
  }
}

print(["a", "b", "c"], 1, 2, 3); // '[["a", "b", "c"], 1, 2, 3]'
print`a${1}b${2}c${3}`; // a1b2c3
```

## `truthy`

#### Signature

```ts ignore
function truthy<U>(it: U): it is Exclude<U, Falsy>;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is truthy, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isTruthy } from "jsr:@nick/is/truthy";

isTruthy(1); // true
isTruthy("foo"); // true
isTruthy(true); // true
isTruthy({}); // true

isTruthy(0); // false
isTruthy(""); // false
isTruthy(false); // false
isTruthy(null); // false
isTruthy(undefined); // false
```

## `typedArray`

#### Signature

```ts ignore
function typedArray<T extends ArrayBufferLike = ArrayBufferLike>(
  it: TypedArray<T> | unknowns,
): it is TypedArray<T>;
```

Checks if a given value is a typed array, which is a view over a raw binary data
buffer (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into the
buffer. If the [type](#type "Jump to symbol: 'type'") parameter is given, it
checks if the value is that specific typed array type (e.g. `"Uint8Array"` ->
`Uint8Array`).

For a value to pass this check, it must be an instance of the intrinsic
`%TypedArray%` constructor, and have the `%TypedArrayPrototype%` prototype
inherited by all native typed array types:

- `Uint8Array`
- `Uint8ClampedArray`
- `Uint16Array`
- `Uint32Array`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Float16Array`
- `Float32Array`
- `Float64Array`
- `BigInt64Array`
- `BigUint64Array`

To check for a specific typed array type, use the `type` parameter or one of the
type-specific checks like `isUint8Array`, etc.

##### Parameters

| Name       | Info                                                         |
| :--------- | :----------------------------------------------------------- |
| **`it`**   | The value to check.                                          |
| **`type`** | Name of a specific typed array type to check for (optional). |

##### Returns

`true` if the value is a typed array, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isTypedArray } from "jsr:@nick/is/typed-array";

const arr = new Uint8Array(8);
isTypedArray(arr); // true
isTypedArray(arr, "Uint8Array"); // true
```

## `typedArray`

#### Signature

```ts ignore
function typedArray<T extends ArrayBufferLike = ArrayBufferLike>(
  it: unknown,
): it is TypedArray<T>;
```

Checks if a given value is a typed array, which is a view over a raw binary data
buffer (e.g. `ArrayBuffer`) that provides a fixed-size, typed view into the
buffer. If the [type](#type "Jump to symbol: 'type'") parameter is given, it
checks if the value is that specific typed array type (e.g. `"Uint8Array"` ->
`Uint8Array`).

For a value to pass this check, it must be an instance of the intrinsic
`%TypedArray%` constructor, and have the `%TypedArrayPrototype%` prototype
inherited by all native typed array types:

- `Uint8Array`
- `Uint8ClampedArray`
- `Uint16Array`
- `Uint32Array`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Float16Array`
- `Float32Array`
- `Float64Array`
- `BigInt64Array`
- `BigUint64Array`

To check for a specific typed array type, use the `type` parameter or one of the
type-specific checks like `isUint8Array`, etc.

##### Parameters

| Name       | Info                                                         |
| :--------- | :----------------------------------------------------------- |
| **`it`**   | The value to check.                                          |
| **`type`** | Name of a specific typed array type to check for (optional). |

##### Returns

`true` if the value is a typed array, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isTypedArray } from "jsr:@nick/is/typed-array";

const arr = new Uint8Array(8);
isTypedArray(arr); // true
isTypedArray(arr, "Uint8Array"); // true
```

## `typedArray`

#### Signature

```ts ignore
function typedArray<K extends TypedArrayTypeName, T extends ArrayBufferLike>(
  it: TypedArray<T> | unknowns,
  type: K,
): it is TypedArrayTypeMap<T>[K];
```

Checks if a given value is a typed array of a specific
[type](#type "Jump to symbol: 'type'"). The
[type](#type "Jump to symbol: 'type'") parameter must be one of the following
strings:

- `"Uint8Array"`
- `"Uint8ClampedArray"`
- `"Uint16Array"`
- `"Uint32Array"`
- `"Int8Array"`
- `"Int16Array"`
- `"Int32Array"`
- `"Float16Array"`
- `"Float32Array"`
- `"Float64Array"`
- `"BigInt64Array"`
- `"BigUint64Array"`

##### Parameters

| Name       | Info                                              |
| :--------- | :------------------------------------------------ |
| **`it`**   | The value to check.                               |
| **`type`** | Name of a specific typed array type to check for. |

##### Returns

`true` if the value is a typed array of the specified type, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isTypedArray } from "jsr:@nick/is/typed-array";

const arr = new Uint8Array(8);
isTypedArray(arr, "Uint8Array"); // true
isTypedArray(arr, "Uint16Array"); // false
```

## `typedArray`

#### Signature

```ts ignore
function typedArray<K extends TypedArrayTypeName, T extends ArrayBufferLike>(
  it: unknown,
  type: K,
): it is TypedArrayTypeMap<T>[K];
```

Checks if a given value is a typed array of a specific
[type](#type "Jump to symbol: 'type'"). The
[type](#type "Jump to symbol: 'type'") parameter must be one of the following
strings:

- `"Uint8Array"`
- `"Uint8ClampedArray"`
- `"Uint16Array"`
- `"Uint32Array"`
- `"Int8Array"`
- `"Int16Array"`
- `"Int32Array"`
- `"Float16Array"`
- `"Float32Array"`
- `"Float64Array"`
- `"BigInt64Array"`
- `"BigUint64Array"`

##### Parameters

| Name       | Info                                              |
| :--------- | :------------------------------------------------ |
| **`it`**   | The value to check.                               |
| **`type`** | Name of a specific typed array type to check for. |

##### Returns

`true` if the value is a typed array of the specified type, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isTypedArray } from "jsr:@nick/is/typed-array";

const arr = new Uint8Array(8);
isTypedArray(arr, "Uint8Array"); // true
isTypedArray(arr, "Uint16Array"); // false
```

## `typedArray`

#### Signature

```ts ignore
function typedArray(it: unknown, type?: string): it is TypedArray;
```

Checks if a given value is a typed array.

##### Parameters

| Name       | Info                                                         |
| :--------- | :----------------------------------------------------------- |
| **`it`**   | The value to check.                                          |
| **`type`** | Name of a specific typed array type to check for (optional). |

##### Returns

`true` if the value is a typed array, `false` otherwise.

###### Category

`Binary Data Structures`

## `uint16`

#### Signature

```ts ignore
function uint16<N = number>(it: N): it is Uint16<N>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `uint16`

#### Signature

```ts ignore
function uint16(it: unknown): it is Uint16<number>;
```

Checks if a given value is an unsigned 16-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 16-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `uint16Array`

#### Signature

```ts ignore
function uint16Array(it: unknown): it is Uint16Array;
```

Check if the given value is a `Uint16Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint16Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint16Array } from "jsr:@nick/is/uint16array";

const arr = new Uint16Array(8);
isUint16Array(arr); // true
isUint16Array(arr.buffer); // false
```

## `uint32`

#### Signature

```ts ignore
function uint32<N = number>(it: N): it is Uint32<N>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `uint32`

#### Signature

```ts ignore
function uint32(it: unknown): it is Uint32<number>;
```

Checks if a given value is an unsigned 32-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 32-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `uint32Array`

#### Signature

```ts ignore
function uint32Array(it: unknown): it is Uint32Array;
```

Check if the given value is a `Uint32Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint32Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint32Array } from "jsr:@nick/is/uint32array";

const arr = new Uint32Array(8);
isUint32Array(arr); // true
isUint32Array(arr.buffer); // false
```

## `uint8`

#### Signature

```ts ignore
function uint8<N = number>(it: N): it is Uint8<N>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `uint8`

#### Signature

```ts ignore
function uint8(it: unknown): it is Uint8<number>;
```

Checks if a given value is an unsigned 8-bit integer.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if `it` is an unsigned 8-bit integer, `false` otherwise.

###### Category

`Numbers`

###### Tags

`number` `unsigned` `integer`

#### Examples

```ts
import { isUint8 } from "jsr:@nick/is/uint8";

isUint8(1); // true
isUint8(128); // true
isUint8(0xFF); // true
isUint8(-1); // false
isUint8(420); // false
```

## `uint8Array`

#### Signature

```ts ignore
function uint8Array(it: unknown): it is Uint8Array;
```

Check if the given value is a `Uint8Array` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint8Array` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint8Array } from "jsr:@nick/is/uint8array";

const arr = new Uint8Array(8);
isUint8Array(arr); // true
isUint8Array(arr.buffer); // false
```

## `uint8ClampedArray`

#### Signature

```ts ignore
function uint8ClampedArray(it: unknown): it is Uint8ClampedArray;
```

Check if the given value is a `Uint8ClampedArray` instance.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `Uint8ClampedArray` instance, `false` otherwise.

###### Category

`Binary Data Structures`

#### Examples

```ts
import { isUint8ClampedArray } from "jsr:@nick/is/uint8clampedarray";

const arr = new Uint8ClampedArray(8);
isUint8ClampedArray(arr); // true
isUint8ClampedArray(arr.buffer); // false
```

## `undefined`

#### Signature

```ts ignore
function undefined(it: unknown): it is undefined;
```

Checks if the value is `undefined`, and nothing else.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is `undefined`, or `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isUndefined } from "jsr:@nick/is/undefined";

isUndefined(null); // false
isUndefined(undefined); // true
isUndefined(0); // false
isUndefined(void 0); // true
isUndefined(""); // false
```

```ts
import { isUndefined } from "jsr:@nick/is/undefined";

let value: number | undefined;
if (isUndefined(value)) {
  value;
  // ^? let value: undefined
  value = 0;
  // ^? let value: number | undefined
} else {
  value += 1;
  // ^? let value: number
}
```

## `uniqueSymbol`

#### Signature

```ts ignore
function uniqueSymbol(it: unknown): it is UniqueSymbol;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a unique symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isUniqueSymbol } from "jsr:@nick/is/unique-symbol";

isUniqueSymbol(Symbol("foo")); // true
isUniqueSymbol(Symbol.iterator); // false
isUniqueSymbol(Symbol.for("foo")); // false
```

## `url`

#### Signature

```ts ignore
function url(it: unknown): it is URL;
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

## `urlSearchParams`

#### Signature

```ts ignore
function urlSearchParams(it: unknown): it is URLSearchParams;
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

## `urlString`

#### Signature

```ts ignore
function urlString(it: unknown): it is URLString;
```

Checks if a value is a string that is a valid, parsable URL capable of being
passed to the `URL` constructor.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a URL string, `false` otherwise.

###### Category

`Web APIs`

#### Examples

```ts
import { isURLString } from "jsr:@nick/is/url-string";

console.log(isURLString("https://example.com")); // true
console.log(isURLString("data:")); // true
console.log(isURLString("https://foo")); // false
console.log(isURLString("example.com")); // false
```

## `weakKey`

#### Signature

```ts ignore
function weakKey(it: unknown): it is WeakKey;
```

Checks if a value is valid as a weak key, meaning it can be used as a key in a
`WeakMap`, a value in a `WeakSet`, or as the target of a `WeakRef`. Weak keys
can also be used as the "unregister token" argument in both the `register` and
`unregister` methods of the `FinalizationRegistry` API.

This always includes non-null objects, arrays, and functions. Since ES2023+ it
also includes symbols that are not globally registered via `Symbol.for`.

##### Parameters

| Name     | Info                 |
| :------- | :------------------- |
| **`it`** | The value you check. |

##### Returns

`true` if it is a valid WeakKey, otherwise `false`.

###### Category

`Weak Collections`

###### See Also

- https://mdn.io/WeakMap for more information on `WeakMap` and weak keys.

#### Examples

```ts
import { isWeakKey } from "jsr:@nick/is/weak-key";

// objects and functions are always valid weak keys:
console.log(isWeakKey({})); // true
console.log(isWeakKey(() => {})); // true

// starting in ES2023+, symbols are also valid weak keys:
console.log(isWeakKey(Symbol("a"))); // true
console.log(isWeakKey(Symbol.iterator)); // true

// however, globally registered symbols are not:
console.log(isWeakKey(Symbol.for("a"))); // false

// primitives are never valid weak keys:
console.log(isWeakKey(1)); // false
console.log(isWeakKey("a")); // false
```

## `weakMap`

#### Signature

```ts ignore
function weakMap<K extends WeakKey, V = any>(
  it: WeakMap<K, V> | null | undefined,
): it is WeakMap<K, V>;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is a `WeakMap` object. For more
information on this language feature, refer to the
[MDN Documentation](https://mdn.io/WeakMap).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

true if it is a `WeakMap`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakMap`

#### Examples

```ts
import { isWeakMap } from "jsr:@nick/is/weak-map";

const strong = new Map([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
const weak1 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);
const weak2 = new WeakSet([{ a: 1 }, { b: 2 }]);

isWeakMap(strong); // false
isWeakMap(weak1); // true
isWeakMap(weak2); // false
```

## `weakMap`

#### Signature

```ts ignore
function weakMap<K extends WeakKey, V = any>(it: unknown): it is WeakMap<K, V>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a `WeakMap` object. For more
information on this language feature, see the
[MDN Reference](https://mdn.io/WeakMap).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakMap`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakMap`

## `weakMap`

#### Signature

```ts ignore
function weakMap<K extends WeakKey, V = any>(
  obj: unknown,
): obj is WeakMap<K, V>;
```

## `weakRef`

#### Signature

```ts ignore
function weakRef<T extends WeakKey>(
  obj: WeakRef<T> | null | undefined,
): obj is WeakRef<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a WeakRef. For more
information on this type of object, refer to the
[MDN Documentation](https://mdn.io/WeakRef).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakRef`, otherwise false.

###### Category

`Weak Collections`

#### Examples

```ts
import { isWeakRef } from "jsr:@nick/is/weak-ref";

const strong = { a: 1 };
const weak1 = new WeakRef(strong);
const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);

console.log(isWeakRef(strong)); // false
console.log(isWeakRef(weak1)); // true
console.log(isWeakRef(weak2)); // false
```

## `weakRef`

#### Signature

```ts ignore
function weakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a WeakRef. For more
information on this type of object, refer to the
[MDN Documentation](https://mdn.io/WeakRef).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakRef`, otherwise false.

## `weakRef`

#### Signature

```ts ignore
function weakRef<T extends WeakKey>(obj: unknown): obj is WeakRef<T>;
```

## `weakSet`

#### Signature

```ts ignore
function weakSet<T extends WeakKey>(
  it: WeakSet<T> | null | undefined,
): it is WeakSet<T>;
```

Checks if [`it`](#it "Jump to symbol: 'it'") is a `WeakSet` object. For more
information on this language feature, refer to the
[MDN Documentation](https://mdn.io/WeakSet).

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

true if it is a `WeakSet`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakSet`

#### Examples

```ts
import { isWeakSet } from "jsr:@nick/is/weak-set";

const strong = new Set([1, 2]);
const weak1 = new WeakSet([{ a: 1 }, { b: 2 }]);
const weak2 = new WeakMap([[{ a: 1 }, 1], [{ b: 2 }, 2]]);

console.log(isWeakSet(strong)); // false
console.log(isWeakSet(weak1)); // true
console.log(isWeakSet(weak2)); // false
```

## `weakSet`

#### Signature

```ts ignore
function weakSet<T extends WeakKey>(it: unknown): it is WeakSet<T>;
```

Checks if [`obj`](#obj "Jump to symbol: 'obj'") is a `WeakSet` object. For more
information on this language feature, see the
[MDN Reference](https://mdn.io/WeakSet).

##### Parameters

| Name      | Info                |
| :-------- | :------------------ |
| **`obj`** | The value to check. |

##### Returns

true if it is a `WeakSet`, otherwise false.

###### Category

`Weak Collections`

###### Tags

`WeakSet`

## `weakSet`

#### Signature

```ts ignore
function weakSet<T extends WeakKey>(obj: unknown): obj is WeakSet<T>;
```

## `wellKnownSymbol`

#### Signature

```ts ignore
function wellKnownSymbol(it: unknown): it is WellKnownSymbol;
```

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a well-known symbol, `false` otherwise.

###### Category

`Primitives`

#### Examples

```ts
import { isWellKnownSymbol } from "jsr:@nick/is/well-known-symbol";

isWellKnownSymbol(Symbol.iterator); // true
isWellKnownSymbol(Symbol.asyncIterator); // true
isWellKnownSymbol(Symbol.hasInstance); // true

isWellKnownSymbol(Symbol.for("Symbol.iterator")); // false
isWellKnownSymbol(Symbol("Symbol.iterator")); // false
```

## `whitespace`

#### Signature

```ts ignore
function whitespace<S extends string>(
  it: S,
): it is IsWhitespace<S, S, string extends S ? WhitespaceString<S> : never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespace } from "jsr:@nick/is/whitespace";

console.log(isWhitespace("   ")); // true
console.log(isWhitespace("abc")); // false
console.log(isWhitespace("  a ")); // false
console.log(isWhitespace("")); // false
console.log(isWhitespace(" \n\t ")); // true
```

## `whitespace`

#### Signature

```ts ignore
function whitespace(it: unknown): it is WhitespaceString;
```

## `whitespace`

#### Signature

```ts ignore
function whitespace(it: unknown): it is WhitespaceString;
```

## `whitespaceChar`

#### Signature

```ts ignore
function whitespaceChar(it: unknown): it is Whitespace;
```

Checks if a given character is a whitespace character.

This function checks if the provided character is one of the recognized
whitespace characters, including spaces, tabs, newlines, and additional Unicode
whitespace characters.

##### Parameters

| Name     | Info                    |
| :------- | :---------------------- |
| **`it`** | The character to check. |

##### Returns

`true` if the character is a whitespace character, `false` otherwise.

###### Category

`Strings`

###### Tags

`whitespace`

#### Examples

```ts
import { isWhitespaceChar } from "jsr:@nick/is/whitespace";

console.log(isWhitespaceChar(" ")); // true
console.log(isWhitespaceChar("\n")); // true
console.log(isWhitespaceChar("\t")); // true
console.log(isWhitespaceChar("a")); // false
```

## `whitespaceCode`

#### Signature

```ts ignore
function whitespaceCode(it: unknown): it is WhitespaceCode;
```

Checks if a given value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike<S extends string>(
  it: S,
): it is IsWhitespace<S, S, never>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike<N extends number>(
  it: N,
): it is IsWhitespaceCode<N, N, never>;
```

Checks if the provided value is a whitespace character code.

This function checks if the provided value is a number and if it is included in
the list of recognized whitespace character codes, which is exposed as the
[`WHITESPACE\_CODES`](#whitespace-codes "Jump to symbol: 'WHITESPACE_CODES'")
array.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike(it: Iterable<string>): it is Iterable<Whitespace>;
```

Checks if the provided value is either a string or an iterable of strings that
consists entirely of whitespace characters.

This function is useful for validating input data, ensuring that it contains
characters other than whitespace.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a string or an iterable of strings that consists entirely
of whitespace characters, `false` otherwise.

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike(it: number): it is WhitespaceCode;
```

Checks if the provided value is a whitespace character code.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a whitespace character code, `false` otherwise.

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike(it: unknown): it is WhitespaceLike;
```

## `whitespaceLike`

#### Signature

```ts ignore
function whitespaceLike(
  it: unknown,
): it is string | WhitespaceCode | Iterable<Whitespace>;
```

## `writableStream`

#### Signature

```ts ignore
function writableStream<W>(it: unknown): it is WritableStream<W>;
```

Checks if [it](#it "Jump to symbol: 'it'") is a `WritableStream` object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `WritableStream`, `false` otherwise.

###### Category

`Streams`

#### Examples

```ts
import { isWritableStream } from "jsr:@nick/is/writable-stream";
a;
const stream = new WritableStream();
isWritableStream(stream); // true

const stream2 = new TransformStream();
isWritableStream(stream2); // false

const stream3 = new ReadableStream();
isWritableStream(stream3); // false
```

## `writer`

#### Signature

```ts ignore
function writer(it: unknown): it is Writer;
```

Checks if a given value is an asynchronous Writer, which is an object that
implements a `write` method as per Deno's `Writer` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is an asynchronous Writer, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isWriter } from "jsr:@nick/is/writer";

isWriter(Deno.stdout); // true
isWriter(Deno.stderr); // true
isWriter(Deno.stdin); // false
```

## `writerSync`

#### Signature

```ts ignore
function writerSync(it: unknown): it is WriterSync;
```

Checks if a given value is a synchronous writer, which is an object that
implements a `writeSync` method as per Deno's `WriterSync` interface.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a synchronous writer, `false` otherwise.

###### Category

`I/O`

#### Examples

```ts
import { isWriterSync } from "jsr:@nick/is/writer-sync";

const file = Deno.openSync("file.txt", { write: true });
isWriterSync(file); // true

const socket = new WebSocket("ws://example.com");
isWriterSync(socket); // false
```

## `zero`

#### Signature

```ts ignore
function zero<N = number>(it: N): it is Zero<N>;
```

Checks if a given value is a zero number. This includes both positive and
negative zero. It also supports numbers and numeric strings.

- To check exclusively for `-0`, use
  [isNegativeZero](#isnegativezero "Jump to symbol: 'isNegativeZero'") instead.
- To check exclusively for `+0` (meaning zero, but **not** negative zero), use
  [isPositiveZero](#ispositivezero "Jump to symbol: 'isPositiveZero'") instead.

###### Category

`Numbers`

## `zero`

#### Signature

```ts ignore
function zero(it: unknown): it is Zero;
```

Checks if a given value is a zero number. This includes both positive and
negative zero. It also supports numbers and numeric strings.

- To check exclusively for `-0`, use
  [isNegativeZero](#isnegativezero "Jump to symbol: 'isNegativeZero'") instead.
- To check exclusively for `+0` (meaning zero, but **not** negative zero), use
  [isPositiveZero](#ispositivezero "Jump to symbol: 'isPositiveZero'") instead.

###### Category

`Numbers`

## `ArrayBufferLike`

#### Signature

```ts ignore
export type ArrayBufferLike = ArrayBuffer | SharedArrayBuffer;
```

Represents an "ArrayBuffer-like" value, which is either an `ArrayBuffer` or
`SharedArrayBuffer` instance.

###### Category

`Binary Data Structures`

## `ArrayLikeObject`

#### Signature

```ts ignore
export type ArrayLikeObject<T = unknown> = ArrayLike<T> & object;
```

Represents an object that has a `length` property that is a finite unsigned
integer, and where the object is not a function. This is the type that the
function
[`isArrayLikeObject`](#isarraylikeobject "Jump to symbol: 'isArrayLikeObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`

## `AsyncIterableObject`

#### Signature

```ts ignore
export type AsyncIterableObject<T> = AsyncIterable<T> & object;
```

An object that implements the `AsyncIterable` interface. This is the type that
the
[isAsyncIterableObject](#isasynciterableobject "Jump to symbol: 'isAsyncIterableObject'")
function checks for and (narrows to).

##### Type Parameters

- **`T`**

---

###### Category

`Iterables`

## `BigInteger`

#### Signature

```ts ignore
export type BigInteger<N = bigint> = CastInt<N, INTEGER>;
```

Casts a value into a big integer type (which is really just a bigint). If the
value is not a bigint or a string containing a valid integer, it will resolve to
`never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `Cast`

#### Signature

```ts ignore
export type Cast<N, T> = Extract<N, number> & T;
```

Casts a value into a specific numeric type. If the value is not a number, it
will resolve to `never`, indicating its incompatibility with the type.

This is a low-level utility type that primarily serves as an internal helper for
more user-friendly types like [Integer](#integer "Jump to symbol: 'Integer'")
and [Positive](#positive "Jump to symbol: 'Positive'"). Unless you're building
custom numeric types with your own branding, you most likely never directly
handle this type in the wild.

##### Type Parameters

- **`N`**
- **`T`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { Cast } from "jsr:@nick/is/number";

declare const MY_DOUBLE: unique symbol;
type DOUBLE<N extends number = number> = Cast<N, typeof MY_DOUBLE>;

let x = 4.3210123210 as DOUBLE;
let y = 3.1415926535 as DOUBLE;

console.log(x + y); // 7.4626049745

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'DOUBLE'.
```

## `CastInt`

#### Signature

```ts ignore
export type CastInt<N, T> = Extract<N, bigint | `${bigint}`> & T;
```

Casts a value into a specific integer type. If the value is not a bigint, it
will resolve to `never`, indicating its incompatibility with the type.

This is a low-level utility type that primarily serves as an internal helper for
more user-friendly types like
[BigInteger](#biginteger "Jump to symbol: 'BigInteger'") or
[PositiveBigInteger](#positivebiginteger "Jump to symbol: 'PositiveBigInteger'").
Unless you're building custom numeric types with your own branding, you most
likely will never directly handle this type in the wild.

##### Type Parameters

- **`N`**
- **`T`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { CastInt } from "jsr:@nick/is/number";

declare const INTEGER: unique symbol;
type INTEGER<N extends bigint = bigint> = CastInt<N, typeof INTEGER>;

let x = 3n as INTEGER;
let y = 5n as INTEGER;

console.log(x + y); // 8n
```

## `DateString`

#### Signature

```ts ignore
export type DateString = string & IsDateString;
```

Represents a valid date string that can be parsed by the native `Date`
constructor without any additional formatting or help from external tools.

This is a branded nominal type that can be used to strictly distinguish between
regular strings and those that have been validated as date strings through a
runtime check like
[`isDateString`](#isdatestring "Jump to symbol: 'isDateString'").

Combined with the aforementioned type guard, this type allows you to enforce the
validity of date strings both at runtime and compile time. If your users are not
exposed to this type alias, the only way a value of this type can be created is
by satisfying the `isDateString` function check.

###### Category

`Types`

###### Tags

`date-string` `nominal`

## `Enum`

#### Signature

```ts ignore
export type Enum<T extends EnumLike = EnumLike> = EnumLike & T;
```

Represents a TypeScript `enum` object, which is defined as a plain object that
satisfies one of the following conditions:

- String or numeric keys mapped to string or numeric values.
- Values can be constant or computed.

> Declared keys may only be literal static strings. Numeric keys are not allowed
> in the declaration of an enum. The only legal way to create an enum with
> numeric keys like `"0"` is for the compiler to generate them.

String-to-string enums **may not** have reverse mappings. It is only supported
for constant numeric values (whether explicitly specified via initializers, or
implicitly assigned by the TS compiler).

> When defined with the `enum` keyword and constant numeric values (or no
> explicit values specified at all, which defaults to `0` for the first key and
> increments by `1` for each subsequent key), the TypeScript compiler
> auto-generates an implicit reverse-mapping from the values back to their
> respective keys.

##### Type Parameters

- **`T`** extends `EnumLike` (default: `EnumLike`)

---

#### Examples

Constant enum definition

```ts
enum Abc {
  B = 0,
  C = 1,
}
```

Mixed-value enum definition (no reverse mapping)

```ts
// Mixing string and numeric values in an enum definition will
// prevent the compiler from generating reverse mappings (since
// it only generates such mappings for constant numeric values).
enum Abc {
  B = 0,
  C = "c",
}
```

Constant enum definition (implicit value assignment)

```ts
// auto-generates a reverse mapping from 0 => B and 1 => C
enum Abc {
  B, // = 0
  C, // = 1
  // "0" = "B",
  // "1" = "C",
}
```

Computed enum definition

```ts
enum C {
  D = "e" + "f", // "ef"
}
```

## `Even`

#### Signature

```ts ignore
export type Even<T extends Numeric = Numeric> = Cast<T, EVEN>;
```

Branded type representing an even number or bigint. Used by overloads of the
[`isEven`](#iseven "Jump to symbol: 'isEven'") function to differentiate between
odd and even numbers.

##### Type Parameters

- **`T`** extends `Numeric` (default: `Numeric`)

---

###### Category

`Numeric`

## `Exclusivity`

#### Signature

```ts ignore
export type Exclusivity = AnyRange[2];
```

## `Falsy`

#### Signature

```ts ignore
export type Falsy = null | undefined | void | false | 0 | 0n | "" | NaN;
```

A type that represents all falsy values.

###### Category

`Primitives`

## `Finite`

#### Signature

```ts ignore
export type Finite<N = number> = Cast<N, FINITE>;
```

Casts a value into a finite type. If the value is not a number, it will resolve
to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `Float`

#### Signature

```ts ignore
export type Float<N = number> = Cast<N, FLOAT>;
```

Casts a value into a floating-point type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float` `number`

#### Examples

```ts
import { type Float, isFloat } from "@nick/is/float";

let x = 1.5 as Float, y = 0;

if (isFloat(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float'.
```

## `Float16`

#### Signature

```ts ignore
export type Float16<N = number> = Cast<N, FLOAT16>;
```

Casts a value into a 16-bit floating-point type (half-precision).

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float16` `number`

#### Examples

```ts
import { type Float16, isFloat16 } from "@nick/is/float16";

let i = 1.5 as Float16, y = 0;

if (isFloat16(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = 1; // <- TS2322 Type '1' is not assignable to type 'Float16'.
```

## `Float32`

#### Signature

```ts ignore
export type Float32<N = number> = Cast<N, FLOAT32>;
```

Casts a value into a floating-point type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float32` `number`

#### Examples

```ts
import { type Float32, isFloat32 } from "@nick/is/float32";

let x = 1.5 as Float32, y = 0;

if (isFloat32(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float32'.
```

## `Float64`

#### Signature

```ts ignore
export type Float64<N = number> = Cast<N, FLOAT64>;
```

Casts a value into a float64-precision floating-point type. If the value is not
a number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`float64` `number`

#### Examples

```ts
import { type Float64, isFloat64 } from "jsr:@type/number/float64";

let x = 1.5 as Float64, y = 0;

if (isFloat64(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Float64'.
```

## `Identifier`

#### Signature

```ts ignore
export type Identifier<T extends string = string> = Brand<T, "Identifier">;
```

Utility type brand that represents a valid JavaScript identifier. This is a
string that can be used as a name of a variable, function, property, label, or
export. It is a subtype of `string` and is used to distinguish between regular
strings and identifiers.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

###### Category

`Primitives`

## `Infinity`

#### Signature

```ts ignore
export type Infinity = PositiveInfinity | NegativeInfinity;
```

Special type representing either positive or negative infinity.

###### Category

`Numbers`

###### Tags

`types` `number` `infinity`

## `InRange`

#### Signature

```ts ignore
export type InRange<
  N extends number,
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = Exclusivity,
> =
  & (number extends N ? IsInRange<Min, Max, Tex>
    : `${Min}|${Max}` extends `-${number}|-${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${Min}|${Max}` extends `${number}|-${number}` ? never
    : `${Min}|${Max}` extends `-${number}|${number}`
      ? `${N}` extends `-${number}` ? IsInRange<Min, Max, Tex> : never
    : `${N}` extends `-${number}` ? never
    : IsInRange<Min, Max, Tex>)
  & N;
```

Type-level equivalent to the [`inRange`](#inrange "Jump to symbol: 'inRange'")
function, which (naively) checks if a number is within a given range. The range
can be specified in multiple ways, with one of four different exclusivity types.

##### Type Parameters

- **`N`** extends `number`
- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `Exclusivity`)

---

###### See Also

- [`inRange`](#inrange "Jump to symbol: 'inRange'") for more information.

## `Int16`

#### Signature

```ts ignore
export type Int16<N = number> = Cast<N, INT16>;
```

Casts a value into a signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -32769; // <- TS2322 Type '-32769' is not assignable to type 'Int16'.
```

## `Int32`

#### Signature

```ts ignore
export type Int32<N = number> = Cast<N, INT32>;
```

Casts a value into a signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int32` `number`

#### Examples

```ts
import { type Int32, isInt32 } from "jsr:@type/number/int32";

let value = 1 as Int32;

const setValue = (newValue: Int32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -2147483649; // <- TS2322 Type '-2147483649' is not assignable to type 'Int32'.
```

## `Int8`

#### Signature

```ts ignore
export type Int8<N = number> = Cast<N, INT8>;
```

Casts a value into a signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`int8` `number`

#### Examples

```ts
import { type Int8, isInt8 } from "@nick/is/int8";

let i = 1 as Int8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = 1.5; // <- TS2322 Type '1.5' is not assignable to type 'Int8'.
```

## `Integer`

#### Signature

```ts ignore
export type Integer<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & Integer<I> : never
  : N extends number
    ? number extends N ? N & INTEGER
    : `${N}` extends `${bigint}` ? N & INTEGER : never
  : never;
```

Casts a value into an integer type. If the value is not an number, or is a
non-integral number like 3.14, it will resolve to `never`.

**Note**: once a value is cast to a type with this narrow of a constraint,
TypeScript's compiler will refuse any assignment to it that is not _exactly_
compatible with the type. If you find yourself encountering errors about
incompatible types, try using the
[MaybeInteger](#maybeinteger "Jump to symbol: 'MaybeInteger'") type instead.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { type Integer, isInteger } from "jsr:@type/number";

function add(a: Integer, b: Integer) {
  return (a + b) as Integer;
}

let x = 1 as Integer, y = 2 as Integer, z = 3;

if (isInteger(z)) {
  console.log(add(add(x, y), z));
} else {
  console.log(add(x, y));
}

// These will raise TypeScript compiler errors:
add(x, z);
add(y, 3);

// This level of strictness can be a bit silly in the wrong application:
x = 1; // <- TS4321 (`MaybeInteger` would be a better choice here)
```

## `IsEven`

#### Signature

```ts ignore
export type IsEven<T extends Numeric, True = T, False = never> = `${T}` extends
  `${"" | bigint}${1 | 3 | 5 | 7 | 9}` ? True : False;
```

Type-level equivalent of [`isEven`](#iseven "Jump to symbol: 'isEven'"), which
checks if a given numeric type (number or bigint) ends in an even number.
Returns [True](#true "Jump to symbol: 'True'") if so, and
[False](#false "Jump to symbol: 'False'") otherwise.

##### Type Parameters

- **`T`** extends `Numeric`
- **`True`** (default: `T`)
- **`False`** (default: `never`)

---

###### Category

`Numeric`

## `IsOdd`

#### Signature

```ts ignore
export type IsOdd<T extends Numeric, True = true, False = false> =
  `${number}` extends `${T}` ? True
    : `${bigint}` extends `${T}` ? True
    : `${T}` extends `${infer _}${1 | 3 | 5 | 7 | 9}` ? True
    : False;
```

Type-level equivalent of [`isOdd`](#isodd "Jump to symbol: 'isOdd'"), which
checks if a given numeric type (number or bigint) ends in an odd number. Returns
[True](#true "Jump to symbol: 'True'") if so, and
[False](#false "Jump to symbol: 'False'") otherwise.

##### Type Parameters

- **`T`** extends `Numeric`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Numeric`

## `IsWhitespace`

#### Signature

```ts ignore
export type IsWhitespace<T extends string, True = true, False = false> =
  IsNever<T> extends true ? False
    : IsAny<T> extends true ? True : T extends Whitespace ? True
    : T extends `${Whitespace}${infer R}` ? IsWhitespace<R, True, False>
    : False;
```

If the given string [`T`](#t "Jump to symbol: 'T'") is whitespace, this type
will resolve to the [`True`](#true "Jump to symbol: 'True'") type parameter
(default: `true`). Otherwise, it will resolve to the
[`False`](#false "Jump to symbol: 'False'") type parameter (default: `false`).

##### Type Parameters

- **`T`** extends `string`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

###### Tags

`whitespace`

## `IsWhitespaceChar`

#### Signature

```ts ignore
export type IsWhitespaceChar<T extends string, True = true, False = false> =
  T extends Whitespace ? True : False;
```

Type-level predicate that checks if a given string
[`T`](#t "Jump to symbol: 'T'") is a whitespace character. If
[`T`](#t "Jump to symbol: 'T'") is a whitespace character, it will resolve to
the [`True`](#true "Jump to symbol: 'True'") type parameter (default: `true`).
Otherwise, it will resolve to the [`False`](#false "Jump to symbol: 'False'")
type parameter (default: `false`).

The compile-time equivalent of the
[`isWhitespaceChar`](#iswhitespacechar "Jump to symbol: 'isWhitespaceChar'")
function.

##### Type Parameters

- **`T`** extends `string`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

## `IsWhitespaceCode`

#### Signature

```ts ignore
export type IsWhitespaceCode<T extends number, True = true, False = false> =
  T extends WhitespaceCode ? True : False;
```

Type-level predicate that checks if a given string
[`T`](#t "Jump to symbol: 'T'") is a whitespace character code. If
[`T`](#t "Jump to symbol: 'T'") is a whitespace character code, it will resolve
to the [`True`](#true "Jump to symbol: 'True'") type parameter (default:
`true`). Otherwise, it will resolve to the
[`False`](#false "Jump to symbol: 'False'") type parameter (default: `false`).

The compile-time equivalent of the
[`isWhitespaceCode`](#iswhitespacecode "Jump to symbol: 'isWhitespaceCode'")
function.

##### Type Parameters

- **`T`** extends `number`
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

## `IterableObject`

#### Signature

```ts ignore
export type IterableObject<T = unknown> = Iterable<T> & object;
```

Represents an object that is also an iterable. This is the type of arrays, maps,
sets, and objects with a Symbol.iterator method. It is a subtype of both
`Iterable` and `object`. This is also the type that the function
[isIterableObject](#isiterableobject "Jump to symbol: 'isIterableObject'")
narrows its inputs to.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Iterables`

## `MaybeFinite`

#### Signature

```ts ignore
export type MaybeFinite<N = number> = Cast<N, MAYBE_FINITE>;
```

Casts a value into a partial finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeFloat16`

#### Signature

```ts ignore
export type MaybeFloat16<N = number> = Cast<N, MAYBE_FLOAT16>;
```

Casts a value into a partial 16-bit floating-point type (half-precision).

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float16` `number`

## `MaybeFloat32`

#### Signature

```ts ignore
export type MaybeFloat32<N = number> = Cast<N, MAYBE_FLOAT32>;
```

Casts a value into a partial floating-point type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float32` `number`

#### Examples

```ts
import { isFloat32, type MaybeFloat32 } from "@nick/is/float32";

let x = 1.5 as MaybeFloat32, y = 0;

if (isFloat32(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Float32`)
```

## `MaybeFloat64`

#### Signature

```ts ignore
export type MaybeFloat64<N = number> = Cast<N, MAYBE_FLOAT64>;
```

Casts a value into a partial float64-precision floating-point type. If the value
is not a number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `float64` `number`

#### Examples

```ts
import { isFloat64, type MaybeFloat64 } from "jsr:@type/number/float64";

let x = 1.5 as MaybeFloat64, y = 0;

if (isFloat64(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Float64`)
```

## `MaybeInt16`

#### Signature

```ts ignore
export type MaybeInt16<N = number> = Cast<N, MAYBE_INT16>;
```

Casts a value into a partial signed 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int16` `number`

#### Examples

```ts
import { type Int16, isInt16, type MaybeInt16 } from "@nick/is/int16";

let value = 1 as Int16;

const setValue = (newValue: MaybeInt16) => {
  if (isInt16(newValue)) value = newValue;
};

setValue(0x7FFF); // <- No error!

value = -32769; // Error: Type '-32769' is not assignable to type 'Int16'.
```

## `MaybeInt32`

#### Signature

```ts ignore
export type MaybeInt32<N = number> = Cast<N, MAYBE_INT32>;
```

Casts a value into a partial signed 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int32` `number`

#### Examples

```ts
import { isInt32, type MaybeInt32 } from "jsr:@type/number/int32";

let value = 1 as MaybeInt32;

const setValue = (newValue: MaybeInt32) => {
  if (isInt32(newValue)) value = newValue;
};

setValue(0x7FFFFFFF); // <- No error!
value = -2147483649; // <- No error! (this is the main difference from `Int32`)
```

## `MaybeInt8`

#### Signature

```ts ignore
export type MaybeInt8<N = number> = Cast<N, MAYBE_INT8>;
```

Casts a value into a partial signed 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `int8` `number`

#### Examples

```ts
import { isInt8, type MaybeInt8 } from "@nick/is/int8";

let i = 1 as MaybeInt8, y = 0;

if (isInt8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Int8`)
```

## `MaybeInteger`

#### Signature

```ts ignore
export type MaybeInteger<N = number> = N extends bigint
  ? `${N}` extends `${infer I extends number}` ? N & MaybeInteger<I> : never
  : N extends number
    ? number extends N ? N & MAYBE_INTEGER
    : `${N}` extends `${bigint}` ? N & MAYBE_INTEGER
    : never
  : never;
```

Casts a value into a partial integer type. If the value is not an number, or is
a non-integral number like 3.14, it will resolve to `never`. This type is nearly
identical to [Integer](#integer "Jump to symbol: 'Integer'"), except it allows
assignment of values that are not precisely compatible with the type, while
still providing an extra level of type safety over the base `number` type.

Once a value is cast to a type of this constraint, TypeScript's compiler will
refuse any incompatible assignment to it. To demonstrate, consider this example:

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import {
  isInteger,
  type MaybeFloat,
  type MaybeInteger,
} from "jsr:@type/number";

function add(a: MaybeInteger, b: MaybeInteger) {
  return (a + b) as MaybeInteger;
}

let x = 1 as MaybeInteger, y = 2 as MaybeInteger, z = 3;
let xx = 1.1 as MaybeFloat, yy = 2.2 as MaybeFloat, zz = 3.3;

if (isInteger(z)) {
  console.log(add(add(x, y), z));
} else {
  console.log(add(x, y));
}

// These will raise TypeScript compiler errors:
add(x, yy); // <- TS2345 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.
y = yy; // <- TS2322 Type 'MaybeFloat' is not assignable to type 'MaybeInteger'.

y = 2; // <- No error! (this is the main difference from `Integer`)
```

## `MaybeNegative`

#### Signature

```ts ignore
export type MaybeNegative<N = number> = Cast<N, MAYBE_NEGATIVE>;
```

Casts a value into a partial negative type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Types` `Numbers`

###### Tags

`maybe` `negative` `number`

#### Examples

```ts
import { isNegative, type MaybeNegative } from "jsr:@type/number";

let x = -1 as MaybeNegative, y = 0;

if (isNegative(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = -1; // <- No error! (this is the main difference from `Negative`)
```

## `MaybeNegativeFinite`

#### Signature

```ts ignore
export type MaybeNegativeFinite<N = number> = Cast<N, MAYBE_NEGATIVE_FINITE>;
```

Casts a value into a partial negative finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeNonZero`

#### Signature

```ts ignore
export type MaybeNegativeNonZero<N = number> = Cast<
  N,
  MAYBE_NEGATIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial negative nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNegativeNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial negative nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybeNegativeZero`

#### Signature

```ts ignore
export type MaybeNegativeZero<N = number> = Cast<N, MAYBE_NEGATIVE_ZERO>;
```

Casts a value into a partial negative zero type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero, type MaybeNegativeZero } from "jsr:@type/number";

let x = -0 as MaybeNegativeZero, y = 0;

if (isNegativeZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = -0; // <- No error! (this is the main difference from `NegativeZero`)
```

## `MaybeNonZero`

#### Signature

```ts ignore
export type MaybeNonZero<N = number> = Cast<N, MAYBE_NON_ZERO>;
```

Casts a value into a partial nonzero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero, type MaybeNonZero } from "jsr:@type/number";

let x = 1 as MaybeNonZero, y = 0;

if (isNonZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `NonZero`)
```

## `MaybeNonZeroFinite`

#### Signature

```ts ignore
export type MaybeNonZeroFinite<N = number> = Cast<N, MAYBE_NON_ZERO_FINITE>;
```

Casts a value into a partial nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

## `MaybePositive`

#### Signature

```ts ignore
export type MaybePositive<N = number> = Cast<N, MAYBE_POSITIVE>;
```

Casts a value into a partial positive type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `positive` `number`

#### Examples

```ts
import { isPositive, type MaybePositive } from "jsr:@type/number";

let x = 1 as MaybePositive, y = 0;

if (isPositive(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Positive`)
```

## `MaybePositiveFinite`

#### Signature

```ts ignore
export type MaybePositiveFinite<N = number> = Cast<N, MAYBE_POSITIVE_FINITE>;
```

Casts a value into a partial positive finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveNonZero`

#### Signature

```ts ignore
export type MaybePositiveNonZero<N = number> = Cast<
  N,
  MAYBE_POSITIVE & MAYBE_NON_ZERO
>;
```

Casts a value into a partial positive nonzero type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveNonZeroFinite`

#### Signature

```ts ignore
export type MaybePositiveNonZeroFinite<N = number> = Cast<
  N,
  MAYBE_POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a partial positive nonzero finite type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `MaybePositiveZero`

#### Signature

```ts ignore
export type MaybePositiveZero<N = number> = Cast<N, MAYBE_POSITIVE_ZERO>;
```

Casts a value into a partial positive zero type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero, type MaybePositiveZero } from "jsr:@type/number";

let x = 0 as MaybePositiveZero, y = 1;

if (isPositiveZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 0; // <- No error! (this is the main difference from `PositiveZero`)
```

## `MaybeUint16`

#### Signature

```ts ignore
export type MaybeUint16<N = number> = Cast<N, MAYBE_UINT16>;
```

Casts a value into a partial unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `MaybeUint32`

#### Signature

```ts ignore
export type MaybeUint32<N = number> = Cast<N, MAYBE_UINT32>;
```

Casts a value into a partial unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `MaybeUint8`

#### Signature

```ts ignore
export type MaybeUint8<N = number> = Cast<N, MAYBE_UINT8>;
```

Casts a value into a partial unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`maybe` `unsigned` `integer`

#### Examples

```ts
import { isUint8, type MaybeUint8 } from "@nick/is/uint8";

let i = 1 as MaybeUint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

y = 1; // <- No error! (this is the main difference from `Uint8`)
```

## `MaybeZero`

#### Signature

```ts ignore
export type MaybeZero<N = number> = Cast<N, MAYBE_ZERO>;
```

Casts a value into a partial zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isZero, type MaybeZero } from "jsr:@type/number";

let x = 0 as MaybeZero, y = 1;

if (isZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

y = 0; // <- No error! (this is the main difference from `Zero`)
```

## `NaN`

#### Signature

```ts ignore
export type NaN<N = number> = Cast<N, NAN>;
```

Casts a value into a branded type that represents the special numeric value
`NaN` (not a number). This is a very strict type, and it prevents any other type
from being assigned unless they pass the
[`isNaN`](#isnan "Jump to symbol: 'isNaN'") type guard. If the value is not a
subtype of `number`, this will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

###### Tags

`number` `NaN`

#### Examples

```ts
import { isNan, type NaN } from "jsr:@type/number";

let x = NaN as NaN, y = 0;

if (isNan(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NaN'.
```

## `Negative`

#### Signature

```ts ignore
export type Negative<N = number> = Cast<N, NEGATIVE>;
```

Casts a value into a negative type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`negative` `number`

#### Examples

```ts
import { isNegative, type Negative } from "jsr:@type/number";

let x = -1 as Negative, y = 0;

if (isNegative(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'Negative'.
```

## `NegativeBigInteger`

#### Signature

```ts ignore
export type NegativeBigInteger<N = bigint> = CastInt<N, NEGATIVE & INTEGER>;
```

Casts a value into a negative big integer type. If the value is not a bigint or
a string containing a valid integer, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `NegativeFinite`

#### Signature

```ts ignore
export type NegativeFinite<N = number> = Cast<N, NEGATIVE_FINITE>;
```

Casts a value into a negative finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeFiniteInteger`

#### Signature

```ts ignore
export type NegativeFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & FINITE & INTEGER
>;
```

Casts a value into a negative finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeInfinity`

#### Signature

```ts ignore
export type NegativeInfinity = -Infinity;
```

Special type representing negative infinity (`Number.NEGATIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `negative`

## `NegativeInteger`

#### Signature

```ts ignore
export type NegativeInteger<N = number> = Cast<N, NEGATIVE & INTEGER>;
```

Casts a value into a negative integer type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZero`

#### Signature

```ts ignore
export type NegativeNonZero<N = number> = Cast<N, NEGATIVE & NON_ZERO>;
```

Casts a value into a negative nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroFinite`

#### Signature

```ts ignore
export type NegativeNonZeroFinite<N = number> = Cast<
  N,
  NEGATIVE_NON_ZERO_FINITE
>;
```

Casts a value into a negative nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroFiniteInteger`

#### Signature

```ts ignore
export type NegativeNonZeroFiniteInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a negative nonzero finite integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeNonZeroInteger`

#### Signature

```ts ignore
export type NegativeNonZeroInteger<N = number> = Cast<
  N,
  NEGATIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a negative nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NegativeZero`

#### Signature

```ts ignore
export type NegativeZero<N = number> = Cast<N, NEGATIVE_ZERO>;
```

Casts a value into a negative zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNegativeZero, type NegativeZero } from "jsr:@type/number";

let x = -0 as NegativeZero, y = 0;

if (isNegativeZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NegativeZero'.
```

## `NonEmptyArray`

#### Signature

```ts ignore
export type NonEmptyArray<T = unknown> = [T, ...T[]];
```

Represents an array with 1 or more element of the specific type `T`.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### Category

`Indexed Collections`

## `NonZero`

#### Signature

```ts ignore
export type NonZero<N = number> = Cast<N, NON_ZERO>;
```

Casts a value into a nonzero type. If the value is not a number, it will resolve
to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isNonZero, type NonZero } from "jsr:@type/number";

let x = 1 as NonZero, y = 0;

if (isNonZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'NonZero'.
```

## `NonZeroFinite`

#### Signature

```ts ignore
export type NonZeroFinite<N = number> = Cast<N, NON_ZERO_FINITE>;
```

Casts a value into a nonzero finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NonZeroFiniteInteger`

#### Signature

```ts ignore
export type NonZeroFiniteInteger<N = number> = Cast<
  N,
  NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a nonzero finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `NonZeroInteger`

#### Signature

```ts ignore
export type NonZeroInteger<N = number> = Cast<N, NON_ZERO & INTEGER>;
```

Casts a value into a nonzero integer type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `Odd`

#### Signature

```ts ignore
export type Odd<T = number> = Cast<
  IsOdd<Extract<T, Numeric>, Extract<T, Numeric>, never>,
  ODD
>;
```

Branded type representing an odd number. Used by overloads of the
[`isOdd`](#isodd "Jump to symbol: 'isOdd'") function to differentiate between
odd and even numbers.

##### Type Parameters

- **`T`** (default: `number`)

---

###### Category

`Numeric`

## `Positive`

#### Signature

```ts ignore
export type Positive<N = number> = Cast<N, POSITIVE>;
```

Casts a value into a positive type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`positive` `number`

#### Examples

```ts
import { isPositive, type Positive } from "jsr:@type/number";

let x = 1 as Positive, y = 0;

if (isPositive(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 0; // <- TS2322 Type '0' is not assignable to type 'Positive'.
```

## `PositiveBigInteger`

#### Signature

```ts ignore
export type PositiveBigInteger<N = bigint> = CastInt<N, POSITIVE & INTEGER>;
```

Casts a value into a positive big integer type. If the value is not a bigint or
a string containing a valid integer, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `bigint`)

---

###### Category

`Numbers`

## `PositiveFinite`

#### Signature

```ts ignore
export type PositiveFinite<N = number> = Cast<N, POSITIVE_FINITE>;
```

Casts a value into a positive finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveFiniteInteger`

#### Signature

```ts ignore
export type PositiveFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & FINITE & INTEGER
>;
```

Casts a value into a positive finite integer type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveInfinity`

#### Signature

```ts ignore
export type PositiveInfinity = Infinity;
```

Special type representing positive infinity (`Number.POSITIVE_INFINITY`).

###### Category

`Numbers`

###### Tags

`types` `number` `infinity` `positive`

## `PositiveInteger`

#### Signature

```ts ignore
export type PositiveInteger<N = number> = Cast<N, POSITIVE & INTEGER>;
```

Casts a value into a positive finite type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZero`

#### Signature

```ts ignore
export type PositiveNonZero<N = number> = Cast<N, POSITIVE & NON_ZERO>;
```

Casts a value into a positive nonzero type. If the value is not a number, it
will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroFinite`

#### Signature

```ts ignore
export type PositiveNonZeroFinite<N = number> = Cast<
  N,
  POSITIVE_NON_ZERO_FINITE
>;
```

Casts a value into a positive nonzero finite type. If the value is not a number,
it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroFiniteInteger`

#### Signature

```ts ignore
export type PositiveNonZeroFiniteInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & FINITE & INTEGER
>;
```

Casts a value into a positive nonzero finite integer type. If the value is not a
number, it will resolve to `never`.s

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveNonZeroInteger`

#### Signature

```ts ignore
export type PositiveNonZeroInteger<N = number> = Cast<
  N,
  POSITIVE & NON_ZERO & INTEGER
>;
```

Casts a value into a positive nonzero integer type. If the value is not a
number, it will resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

## `PositiveZero`

#### Signature

```ts ignore
export type PositiveZero<N = number> = Cast<N, POSITIVE_ZERO>;
```

Casts a value into a positive zero type. If the value is not a number, it will
resolve to `never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isPositiveZero, type PositiveZero } from "jsr:@type/number";

let x = 0 as PositiveZero, y = 1;

if (isPositiveZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'PositiveZero'.
```

## `Primitive`

#### Signature

```ts ignore
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;
```

Represents a primitive value. This includes strings, numbers, bigints, booleans,
symbols, null, and undefined.

###### Category

`Primitives`

## `Printable`

#### Signature

```ts ignore
export type Printable = string | number | bigint | boolean | null | undefined;
```

Represents a value that can be printed in a template literal type string, which
means it is either a `string`, `number`, `bigint`, `boolean`, `null` or
`undefined`. Any other type of value will raise a compiler error if you attempt
to construct a template literal type with it.

#### Examples

```ts
import type { Printable } from "jsr:@nick/is/printable";

type Join<T, D extends string = ""> = T extends
  [infer F extends Printable, ...infer R]
  ? `${F}${R extends [] ? "" : D}${Join<R, D>}`
  : "";

type Result = Join<[1, "two", 3n, true, null, undefined]>;
//   ^? type Result = "1two3true"
```

## `Range`

#### Signature

```ts ignore
export type Range<
  Min extends number = number,
  Max extends number = number,
  Tex extends Exclusivity = never,
> = [Tex] extends [never]
  ?
    | RangeInclusiveMin<Min, Max>
    | RangeInclusive<Min, Max>
    | RangeInclusiveMax<Min, Max>
    | RangeExclusive<Min, Max>
    | RangeUnknown<Min, Max>
  : Either<
    Extract<Range<Min, Max, never>, Required<RangeUnknown<Min, Max, Tex>>>,
    RangeUnknown<Min, Max, Exclusivity>
  >;
```

##### Type Parameters

- **`Min`** extends `number` (default: `number`)
- **`Max`** extends `number` (default: `number`)
- **`Tex`** extends `Exclusivity` (default: `never`)

---

## `RegisteredSymbol`

#### Signature

```ts ignore
export type RegisteredSymbol = Brand<symbol, "registered-symbol">;
```

Branded type representing a symbol that is registered in the global symbol
registry, which means it was created using the `Symbol.for()` function. This
kind of symbol is **not** allowed as keys in Weak Collections like `WeakMap` or
`WeakSet` objects, as they are not truly unique.

This is the type that the
[`isRegisteredSymbol`](#isregisteredsymbol "Jump to symbol: 'isRegisteredSymbol'")
type guard narrows its input values to. It is provided as an export for you to
use in tandem with that type guard, to ensure your code is handling registered
symbols in a strict, type-safe manner.

###### Categories

`Primitives` `Types`

#### Examples

```ts
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function doSomething(key: RegisteredSymbol): void {
  // ...
}

const key = Symbol.for("foo");
if (isRegisteredSymbol(key)) {
  doSomething(key);
}
```

```ts
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "jsr:@nick/is/registered-symbol";

function assertRegisteredSymbol(
  value: unknown,
): asserts value is RegisteredSymbol {
  if (!isRegisteredSymbol(value)) {
    throw new Error("Expected a registered symbol.");
  }
}
```

## `SemVer`

#### Signature

```ts ignore
export type SemVer = Brand<string, "SemVer">;
```

Represents a validated Semantic Version (SemVer v2.0.0) string. This is the type
the [`isSemVer`](#issemver "Jump to symbol: 'isSemVer'") function narrows its
input values to.

###### Category

`Strings`

## `SupportedSetLike`

#### Signature

```ts ignore
export type SupportedSetLike<T = unknown> =
  Exclude<keyof ExtendedSetLike<T>, keyof SetLike<T>> extends
    keyof globalThis.Set<T> ? ExtendedSetLike<T> : SetLike<T>;
```

This type represents either the full
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
interface, or the [`SetLike`](#setlike "Jump to symbol: 'SetLike'") interface,
depending on whether the current environment supports composition methods
introduced by the TC39 Set Methods Proposal.

If the current environment supports the composition methods, this type will
resolve to the
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
interface. Otherwise, it will resolve to the
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") interface.

##### Type Parameters

- **`T`** (default: `unknown`)

---

###### See Also

- [`SupportedSetLikeConstructor`](#supportedsetlikeconstructor "Jump to symbol: 'SupportedSetLikeConstructor'")
  for a similar type that represents the constructor function for the supported
  set-like object.

## `SupportedSetLikeConstructor`

#### Signature

```ts ignore
export type SupportedSetLikeConstructor =
  Exclude<keyof ExtendedSetLikeConstructor, keyof SetLikeConstructor> extends
    keyof globalThis.SetConstructor ? ExtendedSetLikeConstructor
    : SetLikeConstructor;
```

This type represents either the full
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
interface, or the
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
interface, depending on whether the current environment supports composition
methods introduced by the TC39 Set Methods Proposal.

If the current environment supports the composition methods, this type will
resolve to the
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
interface. Otherwise, it will resolve to the
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
interface.

###### See Also

- [`SupportedSetLike`](#supportedsetlike "Jump to symbol: 'SupportedSetLike'")
  for a similar type that represents the full set-like object.

## `TypedArray`

#### Signature

```ts ignore
export type TypedArray<T extends ArrayBufferLike = ArrayBufferLike> =
  InstanceType<TypedArrayConstructor<T>>;
```

Represents an instance of a typed array, which is a view over a raw binary data
buffer (e.g. `ArrayBuffer`) of a fixed-size. The following are the supported
native typed array types:

- `Uint8Array`
- `Uint8ClampedArray`
- `Uint16Array`
- `Uint32Array`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Float16Array` (ES2024)
- `Float32Array`
- `Float64Array`
- `BigInt64Array`
- `BigUint64Array`

##### Type Parameters

- **`T`** extends `ArrayBufferLike` (default: `ArrayBufferLike`)

---

###### Category

`Binary Data Structures`

###### See Also

- [isTypedArray](#istypedarray "Jump to symbol: 'isTypedArray'") to check if a
  value is this type at runtime.

## `Uint16`

#### Signature

```ts ignore
export type Uint16<N = number> = Cast<N, UINT16>;
```

Casts a value into an unsigned 16-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint16, type MaybeUint16, type Uint16 } from "@nick/is/number";

let value = 1 as Uint16;

const setValue = (newValue: MaybeUint16) => {
  if (isUint16(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint16'.
```

## `Uint32`

#### Signature

```ts ignore
export type Uint32<N = number> = Cast<N, UINT32>;
```

Casts a value into an unsigned 32-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint32, type MaybeUint32, type Uint32 } from "@nick/is/number";

let value = 1 as Uint32;

const setValue = (newValue: MaybeUint32) => {
  if (isUint32(newValue)) value = newValue;
};

setValue(0xFFFF); // <- No error!

// This will raise a TypeScript compiler error:
value = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint32'.
```

## `Uint8`

#### Signature

```ts ignore
export type Uint8<N = number> = Cast<N, UINT8>;
```

Casts a value into an unsigned 8-bit integer type.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Categories

`Numbers` `Types`

###### Tags

`unsigned` `integer`

#### Examples

```ts
import { isUint8, type Uint8 } from "@nick/is/uint8";

let i = 1 as Uint8, y = 0;

if (isUint8(i)) {
  console.log(i);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
i = -1; // <- TS2322 Type '-1' is not assignable to type 'Uint8'.
```

## `UniqueSymbol`

#### Signature

```ts ignore
export type UniqueSymbol = Brand<symbol, "unique-symbol">;
```

Branded type representing a unique symbol, which is a primitive symbol that was
created using the `Symbol()` function, and is not a registered symbol created
with `Symbol.for()`, nor a well-known symbol defined on the global `Symbol`
object.

###### Category

`Primitives`

## `Unwrap`

#### Signature

```ts ignore
export type Unwrap<U> = U extends Cast<infer N, infer T> ? [N, T] : [U, never];
```

Unwraps a type that has been cast with [Cast](#cast "Jump to symbol: 'Cast'")
into a tuple of the original value and the specific type it was cast to (or
"branded" with). If the given type was _not_ cast with
[Cast](#cast "Jump to symbol: 'Cast'"), it will resolve to a tuple containing
the original value and `never`, respectively.

##### Type Parameters

- **`U`**

---

###### Category

`Numbers`

#### Examples

```ts
import type { Cast, Unwrap } from "jsr:@nick/is/number";

type Int_3 = Cast<3, INTEGER>;

function unwrap<T>(value: T): Unwrap<T>[0] {
  return value as Unwrap<T>[0];
}
```

## `WellKnownSymbol`

#### Signature

```ts ignore
export type WellKnownSymbol = ValueOf<{
     [K in [object Object]]: SymbolConstructor[K]
  }>;
```

Union type representing all of the well-known symbols defined on the global
`Symbol` object in the current runtime environment.

###### Category

`Primitives`

## `Whitespace`

#### Signature

```ts ignore
export type Whitespace = typeof WHITESPACE_CHARS[number] & {};
```

A union of all whitespace characters, as defined by the Unicode standard. This
includes characters such as spaces, tabs, newlines, and additional Unicode
whitespace characters that are not typically visible in text.

This type is particularly useful for type-level programming, specifically when
developing string manipulation types that need to account for various types of
whitespace characters rather than a simple ASCII space.

For example, if one wanted to create a type-level utility to split a string
literal into its constituent parts using whitespace and punctuation as its
delimiters, it could be done quite easily using this type.

###### Category

`Types`

###### Tags

`whitespace`

## `WhitespaceCode`

#### Signature

```ts ignore
export type WhitespaceCode = typeof WHITESPACE_CODES[number];
```

Union of all whitespace character codes, as defined by the Unicode standard.
This includes characters such as spaces, tabs, newlines, and additional Unicode
whitespace characters that are not typically visible.

###### Category

`Types`

###### Tags

`whitespace` `char code`

## `WhitespaceLike`

#### Signature

```ts ignore
export type WhitespaceLike = WhitespaceString | Whitespace | WhitespaceCode;
```

A union type that can be either a string or a whitespace character code.

This is the type used in the
[`isWhitespaceLike`](#iswhitespacelike "Jump to symbol: 'isWhitespaceLike'")
function to determine if a value is either a string or a whitespace character
code.

###### Category

`Types`

###### Tags

`whitespace`

## `WhitespaceString`

#### Signature

```ts ignore
export type WhitespaceString<S extends string = string> = S & WhitespaceBrand;
```

Represents a string that has been verified at runtime to only consist of
whitespace characters. This is a nominal (branded) type that is distinct from a
regular string type.

##### Type Parameters

- **`S`** extends `string` (default: `string`)

---

###### Category

`Types`

###### Tags

`whitespace` `branded`

## `Zero`

#### Signature

```ts ignore
export type Zero<N = number> = Cast<N, ZERO>;
```

Casts a value into a zero type. If the value is not a number, it will resolve to
`never`.

##### Type Parameters

- **`N`** (default: `number`)

---

###### Category

`Numbers`

#### Examples

```ts
import { isZero, type Zero } from "jsr:@type/number/zero";

let x = 0 as Zero, y = 1;

if (isZero(x)) {
  console.log(x);
} else {
  console.log(y);
}

// This will raise a TypeScript compiler error:
x = 1; // <- TS2322 Type '1' is not assignable to type 'Zero'.
```

## `ArrayIterator`

Represents a array iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "Array Iterator";
```

---

## `AsyncFunction`

##### Type Parameters

- **`TReturn`** (default: `any`)

---

### Call Signatures

```ts
<T extends TReturn = TReturn>(...args: any[]): Promise<T>;
```

---

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "AsyncFunction";
```

---

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

## `Closer`

An abstract interface which when implemented provides an interface to close
files/resources that were previously opened.

###### Category

`I/O`

### Methods

#### close

```ts
close(): void;
```

Closes the resource, "freeing" the backing file/resource.

---

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

## `EnumLike`

Represents an "enum-like" object, which is a plain object composed of either all
string keys and string values, or a two-way mapping of string keys to numeric
values (and vice versa).

This is a supertype of the type of object created by TypeScript's builtin `enum`
keyword. Its primary consumer is the
[`isEnum`](#isenum "Jump to symbol: 'isEnum'") function.

###### Category

`Types`

###### Tags

`enum` `objects`

#### Examples

```ts
// when we create an enum with constant numeric values, the TypeScript
// compiler auto-generates an implicit reverse-mapping from the values
// back to their respective keys, providing us with the capability to
// access the keys by their values.
enum Priority {
  Low = 0x0,
  Medium = 0x1,
  High = 0x2,
  Insane = 0xFF,
}

// the actual object generated by the enum syntax above looks like this:
const Priority = {
  Low: 0,
  Medium: 1,
  High: 2,
  Insane: 255,
  "0": "Low",
  "1": "Medium",
  "2": "High",
  "255": "Insane",
} satisfies EnumLike;

// this provides us with the ability to access a key even when we only have
// its value, a language feature that is popular in other OOP languages such
// as C#, Java, and C++:

console.log(Priority.High); // 2
console.log(Priority[2]); // "High"
console.assert(Priority.High === Priority[Priority[2]]);
console.assert(Priority[2] === Priority[Priority.High]);
```

##### Type Parameters

- **`K`** extends `string | number` (default: `string | number`)
- **`V`** extends `string | number` (default: `string | number`)

---

### Index Signatures

#### EnumLike

```ts
readonly [key: string]:  K | V | undefined
```

#### EnumLike

```ts
readonly [index: number]: K
```

---

## `ExtendedSetLike`

A `ExtendedSetLike` object is a collection of values, where each value may only
occur once. The values in a `ExtendedSetLike` can be either primitive values or
object references. The keys of a `ExtendedSetLike` are the same as the values.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `SetLike<T>`

### Methods

#### union

```ts
union<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T | U>;
```

##### Parameters

| Name        | Info                                              |
| :---------- | :------------------------------------------------ |
| **`other`** | The other set-like object to merge with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
and also all the elements in the [`other`](#other "Jump to symbol: 'other'").

#### intersection

```ts
intersection<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T & U>;
```

##### Parameters

| Name        | Info                                                  |
| :---------- | :---------------------------------------------------- |
| **`other`** | The other set-like object to intersect with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements which are both in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
and in the [`other`](#other "Jump to symbol: 'other'").

#### difference

```ts
difference<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T>;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a new [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object containing all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
which are not also in the [`other`](#other "Jump to symbol: 'other'").

#### symmetricDifference

```ts
symmetricDifference<U>(
    other: ReadonlyCollection<U>,
  ): ExtendedSetLike<T | U>;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a new ExtendedSetLike object containing all the elements which are in either
this [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object or in the [`other`](#other "Jump to symbol: 'other'"), but not in both.

#### isSubsetOf

```ts
isSubsetOf<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether all the elements in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
are also in the [`other`](#other "Jump to symbol: 'other'").

#### isSupersetOf

```ts
isSupersetOf<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether all the elements in the
[`other`](#other "Jump to symbol: 'other'") are also in this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object.

#### isDisjointFrom

```ts
isDisjointFrom<U>(
    other: ReadonlyCollection<U>,
  ): boolean;
```

##### Parameters

| Name        | Info                                                |
| :---------- | :-------------------------------------------------- |
| **`other`** | The other set-like object to compare with this one. |

##### Returns

a boolean indicating whether this
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") object
has no elements in common with the [`other`](#other "Jump to symbol: 'other'").

---

## `ExtendedSetLikeConstructor`

Represents a constructor function for an
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object.

### Properties

#### prototype

```ts
readonly prototype: ExtendedSetLike<any>;
```

---

## `MapIterator`

Represents a map iterator.

##### Type Parameters

- **`K`**
- **`V`**

---

##### Extends `IterableIterator<[K,V]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Map Iterator" | "Map Entries";
```

---

## `MapLike`

Map-like objects are collections of keys and values, where each key may only
appear once in the collection.

###### Category

`Types`

##### Type Parameters

- **`K`**
- **`V`**

---

##### Extends `Iterable<[K,V]>`

### Properties

#### size

```ts
readonly size: number;
```

Gets the number of elements in the collection.

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: string;
```

---

### Methods

#### has

```ts
has(key: K): boolean;
```

Tests whether a key is present in the collection.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to lookup. |

##### Returns

`true` if the key is present in the collection; otherwise, `false`.

#### get

```ts
get(key: K): V | undefined;
```

Gets the value associated with the provided key, if it exists.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to lookup. |

##### Returns

The value associated with the provided key, or `undefined`.

#### set

```ts
set(key: K, value: V): this;
```

Sets the value in the collection associated with the provided key.

##### Parameters

| Name        | Info              |
| :---------- | :---------------- |
| **`key`**   | The key to set.   |
| **`value`** | The value to set. |

##### Returns

The collection.

#### clear

```ts
clear(): void;
```

Removes all entries from the collection.

#### delete

```ts
delete(key: K): boolean;
```

Removes a key from the collection.

##### Parameters

| Name      | Info               |
| :-------- | :----------------- |
| **`key`** | The key to remove. |

##### Returns

`true` if the delete operation was successful, otherwise `false`.

#### keys

```ts
keys(): IterableIterator<K>;
```

Returns an `IterableIterator` for the keys present in the collection.

#### values

```ts
values(): IterableIterator<V>;
```

Returns an `IterableIterator` for the values present in the collection.

#### entries

```ts
entries(): IterableIterator<
    [K, V]
  >;
```

Returns an `IterableIterator` for the entries present in the collection. Each
entry is a tuple containing the key and value for each element.

#### forEach

```ts
forEach<This = void>(
    cb: (this: This, value: V, key: K, map: MapLike<K, V>) => void,
    thisArg?: This,
  ): void;
```

Executes a provided function once per each key/value pair in the collection.

##### Parameters

| Name          | Info                                                    |
| :------------ | :------------------------------------------------------ |
| **`cb`**      | The callback to execute.                                |
| **`thisArg`** | The value to use as `this` when executing the callback. |

##### Returns

Nothing.

#### [Symbol.iterator]

```ts
[Symbol.iterator](): IterableIterator<
    [K, V]
  >;
```

Returns an `IterableIterator` for the entries present in the collection.

---

## `MapLikeConstructor`

A constructor function for creating new `MapLike` objects.

###### Category

`Types`

### Properties

#### prototype

```ts
readonly prototype: MapLike<unknown, unknown>;
```

---

## `Reader`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer asynchronously.

###### Category

`I/O`

### Methods

#### read

```ts
read(
    p: Uint8Array,
  ): Promise<number | null>;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`read()` resolves to `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`read()` conventionally resolves to what is available instead of waiting for
more.

When `read()` encounters end-of-file condition, it resolves to EOF (null). When
`read()` encounters an error, it rejects with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---

## `ReaderSync`

An abstract interface which when implemented provides an interface to read bytes
into an array buffer synchronously.

###### Category

`I/O`

### Methods

#### readSync

```ts
readSync(
    p: Uint8Array,
  ): number | null;
```

Reads up to `p.byteLength` bytes into `p`. It resolves to the number of bytes
read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered. Even if
`readSync()` returns `n` < `p.byteLength`, it may use all of `p` as scratch
space during the call. If some data is available but not `p.byteLength` bytes,
`readSync()` conventionally returns what is available instead of waiting for
more.

When `readSync()` encounters end-of-file condition, it returns EOF (`null`).

When `readSync()` encounters an error, it throws with an error.

Callers should always process the `n` > `0` bytes returned before considering
the EOF (`null`). Doing so correctly handles I/O errors that happen after
reading some bytes and also both of the allowed EOF behaviors.

Implementations should not retain a reference to `p`.

---

## `ReadonlyCollection`

Set-like objects are collections of unique values (each value may only occur
once). The `ReadonlyCollection` interface defines the bare minimum requirements
for an object to be considered "set-like" in JavaScript; that is, it must have:

- a `has` method, which tests whether a given value is present in the set,
  returning a boolean value indicating the result.
- a `keys` method, which returns an `IterableIterator` for the keys present in
  the set. Since set collections are keyed by their values, the `keys` method
  actually iterates over the **_values_** in the set.
- a read-only `size` property (getter), which returns the number of values in
  the set at any given time.

This interface the base for the `SetLike` interface (hence its name), which
extends it with additional methods like `add`, `delete`, `clear`, `forEach`,
`values`, and `entries` to provide a more complete API for working with Set-
like collections in JavaScript. Prior to the TC39 Proposal for Set Methods, the
`SetLike` interface was the shape of the native `Set` API in JavaScript.

Following the introduction of the TC39 Proposal for Set Methods, the methods for
set composition (`union`, `intersection`, `difference`, etc.) were added to the
`Set` API, which necessitated the creation of the `ExtendedSetLike` interface to
represent the full API for set-like collections in JavaScript.

Those methods require their arguments to implement the
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
interface, rather than the full
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") or
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'"). This
means you can call `Set.prototype.union` with a `Set`, `Map`, or even an
`IterableWeakSet` object, since they all implement the `ReadonlyCollection` API.

###### See Also

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_objects

##### Type Parameters

- **`T`** (default: `unknown`)

---

### Properties

#### size

```ts
readonly size: number;
```

##### Returns

The number of elements in the collection.

---

### Methods

#### has

```ts
has(value: T): boolean;
```

Tests whether a given value is present in the collection.

##### Parameters

| Name        | Info                 |
| :---------- | :------------------- |
| **`value`** | The value to lookup. |

##### Returns

`true` if the value is in the collection; otherwise, `false`.

#### keys

```ts
keys(): IterableIterator<T>;
```

Gets an `IterableIterator` for the keys present in the collection.

##### Returns

An iterator of the keys in the collection.

---

## `ReadonlyCollectionConstructor`

Represents a constructor function for a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object, which is the base implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any of the additional composition methods like `union` or
`intersection`.

###### See Also

- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLike`](#setlike "Jump to symbol: 'SetLike'") for the core interface
  without composition methods.

### Properties

#### prototype

```ts
readonly prototype: ReadonlyCollection<unknown>;
```

---

## `SetIterator`

Represents a set iterator.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `IterableIterator<T>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]:  "Set Iterator" | "Set Entries";
```

---

## `SetLike`

Represents the core functionality of a `SetLike` object, which is the base
implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any additional composition methods (`union`, `intersection`,
`difference`, etc). This was the native `Set` API prior to the TC39 Set Methods
Proposal's introduction.

###### See Also

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
  for the constructor interface.

##### Type Parameters

- **`T`** (default: `unknown`)

---

##### Extends `Iterable<T>`, `ReadonlyCollection<T>`

### Properties

#### size

```ts
readonly size: number;
```

##### Returns

The number of elements in the collection.

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: string;
```

---

### Methods

#### add

```ts
add(value: T): this;
```

Adds the given value to the collection, if it does not already exist.

##### Parameters

| Name        | Info              |
| :---------- | :---------------- |
| **`value`** | The value to add. |

##### Returns

The collection.

#### has

```ts
has(value: T): boolean;
```

Tests whether a key is present in the collection.

##### Parameters

| Name        | Info               |
| :---------- | :----------------- |
| **`value`** | The key to lookup. |

##### Returns

`true` if the value is in the collection; otherwise, `false`.

#### clear

```ts
clear(): void;
```

Removes all values from the collection.

#### delete

```ts
delete(value: T): boolean;
```

Removes a value from the collection.

##### Parameters

| Name        | Info                 |
| :---------- | :------------------- |
| **`value`** | The vakue to remove. |

##### Returns

`true` if the operation was successful; otherwise, `false`.

#### forEach

```ts
forEach<This = void>(
    cb: (this: This, value: T, value2: T, set: this) => void,
    thisArg?: This,
  ): void;
```

Executes a provided function once per each entry in the collection. The callback
is invoked with the current value for both the first and second arguments (to
maintain a similar signature as `forEach` on other iterable objects like `Map`
and `Array`).

##### Parameters

| Name          | Info                                                    |
| :------------ | :------------------------------------------------------ |
| **`cb`**      | The callback to execute.                                |
| **`thisArg`** | The value to use as `this` when executing the callback. |

##### Returns

Nothing.

#### keys

```ts
keys(): IterableIterator<T>;
```

##### Returns

an Iterable of the values in the collection.

#### values

```ts
values(): IterableIterator<T>;
```

##### Returns

an `IterableIterator` for the values present in the collection.

#### entries

```ts
entries(): IterableIterator<
    [T, T]
  >;
```

##### Returns

an `IterableIterator` of the entries present in the collection. Each entry is a
tuple containing the key and value for each element.

#### [Symbol.iterator]

```ts
[Symbol.iterator](): IterableIterator<
    T
  >;
```

Returns an iterator of the [`values`](#values "Jump to symbol: 'values'") in the
set.

---

## `SetLikeConstructor`

Represents a constructor function for a
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") object, which is the base
implementation of a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object, without any of the additional composition methods like `union` or
`intersection`.

###### See Also

- [`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'") for
  the full interface with composition methods.
- [`SetLike`](#setlike "Jump to symbol: 'SetLike'") for the core interface
  without composition methods.

### Properties

#### prototype

```ts
readonly prototype: SetLike<any>;
```

---

## `StringIterator`

Represents a string iterator.

##### Type Parameters

- **`T`** extends `string` (default: `string`)

---

##### Extends `IterableIterator<string extends T ? string : Split<T, "">[number]>`

### Properties

#### [Symbol.toStringTag]

```ts
readonly [Symbol.toStringTag]: "String Iterator";
```

---

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

## `TemplateStringsArray`

A template strings array is an array of strings with an own property named `raw`
that is also an array of strings. This is the type of array provided to tagged
template literals for the first argument, and is represented as the type
`TemplateStringsArray` in TypeScript.

Note: while all `TemplateStringsArray` values are `TemplateStringsObject`s, not
all `TemplateStringsObject`s are `TemplateStringsArray`s.

###### Category

`Types`

###### Tags

`TemplateStringsArray`

##### Extends `ReadonlyArray<string>`

### Properties

#### raw

```ts
readonly raw: ReadonlyArray<string>;
```

---

## `Writer`

An abstract interface which when implemented provides an interface to write
bytes from an array buffer to a file/resource asynchronously.

###### Category

`I/O`

### Methods

#### write

```ts
write(
    p: Uint8Array,
  ): Promise<number>;
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It resolves
to the number of bytes written from `p` (`0` <= `n` <= `p.byteLength`) or reject
with the error encountered that caused the write to stop early. `write()` must
reject with a non-null error if would resolve to `n` < `p.byteLength`. `write()`
must not modify the slice data, even temporarily.

This function is one of the lowest level APIs and most users should not work
with this directly, but rather use
[`writeAll()`](https://deno.land/std/streams/write_all.ts?s=writeAll) from
`std/streams/write_all.ts` instead.

Implementations should not retain a reference to `p`.

---

## `WriterSync`

An abstract interface which when implemented provides an interface to write
bytes from an array buffer to a file/resource synchronously.

###### Category

`I/O`

### Methods

#### writeSync

```ts
writeSync(
    p: Uint8Array,
  ): number;
```

Writes `p.byteLength` bytes from `p` to the underlying data stream. It returns
the number of bytes written from `p` (`0` <= `n` <= `p.byteLength`) and any
error encountered that caused the write to stop early. `writeSync()` must throw
a non-null error if it returns `n` < `p.byteLength`. `writeSync()` must not
modify the slice data, even temporarily.

Implementations should not retain a reference to `p`.

---
