<div align="center">

# [@nick/is][GitHub]

<big><b>160+ type guards, designed for all modern JS runtimes.</b></big>

[![][badge-jsr]][JSR] [![][badge-issues] ![][badge-issues-pull]][GitHub]

</div>

---

Yup, it's another type guard library. This one is designed with a focus on
type-safety, portability, and performance, and is built to work on any modern
ES2015+ runtime.

> [!NOTE]
>
> Unless otherwise noted, all type guards are built to work in Deno, Node, Bun,
> Cloudflare Workers, and even in web browsers. If you find a type guard that
> doesn't work in a specific environment, please [open an issue][GitHub] and
> I'll address it as soon as possible. Thanks!

## Install

This package is primarily distributed on [JSR]. If you're running Deno 2.x, it's
built right in!

```sh
deno add jsr:@nick/is
```

### Node-style Package Managers

You can also install `@nick/is` right into any Node codebase using the `jsr`
CLI, either via `npx` or an equivalent from your package manager of choice:

#### Bun

```sh
bunx jsr add @nick/is
```

> The `--bun` flag can be added to specifically instruct JSR to use Bun.

#### PNPM

```sh
pnpm dlx jsr add @nick/is
```

> The `--pnpm` flag can be added to specifically instruct JSR to use PNPM.

#### Yarn

```sh
yarn dlx jsr add @nick/is
```

> The `--yarn` flag can be added to specifically instruct JSR to use Yarn.

#### NPM

```sh
npx jsr add @nick/is
```

---

## Usage

The recommended way to use the functions in this library is to import them on an
as-needed basis, directly from their respective submodules.

> **[See the API documentation]** for a complete list of available type guards.

[See the API documentation]: https://jsr.io/@nick/is/-/doc "View the API documentation on JSR"

```ts
import { isString } from "@nick/is/string";

import { isNumber } from "@nick/is/number";

import { isFiniteInteger } from "@nick/is/finite-integer";
// this is ^ also available via "@nick/is/finite/integer"
```

### Everything, All at Once

The `@nick/is` project also exposes **all** of its type guards as named exports
from the root module, allowing you to import everything at once.

#### Individual Named Imports

```ts
import { isNumber, isString } from "@nick/is";

console.assert(isString("@nick/is")); // OK
console.assert(isNumber(0)); // OK
```

#### Explicit Functions (instead of the `is` namespace)

Instead of importing the default or namespace export, import only the functions
you need:

```ts
import { isString } from "@nick/is";
console.assert(isString("@nick/is")); // OK
```

Or for multiple functions:

```ts
import { isNumber } from "@nick/is";
console.assert(isNumber(0)); // OK
```

> Once you've determined which type guards your codebase actually needs, it's
> recommended to migrate to named imports for production. This unlocks bundler
> tree-shaking, quicker build times, and a smaller final bundle size.

---

## Type Guards

### Primitives

#### `isNull`

Checks if a given value is `null`.

```ts
import { isNull } from "@nick/is";

isNull(null); // true
isNull(undefined); // false
```

> **Aliases**: `is.null`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isNull)

#### `isUndefined`

Checks if a given value is `undefined`.

```ts
import { isUndefined } from "@nick/is";

isUndefined(undefined); // true
isUndefined(null); // false
```

> **Aliases**: `is.undefined`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isUndefined)

#### `isMissing`

Checks if a given value is `null` or `undefined`.

```ts
import { isMissing } from "@nick/is";

isMissing(null); // true
isMissing(undefined); // true
isMissing(0); // false
```

> **Aliases**: `is.nullish` / `is.missing`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isMissing)

#### `isDefined`

Checks if a given value is **_not_** `undefined`.

```ts
import { isDefined } from "@nick/is";

isDefined(0); // true
isDefined(undefined); // false
```

> **Aliases**: `is.defined`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isDefined)

#### `isString`

Checks if a given value is a `string`.

```ts
import { isString } from "@nick/is";

isString("hello"); // true
isString(0); // false
```

> **Aliases**: `is.string`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isString)

#### `isNumber`

Checks if a given value is a `number`.

```ts
import { isNumber } from "@nick/is";

isNumber(0); // true
isNumber("hello"); // false
```

> **Aliases**: `is.number`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isNumber)

#### `isSymbol`

Checks if a given value is a `symbol`.

```ts
import { isSymbol } from "@nick/is";

isSymbol(Symbol()); // true
isSymbol("hello"); // false
```

> **Aliases**: `is.symbol`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isSymbol)

#### `isBigInt`

Checks if a given value is a `bigint`.

```ts
import { isBigInt } from "@nick/is";

isBigInt(BigInt(0)); // true
isBigInt(0); // false
```

> **Aliases**: `is.bigint`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isBigInt)

#### `isBoolean`

Checks if a given value is a `boolean`.

```ts
import { isBoolean } from "@nick/is";

isBoolean(true); // true
isBoolean(0); // false
```

> **Aliases**: `is.boolean`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isBoolean)

#### `isPropertyKey`

Checks if a given value is a valid property key, meaning it is either a `string`
or a `symbol`.

```ts
import { isPropertyKey } from "@nick/is;

isPropertyKey("hello"); // true
isPropertyKey(Symbol()); // true
isPropertyKey(0); // false
```

> **Aliases**: `is.propertyKey`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isPropertyKey)

#### `isIdentifier`

Checks if a given value is a valid ECMAScript identifier, meaning it is a
`string` that is not a reserved word and is a valid identifier name.

```ts
import { isIdentifier } from "@nick/is";

isIdentifier("hello"); // true
isIdentifier("if"); // false
```

> **Aliases**: `is.identifier`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isIdentifier)

---

### Objects

#### `isObject`

Checks if a given value is an `object`.

```ts
import { isObject } from "@nick/is";

isObject({}); // true
isObject([]); // true
isObject(() => {}); // false
isObject(null); // false
```

> **Aliases**: `is.object`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isObject)

#### `isPlainObject`

Checks if a given value is a plain object, meaning it is an object that was
created with the `Object` constructor or a literal object.

```ts
import { isPlainObject } from "@nick/is";

isPlainObject({}); // true
isPlainObject(Object.create(null)); // true
isPlainObject(new Map()); // false
```

> **Aliases**: `is.plainObject`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isPlainObject)

#### `isObjectLike`

Checks if a given value is object-like, meaning it is not `null` and is not a
primitive value.

```ts
import { isObjectLike } from "@nick/is";

isObjectLike({}); // true
isObjectLike([]); // true
isObjectLike(() => {}); // true
isObjectLike(null); // false
```

> **Aliases**: `is.objectLike`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isObjectLike)

#### `isFunction`

Checks if a given value is a `function`.

```ts
import { isFunction } from "@nick/is";

isFunction(() => {}); // true
isFunction(0); // false
```

> **Aliases**: `is.function`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isFunction)

---

### Async/Await

#### `isPromise`

Checks if a given value is a `Promise` object.

```ts
import { isPromise } from "@nick/is";

const promise = new Promise(() => {});
isPromise(promise); // true
isPromise(0); // false
```

> **Aliases**: `is.promise`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isPromise)

#### `isPromiseLike`

Checks if a given value is a thenable, meaning it has a `then` method.

```ts
import { isPromiseLike } from "@nick/is";

const promise = { then() {} };
isPromiseLike(promise); // true
isPromiseLike(0); // false
```

> **Aliases**: `is.promiseLike`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isPromiseLike)

---

### Indexed Collections

#### `isArray`

Checks if a given value is an array.

```ts
import { isArray } from "@nick/is";

isArray([]); // true
isArray({}); // false
```

> **Aliases**: `is.array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArray)

#### `isArrayLike`

Checks if a given value is array-like, meaning it has a `length` property and
its elements can be accessed using integer indices.

```ts
import { isArrayLike } from "@nick/is";

isArrayLike([]); // true
isArrayLike("hello"); // true
isArrayLike({}); // false
```

> **Aliases**: `is.arrayLike`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayLike)

#### `isArrayLikeObject`

Checks if a given value is an array-like object, meaning it is an object with a
`length` property and its elements can be accessed using integer indices.

```ts
import { isArrayLikeObject } from "@nick/is";

isArrayLikeObject([]); // true
isArrayLikeObject("hello"); // false
isArrayLikeObject({}); // false
```

> **Aliases**: `is.arrayLikeObject`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayLikeObject)

---

### Keyed Collections

#### `isMap`

Checks if a given value is a `Map` object. This is more reliable than the
`instanceof Map` method, as it will work across different realms and
environments, and it does not consider objects that were not created with
`new Map()` to be instances of a `Map`.

```ts
import { isMap } from "@nick/is";

const map = new Map();
isMap(map); // true
isMap({}); // false
```

> **Aliases**: `is.map` [JSR Documentation](https://jsr.io/@nick/is/doc/~/isMap)

#### `isSet`

Checks if a given value is a `Set` object. This is more reliable than the
`instanceof Set` method, as it will work across different realms and
environments, and it does not consider objects that were not created with
`new Set()` to be instances of a `Set`.

```ts
import { isSet } from "@nick/is";

const set = new Set();
isSet(set); // true
isSet({}); // false
```

> **Aliases**: `is.set` [JSR Documentation](https://jsr.io/@nick/is/doc/~/isSet)

---

### Weak Collections

#### `isWeakMap`

Checks if a given value is a `WeakMap` object. This is more reliable than the
`instanceof WeakMap` method, as it will work across different realms and
environments, and it does not consider objects that were not created with
`new WeakMap()` to be instances of a `WeakMap`.

```ts
import { isWeakMap } from "@nick/is";

const weakMap = new WeakMap();
isWeakMap(weakMap); // true
isWeakMap({}); // false
```

> **Aliases**: `is.weakMap`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWeakMap)

#### `isWeakSet`

Checks if a given value is a `WeakSet` object. This is more reliable than the
`instanceof WeakSet` method, as it will work across different realms and
environments, and it does not consider objects that were not created with
`new WeakSet()` to be instances of a `WeakSet`.

```ts
import { isWeakSet } from "@nick/is";

const weakSet = new WeakSet();
isWeakSet(weakSet); // true
isWeakSet({}); // false
```

> **Aliases**: `is.weakSet`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWeakSet)

#### `isWeakRef`

Checks if a given value is a `WeakRef` object. This is more reliable than the
`instanceof WeakRef` method, as it will work across different realms and
environments, and it does not consider objects that were not created with
`new WeakRef()` to be instances of a `WeakRef`.

```ts
import { isWeakRef } from "@nick/is";

const weakRef = new WeakRef({});
isWeakRef(weakRef); // true
isWeakRef({}); // false
```

> **Aliases**: `is.weakRef`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWeakRef)

#### `isWeakKey`

Checks if a given value is suitable for use as a key in a `WeakMap` or
`WeakSet`, or as a target value in a `WeakRef`.

```ts
import { isWeakKey } from "@nick/is";

isWeakKey({}); // true
isWeakKey(() => {}); // true
isWeakKey(Symbol()); // true
isWeakKey(0); // false
```

> **Aliases**: `is.weakKey`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWeakKey)

---

### Iterables

#### `isIterable`

Checks if a given value is an iterable with a `Symbol.iterator` method.

```ts
import { isIterable } from "@nick/is";

isIterable([]); // true
isIterable("hello"); // true
isIterable(0); // false
```

> **Aliases**: `is.iterable`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isIterable)

#### `isIterator`

Checks if a given value is an iterator, meaning it has a `next` method that
returns an object with `value` and `done` properties.

```ts
import { isIterator } from "@nick/is";

const iterator = [][Symbol.iterator]();
isIterator(iterator); // true
isIterator("hello"); // false
```

> **Aliases**: `is.iterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isIterator)

#### `isIterableIterator`

Checks if a given value is an `IterableIterator` implementation, meaning it is

```ts
import { isIterableIterator } from "@nick/is";

const iterator = [][Symbol.iterator]();
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
  },
};

isIterableIterator(iterable); // false
isIterableIterator(iterable[Symbol.iterator]()); // true
isIterableIterator(iterator); // true
```

> **Aliases**: `is.iterableIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isIterableIterator)

#### `isAsyncIterable`

Checks if a given value is an async iterable object, meaning it has a
`Symbol.asyncIterator` method, and therefore is an implementation of the
`AsyncIterable` interface.

```ts
import { isAsyncIterable } from "@nick/is";

const posts = {
  async *[Symbol.asyncIterator]() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    yield* await posts.json();
  },
};
isAsyncIterable(posts); // true

const numbers = [1, 2, 3];
isAsyncIterable(numbers); // false
```

> **Aliases**: `is.asyncIterable`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isAsyncIterable)

#### `isAsyncIterator`

Checks if a given value is an async iterator, meaning it has a `next` method
that returns a promise that resolves to an object with `value` and `done`
properties, implementing the `AsyncIterator` interface.

```ts
import { isAsyncIterator } from "@nick/is";

{
  await using kv = await Deno.openKv();
  const iter = kv.list({ prefix: [] });

  if (isAsyncIterator(iter)) {
    // this condition should always evaluate to true
    let n = 0;
    for await (const { key, value } of iter) {
      if (n++ > 10) break; // limit to 10 items
      console.log("key:", key, "\nvalue:", value, "\ncursor:", iter.cursor);
    }
  }
}
```

> **Aliases**: `is.asyncIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isAsyncIterator)

#### `isAsyncIterableIterator`

Checks if a value is an `AsyncIterableIterator` implementation, which is both an
async iterator with a `next` method that returns a promise, and also an
asynchronous iterable with a `Symbol.asyncIterator` method.

```ts
import { isAsyncIterableIterator } from "@nick/is";

const items = {
  async *[Symbol.asyncIterator]() {
    yield 1;
    // simulate blocking I/O
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield 2;
  },
};

isAsyncIterableIterator(items); // false
isAsyncIterableIterator(items[Symbol.asyncIterator]()); // true
```

> **Aliases**: `is.asyncIterableIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isAsyncIterableIterator)

---

### Iterators

#### `isArrayIterator`

Checks if a given value is an array iterator, meaning it is an iterator object
that was created by calling the `Symbol.iterator` method on an array.

```ts
import { isArrayIterator } from "@nick/is";

const iterator = [][Symbol.iterator]();
isArrayIterator(iterator); // true
isArrayIterator("hello"); // false
```

> **Aliases**: `is.arrayIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayIterator)

#### `isMapIterator`

Checks if a given value is a map iterator, meaning it is an iterator object that
was created by calling the `entries`, `keys`, or `values` method on a map.

```ts
import { isMapIterator } from "@nick/is";

const map = new Map();
const iterator = map.entries();
isMapIterator(iterator); // true
isMapIterator(map[Symbol.iterator]()); // true
isMapIterator("hello"[Symbol.iterator]()); // false
```

> **Aliases**: `is.mapIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isMapIterator)

#### `isSetIterator`

Checks if a given value is a set iterator, meaning it is an iterator object that
was created by calling the `entries`, `keys`, or `values` method on a set.

```ts
import { isSetIterator } from "@nick/is";

const set = new Set();
const iterator = set.values();
isSetIterator(iterator); // true
isSetIterator(set[Symbol.iterator]()); // true
isSetIterator("hello"[Symbol.iterator]()); // false
```

> **Aliases**: `is.setIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isSetIterator)

#### `isStringIterator`

Checks if a given value is a string iterator, meaning it is an iterator object
that was created by calling the `Symbol.iterator` method on a string.

```ts
import { isStringIterator } from "@nick/is";

const iterator = "hello"[Symbol.iterator]();
isStringIterator(iterator); // true
isStringIterator("hello"); // false
```

> **Aliases**: `is.stringIterator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isStringIterator)

#### `isIterableObject`

Checks if a given value is an iterable object, meaning it is an object with a
`Symbol.iterator` method that returns an iterator.

```ts
import { isIterableObject } from "@nick/is";

const iterable = {
  *[Symbol.iterator]() {
    yield 1;
  },
};
isIterableObject(iterable); // true
isIterableObject("hello"); // false
```

> **Aliases**: `is.iterableObject`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isIterableObject)

---

### Generators

#### `isGenerator`

Checks if a given value is a generator function, meaning it is a function that
returns a generator object when called.

```ts
import { isGenerator } from "@nick/is";

const generator = function* () {
  yield 1;
};
isGenerator(generator); // true
isGenerator("hello"); // false
```

> **Aliases**: `is.generator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isGenerator)

#### `isGeneratorFunction`

Checks if a given value is a generator function, meaning it is a function that
returns a generator object when called.

```ts
import { isGeneratorFunction } from "@nick/is";

const generator = function* () {
  yield 1;
};
isGeneratorFunction(generator); // true
isGeneratorFunction("hello"); // false
```

> **Aliases**: `is.generatorFunction`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isGeneratorFunction)

#### `isAsyncGenerator`

Checks if a given value is an async generator function, meaning it is a function
that returns an async generator object when called.

```ts
import { isAsyncGenerator } from "@nick/is";

const asyncGenerator = async function* () {
  yield 1;
};
isAsyncGenerator(asyncGenerator); // true
isAsyncGenerator("hello"); // false
```

> **Aliases**: `is.asyncGenerator`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isAsyncGenerator)

#### `isAsyncGeneratorFunction`

Checks if a given value is an async generator function, meaning it is a function
that returns an async generator object when called.

```ts
import { isAsyncGeneratorFunction } from "@nick/is";

const asyncGenerator = async function* () {
  yield 1;
};
isAsyncGeneratorFunction(asyncGenerator); // true
isAsyncGeneratorFunction("hello"); // false
```

> **Aliases**: `is.asyncGeneratorFunction`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isAsyncGeneratorFunction)

---

### Streams

#### `isReadableStream`

Checks if a given value is a readable stream, meaning it is a valid
implementation of the `ReadableStream` interface.

```ts
import { isReadableStream } from "@nick/is";

const stream = new ReadableStream({ start() {} });
isReadableStream(stream); // true
isReadableStream("hello"); // false
```

> **Aliases**: `is.readableStream`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isReadableStream)

#### `isWritableStream`

Checks if a given value is a writable stream, meaning it is a valid
implementation of the `WritableStream` interface.

```ts
import { isWritableStream } from "@nick/is";

const stream = new WritableStream({ write() {} });
isWritableStream(stream); // true
isWritableStream("hello"); // false
```

> **Aliases**: `is.writableStream`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWritableStream)

---

### I/O

#### `isReader`

Checks if a given value is a reader, meaning it is a valid implementation of the
`Deno.Reader` interface. This is not the same as the `ReadableStream`
interface's `ReadableStreamDefaultReader` type, which is a different kind of
reader.

```ts
import { isReader } from "@nick/is";

const reader = Deno.openSync("hello.txt");
isReader(reader); // true
isReader("hello"); // false
```

> **Aliases**: `is.reader`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isReader)

#### `isReaderSync`

Checks if a given value is a synchronous reader, meaning it is a valid
implementation of the `ReaderSync` interface.

```ts
import { isReaderSync } from "@nick/is";

const reader = Deno.openSync("hello.txt");
isReaderSync(reader); // true
```

> **Aliases**: `is.readerSync`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isReaderSync)

#### `isWriter`

Checks if a given value is a writer, meaning it is a valid implementation of the
`Deno.Writer` interface. This is not the same as the `WritableStream`
interface's `WritableStreamDefaultWriter` type, which is a different kind of
writer.

```ts
import { isWriter } from "@nick/is";

const writer = Deno.openSync("hello.txt");
isWriter(writer); // true
isWriter("hello"); // false
```

> **Aliases**: `is.writer`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWriter)

#### `isWriterSync`

Checks if a given value is a synchronous writer, meaning it is a valid
implementation of the `WriterSync` interface.

```ts
import { isWriterSync } from "@nick/is";

const writer = Deno.openSync("hello.txt");
isWriterSync(writer); // true
```

> **Aliases**: `is.writerSync`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isWriterSync)

#### `isCloser`

Checks if a given value is a closer, meaning it is a valid implementation of the
`Deno.Closer` interface.

```ts
import { isCloser } from "@nick/is";

const closer = Deno.openSync("hello.txt");
isCloser(closer); // true
isCloser("hello"); // false
```

> **Aliases**: `is.closer`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isCloser)

---

### Template Literals

#### `isTemplateStringsArray`

Checks if a given value is a template strings array, meaning it is an array of
strings that were used as the first argument to a tagged template literal
function.

```ts
import { isTemplateStringsArray } from "@nick/is";

function outdent(string: string): string;
function outdent(strings: TemplateStringsArray, ...args: unknown[]): string;
function outdent(input: string | TemplateStringsArray, ...args: unknown[]) {
  if (isTemplateStringsArray(input)) {
    input = String.raw(input, ...args);
  }

  // don't actually do it like this...
  return input.replace(/^\n/, "").replace(/\n\s+/g, "\n");
}
```

> **Aliases**: `is.templateStringsArray`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isTemplateStringsArray)

---

### Binary Data Structures

#### `isBufferSource`

Checks if a given value is a `BufferSource` object, meaning it is either an
`ArrayBuffer`, `SharedArrayBuffer`, `TypedArray`, or a `DataView`.

```ts
import { isBufferSource } from "@nick/is";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);

isBufferSource(buffer); // true
isBufferSource(view); // true
isBufferSource(array); // true
isBufferSource({}); // false
```

> **Aliases**: `is.bufferSource`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isBufferSource)

#### `isArrayBuffer`

Checks if a given value is an `ArrayBuffer` object, which is a fixed-length
binary data buffer. This does not consider `SharedArrayBuffer` objects as
interchangeable with `ArrayBuffer` objects; to check for both types at once, use
the [`isArrayBufferLike`] type guard.

```ts
import { isArrayBuffer } from "@nick/is";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);

isArrayBuffer(buffer); // true
isArrayBuffer(shared); // false
```

> **Aliases**: `is.arrayBuffer`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayBuffer)

#### `isSharedArrayBuffer`

Checks if a given value is a `SharedArrayBuffer` object, which is a fixed-length
binary data buffer that can be shared between multiple agents (such as workers).

```ts
import { isSharedArrayBuffer } from "@nick/is";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);

isSharedArrayBuffer(buffer); // false
isSharedArrayBuffer(shared); // true
```

> **Aliases**: `is.sharedArrayBuffer`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isSharedArrayBuffer)

#### `isArrayBufferLike`

Checks if a given value is an `ArrayBuffer` or `SharedArrayBuffer` object.

```ts
import { isArrayBufferLike } from "@nick/is";

const buffer = new ArrayBuffer(8);
const shared = new SharedArrayBuffer(8);

isArrayBufferLike(buffer); // true
isArrayBufferLike(shared); // true
```

> **Aliases**: `is.arrayBufferLike`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayBufferLike)

#### `isArrayBufferView`

Checks if a given value is an `ArrayBufferView` object, meaning it is either a
`TypedArray` or a `DataView`.

```ts
import { isArrayBufferView } from "@nick/is";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const array = new Uint8Array(buffer);
const object = {};

isArrayBufferView(object); // false
isArrayBufferView(buffer); // false
isArrayBufferView(view); // true
isArrayBufferView(array); // true
```

> **Aliases**: `is.arrayBufferView`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isArrayBufferView)

#### `isDataView`

Checks if a given value is a `DataView` object, which is a view of an
`ArrayBuffer` that allows reading and writing of the buffer's contents.

```ts
import { isDataView } from "@nick/is";

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);
const object = {};

isDataView(object); // false
isDataView(buffer); // false
isDataView(view); // true
```

> **Aliases**: `is.dataView`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isDataView)

#### `isTypedArray`

Checks if a given value is a typed array, meaning it is an instance of one of
the `TypedArray` constructors, such as `Int8Array`, `Uint8Array`, etc.

```ts
import { isTypedArray } from "@nick/is";

const real = new Int8Array();
console.log("isTypedArray(real)", isTypedArray(real)); // true

const fake = Object.create(Int8Array.prototype);
console.log("isTypedArray(fake)", isTypedArray(fake)); // false
console.log("fake instanceof", fake instanceof Int8Array); // true (?!)
```

> **Aliases**: `is.typedArray`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isTypedArray)

You can also use it to check for a specific typed array type by name:

```ts
import { isTypedArray } from "@nick/is";

const array = new Uint8Array();

console.assert(isTypedArray(array)); // OK
console.assert(isTypedArray(array, "Uint8Array")); // OK
console.assert(!isTypedArray(array, "Int8Array")); // invalid type
console.assert(!isTypedArray(array.buffer)); // ArrayBuffer != TypedArray
```

> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isTypedArray)

#### `isUint8Array`

Checks if a given value is a `Uint8Array` object, which is a typed array of
8-bit unsigned integers.

```ts
import { isUint8Array } from "@nick/is";

const array = new Uint8Array();

console.assert(isUint8Array(array)); // true
console.assert(!isUint8Array(array.buffer)); // false
```

> **Aliases**: `is.uint8Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isUint8Array)

#### `isUint8ClampedArray`

Checks if a given value is a `Uint8ClampedArray` object, which is a typed array
of 8-bit unsigned integers that are clamped to 0-255.

```ts
import { isUint8ClampedArray } from "@nick/is";

const array = new Uint8ClampedArray();

console.assert(isUint8ClampedArray(array)); // true
console.assert(!isUint8ClampedArray(array.buffer)); // false
```

> **Aliases**: `is.uint8ClampedArray`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isUint8ClampedArray)

#### `isUint16Array`

Checks if a given value is a `Uint16Array` object, which is a typed array of
16-bit unsigned integers.

```ts
import { isUint16Array } from "@nick/is";

const array = new Uint16Array();

console.assert(isUint16Array(array)); // true
console.assert(!isUint16Array(array.buffer)); // false
```

> **Aliases**: `is.uint16Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isUint16Array)

#### `isUint32Array`

Checks if a given value is a `Uint32Array` object, which is a typed array of
32-bit unsigned integers.

```ts
import { isUint32Array } from "@nick/is";

const array = new Uint32Array();

console.assert(isUint32Array(array)); // true
console.assert(!isUint32Array(array.buffer)); // false
```

> **Aliases**: `is.uint32Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isUint32Array)

#### `isInt8Array`

Checks if a given value is an `Int8Array` object, which is a typed array of
8-bit signed integers.

```ts
import { isInt8Array } from "@nick/is";

const array = new Int8Array();

console.assert(isInt8Array(array)); // true
console.assert(!isInt8Array(array.buffer)); // false
```

> **Aliases**: `is.int8Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isInt8Array)

#### `isInt16Array`

Checks if a given value is an `Int16Array` object, which is a typed array of
16-bit signed integers.

```ts
import { isInt16Array } from "@nick/is";

const array = new Int16Array();

console.assert(isInt16Array(array)); // true
console.assert(!isInt16Array(array.buffer)); // false
```

> **Aliases**: `is.int16Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isInt16Array)

#### `isInt32Array`

Checks if a given value is an `Int32Array` object, which is a typed array of
32-bit signed integers.

```ts
import { isInt32Array } from "@nick/is";

const array = new Int32Array();

console.assert(isInt32Array(array)); // true
console.assert(!isInt32Array(array.buffer)); // false
```

> **Aliases**: `is.int32Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isInt32Array)

#### `isFloat16Array`

Checks if a given value is a `Float16Array` object, which is a typed array of
16-bit half-precision floating point numbers.

```ts
import { isFloat16Array } from "@nick/is";

const array = new Float16Array();

console.assert(isFloat16Array(array)); // true
console.assert(!isFloat16Array(array.buffer)); // false
```

> **Aliases**: `is.float16Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isFloat16Array)

#### `isFloat32Array`

Checks if a given value is a `Float32Array` object, which is a typed array of
32-bit single-precision floating point numbers.

```ts
import { isFloat32Array } from "@nick/is";

const array = new Float32Array();

console.assert(isFloat32Array(array)); // true
console.assert(!isFloat32Array(array.buffer)); // false
```

> **Aliases**: `is.float32Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isFloat32Array)

#### `isFloat64Array`

Checks if a given value is a `Float64Array` object, which is a typed array of
64-bit double-precision floating point numbers.

```ts
import { isFloat64Array } from "@nick/is";

const array = new Float64Array();

console.assert(isFloat64Array(array)); // true
console.assert(!isFloat64Array(array.buffer)); // false
```

> **Aliases**: `is.float64Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isFloat64Array)

#### `isBigInt64Array`

Checks if a given value is a `BigInt64Array` object, which is a typed array of
64-bit signed integers (BigInts).

```ts
import { isBigInt64Array } from "@nick/is";

const array = new BigInt64Array();

console.assert(isBigInt64Array(array)); // true
console.assert(!isBigInt64Array(array.buffer)); // false
```

> **Aliases**: `is.bigInt64Array`
> [JSR Documentation](https://jsr.io/@nick/is/doc/~/isBigInt64Array)

---

## Appendix

### Contributing

Contributing to the `@nick/is` project is **warmly** welcomed! If you've found a
bug, have an idea for a new feature, or have the time to fix or implement one of
the existing issues, please feel free to open a pull request. Before doing so, I
just ask that you take a moment to read through the [contributing guidelines]
and [code of conduct] to ensure your contributions align with the project's
values and goals.

If you plan on opening a pull request, please be sure to [open an issue] for it
first, so that we can discuss the changes and have a place to track the progress
towards merging them. This helps ensure you don't spend time working on
something that's already being implemented (or, for example, left out of the
project's scope or roadmap for some particular reason).

---

<div align="center">

<b><big>

[MIT] © [Nicholas Berlette]
</big>. All rights reserved.</b>

<small>

**[Docs] · [JSR] · [NPM] · [GitHub] · [Issues]**

</small>

</div>

[MIT]: https://nick.mit-license.org "MIT License. Copyright © 2024-2025+ Nicholas Berlette. All rights reserved."
[Nicholas Berlette]: https://github.com/nberlette#readme "Nicholas Berlette on GitHub"
[GitHub]: https://github.com/nberlette/is#readme "Give the @nick/is package a Star on GitHub! 🌟"
[JSR]: https://jsr.io/@nick/is "Check out the @nick/is package on JSR!"
[NPM]: https://npmjs.com/package/@n.ck/is "Check out @n.ck/is on NPM! (yep, 'i' got left out of npm/@nick .... get it? :p)"
[Docs]: https://jsr.io/@nick/is/doc "View the full @nick/is API documentation on JSR!"
[Issues]: https://github.com/nberlette/type/issues "GitHub Issue tracker for @nick/is"
[open an issue]: https://github.com/nberlette/is/issues/new "Open a New Issue on the GitHub Repository for @nick/is"
[contributing guidelines]: https://github.com/nberlette/is/blob/main/.github/CONTRIBUTING.md "Contributing Guidelines"
[code of conduct]: https://github.com/nberlette/is/blob/main/.github/CODE_OF_CONDUCT.md "Contributor's Code of Conduct"
[badge-jsr]: https://jsr.io/badges/@nick/is?style=for-the-badge
[badge-issues]: https://img.shields.io/github/issues/nberlette/is?color=123&labelColor=123&style=for-the-badge
[badge-issues-pull]: https://img.shields.io/github/issues-pr/nberlette/is?color=123&labelColor=123&style=for-the-badge
