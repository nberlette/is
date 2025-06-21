# @nick/is/set-like

## `isExtendedSetLike`

#### Signature

```ts ignore
function isExtendedSetLike<T>(it: unknown): it is ExtendedSetLike<T>;
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

## `isExtendedSetLikeConstructor`

#### Signature

```ts ignore
function isExtendedSetLikeConstructor(
  it: unknown,
): it is ExtendedSetLikeConstructor;
```

Checks if a given value appears to be a
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
function, including a `prototype` property that appears to be a
[`ExtendedSetLike`](#extendedsetlike "Jump to symbol: 'ExtendedSetLike'")
object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`ExtendedSetLikeConstructor`](#extendedsetlikeconstructor "Jump to symbol: 'ExtendedSetLikeConstructor'")
function; otherwise, `false`.

###### Category

`Guards`

## `isReadonlyCollection`

#### Signature

```ts ignore
function isReadonlyCollection<T>(it: unknown): it is ReadonlyCollection<T>;
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

## `isReadonlyCollectionConstructor`

#### Signature

```ts ignore
function isReadonlyCollectionConstructor(
  it: unknown,
): it is ReadonlyCollectionConstructor;
```

Checks if a given value appears to be a
[`ReadonlyCollectionConstructor`](#readonlycollectionconstructor "Jump to symbol: 'ReadonlyCollectionConstructor'")
function, including a `prototype` property that appears to be a
[`ReadonlyCollection`](#readonlycollection "Jump to symbol: 'ReadonlyCollection'")
object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value appears to be a
[`ReadonlyCollectionConstructor`](#readonlycollectionconstructor "Jump to symbol: 'ReadonlyCollectionConstructor'")
function; otherwise, `false`.

###### Category

`Guards`

## `isSetLike`

#### Signature

```ts ignore
function isSetLike<T>(it: unknown): it is SetLike<T>;
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

## `isSetLikeConstructor`

#### Signature

```ts ignore
function isSetLikeConstructor(it: unknown): it is SetLikeConstructor;
```

Checks if a given value appears to be a
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
function, including a `prototype` property that appears to be a
[`SetLike`](#setlike "Jump to symbol: 'SetLike'") object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`SetLikeConstructor`](#setlikeconstructor "Jump to symbol: 'SetLikeConstructor'")
function; otherwise, `false`.

###### Category

`Guards`

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
