/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/semver
 */

import type { Brand, Flavor } from "./_internal.ts";

/**
 * @module semver
 *
 * Check if the given value is a valid semantic version string, according to
 * the Semantic Versioning 2.0.0 specification as per https://semver.org. This
 * function does not check if the version is a valid version range, but simply
 * validates it against the regular expression pattern from the specification.
 *
 * @example
 * ```ts
 * import { isSemVer } from "jsr:@nick/is/semver";
 *
 * console.log(isSemVer("1.2.3")); // true
 * console.log(isSemVer("1.2.3-alpha")); // true
 * console.log(isSemVer("1.2.3+build")); // true
 * console.log(isSemVer("1.2.3-alpha+build")); // true
 * console.log(isSemVer("1.2.3-alpha.1")); // true
 * console.log(isSemVer("1.2")); // false
 * ```
 * @category Strings
 */

/**
 * Check if the given value is a valid semantic version string, according to
 * the Semantic Versioning 2.0.0 specification as per https://semver.org. This
 * function does not check if the version is a valid version range, but simply
 * validates it against the regular expression pattern from the specification.
 *
 * @param it The value to check.
 * @returns `true` if it is a valid semantic version string, `false` otherwise.
 * @example
 * ```ts
 * import { isSemVer } from "jsr:@nick/is/semver";
 *
 * console.log(isSemVer("1.2.3")); // true
 * console.log(isSemVer("1.2.3-alpha")); // true
 * console.log(isSemVer("1.2.3+build")); // true
 * console.log(isSemVer("1.2.3-alpha+build")); // true
 * console.log(isSemVer("1.2.3-alpha.1")); // true
 * console.log(isSemVer("1.2")); // false
 * ```
 * @category Strings
 */
export function isSemVer(it: unknown): it is SemVer {
  return typeof it === "string" && isSemVer.pattern.test(it);
}

/**
 * Represents a validated Semantic Version (SemVer v2.0.0) string. This is the
 * type the {@linkcode isSemVer} function narrows its input values to.
 * @category Strings
 */
export type SemVer = Brand<string, "SemVer">;

/**
 * Less-strict form of the {@linkcode SemVer} type, which allows for strings to
 * be assigned to it that might not be valid semantic version strings.
 * @category Strings
 */
export type MaybeSemVer = Flavor<string, "SemVer">;

isSemVer.pattern =
  /^v?(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/** @ignore */
export default isSemVer;
