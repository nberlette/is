# @nick/is/map-like

## `isMapLike`

#### Signature

```ts ignore
function isMapLike<K, V>(it: unknown): it is MapLike<K, V>;
```

Checks whether a given value is a
[`MapLike`](#maplike "Jump to symbol: 'MapLike'") object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a `MapLike` object; otherwise, `false`.

## `isMapLikeConstructor`

#### Signature

```ts ignore
function isMapLikeConstructor(it: unknown): it is MapLikeConstructor;
```

Checks whether a given value is a
[`MapLikeConstructor`](#maplikeconstructor "Jump to symbol: 'MapLikeConstructor'")
function, which is defined as a constructor function with a `prototype` property
that appears to be a [`MapLike`](#maplike "Jump to symbol: 'MapLike'") object.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a
[`MapLikeConstructor`](#maplikeconstructor "Jump to symbol: 'MapLikeConstructor'");
otherwise, `false`.

###### Category

`Guards`

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
