/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/
 */
export * as is from "./src/namespace.ts";
export * as default from "./src/namespace.ts";
export * from "./src/types.ts";

export * from "./src/arguments.ts";
export * from "./src/array_buffer_like.ts";
export * from "./src/array_buffer_view.ts";
export * from "./src/array_buffer.ts";
export * from "./src/array_iterator.ts";
export * from "./src/array_like.ts";
export * from "./src/array_like_object.ts";
export * from "./src/array.ts";
export * from "./src/async_disposable.ts";
export * from "./src/async_function.ts";
export * from "./src/async_generator_function.ts";
export * from "./src/async_generator.ts";
export * from "./src/async_iterable_iterator.ts";
export * from "./src/async_iterable.ts";
export * from "./src/async_iterable_object.ts";
export * from "./src/async_iterator.ts";
export * from "./src/bigint.ts";
export * from "./src/bigint_object.ts";
export * from "./src/bigint64_array.ts";
export * from "./src/biguint64_array.ts";
export * from "./src/boolean.ts";
export * from "./src/boolean_object.ts";
export * from "./src/both.ts";
export * from "./src/boxed_primitive.ts";
export * from "./src/buffer_source.ts";
export * from "./src/class.ts";
export * from "./src/constructor.ts";
export * from "./src/closer.ts";
export * from "./src/data_view.ts";
export * from "./src/date.ts";
export * from "./src/date_string.ts";
export * from "./src/defined.ts";
export * from "./src/disposable.ts";
export * from "./src/either.ts";
export * from "./src/error.ts";
export * from "./src/empty.ts";
export * from "./src/falsy.ts";
export * from "./src/enum.ts";
export * from "./src/float16_array.ts";
export * from "./src/float32_array.ts";
export * from "./src/float64_array.ts";
export * from "./src/function.ts";
export * from "./src/generator_function.ts";
export * from "./src/generator.ts";
export * from "./src/has_methods.ts";
export * from "./src/identifier.ts";
export * from "./src/instance.ts";
export * from "./src/int16_array.ts";
export * from "./src/int32_array.ts";
export * from "./src/int8_array.ts";
export * from "./src/iterable_iterator.ts";
export * from "./src/iterable_object.ts";
export * from "./src/iterable.ts";
export * from "./src/iterator.ts";
export * from "./src/keyof.ts";
export * from "./src/map_iterator.ts";
export * from "./src/map_like.ts";
export * from "./src/map.ts";
export * from "./src/missing.ts";
export * from "./src/non_empty_array.ts";
export * from "./src/null.ts";
export * from "./src/number_object.ts";
export * from "./src/object_like.ts";
export * from "./src/object.ts";
export * from "./src/plain_object.ts";
export * from "./src/present.ts";
export * from "./src/primitive.ts";
export * from "./src/printable.ts";
export * from "./src/promise_like.ts";
export * from "./src/promise.ts";
export * from "./src/property_key.ts";
export * from "./src/readable_stream.ts";
export * from "./src/reader_sync.ts";
export * from "./src/reader.ts";
export * from "./src/regexp.ts";
export * from "./src/semver.ts";
export * from "./src/set_iterator.ts";
export * from "./src/set_like.ts";
export * from "./src/set.ts";
export * from "./src/shared_array_buffer.ts";
export * from "./src/string_iterator.ts";
export * from "./src/string.ts";
export * from "./src/string_object.ts";
export * from "./src/symbol.ts";
export * from "./src/symbol_object.ts";
export * from "./src/well_known_symbol.ts";
export * from "./src/registered_symbol.ts";
export * from "./src/tagged.ts";
export * from "./src/truthy.ts";
export * from "./src/typed_array.ts";
export * from "./src/uint16_array.ts";
export * from "./src/uint32_array.ts";
export * from "./src/uint8_array.ts";
export * from "./src/uint8_clamped_array.ts";
export * from "./src/undefined.ts";
export * from "./src/unique_symbol.ts";
export * from "./src/url.ts";
export * from "./src/url_string.ts";
export * from "./src/url_search_params.ts";
export * from "./src/weak_key.ts";
export * from "./src/weak_map.ts";
export * from "./src/weak_ref.ts";
export * from "./src/weak_set.ts";
export * from "./src/whitespace.ts";
export * from "./src/writable_stream.ts";
export * from "./src/writer_sync.ts";
export * from "./src/writer.ts";
export * from "./src/number/finite.ts";
export * from "./src/number/zero.ts";
export * from "./src/number/infinity.ts";
export * from "./src/number/nan.ts";
export * from "./src/number/even.ts";
export * from "./src/number/odd.ts";
export * from "./src/number/float.ts";
export * from "./src/number/float16.ts";
export * from "./src/number/float32.ts";
export * from "./src/number/float64.ts";
export * from "./src/number/integer.ts";
export * from "./src/number/int16.ts";
export * from "./src/number/int32.ts";
export * from "./src/number/int8.ts";
export * from "./src/number/negative_infinity.ts";
export * from "./src/number/positive_infinity.ts";
export * from "./src/number/positive_finite_integer.ts";
export * from "./src/number/negative_finite_integer.ts";
export * from "./src/number/nonzero_finite_integer.ts";
export * from "./src/number/negative_nonzero_finite_integer.ts";
export * from "./src/number/positive_nonzero_finite_integer.ts";
export * from "./src/number/finite_integer.ts";
export * from "./src/number/nonzero_integer.ts";
export * from "./src/number/negative_integer.ts";
export * from "./src/number/positive_integer.ts";
export * from "./src/number/positive_zero.ts";
export * from "./src/number/negative_zero.ts";
export {
  isNegative,
  isNegative as isNegativeNumber,
} from "./src/number/negative.ts";
export {
  isPositive,
  isPositive as isPositiveNumber,
} from "./src/number/positive.ts";
export {
  isNegativeNonZeroFiniteNumber,
  isNegativeNonZeroFiniteNumber as isNegativeNonZeroFinite,
} from "./src/number/negative_nonzero_finite.ts";
export {
  isPositiveNonZeroFiniteNumber,
  isPositiveNonZeroFiniteNumber as isPositiveNonZeroFinite,
} from "./src/number/positive_nonzero_finite.ts";
export {
  isNonZeroFiniteNumber,
  isNonZeroFiniteNumber as isNonZeroFinite,
} from "./src/number/nonzero_finite.ts";
export {
  isNegativeFiniteNumber,
  isNegativeFiniteNumber as isNegativeFinite,
} from "./src/number/negative_finite.ts";
export {
  isPositiveFiniteNumber,
  isPositiveFiniteNumber as isPositiveFinite,
} from "./src/number/positive_finite.ts";
export {
  isPositiveNonZeroNumber,
  isPositiveNonZeroNumber as isPositiveNonZero,
} from "./src/number/positive_nonzero.ts";
export {
  isNonZero,
  isNonZero as isNonZeroNumber,
} from "./src/number/nonzero.ts";
export * from "./src/number/number.ts";
export * from "./src/number/in_range.ts";
export * from "./src/number/uint16.ts";
export * from "./src/number/uint32.ts";
export * from "./src/number/uint8.ts";
