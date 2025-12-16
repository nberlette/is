# Contributing

Thank you for your interest in contributing to [@nick/is]! This project aims to
provide the most comprehensive, well-tested, and performant collection of type
guards for JavaScript and TypeScript.

Your contributions help make this goal a reality. Thanks for helping out!

## Table of Contents

## Quick Start

1. **Fork** and **clone** the repository
   ```bash
   # using the github cli (gh)
   gh repo fork nberlette/is --clone && cd is
   ```
   ```bash
   # using the git suite
   git clone https://github.com/nberlette/is.git && cd is
   ```
2. **Install Deno**
   ([learn more here](https://deno.land/manual/getting_started/installation))
   ```bash
   curl -fsSL https://deno.land/install.sh | sh
   ```

3. **Run tests** to ensure everything is set up correctly.
   ```bash
   deno task test
   ```
   > If the tests pass, you're ready to start contributing!
4. **Make your changes** following the guidelines below.
   - For new type guards, follow the [Type Guards](#type-guards) section.
   - For bug fixes, ensure you add the appropriate test cases to the respective
     unit test file that corresponds to the source file you're working on. Be
     sure to cover your changes and any edge cases.
   - For performance improvements, refactoring, or features with potential for
     performance impact, it's recommended to include [benchmarks](#benchmarks)
     to measure the impact of your changes.
   - Ensure you follow the [Conventional Commits](#commit-messages) standard.
5. **Submit a pull request** once your changes are ready for review.
   - If you're still working on it, create a draft PR to get early feedback.
   - Make sure to reference any related issues in your pull request body, using
     _closing keywords_ like `Closes #123` or `Fixes #456` so that GitHub can
     detect the relationship between them, and auto-close the issue(s).

## Before You Start

### Opening Issues

- **Search existing issues** first to avoid duplicates
- **Use issue templates** when available
- **Provide clear reproduction steps** for bugs
- **Include relevant environment details** (Deno version, OS, etc.)

### Pull Request Process

1. **Open an issue first** to discuss your proposed changes
2. **Create a feature branch** from `main` (e.g., `feat/new-type-guard`)
3. **Follow coding standards** outlined below
4. **Add comprehensive tests** for new functionality
5. **Update documentation** as needed
6. **Ensure all CI checks pass**
7. **Request review** from maintainers

## Development Setup

### Prerequisites

- **Deno** (latest canary recommended)
- **Git**
- A good code editor with TypeScript/Deno support

### Project Structure

```
src/
├── [category]/              # Type guard modules (e.g., string/, number/)
│   ├── type_name.ts         # Main type guard implementation
│   ├── type_name.test.ts    # Comprehensive tests
│   └── type_name.bench.ts   # Performance benchmarks
└── internal/                # Internal shared utilities and types
```

### Available Scripts

```bash
# Run all tests
deno task test

# Run tests with coverage
deno task test:coverage

# Run documentation tests
deno task test:doc

# Run benchmarks
deno task bench

# Lint code
deno task lint

# Format code
deno task fmt

# Check license headers
deno task check:licenses

# Fix license headers
deno task fix:licenses
```

## Contributing Guidelines

### Type Guards

When adding a new type guard:

1. **Create a dedicated module** in the appropriate directory
2. **Follow the naming convention**: `is[TypeName]` (e.g., `isString`,
   `isArrayLike`)
3. **Include comprehensive JSDoc** with examples
4. **Add thorough tests** covering edge cases
5. **Include performance benchmarks**
6. **Update the main exports** in `mod.ts`

#### Type Guard Template

````typescript
/**
 * Checks if the given value is [description].
 *
 * @param it - The value to check
 * @returns `true` if the value is [type], `false` otherwise
 *
 * @example
 * ```ts
 * import { is[TypeName] } from "@nick/is/[type-name]";
 *
 * console.log(is[TypeName](value)); // true/false
 * ```
 */
export function is[TypeName](it: unknown): it is [Type] {
  // Implementation here
}
````

### Code Standards

#### TypeScript

- **Use strict TypeScript** with proper type annotations.
- **Include a module doc comment** at the top of each file.
  ````typescript
  /**
   * @module string
   *
   * This module provides `isString`, a type guard for string values.
   *
   * @example
   * ```ts
   * import { isString } from "@nick/is/string";
   * import assert from "node:assert/strict";
   *
   * assert.ok(isString("hello"));
   * assert.ok(!isString(123));
   * ```
   */
  ````
- **Always use type predicates** for type guards:
  ````typescript
  /**
   * Checks if the given value is a string.
   *
   * @param it - The value to check
   * @returns `true` if the value is a string, `false` otherwise
   * @example
   * ```ts
   * import { isString } from "@nick/is/string";
   * import assert from "node:assert/strict";
   *
   * assert.ok(isString("hello"));
   * assert.ok(!isString(123));
   * ```
   * @category Primitive
   */
  export function isString(it: unknown): it is string {
    return typeof it === "string";
  }
  ````
- **Avoid `any`** - use a specific type, or `unknown` instead
- **Use const assertions** where appropriate.
- **Follow existing patterns** in the codebase.

#### Portability

- Type guards should function correctly in Deno, Node, Bun, Cloudflare Workers,
  and Web Browsers too. The exception to this rule are type guards obviously
  intended to test for a platform-specific API.
  - For example, an `isDOMElement` type guard would only be relevant in
    environments that support the DOM, such as web browsers. It should not be
    used in environments like Deno or Node.js where the DOM is not available;
    therefore, while allowed, it should be clearly documented as such, and
    placed in an appropriate subdirectory (e.g., `dom/`).
  - For example, `isWriter` and `isWriterSync` are _intended_ to test for the
    `Writer` and `WriterSync` interfaces made popular by Deno; however, they're
    written in a way that allows them to be used in any environment.

#### Performance

- **Optimize for common cases** first
- **Avoid unnecessary object creation**
- **Use efficient algorithms**
- **Benchmark significant changes**
- **Consider memory usage**

#### Testing

- **Cover all code paths** including edge cases
- **Test with various input types**
- **Include performance regression tests**
- **Use descriptive test names**
- **Group related tests** with `describe` blocks

#### Documentation

- **Write clear JSDoc comments** for all public APIs
- **Include practical examples** in documentation
- **Keep examples concise** but illustrative
- **Document edge cases** and gotchas
- **Update README** if adding new categories

### Commit Messages

We follow the [Conventional Commits](https://conventionalcommits.org/)
specification:

```
type(scope): description

[optional body]

[optional footer]
```

#### Types

- `feat`: New feature or type guard
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples

```
feat(string): add isEmailAddress type guard

Add comprehensive email validation with RFC 5322 compliance
and practical use cases.

Closes #123
```

```
fix(number): handle edge case in isFinite

Fix issue where -0 was incorrectly handled in finite number check.

Fixes #456
```

## Testing

### Test Structure

```typescript ignore
// src/[category]/type_name.test.ts
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { isTypeName } from "./type_name.ts";

describe("isTypeName: sanity checks", () => {
  it("should be a function", () => {
    expect(isTypeName).toBeInstanceOf(Function);
  });

  it("should return false for non-[type] values", () => {
    expect(isTypeName(null)).toBe(false);
    expect(isTypeName(undefined)).toBe(false);
    expect(isTypeName(123)).toBe(false);
    expect(isTypeName("string")).toBe(false);
  });
});

describe("isTypeName: functionality", () => {
  it("should return true for valid {type} values", () => {
    // Test valid cases
  });

  it("should return false for invalid {type} values", () => {
    // Test invalid cases
  });
});

describe("isTypeName: edge cases", () => {
  it("should handle edge cases correctly", () => {
    // Test edge cases
  });
});
```

> [!TIP]
>
> Refer to the existing test files in the `src/` directory for examples of
> comprehensive tests. Each type guard should have its own test file named after
> the source file, but with a `.test.ts` extension: for example, the
> hypothetical `type_name.ts` would have a `type_name.test.ts` test file.

### Test Coverage

- **Aim for 100% code coverage**. This is not a strict requirement, but a
  general goal to work towards. Generally speaking, decent quality tests should
  should result in at least `80%` code coverage.
  - If you find that your coverage numbers are being dragged down by
    irrelevant/untestable code, you can use the `// deno-coverage-ignore`
    comment to ignore specific lines or blocks of code.
    - This is intended to be used extremely sparingly.
- **Test all branches** and conditions where applicable.
- **Include boundary conditions**.
  [Read more about boundary conditions here.](https://en.wikipedia.org/wiki/Boundary_value_analysis)
- **Test with different JS environments** in mind! This project is developed
  using Deno, but it targets **all JavaScript environments** wherever possible.

### Benchmarks

Include benchmarks for new type guards:

```typescript ignore
import { isTypeName } from "./mod.ts";

const testValue = /* appropriate test value */;

Deno.bench("isTypeName - valid case", () => {
  isTypeName(testValue);
});

// with warmups and/or multiple iterations
Deno.bench({
  name: "isTypeName - valid case",
  fn: () => {
    isTypeName(testValue);
  },
  warmup: 1_000,
  n: 100_000,
});
```

#### Benchmarking multiple functions/fixtures at once

Below is an example of a pattern I personally use to benchmark multiple
functions against one another, often times with multiple fixtures. Deno's
benchmark API allows for a `group` option, as well as a `baseline` option, that
can be used to provide more informative results. For more information on Deno's
benchmark API, refer to the
[Deno documentation](https://deno.land/manual/testing/benchmarking).

```typescript ignore
import { isTypeName, isExternal } from "./mod.ts";
import { isExternal } from "npm:some-external-package";

// grouping multiple benchmarks together
const targets = [
  { name: "isTypeName", fn: isTypeName, baseline: true },
  { name: "isExternal", fn: isExternal, baseline: false },
];
const fixtures = [
  { group: "valid", value: /* valid test value */ },
  { group: "invalid", value: /* invalid test value */ },
];

for (const { group, value } of fixtures) {
  for (const { name, fn, baseline } of targets) {
    Deno.bench({
      group,
      name,
      baseline,
      fn: () => fn(value),
    });
  }
}
```

## Documentation

### JSDoc Requirements

- **Clear, concise descriptions**
- **Parameter documentation** with types
- **Return value documentation**
- **Practical examples** that compile
- **Cross-references** to related functions

### Example Standards

- **Use real-world scenarios** when possible
- **Show TypeScript usage** with type narrowing
- **Include both positive and negative cases**
- **Keep examples focused** and minimal

---

## Further Reading

### Release Process

1. **Version bump** following semantic versioning
2. **Update CHANGELOG.md** with new features/fixes
3. **Tag release** with appropriate version
4. **Publish to [JSR]** automatically via CI
5. **Update documentation** if needed

### Recognition

Contributors are recognized in several ways:

- **Git commit history** preserves your contributions
- **[JSR] package page** lists contributors
- **Special thanks** in release notes for significant contributions

### Code of Conduct

Please note that this project has a [Code of Conduct](./CODE_OF_CONDUCT.md). By
participating in this project, you agree to abide by its terms.

### Getting Help

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussion
- **Code Review**: Detailed feedback on pull requests

### License

By contributing to [@nick/is], you agree that your contributions will be
licensed under the [MIT License][MIT].

---

> Thank you for contributing to [@nick/is]! Your efforts help make JavaScript
> and TypeScript development safer and more enjoyable for everyone!
>
> – Nick Berlette, maintainer

[@nick/is]: https://github.com/nberlette/is#readme
[MIT]: https://nick.mit-license.org/2024
[Nicholas Berlette]: https://github.com/nberlette
[Deno]: https://deno.land
[JSR]: https://jsr.io/package/@nick/is
[Conventional Commits]: https://conventionalcommits.org/
