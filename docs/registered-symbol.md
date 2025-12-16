# @nick/is/registered-symbol

## `isRegisteredSymbol`

#### Signature

```ts ignore
function isRegisteredSymbol(it: unknown): it is RegisteredSymbol;
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
