# @nick/is/tagged

## `isTagged`

#### Signature

```ts ignore
function isTagged<O = {}, T extends string = string>(it: O): it is O & {
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

## `normalizeTag`

#### Signature

```ts ignore
function normalizeTag<T extends string>(tag: T): NormalizeTag<T>;
```

Normalizes a given toStringTag value, removing any leading and trailing
whitespace and any leading `[object` and trailing `]`, if present.

## `normalizeTag`

#### Signature

```ts ignore
function normalizeTag(tag: string): string;
```

## `normalizeTag`

#### Signature

```ts ignore
function normalizeTag(tag: string): string;
```

## `NormalizeTag`

#### Signature

```ts ignore
export type NormalizeTag<T extends string> = Trim<
  T extends `[object ${infer U}]` ? U : T
>;
```

##### Type Parameters

- **`T`** extends `string`

---
