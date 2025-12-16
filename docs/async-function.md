# @nick/is/async-function

## `isAsyncFunction`

#### Signature

```ts ignore
function isAsyncFunction<T = any>(it: unknown): it is AsyncFunction<T>;
```

## `AsyncFunction`

##### Type Parameters

- **`TReturn`** (default: `any`)

---

### Call Signatures

```ts
<T extends TReturn = TReturn>(...args: any[]): Promise<T>;
```

---

### Properties

#### `[Symbol.toStringTag]`

```ts
readonly [Symbol.toStringTag]: "AsyncFunction";
```

---
