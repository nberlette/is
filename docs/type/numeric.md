# @nick/is/type/numeric

## `IsNumeric`

#### Signature

```ts ignore
export type IsNumeric<T, True = true, False = false> = T extends number | bigint
  ? True
  : T extends `${number}` | `${bigint}` ? True
  : T extends `${number}${string}` ? True
  : False;
```

If the given string [`T`](#t "Jump to symbol: 'T'") is numeric (meaning a
literal number like `0`, a literal bigint like `0n`, the generic types `number`
or `bigint`, or generic numeric string like `${number}` or `${bigint}`), this
type resolves to the [`True`](#true "Jump to symbol: 'True'") type parameter
(defaults: `true`). Everything else will resolve to the
[`False`](#false "Jump to symbol: 'False'") parameter (default: `false`).

Similar to the other utility types in this module, the parameterization of this
type's conditional `true` and `false` branches allows for both simple inline
conditional type checks as well as more complex nested conditionals, without the
need for any `x extends y ? a : b` ternaries.

##### Type Parameters

- **`T`**
- **`True`** (default: `true`)
- **`False`** (default: `false`)

---

###### Category

`Types`

#### Examples

```ts
// simplified tuple traversal
declare function map<const A extends readonly unknown[], const B>(
  array: [...A],
  fn: (input: A[number], index: number) => B,
): [...{ [K in keyof A]: IsNumeric<K, B, A[K]> }];

const result = map([1, 2, 3], (x) => x * 2);
//     ^? const result: [number, number, number]
```
