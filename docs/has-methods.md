# @nick/is/has-methods

## `hasMethods`

#### Signature

```ts ignore
function hasMethods<T, K extends readonly PropertyKey[]>(it: T, ...keys: K): it is Extract<T, {
     [P in [object Object]]:
    P extends keyof T ? T[P] extends Fn ? T[P] : never : Fn
  }>;
```

Checks if the given value contains methods for all of the specified keys. No
other properties or traits are checked by this guard, such that the target value
may be even be a primitive value like a string or number.

##### Parameters

| Name       | Info                   |
| :--------- | :--------------------- |
| **`it`**   | The object to check.   |
| **`keys`** | The keys to check for. |

##### Returns

`true` if the object has all the specified keys, and each key is a callable
method; otherwise, `false`.

###### Category

`Guards`

#### Examples

```ts
import { hasMethods } from "@nick/is/has-methods";

const obj = { foo: () => "foo", bar: () => "bar", baz: 42 };

console.assert(hasMethods(obj, "foo", "bar")); // OK
```

```ts
import { hasMethods } from "@nick/is/has-methods";

const ab = new ArrayBuffer(8);

console.assert(hasMethods(ab, "slice")); // OK

// checking if resizable array buffer methods are available
if (hasMethods(ab, "resize", "transfer")) {
  console.log("Great news - the RAB proposal is supported!");
}
```

## `hasMethods`

#### Signature

```ts ignore
function hasMethods<K extends readonly PropertyKey[]>(
  it: unknown,
  ...keys: K
): it is {
  [P in undefined]: Fn;
};
```

## `hasMethods`

#### Signature

```ts ignore
function hasMethods(it: unknown, ...keys: PropertyKey[]): boolean;
```

## `hasMethods`

#### Signature

```ts ignore
function hasMethods(it: unknown, ...keys: PropertyKey[]): boolean;
```
