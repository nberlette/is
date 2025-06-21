# @nick/is/function

## `isFunction`

#### Signature

```ts ignore
function isFunction<T extends FunctionOrConstructor>(
  it: T | unknowns,
): it is FunctionOrConstructor<any, any, any> extends T ? Function : T;
```

Check if the given value is a function.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if the value is a function, `false` otherwise.

###### Category

`Standard`

#### Examples

```ts
import { isFunction } from "jsr:@nick/is/function";

console.log(isFunction(() => {})); // true
console.log(isFunction(function () {})); // true
console.log(isFunction(class {})); // true
console.log(isFunction(new Function())); // true
console.log(isFunction({})); // false
console.log(isFunction(1)); // false
```

## `isFunction`

#### Signature

```ts ignore
function isFunction<T = any, A extends readonly any[] = any[]>(
  it: Fn<T, A> | unknowns,
): it is Fn<T, A>;
```

## `isFunction`

#### Signature

```ts ignore
function isFunction<T = any, A extends readonly any[] = any[], R = any>(
  it: ThisFn<T, A, R> | unknowns,
): it is ThisFn<T, A, R>;
```

## `isFunction`

#### Signature

```ts ignore
function isFunction(it: unknown): it is Function;
```

## `isFunction`

#### Signature

```ts ignore
function isFunction(it: unknown): it is FunctionOrConstructor;
```

## `Fn`

#### Signature

```ts ignore
export type Fn<T = any, A extends readonly any[] = any[]> = (...args: A) => T;
```

##### Type Parameters

- **`T`** (default: `any`)
- **`A`** extends `readonly any[]` (default: `any[]`)

---

## `FunctionOrConstructor`

#### Signature

```ts ignore
export type FunctionOrConstructor<
  T = any,
  A extends readonly any[] = any[],
  R = void,
> = Constructor<R, A> | Fn<R, A> | ThisFn<T, A, R> | Function;
```

##### Type Parameters

- **`T`** (default: `any`)
- **`A`** extends `readonly any[]` (default: `any[]`)
- **`R`** (default: `void`)

---

## `ThisFn`

#### Signature

```ts ignore
export type ThisFn<T = any, A extends readonly any[] = any[], R = any> = (
  this: T,
  ...args: A
) => R;
```

##### Type Parameters

- **`T`** (default: `any`)
- **`A`** extends `readonly any[]` (default: `any[]`)
- **`R`** (default: `any`)

---
