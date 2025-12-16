# @nick/is/instance

## `isInstance`

#### Signature

```ts ignore
function isInstance<T>(it: unknown, constructor: Constructor<T>): it is T;
```

Checks if a given value is an instance of a specific class or constructor.

This is a type guard function that can be used to determine if a value is an
instance of a class or constructor function, even if the class is not directly
accessible in the current scope.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `isInstance`

#### Signature

```ts ignore
function isInstance<T extends Constructor<any>>(
  it: unknown,
  constructor: T,
): it is InstanceType<T>;
```

Checks if a given value is an instance of a particular class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`

## `isInstance`

#### Signature

```ts ignore
function isInstance<T extends Constructor<P>, P = InstanceType<T>>(
  it: unknown,
  constructor: T | Constructor<P> | P,
): it is InstanceType<T>;
```

Checks if a given value is an instance of a specific class or constructor.

##### Parameters

| Name              | Info                                                |
| :---------------- | :-------------------------------------------------- |
| **`it`**          | The value to check.                                 |
| **`constructor`** | The class or constructor function to check against. |

##### Returns

`true` if it is an instance of the class; otherwise, `false`.

###### Category

`Guards`
