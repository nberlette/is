# @nick/is/type/assertion

## `Assertion`

#### Signature

```ts ignore
export type Assertion<
  Type extends Base = any,
  Base = unknown,
  Args extends readonly unknown[] = readonly any[],
> = Expand<(it: Base, ...args: Args) => asserts it is Type>;
```

Represents an assertion function that checks if a given value of the base type
`Base` is also of the derived type `Type`. If the value is not of the derived
type, it will throw an error.

##### Type Parameters

- **`Type`** extends `Base` (default: `any`)
- **`Base`** (default: `unknown`)
- **`Args`** extends `readonly unknown[]` (default: `readonly any[]`)

---

#### Examples

```ts
const assertString: Assertion<string> = (it: unknown): asserts it is string => {
  if (typeof it !== "string") {
    throw new TypeError("Expected a string");
  }
};
```
