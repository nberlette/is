# @nick/is/well-known-symbol

## `isWellKnownSymbol`

#### Signature

```ts ignore
function isWellKnownSymbol(it: unknown): it is WellKnownSymbol;
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
