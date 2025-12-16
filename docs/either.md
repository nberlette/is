# @nick/is/either

## `isEither`

#### Signature

```ts ignore
function isEither<L, R>(
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
