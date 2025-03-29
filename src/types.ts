/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/types
 */

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
 *
 * @module types
 */
export type { ArrayBufferLike } from "./array_buffer_like.ts";
export type { ArrayIterator } from "./array_iterator.ts";
export type { ArrayLikeObject } from "./array_like_object.ts";
export type { NonEmptyArray } from "./non_empty_array.ts";
export type { AsyncFunction } from "./async_function.ts";
export type { AsyncIterableObject } from "./async_iterable_object.ts";
export type { Class } from "./class.ts";
export type { Constructor } from "./constructor.ts";
export type { Closer } from "./closer.ts";
export type { DateString } from "./date_string.ts";
export type { Enum, EnumLike } from "./enum.ts";
export type { Falsy } from "./falsy.ts";
export type { Identifier } from "./identifier.ts";
export type { IterableObject } from "./iterable_object.ts";
export type { MapIterator } from "./map_iterator.ts";
export type { MapLike, MapLikeConstructor } from "./map_like.ts";
export type { Primitive } from "./primitive.ts";
export type { Printable } from "./printable.ts";
export type { ReaderSync } from "./reader_sync.ts";
export type { Reader } from "./reader.ts";
export type { SemVer } from "./semver.ts";
export type { SetIterator } from "./set_iterator.ts";
export type {
  ExtendedSetLike,
  ExtendedSetLikeConstructor,
  ReadonlyCollection,
  ReadonlyCollectionConstructor,
  SetLike,
  SetLikeConstructor,
  SupportedSetLike,
  SupportedSetLikeConstructor,
} from "./set_like.ts";
export type { TemplateObject } from "./template_object.ts";
export type { TemplateStringsArray } from "./template_strings_array.ts";
export type { StringIterator } from "./string_iterator.ts";
export type { WellKnownSymbol } from "./well_known_symbol.ts";
export type { RegisteredSymbol } from "./registered_symbol.ts";
export type { UniqueSymbol } from "./unique_symbol.ts";
export type { TypedArray } from "./typed_array.ts";
export type { WriterSync } from "./writer_sync.ts";
export type { Writer } from "./writer.ts";
export type {
  BigInteger,
  Cast,
  CastInt,
  MaybeZero,
  NegativeBigInteger,
  PositiveBigInteger,
  Unwrap,
  Zero,
} from "./number/mod.ts";
export type { Infinity } from "./number/infinity.ts";
export type { NaN } from "./number/nan.ts";
export type { Even, IsEven } from "./number/even.ts";
export type { IsOdd, Odd } from "./number/odd.ts";
export type { Float } from "./number/float.ts";
export type { Float16, MaybeFloat16 } from "./number/float16.ts";
export type { Float32, MaybeFloat32 } from "./number/float32.ts";
export type { Float64, MaybeFloat64 } from "./number/float64.ts";
export type { Integer, MaybeInteger } from "./number/integer.ts";
export type { Int16, MaybeInt16 } from "./number/int16.ts";
export type { Int32, MaybeInt32 } from "./number/int32.ts";
export type { Int8, MaybeInt8 } from "./number/int8.ts";
export type { MaybeNegative, Negative } from "./number/negative.ts";
export type { MaybePositive, Positive } from "./number/positive.ts";
export type { NegativeInfinity } from "./number/negative_infinity.ts";
export type { PositiveInfinity } from "./number/positive_infinity.ts";
export type {
  PositiveFiniteInteger,
} from "./number/positive_finite_integer.ts";
export type {
  NegativeFiniteInteger,
} from "./number/negative_finite_integer.ts";
export type { NonZeroFiniteInteger } from "./number/nonzero_finite_integer.ts";
export type {
  NegativeNonZeroInteger,
} from "./number/negative_nonzero_integer.ts";
export type {
  NegativeNonZeroFiniteInteger,
} from "./number/negative_nonzero_finite_integer.ts";
export type {
  PositiveNonZeroFiniteInteger,
} from "./number/positive_nonzero_finite_integer.ts";
export type {
  PositiveNonZeroInteger,
} from "./number/positive_nonzero_integer.ts";
export type { NonZeroInteger } from "./number/nonzero_integer.ts";
export type { NegativeInteger } from "./number/negative_integer.ts";
export type { PositiveInteger } from "./number/positive_integer.ts";
export type {
  MaybePositiveZero,
  PositiveZero,
} from "./number/positive_zero.ts";
export type {
  MaybeNegativeZero,
  NegativeZero,
} from "./number/negative_zero.ts";
export type {
  MaybeNegativeNonZeroFinite,
  NegativeNonZeroFinite,
} from "./number/negative_nonzero_finite.ts";
export type {
  MaybePositiveNonZeroFinite,
  PositiveNonZeroFinite,
} from "./number/positive_nonzero_finite.ts";
export type {
  MaybeNonZeroFinite,
  NonZeroFinite,
} from "./number/nonzero_finite.ts";
export type {
  MaybeNegativeFinite,
  NegativeFinite,
} from "./number/negative_finite.ts";
export type {
  MaybePositiveFinite,
  PositiveFinite,
} from "./number/positive_finite.ts";
export type { Finite, MaybeFinite } from "./number/finite.ts";
export type {
  MaybeNegativeNonZero,
  NegativeNonZero,
} from "./number/negative_nonzero.ts";
export type {
  MaybePositiveNonZero,
  PositiveNonZero,
} from "./number/positive_nonzero.ts";
export type { MaybeNonZero, NonZero } from "./number/nonzero.ts";
export type { InRange, Range, Exclusivity } from "./number/in_range.ts";
export type { MaybeUint16, Uint16 } from "./number/uint16.ts";
export type { MaybeUint32, Uint32 } from "./number/uint32.ts";
export type { MaybeUint8, Uint8 } from "./number/uint8.ts";
export type * from "./whitespace.ts";
