/**
 * Expansive collection of dependency-free modular type guard utilities, built
 * to be platform-agnostic and compatible with virtually all modern JavaScript
 * and TypeScript runtime environments.
 *
 * Developed with a focus on performance, reliability, and ease of use, this
 * library provides a comprehensive set of tree-shakeable modules for a wide
 * variety of different types. It also provides numerous type-level predicates
 * and utilities for querying and narrowing types on a purely type-level basis.
 *
 * ## Install
 *
 * The primary distribution channel for this package is [JSR].
 *
 * #### Deno
 *
 * If you're running Deno 2.x, JSR is built right into the Deno CLI:
 *
 * ```sh
 * deno add jsr:@nick/is
 * ```
 *
 * #### Bun, PNPM, Yarn, NPM
 *
 * You can also install `@nick/is` right into any Node codebase using the `jsr`
 * CLI, either via `npx` or an equivalent from your package manager of choice:
 *
 * ```sh
 * npx jsr add @nick/is
 * ```
 *
 * ```sh
 * bunx jsr add @nick/is
 * ```
 *
 * ```sh
 * pnpm dlx jsr add @nick/is
 * ```
 *
 * ```sh
 * yarn dlx jsr add @nick/is
 * ```
 *
 * ## Usage
 *
 * The recommended way to use the functions in this library is to import them
 * on an as-needed basis, directly from their respective submodules. However,
 * `@nick/is` also provides several alternative syntaxes for importing the
 * functions it exports, which are demonstrated below.
 *
 * ```ts
 * // recommended usage: explicitly named imports from individual submodules
 * import { isString } from "@nick/is/string";
 *
 * console.assert(isString("nick")); // OK
 * console.assert(isString(1)); // Uncaught Error: Assertion failed
 * ```
 *
 * ```ts
 * // alternative usage: default imports from individual submodules
 * import isBigIntObject from "@nick/is/bigint-object";
 *
 * console.assert(isBigIntObject(Object(0n))); // OK
 * ```
 *
 * > [!NOTE]
 * >
 * > The two examples above demonstrate **the recommended** usage for this
 * > library. If you're currently in the development phase, however, you
 * > might find it more convenient to use the styles below. Once you begin
 * > the shift to production, you should consider refactoring your imports
 * > to use the styles above to help with tree-shaking.
 *
 * ```ts
 * // development usage: named imports from the root module
 * import { isNull, isBufferSource } from "@nick/is";
 *
 * console.assert(isNull(null)); // OK
 * console.assert(isBufferSource(new ArrayBuffer(8))); // OK
 * ```
 *
 * ```ts
 * // alternative development usage: namespace (glob) import
 * import * as is from "@nick/is/namespace";
 *
 * console.assert(is.string("nick")); // OK
 * console.assert(is.bufferSource(new ArrayBuffer(8))); // OK
 * ```
 *
 * > [!TIP]
 * >
 * > The recommended usage in production code is to explicitly import only the
 * > type guards you need, from their individual respective modules. This helps
 * > bundlers tree-shake unused code (dead code elimination) and reduces the
 * > overall size of your final bundle.
 * >
 * > It's also widely considered a best practice in the JavaScript community,
 * > and helps lighten the load on users of your library by reducing its size.
 * >
 * > See the following links for more information on tree-shaking:
 * >
 * > 1. https://en.wikipedia.org/wiki/Tree_shaking for more information.
 * > 2. https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80
 *
 * #### Naming Conventions
 *
 * The naming conventions between submodules and their respective type guards
 * is consistent throughout the library. Type guard functions all begin with
 * the prefix `is`, followed by the PascalCase name of the type they check for.
 * The submodule name is the same, but in kebab-case.
 */
// #region Imports

import type { ArrayBufferLike } from "./array_buffer_like.ts";
import type { ArrayIterator } from "./array_iterator.ts";
import type { ArrayLikeObject } from "./array_like.ts";
import type { NonEmptyArray } from "./array.ts";
import type { AsyncFunction } from "./async_function.ts";
import type { AsyncIterableObject } from "./async_iterable_object.ts";
import type { Class } from "./class.ts";
import type { Constructor } from "./constructor.ts";
import type { Closer } from "./closer.ts";
import type { DateString } from "./date_string.ts";
import type { Enum, EnumLike } from "./enum.ts";
import type { Falsy } from "./falsy.ts";
import type { Identifier } from "./identifier.ts";
import type { IterableObject } from "./iterable_object.ts";
import type { MapIterator } from "./map_iterator.ts";
import type { MapLike, MapLikeConstructor } from "./map_like.ts";
import type { ObjectLike } from "./object.ts";
import type { Primitive } from "./primitive.ts";
import type { Printable } from "./printable.ts";
import type { ReaderSync } from "./reader_sync.ts";
import type { Reader } from "./reader.ts";
import type { SemVer } from "./semver.ts";
import type { SetIterator } from "./set_iterator.ts";
import type {
  ExtendedSetLike,
  ExtendedSetLikeConstructor,
  ReadonlyCollection,
  ReadonlyCollectionConstructor,
  SetLike,
  SetLikeConstructor,
  SupportedSetLike,
  SupportedSetLikeConstructor,
} from "./set_like.ts";
import type { TemplateObject } from "./template_object.ts";
import type { TemplateStringsArray } from "./template_strings_array.ts";
import type { StringIterator } from "./string_iterator.ts";
import type { WellKnownSymbol } from "./well_known_symbol.ts";
import type { RegisteredSymbol } from "./registered_symbol.ts";
import type { UniqueSymbol } from "./unique_symbol.ts";
import type { TypedArray } from "./typed_array.ts";
import type { WriterSync } from "./writer_sync.ts";
import type { Writer } from "./writer.ts";

// #region Number Guards
import type {
  BigInteger,
  Cast,
  CastInt,
  MaybeZero,
  NegativeBigInteger,
  PositiveBigInteger,
  Unwrap,
  Zero,
} from "./number/mod.ts";
import type { Infinity } from "./number/infinity.ts";
import type { NaN } from "./number/nan.ts";
import type { Even, IsEven } from "./number/even.ts";
import type { IsOdd, Odd } from "./number/odd.ts";
import type { Float } from "./number/float.ts";
import type { Float16, MaybeFloat16 } from "./number/float16.ts";
import type { Float32, MaybeFloat32 } from "./number/float32.ts";
import type { Float64, MaybeFloat64 } from "./number/float64.ts";
import type { Integer, MaybeInteger } from "./number/integer.ts";
import type { Int16, MaybeInt16 } from "./number/int16.ts";
import type { Int32, MaybeInt32 } from "./number/int32.ts";
import type { Int8, MaybeInt8 } from "./number/int8.ts";
import type { MaybeNegative, Negative } from "./number/negative.ts";
import type { MaybePositive, Positive } from "./number/positive.ts";
import type { NegativeInfinity } from "./number/negative_infinity.ts";
import type { PositiveInfinity } from "./number/positive_infinity.ts";
import type {
  PositiveFiniteInteger,
} from "./number/positive_finite_integer.ts";
import type {
  NegativeFiniteInteger,
} from "./number/negative_finite_integer.ts";
import type { NonZeroFiniteInteger } from "./number/nonzero_finite_integer.ts";
import type {
  NegativeNonZeroInteger,
} from "./number/negative_nonzero_integer.ts";
import type {
  NegativeNonZeroFiniteInteger,
} from "./number/negative_nonzero_finite_integer.ts";
import type {
  PositiveNonZeroFiniteInteger,
} from "./number/positive_nonzero_finite_integer.ts";
import type {
  PositiveNonZeroInteger,
} from "./number/positive_nonzero_integer.ts";
import type { NonZeroInteger } from "./number/nonzero_integer.ts";
import type { NegativeInteger } from "./number/negative_integer.ts";
import type { PositiveInteger } from "./number/positive_integer.ts";
import type {
  MaybePositiveZero,
  PositiveZero,
} from "./number/positive_zero.ts";
import type {
  MaybeNegativeZero,
  NegativeZero,
} from "./number/negative_zero.ts";
import type {
  MaybeNegativeNonZeroFinite,
  NegativeNonZeroFinite,
} from "./number/negative_nonzero_finite.ts";
import type {
  MaybePositiveNonZeroFinite,
  PositiveNonZeroFinite,
} from "./number/positive_nonzero_finite.ts";
import type {
  MaybeNonZeroFinite,
  NonZeroFinite,
} from "./number/nonzero_finite.ts";
import type {
  MaybeNegativeFinite,
  NegativeFinite,
} from "./number/negative_finite.ts";
import type {
  MaybePositiveFinite,
  PositiveFinite,
} from "./number/positive_finite.ts";
import type { Finite, MaybeFinite } from "./number/finite.ts";
import type {
  MaybeNegativeNonZero,
  NegativeNonZero,
} from "./number/negative_nonzero.ts";
import type {
  MaybePositiveNonZero,
  PositiveNonZero,
} from "./number/positive_nonzero.ts";
import type { MaybeNonZero, NonZero } from "./number/nonzero.ts";
import type { InRange, Range } from "./number/in_range.ts";
import type { MaybeUint16, Uint16 } from "./number/uint16.ts";
import type { MaybeUint32, Uint32 } from "./number/uint32.ts";
import type { MaybeUint8, Uint8 } from "./number/uint8.ts";
// #endregion Number Guards

import type { Expand } from "./_internal.ts";
import type {
  IsAny,
  IsArray,
  IsEqual,
  IsIndexSignature,
  IsLiteral,
  IsLowerCase,
  IsNever,
  IsNonTupleArray,
  IsNumeric,
  IsTuple,
  IsUnknown,
  IsUnknownOrNever,
  IsUpperCase,
  IsWhitespace,
  OmitNever,
} from "./types.ts";

// #endregion Imports

/**
 * Represents a type guard (predicate function) that checks if a given value
 * of the base type `Base` is also of the derived type `Type`.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * ```ts
 * import { is } from "@nick/is";
 *
 * const isString: Predicate<string> = (it: unknown): it is string => (
 *   typeof it === "string"
 * );
 * ```
 */
export type Predicate<
  // deno-lint-ignore no-explicit-any
  Type extends Base = any,
  Base = unknown,
  // deno-lint-ignore no-explicit-any
  ExtraArgs extends readonly unknown[] = readonly any[],
> = Expand<(it: Base, ...args: ExtraArgs) => it is Type>;

/**
 * Represents an assertion function that checks if a given value of the base
 * type `Base` is also of the derived type `Type`. If the value is not of the
 * derived type, it will throw an error.
 *
 * @template {Base} Type The derived type to check for.
 * @template [Base=unknown] The base type to check against.
 * @example
 * ```ts
 * const assertString: Assertion<string> = (it: unknown): asserts it is string => {
 *   if (typeof it !== "string") {
 *     throw new TypeError("Expected a string");
 *   }
 * };
 * ```
 */
// deno-lint-ignore no-explicit-any
export type Assertion<Type extends Base = any, Base = unknown> = (
  it: Base,
) => asserts it is Type;

// #region Type Aliases
export type {
  ArrayBufferLike,
  ArrayIterator,
  ArrayLikeObject,
  AsyncFunction,
  AsyncIterableObject,
  BigInteger,
  Cast,
  CastInt,
  Class,
  Closer,
  Constructor,
  DateString,
  Enum,
  EnumLike,
  Even,
  ExtendedSetLike,
  ExtendedSetLikeConstructor,
  Falsy,
  Finite,
  Float,
  Float16,
  Float32,
  Float64,
  Float64 as Double,
  Identifier,
  Infinity,
  InRange,
  Int16,
  Int32,
  Int8,
  Integer,
  IsAny,
  IsArray,
  IsEqual,
  IsEven,
  IsIndexSignature,
  IsLiteral,
  IsLowerCase,
  IsNever,
  IsNonTupleArray,
  IsNumeric,
  IsOdd,
  IsTuple,
  IsUnknown,
  IsUnknownOrNever,
  IsUpperCase,
  IsWhitespace,
  IterableObject,
  MapIterator,
  MapLike,
  MapLikeConstructor,
  MaybeFinite,
  MaybeFloat16,
  MaybeFloat32,
  MaybeFloat64,
  MaybeInt16,
  MaybeInt32,
  MaybeInt8,
  MaybeInteger,
  MaybeNegative,
  MaybeNegativeFinite,
  MaybeNegativeNonZero,
  MaybeNegativeNonZeroFinite,
  MaybeNegativeZero,
  MaybeNonZero,
  MaybeNonZeroFinite,
  MaybePositive,
  MaybePositiveFinite,
  MaybePositiveNonZero,
  MaybePositiveNonZeroFinite,
  MaybePositiveZero,
  MaybeUint16,
  MaybeUint32,
  MaybeUint8,
  MaybeZero,
  NaN,
  Negative,
  NegativeBigInteger,
  NegativeFinite,
  NegativeFiniteInteger,
  NegativeInfinity,
  NegativeInteger,
  NegativeNonZero,
  NegativeNonZeroFinite,
  NegativeNonZeroFiniteInteger,
  NegativeNonZeroInteger,
  NegativeZero,
  NonEmptyArray,
  NonZero,
  NonZeroFinite,
  NonZeroFiniteInteger,
  NonZeroInteger,
  ObjectLike,
  Odd,
  OmitNever,
  Positive,
  PositiveBigInteger,
  PositiveFinite,
  PositiveFiniteInteger,
  PositiveInfinity,
  PositiveInteger,
  PositiveNonZero,
  PositiveNonZeroFinite,
  PositiveNonZeroFiniteInteger,
  PositiveNonZeroInteger,
  PositiveZero,
  Primitive,
  Printable,
  Range,
  Reader,
  ReaderSync,
  ReadonlyCollection,
  ReadonlyCollection as ReadonlySetLike,
  ReadonlyCollectionConstructor,
  ReadonlyCollectionConstructor as ReadonlySetLikeConstructor,
  RegisteredSymbol,
  SemVer,
  SetIterator,
  SetLike,
  SetLikeConstructor,
  StringIterator,
  SupportedSetLike,
  SupportedSetLikeConstructor,
  TemplateObject,
  TemplateStringsArray,
  TypedArray,
  Uint16,
  Uint32,
  Uint8,
  UniqueSymbol,
  Unwrap,
  WellKnownSymbol,
  Writer,
  WriterSync,
  Zero,
};
// #endregion Type-Level Guards
