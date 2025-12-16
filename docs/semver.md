# @nick/is/semver

## `isSemVer`

#### Signature

```ts ignore
function isSemVer(it: unknown): it is SemVer;
```

Check if the given value is a valid semantic version string, according to the
Semantic Versioning 2.0.0 specification as per https://semver.org. This function
does not check if the version is a valid version range, but simply validates it
against the regular expression pattern from the specification.

##### Parameters

| Name     | Info                |
| :------- | :------------------ |
| **`it`** | The value to check. |

##### Returns

`true` if it is a valid semantic version string, `false` otherwise.

###### Category

`Strings`

#### Examples

```ts
import { isSemVer } from "jsr:@nick/is/semver";

console.log(isSemVer("1.2.3")); // true
console.log(isSemVer("1.2.3-alpha")); // true
console.log(isSemVer("1.2.3+build")); // true
console.log(isSemVer("1.2.3-alpha+build")); // true
console.log(isSemVer("1.2.3-alpha.1")); // true
console.log(isSemVer("1.2")); // false
```

## `MaybeSemVer`

#### Signature

```ts ignore
export type MaybeSemVer = Flavor<string, "SemVer">;
```

Less-strict form of the [`SemVer`](#semver "Jump to symbol: 'SemVer'") type,
which allows for strings to be assigned to it that might not be valid semantic
version strings.

###### Category

`Strings`

## `SemVer`

#### Signature

```ts ignore
export type SemVer = Brand<string, "SemVer">;
```

Represents a validated Semantic Version (SemVer v2.0.0) string. This is the type
the [`isSemVer`](#issemver "Jump to symbol: 'isSemVer'") function narrows its
input values to.

###### Category

`Strings`
