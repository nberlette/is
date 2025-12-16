# @nick/is/typed-array

## `isTypedArray`

#### Signature

```ts ignore
function isTypedArray<T extends ArrayBufferLike = ArrayBufferLike>(
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

## `isTypedArray`

#### Signature

```ts ignore
function isTypedArray<T extends ArrayBufferLike = ArrayBufferLike>(
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

## `isTypedArray`

#### Signature

```ts ignore
function isTypedArray<K extends TypedArrayTypeName, T extends ArrayBufferLike>(
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

## `isTypedArray`

#### Signature

```ts ignore
function isTypedArray<K extends TypedArrayTypeName, T extends ArrayBufferLike>(
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

## `isTypedArray`

#### Signature

```ts ignore
function isTypedArray(it: unknown, type?: string): it is TypedArray;
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

## `TypedArrayConstructor`

#### Signature

```ts ignore
export type TypedArrayConstructor<T extends ArrayBufferLike = ArrayBufferLike> =
  ValueOf<TypedArrayConstructorMap<T>>;
```

Represents a constructor for typed arrays, which are views over raw binary data
buffers (e.g. `ArrayBuffer`) that provide a fixed-size, typed view into the
buffer. The following are the supported native typed array types:

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

## `TypedArrayTypeMap`

#### Signature

```ts ignore
export type TypedArrayTypeMap<T extends ArrayBufferLike = ArrayBufferLike> = {
  [K in undefined]: InstanceType<TypedArrayConstructorMap<T>[K]>;
};
```

Maps the names of TypedArray subclasses to their instance types. This is used to
provide type information to the
[`isTypedArray`](#istypedarray "Jump to symbol: 'isTypedArray'") type guard.

##### Type Parameters

- **`T`** extends `ArrayBufferLike` (default: `ArrayBufferLike`)

---

## `TypedArrayTypeName`

#### Signature

```ts ignore
export type TypedArrayTypeName = string & keyof TypedArrayTypeMap;
```

Represents the name of a `TypedArrayConstructor`, which is a string that
corresponds to a given typed array subclass, e.g. `"Uint8Array"`.

## `TypedArrayConstructorMap`

Maps the names of TypedArray subclasses to their constructor types. This is used
to provide type information for the `TypedArray` type and the
[`isTypedArray`](#istypedarray "Jump to symbol: 'isTypedArray'") function.

##### Type Parameters

- **`T`** extends `ArrayBufferLike` (default: `ArrayBufferLike`)

---

##### Extends `UnstableTypedArrayConstructorMap<T>`

### Properties

#### Uint8Array

```ts
Uint8Array: typeof Uint8Array;
```

#### Uint8ClampedArray

```ts
Uint8ClampedArray: typeof Uint8ClampedArray;
```

#### Uint16Array

```ts
Uint16Array: typeof Uint16Array;
```

#### Uint32Array

```ts
Uint32Array: typeof Uint32Array;
```

#### Int8Array

```ts
Int8Array: typeof Int8Array;
```

#### Int16Array

```ts
Int16Array: typeof Int16Array;
```

#### Int32Array

```ts
Int32Array: typeof Int32Array;
```

#### Float32Array

```ts
Float32Array: typeof Float32Array;
```

#### Float64Array

```ts
Float64Array: typeof Float64Array;
```

---
