/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/namespace
 */

/**
 * This module provides all of the type guards in the library, renamed into the
 * naming convention of `isString -> is.string`.
 *
 * This is used internally to construct the default export of the library
 * (which is also available as the named `is` export), and also exposed for
 * direct import if desired.
 *
 * @module namespace
 */

// #region Imports
import arguments_ from "./arguments.ts";
import arrayBufferLike from "./array_buffer_like.ts";
import arrayBufferView from "./array_buffer_view.ts";
import arrayBuffer from "./array_buffer.ts";
import arrayIterator from "./array_iterator.ts";
import arrayLike from "./array_like.ts";
import arrayLikeObject from "./array_like_object.ts";
import array from "./array.ts";
import asyncDisposable from "./async_disposable.ts";
import asyncFunction from "./async_function.ts";
import asyncGeneratorFunction from "./async_generator_function.ts";
import asyncGenerator from "./async_generator.ts";
import asyncIterableIterator from "./async_iterable_iterator.ts";
import asyncIterable from "./async_iterable.ts";
import asyncIterableObject from "./async_iterable_object.ts";
import asyncIterator from "./async_iterator.ts";
import bigint, { isBigInt as bigInt } from "./bigint.ts";
import bigIntObject from "./bigint_object.ts";
import bigInt64Array from "./bigint64_array.ts";
import bigUint64Array from "./biguint64_array.ts";
import boolean from "./boolean.ts";
import booleanObject from "./boolean_object.ts";
import both from "./both.ts";
import boxedPrimitive from "./boxed_primitive.ts";
import bufferSource from "./buffer_source.ts";
import class_ from "./class.ts";
import constructor from "./constructor.ts";
import closer from "./closer.ts";
import dataView from "./data_view.ts";
import date from "./date.ts";
import dateString from "./date_string.ts";
import defined from "./defined.ts";
import disposable from "./disposable.ts";
import either from "./either.ts";
import error from "./error.ts";
import empty from "./empty.ts";
import falsy from "./falsy.ts";
import enum_ from "./enum.ts";
import float16Array from "./float16_array.ts";
import float32Array from "./float32_array.ts";
import float64Array from "./float64_array.ts";
import function_ from "./function.ts";
import generatorFunction from "./generator_function.ts";
import generator from "./generator.ts";
import identifier from "./identifier.ts";
import instance from "./instance.ts";
import int16Array from "./int16_array.ts";
import int32Array from "./int32_array.ts";
import int8Array from "./int8_array.ts";
import iterableIterator from "./iterable_iterator.ts";
import iterableObject from "./iterable_object.ts";
import iterable from "./iterable.ts";
import iterator from "./iterator.ts";
import keyof from "./keyof.ts";
import mapIterator from "./map_iterator.ts";
import mapLike from "./map_like.ts";
import map from "./map.ts";
import missing from "./missing.ts";
import nonEmptyArray from "./non_empty_array.ts";
import null_ from "./null.ts";
import numberObject from "./number_object.ts";
import objectLike from "./object_like.ts";
import object from "./object.ts";
import plainObject from "./plain_object.ts";
import present from "./present.ts";
import primitive from "./primitive.ts";
import printable from "./printable.ts";
import promiseLike from "./promise_like.ts";
import promise from "./promise.ts";
import propertyKey from "./property_key.ts";
import readableStream from "./readable_stream.ts";
import readerSync from "./reader_sync.ts";
import reader from "./reader.ts";
import regexp, { isRegExp as regExp } from "./regexp.ts";
import semver from "./semver.ts";
import setIterator from "./set_iterator.ts";
import {
  isExtendedSetLike as extendedSetLike,
  isReadonlyCollection as readonlyCollection,
  isReadonlyCollection as readonlySetLike,
  isSetLike as setLike,
} from "./set_like.ts";
import set from "./set.ts";
import sharedArrayBuffer from "./shared_array_buffer.ts";
import stringIterator from "./string_iterator.ts";
import string from "./string.ts";
import stringObject from "./string_object.ts";
import symbol from "./symbol.ts";
import symbolObject from "./symbol_object.ts";
import wellKnownSymbol from "./well_known_symbol.ts";
import registeredSymbol from "./registered_symbol.ts";
import uniqueSymbol from "./unique_symbol.ts";
import tagged from "./tagged.ts";
import templateStringsArray from "./template_strings_array.ts";
import templateObject from "./template_object.ts";
import truthy from "./truthy.ts";
import typedArray from "./typed_array.ts";
import uint16Array from "./uint16_array.ts";
import uint32Array from "./uint32_array.ts";
import uint8Array from "./uint8_array.ts";
import uint8ClampedArray from "./uint8_clamped_array.ts";
import undefined_ from "./undefined.ts";
import weakKey from "./weak_key.ts";
import weakMap from "./weak_map.ts";
import weakRef from "./weak_ref.ts";
import weakSet from "./weak_set.ts";
import whitespace, {
  isWhitespaceChar as whitespaceChar,
  isWhitespaceCode as whitespaceCode,
  isWhitespaceLike as whitespaceLike,
} from "./whitespace.ts";
import writableStream from "./writable_stream.ts";
import writerSync from "./writer_sync.ts";
import writer from "./writer.ts";
import url from "./url.ts";
import urlString from "./url_string.ts";
import urlSearchParams from "./url_search_params.ts";

// #region Number Guards
import zero from "./number/zero.ts";
import infinity from "./number/infinity.ts";
import nan from "./number/nan.ts";
import even from "./number/even.ts";
import odd from "./number/odd.ts";
import float from "./number/float.ts";
import float16 from "./number/float16.ts";
import float32 from "./number/float32.ts";
import float64 from "./number/float64.ts";
import integer from "./number/integer.ts";
import int16 from "./number/int16.ts";
import int32 from "./number/int32.ts";
import int8 from "./number/int8.ts";
import negative from "./number/negative.ts";
import positive from "./number/positive.ts";
import negativeInfinity from "./number/negative_infinity.ts";
import positiveInfinity from "./number/positive_infinity.ts";
import nonZeroFiniteInteger from "./number/nonzero_finite_integer.ts";
import negativeNonZeroInteger from "./number/negative_nonzero_integer.ts";
import negativeNonZeroFiniteInteger from "./number/negative_nonzero_finite_integer.ts";
import positiveNonZeroFiniteInteger from "./number/positive_nonzero_finite_integer.ts";
import positiveNonZeroInteger from "./number/positive_nonzero_integer.ts";
import finiteInteger from "./number/finite_integer.ts";
import nonZeroInteger from "./number/nonzero_integer.ts";
import negativeInteger from "./number/negative_integer.ts";
import positiveInteger from "./number/positive_integer.ts";
import positiveZero from "./number/positive_zero.ts";
import negativeZero from "./number/negative_zero.ts";
import negativeNonZeroFinite from "./number/negative_nonzero_finite.ts";
import positiveNonZeroFinite from "./number/positive_nonzero_finite.ts";
import nonZeroFinite from "./number/nonzero_finite.ts";
import negativeFinite from "./number/negative_finite.ts";
import positiveFinite from "./number/positive_finite.ts";
import finite from "./number/finite.ts";
import negativeNonZero from "./number/negative_nonzero.ts";
import positiveNonZero from "./number/positive_nonzero.ts";
import nonZero from "./number/nonzero.ts";
// why does this need to be imported like this???
// trying to do `import number from "./number/number.ts"` reults in an error
// that there is no default export, even though there most certainly is.
import { isNumber as number } from "./number/number.ts";
import inRange from "./number/in_range.ts";
import uint16 from "./number/uint16.ts";
import uint32 from "./number/uint32.ts";
import uint8 from "./number/uint8.ts";
// #endregion Number Guards

// #endregion Imports

export * from "./types.ts";

/**
 * # `@nick/is`
 *
 * Collection of universal type guards for TypeScript and JavaScript projects.
 *
 * ---
 *
 * The `is` export is a module namespace that bundles together **all** the type
 * guards individually available in this library, renaming them into methods in
 * the naming convention of `isString -> is.string`. In total, this object has
 * over 120 different predicates in it, spanning a range of different purposes,
 * types, and use cases.
 *
 * #### Features
 *
 * - **160+ Type Guards**: A comprehensive collection of type guards for
 *   JavaScript and TypeScript projects.
 * - **Tree-Shakeable**: Import only the guards you need to reduce bundle size.
 * - **Well-Documented**: Every guard is thoroughly documented with examples.
 * - **Type-Safe**: Guards are written to be as type-safe as possible.
 * - **Compatible**: Works in Deno, Node, Bun, Browsers, and Cloudflare Workers
 * - **No Dependencies**: No external dependencies, just pure TypeScript.
 * - **Zero Configuration**: Works out of the box with no setup required.
 *
 * #### Treeshaking
 *
 * This import type is the most convenient (and least peformant) way to use
 * the library. Since you most likely won't be using _all_ of these methods in
 * any one project, it's typically much more efficient to only import the
 * guards that are actually needed. These are accessible as named exports in
 * granular submodules like `@nick/is/string`, `@nick/is/array-buffer`, etc.
 *
 * Utilizing this submodule-based approach allows bundlers to tree-shake out
 * the code that is unused, greatly reducing the final file size.
 */
export {
  arguments_ as arguments,
  array,
  arrayBuffer,
  arrayBufferLike,
  arrayBufferView,
  arrayIterator,
  arrayLike,
  arrayLikeObject,
  asyncDisposable,
  asyncFunction,
  asyncGenerator,
  asyncGeneratorFunction,
  asyncIterable,
  asyncIterableIterator,
  asyncIterableObject,
  asyncIterator,
  bigInt,
  bigint,
  bigInt64Array,
  bigIntObject,
  bigIntObject as bigintObject,
  bigUint64Array,
  boolean,
  booleanObject,
  both,
  boxedPrimitive,
  bufferSource,
  class_ as class,
  closer,
  constructor,
  dataView,
  date,
  dateString,
  defined,
  disposable,
  either,
  empty,
  enum_ as enum,
  error,
  even,
  extendedSetLike,
  falsy,
  finite,
  finiteInteger,
  float,
  float16,
  float16Array,
  float32,
  float32Array,
  float64,
  float64Array,
  function_ as function,
  generator,
  generatorFunction,
  identifier,
  infinity,
  inRange,
  instance,
  instance as instanceof,
  int16,
  int16Array,
  int32,
  int32Array,
  int8,
  int8Array,
  integer,
  iterable,
  iterableIterator,
  iterableObject,
  iterator,
  keyof,
  keyof as keyOf,
  map,
  mapIterator,
  mapLike,
  missing,
  nan,
  negative,
  negativeFinite,
  negativeInfinity,
  negativeInteger,
  negativeNonZero,
  negativeNonZeroFinite,
  negativeNonZeroFiniteInteger,
  negativeNonZeroInteger,
  negativeZero,
  nonEmptyArray,
  nonZero,
  nonZeroFinite,
  nonZeroFiniteInteger,
  nonZeroInteger,
  null_ as null,
  number,
  numberObject,
  object,
  objectLike,
  odd,
  plainObject,
  positive,
  positiveFinite,
  positiveInfinity,
  positiveInteger,
  positiveNonZero,
  positiveNonZeroFinite,
  positiveNonZeroFiniteInteger,
  positiveNonZeroInteger,
  positiveZero,
  present,
  primitive,
  printable,
  promise,
  promiseLike,
  propertyKey,
  readableStream,
  reader,
  readerSync,
  readonlyCollection,
  readonlySetLike,
  regExp,
  regexp,
  registeredSymbol,
  semver,
  set,
  setIterator,
  setLike,
  sharedArrayBuffer,
  string,
  stringIterator,
  stringObject,
  symbol,
  symbolObject,
  tagged,
  templateObject,
  templateStringsArray,
  truthy,
  typedArray,
  uint16,
  uint16Array,
  uint32,
  uint32Array,
  uint8,
  uint8Array,
  uint8ClampedArray,
  undefined_ as undefined,
  uniqueSymbol,
  url,
  urlSearchParams,
  urlString,
  weakKey,
  weakMap,
  weakRef,
  weakSet,
  wellKnownSymbol,
  whitespace,
  whitespaceChar,
  whitespaceCode,
  whitespaceLike,
  writableStream,
  writer,
  writerSync,
  zero,
};
