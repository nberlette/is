/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/
 */
import { isArguments } from "./src/arguments.ts";
import { isArrayBufferLike } from "./src/array_buffer_like.ts";
import { isArrayBufferView } from "./src/array_buffer_view.ts";
import { isArrayBuffer } from "./src/array_buffer.ts";
import { isArrayIterator } from "./src/array_iterator.ts";
import { isArrayLike, isArrayLikeObject } from "./src/array_like.ts";
import { isArray, isNonEmptyArray } from "./src/array.ts";
import { isAsyncDisposable } from "./src/async_disposable.ts";
import { isAsyncFunction } from "./src/async_function.ts";
import { isAsyncGeneratorFunction } from "./src/async_generator_function.ts";
import { isAsyncGenerator } from "./src/async_generator.ts";
import { isAsyncIterableIterator } from "./src/async_iterable_iterator.ts";
import { isAsyncIterable } from "./src/async_iterable.ts";
import { isAsyncIterableObject } from "./src/async_iterable_object.ts";
import { isAsyncIterator } from "./src/async_iterator.ts";
import { isBigInt } from "./src/bigint.ts";
import { isBigIntObject } from "./src/bigint_object.ts";
import { isBigInt64Array } from "./src/bigint64_array.ts";
import { isBigUint64Array } from "./src/biguint64_array.ts";
import { isBoolean } from "./src/boolean.ts";
import { isBooleanObject } from "./src/boolean_object.ts";
import { isBoth } from "./src/both.ts";
import { isBoxedPrimitive } from "./src/boxed_primitive.ts";
import { isBufferSource } from "./src/buffer_source.ts";
import { isClass } from "./src/class.ts";
import { isConstructor } from "./src/constructor.ts";
import { isCloser } from "./src/closer.ts";
import { isDataView } from "./src/data_view.ts";
import { isDate } from "./src/date.ts";
import { isDateString } from "./src/date_string.ts";
import { isDefined } from "./src/defined.ts";
import { isDisposable } from "./src/disposable.ts";
import { isEither } from "./src/either.ts";
import { isError } from "./src/error.ts";
import { isEmpty } from "./src/empty.ts";
import { isFalsy } from "./src/falsy.ts";
import { isEnum } from "./src/enum.ts";
import { isFloat16Array } from "./src/float16_array.ts";
import { isFloat32Array } from "./src/float32_array.ts";
import { isFloat64Array } from "./src/float64_array.ts";
import { isFunction } from "./src/function.ts";
import { isGeneratorFunction } from "./src/generator_function.ts";
import { isGenerator } from "./src/generator.ts";
import { isIdentifier } from "./src/identifier.ts";
import { isInstance } from "./src/instance.ts";
import { isInt16Array } from "./src/int16_array.ts";
import { isInt32Array } from "./src/int32_array.ts";
import { isInt8Array } from "./src/int8_array.ts";
import { isIterableIterator } from "./src/iterable_iterator.ts";
import { isIterableObject } from "./src/iterable_object.ts";
import { isIterable } from "./src/iterable.ts";
import { isIterator } from "./src/iterator.ts";
import { isKeyOf } from "./src/keyof.ts";
import { isMapIterator } from "./src/map_iterator.ts";
import { isMapLike, isMapLikeConstructor } from "./src/map_like.ts";
import { isMap } from "./src/map.ts";
import { isMissing } from "./src/missing.ts";
import { isNull } from "./src/null.ts";
import { isNumberObject } from "./src/number_object.ts";
import { isObjectLike } from "./src/object_like.ts";
import { isObject } from "./src/object.ts";
import { isPlainObject } from "./src/plain_object.ts";
import { isPresent } from "./src/present.ts";
import { isPrimitive } from "./src/primitive.ts";
import { isPrintable } from "./src/printable.ts";
import { isPromiseLike } from "./src/promise_like.ts";
import { isPromise } from "./src/promise.ts";
import { isPropertyKey } from "./src/property_key.ts";
import { isReadableStream } from "./src/readable_stream.ts";
import { isReaderSync } from "./src/reader_sync.ts";
import { isReader } from "./src/reader.ts";
import { isRegExp } from "./src/regexp.ts";
import { isSemVer } from "./src/semver.ts";
import { isSetIterator } from "./src/set_iterator.ts";
import {
  isExtendedSetLike,
  isExtendedSetLikeConstructor,
  isReadonlyCollection,
  isReadonlyCollectionConstructor,
  isSetLike,
  isSetLikeConstructor,
} from "./src/set_like.ts";
import { isSet } from "./src/set.ts";
import { isSharedArrayBuffer } from "./src/shared_array_buffer.ts";
import { isStringIterator } from "./src/string_iterator.ts";
import { isString } from "./src/string.ts";
import { isStringObject } from "./src/string_object.ts";
import { isSymbol } from "./src/symbol.ts";
import { isSymbolObject } from "./src/symbol_object.ts";
import { isWellKnownSymbol } from "./src/well_known_symbol.ts";
import { isRegisteredSymbol } from "./src/registered_symbol.ts";
import { isUniqueSymbol } from "./src/unique_symbol.ts";
import { isTagged } from "./src/tagged.ts";
import { isTruthy } from "./src/truthy.ts";
import { isTypedArray } from "./src/typed_array.ts";
import { isUint16Array } from "./src/uint16_array.ts";
import { isUint32Array } from "./src/uint32_array.ts";
import { isUint8Array } from "./src/uint8_array.ts";
import { isUint8ClampedArray } from "./src/uint8_clamped_array.ts";
import { isUndefined } from "./src/undefined.ts";
import { isWeakKey } from "./src/weak_key.ts";
import { isWeakMap } from "./src/weak_map.ts";
import { isWeakRef } from "./src/weak_ref.ts";
import { isWeakSet } from "./src/weak_set.ts";
import { isWritableStream } from "./src/writable_stream.ts";
import { isWriterSync } from "./src/writer_sync.ts";
import { isWriter } from "./src/writer.ts";
import { isURL } from "./src/url.ts";
import { isURLString } from "./src/url_string.ts";
import { isURLSearchParams } from "./src/url_search_params.ts";
import {
  isFinite,
  isFinite as isFiniteNumber,
  isZero,
} from "./src/number/mod.ts";
import { isInfinity } from "./src/number/infinity.ts";
import { isNaN } from "./src/number/nan.ts";
import { isEven } from "./src/number/even.ts";
import { isOdd } from "./src/number/odd.ts";
import { isFloat } from "./src/number/float.ts";
import { isFloat16 } from "./src/number/float16.ts";
import { isFloat32 } from "./src/number/float32.ts";
import { isFloat64 } from "./src/number/float64.ts";
import { isInteger } from "./src/number/integer.ts";
import { isInt16 } from "./src/number/int16.ts";
import { isInt32 } from "./src/number/int32.ts";
import { isInt8 } from "./src/number/int8.ts";
import {
  isNegative,
  isNegative as isNegativeNumber,
} from "./src/number/negative.ts";
import {
  isPositive,
  isPositive as isPositiveNumber,
} from "./src/number/positive.ts";
import { isNegativeInfinity } from "./src/number/negative_infinity.ts";
import { isPositiveInfinity } from "./src/number/positive_infinity.ts";
import {
  isPositiveFiniteInteger,
} from "./src/number/positive_finite_integer.ts";
import {
  isNegativeFiniteInteger,
} from "./src/number/negative_finite_integer.ts";
import { isNonZeroFiniteInteger } from "./src/number/nonzero_finite_integer.ts";
import {
  isNegativeNonZeroFiniteInteger,
} from "./src/number/negative_nonzero_finite_integer.ts";
import {
  isPositiveNonZeroFiniteInteger,
} from "./src/number/positive_nonzero_finite_integer.ts";
import { isFiniteInteger } from "./src/number/finite_integer.ts";
import { isNonZeroInteger } from "./src/number/nonzero_integer.ts";
import { isNegativeInteger } from "./src/number/negative_integer.ts";
import { isPositiveInteger } from "./src/number/positive_integer.ts";
import { isPositiveZero } from "./src/number/positive_zero.ts";
import { isNegativeZero } from "./src/number/negative_zero.ts";
import {
  isNegativeNonZeroFiniteNumber,
  isNegativeNonZeroFiniteNumber as isNegativeNonZeroFinite,
} from "./src/number/negative_nonzero_finite.ts";
import {
  isPositiveNonZeroFiniteNumber,
  isPositiveNonZeroFiniteNumber as isPositiveNonZeroFinite,
} from "./src/number/positive_nonzero_finite.ts";
import {
  isNonZeroFiniteNumber,
  isNonZeroFiniteNumber as isNonZeroFinite,
} from "./src/number/nonzero_finite.ts";
import {
  isNegativeFiniteNumber,
  isNegativeFiniteNumber as isNegativeFinite,
} from "./src/number/negative_finite.ts";
import {
  isPositiveFiniteNumber,
  isPositiveFiniteNumber as isPositiveFinite,
} from "./src/number/positive_finite.ts";
import {
  isPositiveNonZeroNumber,
  isPositiveNonZeroNumber as isPositiveNonZero,
} from "./src/number/positive_nonzero.ts";
import {
  isNonZero,
  isNonZero as isNonZeroNumber,
} from "./src/number/nonzero.ts";
import { isNumber } from "./src/number/number.ts";
import { inRange as isInRange } from "./src/number/in_range.ts";
import { isUint16 } from "./src/number/uint16.ts";
import { isUint32 } from "./src/number/uint32.ts";
import { isUint8 } from "./src/number/uint8.ts";

export * as is from "./namespace.ts";
export * as default from "./namespace.ts";
export * from "./types.ts";

export {
  isArguments,
  isArray,
  isArrayBuffer,
  isArrayBufferLike,
  isArrayBufferLike as isAnyArrayBuffer,
  isArrayBufferView,
  isArrayIterator,
  isArrayLike,
  isArrayLikeObject,
  isAsyncDisposable,
  isAsyncFunction,
  isAsyncGenerator,
  isAsyncGeneratorFunction,
  isAsyncIterable,
  isAsyncIterableIterator,
  isAsyncIterableObject,
  isAsyncIterator,
  isBigInt,
  isBigInt64Array,
  isBigIntObject,
  isBigUint64Array,
  isBoolean,
  isBooleanObject,
  isBoth,
  isBoxedPrimitive,
  isBufferSource,
  isClass,
  isCloser,
  isConstructor,
  isDataView,
  isDate,
  isDateString,
  isDefined,
  isDisposable,
  isEither,
  isEmpty,
  isEnum,
  isError,
  isEven,
  isExtendedSetLike,
  isExtendedSetLikeConstructor,
  isFalsy,
  isFinite,
  isFiniteInteger,
  isFiniteNumber,
  isFloat,
  isFloat16,
  isFloat16Array,
  isFloat32,
  isFloat32Array,
  isFloat64,
  isFloat64Array,
  isFunction,
  isGenerator,
  isGeneratorFunction,
  isIdentifier,
  isInfinity,
  isInRange,
  isInstance,
  isInt16,
  isInt16Array,
  isInt32,
  isInt32Array,
  isInt8,
  isInt8Array,
  isInteger,
  isIterable,
  isIterableIterator,
  isIterableObject,
  isIterator,
  isKeyOf,
  isMap,
  isMapIterator,
  isMapLike,
  isMapLikeConstructor,
  isMissing,
  isNaN,
  isNegative,
  isNegativeFinite,
  isNegativeFiniteInteger,
  isNegativeFiniteNumber,
  isNegativeInfinity,
  isNegativeInteger,
  isNegativeNonZeroFinite,
  isNegativeNonZeroFiniteInteger,
  isNegativeNonZeroFiniteNumber,
  isNegativeNumber,
  isNegativeZero,
  isNonEmptyArray,
  isNonZero,
  isNonZeroFinite,
  isNonZeroFiniteInteger,
  isNonZeroFiniteNumber,
  isNonZeroInteger,
  isNonZeroNumber,
  isNull,
  isNumber,
  isNumberObject,
  isObject,
  isObjectLike,
  isOdd,
  isPlainObject,
  isPositive,
  isPositiveFinite,
  isPositiveFiniteInteger,
  isPositiveFiniteNumber,
  isPositiveInfinity,
  isPositiveInteger,
  isPositiveNonZero,
  isPositiveNonZeroFinite,
  isPositiveNonZeroFiniteInteger,
  isPositiveNonZeroFiniteNumber,
  isPositiveNonZeroNumber,
  isPositiveNumber,
  isPositiveZero,
  isPresent,
  isPrimitive,
  isPrintable,
  isPromise,
  isPromiseLike,
  isPropertyKey,
  isReadableStream,
  isReader,
  isReaderSync,
  isReadonlyCollection,
  isReadonlyCollectionConstructor,
  isRegExp,
  isRegisteredSymbol,
  isSemVer,
  isSet,
  isSetIterator,
  isSetLike,
  isSetLikeConstructor,
  isSharedArrayBuffer,
  isString,
  isStringIterator,
  isStringObject,
  isSymbol,
  isSymbolObject,
  isTagged,
  isTruthy,
  isTypedArray,
  isUint16,
  isUint16Array,
  isUint32,
  isUint32Array,
  isUint8,
  isUint8Array,
  isUint8ClampedArray,
  isUndefined,
  isUniqueSymbol,
  isURL,
  isURLSearchParams,
  isURLString,
  isWeakKey,
  isWeakMap,
  isWeakRef,
  isWeakSet,
  isWellKnownSymbol,
  isWritableStream,
  isWriter,
  isWriterSync,
  isZero,
};
