# @nick/is/both

## `isBoth`

#### Signature

```ts ignore
function isBoth<L, R>(
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
