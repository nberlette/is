# @nick/is/whitespace

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
