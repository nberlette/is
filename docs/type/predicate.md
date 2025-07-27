# @nick/is/type/predicate

## `Predicate`

#### Signature

```ts ignore
export type Predicate<
  Type extends Base = any,
  Base = unknown,
  Args extends readonly unknown[] = any[],
> = Expand<(it: Base, ...args: Args) => it is Type>;
```

Represents a type guard (predicate function) that checks if a given value of the
base type `Base` is also of the derived type `Type`.

##### Type Parameters

- **`Type`** extends `Base` (default: `any`)
- **`Base`** (default: `unknown`)
- **`Args`** extends `readonly unknown[]` (default: `any[]`)

---

#### Examples

```ts
const isString: Predicate<string> = (it: unknown): it is string => (
  typeof it === "string"
);
```
