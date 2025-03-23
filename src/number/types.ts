/**
 * Casts a value into a specific numeric type. If the value is not a number,
 * it will resolve to `never`, indicating its incompatibility with the type.
 *
 * This is a low-level utility type that primarily serves as an internal
 * helper for more user-friendly types like {@link Integer} and
 * {@link Positive}.  Unless you're building custom numeric types with your
 * own branding, you most likely never directly handle this type in the wild.
 *
 * @example
 * ```ts
 * import type { Cast } from "jsr:@nick/is/number";
 *
 * declare const MY_DOUBLE: unique symbol;
 * type DOUBLE<N extends number = number> = Cast<N, typeof MY_DOUBLE>;
 *
 * let x = 4.3210123210 as DOUBLE;
 * let y = 3.1415926535 as DOUBLE;
 *
 * console.log(x + y); // 7.4626049745
 *
 * // This will raise a TypeScript compiler error:
 * x = 1; // <- TS2322 Type '1' is not assignable to type 'DOUBLE'.
 * ```
 * @category Numbers
 */
export type Cast<N, T> = Extract<N, number> & T;

/**
 * Casts a value into a specific integer type. If the value is not a bigint,
 * it will resolve to `never`, indicating its incompatibility with the type.
 *
 * This is a low-level utility type that primarily serves as an internal
 * helper for more user-friendly types like {@link BigInteger} or
 * {@link PositiveBigInteger}. Unless you're building custom numeric types
 * with your own branding, you most likely will never directly handle this
 * type in the wild.
 *
 * @example
 * ```ts
 * import type { CastInt } from "jsr:@nick/is/number";
 *
 * declare const INTEGER: unique symbol;
 * type INTEGER<N extends bigint = bigint> = CastInt<N, typeof INTEGER>;
 *
 * let x = 3n as INTEGER;
 * let y = 5n as INTEGER;
 *
 * console.log(x + y); // 8n
 * ```
 * @category Numbers
 */
export type CastInt<N, T> = Extract<N, bigint | `${bigint}`> & T;

/**
 * Unwraps a type that has been cast with {@link Cast} into a tuple of the
 * original value and the specific type it was cast to (or "branded" with).
 * If the given type was _not_ cast with {@link Cast}, it will resolve to a
 * tuple containing the original value and `never`, respectively.
 *
 * @example
 * ```ts
 * import type { Cast, Unwrap } from "jsr:@nick/is/number";
 *
 * type Int_3 = Cast<3, INTEGER>;
 *
 * function unwrap<T>(value: T): Unwrap<T>[0] {
 *   return value as Unwrap<T>[0];
 * }
 * ```
 * @category Numbers
 */
export type Unwrap<U> = U extends Cast<infer N, infer T> ? [N, T] : [U, never];

export type Numeric = number | bigint | `${number | bigint}`;

// #endregion Type Utilities

// #region Numeric Branding

const IS_ODD: unique symbol = Symbol("IS_ODD");

export interface ODD {
  readonly [IS_ODD]: true;
}

export interface MAYBE_ODD {
  readonly [IS_ODD]?: true;
}

const IS_EVEN: unique symbol = Symbol("IS_EVEN");

export interface EVEN {
  readonly [IS_EVEN]: true;
}

export interface MAYBE_EVEN {
  readonly [IS_EVEN]?: true;
}

const IS_NAN: unique symbol = Symbol("IS_NAN");

export interface NAN {
  readonly [IS_NAN]: true;
}

export interface MAYBE_NAN {
  readonly [IS_NAN]?: true;
}

const IS_NEGATIVE: unique symbol = Symbol("IS_NEGATIVE");

export interface NEGATIVE {
  readonly [IS_POSITIVE]: false;
  readonly [IS_NEGATIVE]: true;
}

export interface MAYBE_NEGATIVE {
  readonly [IS_POSITIVE]?: false;
  readonly [IS_NEGATIVE]?: true;
}

const IS_POSITIVE: unique symbol = Symbol("IS_POSITIVE");

export interface POSITIVE {
  readonly [IS_NEGATIVE]: false;
  readonly [IS_POSITIVE]: true;
}

export interface MAYBE_POSITIVE {
  readonly [IS_NEGATIVE]?: false;
  readonly [IS_POSITIVE]?: true;
}
// #endregion Positive

// #region Zero
const IS_ZERO: unique symbol = Symbol("IS_ZERO");

export interface ZERO {
  readonly [IS_NON_ZERO]: false;
  readonly [IS_ZERO]: true;
}

export interface MAYBE_ZERO {
  readonly [IS_NON_ZERO]?: false;
  readonly [IS_ZERO]?: true;
}
// #endregion Zero

// #region NonZero
const IS_NON_ZERO: unique symbol = Symbol("NON_ZERO");

export interface NON_ZERO {
  readonly [IS_ZERO]: false;
  readonly [IS_NON_ZERO]: true;
}

export interface MAYBE_NON_ZERO {
  readonly [IS_ZERO]?: false;
  readonly [IS_NON_ZERO]?: true;
}
// #endregion NonZero

// #region Finite
const IS_FINITE: unique symbol = Symbol("IS_FINITE");

export interface FINITE {
  readonly [IS_INFINITE]: false;
  readonly [IS_FINITE]: true;
}

export interface MAYBE_FINITE {
  readonly [IS_INFINITE]?: false;
  readonly [IS_FINITE]?: true;
}
// #endregion Finite

// #region Infinite
const IS_INFINITE: unique symbol = Symbol("IS_INFINITE");

export interface INFINITE {
  readonly [IS_FINITE]: false;
  readonly [IS_INFINITE]: true;
}

export interface MAYBE_INFINITE {
  readonly [IS_FINITE]?: false;
  readonly [IS_INFINITE]?: true;
}
// #endregion Infinite

// #region Float
const IS_FLOAT: unique symbol = Symbol("IS_FLOAT");

export interface FLOAT {
  readonly [IS_FLOAT]: true;
}

export interface MAYBE_FLOAT {
  readonly [IS_FLOAT]?: true;
}
// #endregion Float

// #region Float32
const PRECISION: unique symbol = Symbol("PRECISION");

export interface FLOAT16 extends FLOAT {
  readonly [PRECISION]: 0.5;
}

export interface MAYBE_FLOAT16 extends MAYBE_FLOAT {
  readonly [PRECISION]?: 0.5;
}

export interface FLOAT32 extends FLOAT {
  readonly [PRECISION]: 1;
}

export interface MAYBE_FLOAT32 extends MAYBE_FLOAT {
  readonly [PRECISION]?: 1;
}

export interface FLOAT64 extends FLOAT {
  readonly [PRECISION]: 2;
}

export interface MAYBE_FLOAT64 extends MAYBE_FLOAT {
  readonly [PRECISION]?: 2;
}
// #endregion Double (Float)

// #region Integer
const IS_INTEGER: unique symbol = Symbol("IS_INTEGER");

export interface INTEGER {
  readonly [IS_INTEGER]: true;
}

export interface MAYBE_INTEGER {
  readonly [IS_INTEGER]?: true;
}
// #endregion Integer

// #region Unsigned Integer
const IS_UNSIGNED: unique symbol = Symbol("IS_UNSIGNED");

export interface UNSIGNED extends INTEGER {
  readonly [IS_UNSIGNED]: true;
}

export interface MAYBE_UNSIGNED extends MAYBE_INTEGER {
  readonly [IS_UNSIGNED]?: true;
}
// #endregion Unsigned Integer

const BIT_LENGTH: unique symbol = Symbol("BIT_LENGTH");

// #region Int8
export interface INT8 extends INTEGER {
  readonly [BIT_LENGTH]: 8;
}

export interface MAYBE_INT8 extends MAYBE_INTEGER {
  readonly [BIT_LENGTH]?: 8;
}
// #endregion Int8

// #region Int16
export interface INT16 extends INTEGER {
  readonly [BIT_LENGTH]: 16;
}

export interface MAYBE_INT16 extends MAYBE_INTEGER {
  readonly [BIT_LENGTH]?: 16;
}
// #endregion Int16

// #region Int32
export interface INT32 extends INTEGER {
  readonly [BIT_LENGTH]: 32;
}

export interface MAYBE_INT32 extends MAYBE_INTEGER {
  readonly [BIT_LENGTH]?: 32;
}
// #endregion Int32

// #region Int64
export interface INT64 extends INTEGER {
  readonly [BIT_LENGTH]: 64;
}

export interface MAYBE_INT64 extends MAYBE_INTEGER {
  readonly [BIT_LENGTH]?: 64;
}
// #endregion Int64

// #region UInt8
export interface UINT8 extends UNSIGNED, INT8 {}

export interface MAYBE_UINT8 extends MAYBE_UNSIGNED, MAYBE_INT8 {}
// #endregion UInt8

// #region UInt16
export interface UINT16 extends UNSIGNED, INT16 {}

export interface MAYBE_UINT16 extends MAYBE_UNSIGNED, MAYBE_INT16 {}
// #endregion UInt16

// #region UInt32
export interface UINT32 extends UNSIGNED, INT32 {}

export interface MAYBE_UINT32 extends MAYBE_UNSIGNED, MAYBE_INT32 {}
// #endregion UInt32

// #region UInt64
export interface UINT64 extends UNSIGNED, INT64 {}

export interface MAYBE_UINT64 extends MAYBE_UNSIGNED, MAYBE_INT64 {}
// #endregion UInt64

// #region PositiveInteger
export interface POSITIVE_INTEGER extends POSITIVE, INTEGER {}

export interface MAYBE_POSITIVE_INTEGER extends MAYBE_POSITIVE, MAYBE_INTEGER {}
// #endregion PositiveInteger

// #region NegativeInteger
export interface NEGATIVE_INTEGER extends NEGATIVE, INTEGER {}

export interface MAYBE_NEGATIVE_INTEGER extends MAYBE_NEGATIVE, MAYBE_INTEGER {}
// #endregion NegativeInteger

// #region NonZeroInteger
export interface NON_ZERO_INTEGER extends NON_ZERO, INTEGER {}

export interface MAYBE_NON_ZERO_INTEGER extends MAYBE_NON_ZERO, MAYBE_INTEGER {}
// #endregion NonZeroInteger

// #region PositiveNonZeroInteger
export interface POSITIVE_NON_ZERO_INTEGER
  extends POSITIVE, NON_ZERO, INTEGER {}

export interface MAYBE_POSITIVE_NON_ZERO_INTEGER
  extends MAYBE_POSITIVE, MAYBE_NON_ZERO, MAYBE_INTEGER {}
// #endregion PositiveNonZeroInteger

// #region NegativeNonZeroInteger
export interface NEGATIVE_NON_ZERO_INTEGER
  extends NEGATIVE, NON_ZERO, INTEGER {}

export interface MAYBE_NEGATIVE_NON_ZERO_INTEGER
  extends MAYBE_NEGATIVE, MAYBE_NON_ZERO, MAYBE_INTEGER {}
// #endregion NegativeNonZeroInteger

// #region OddInteger
export interface ODD_INTEGER extends ODD, INTEGER {}

export interface MAYBE_ODD_INTEGER extends MAYBE_ODD, MAYBE_INTEGER {}
// #endregion OddInteger

// #region EvenInteger
export interface EVEN_INTEGER extends EVEN, INTEGER {}

export interface MAYBE_EVEN_INTEGER extends MAYBE_EVEN, MAYBE_INTEGER {}
// #endregion EvenInteger

// #region PositiveOddInteger
export interface POSITIVE_ODD_INTEGER extends POSITIVE, ODD, INTEGER {}

export interface MAYBE_POSITIVE_ODD_INTEGER
  extends MAYBE_POSITIVE, MAYBE_ODD, MAYBE_INTEGER {}
// #endregion PositiveOddInteger

// #region NegativeZero
export interface NEGATIVE_ZERO extends NEGATIVE, ZERO {}

export interface MAYBE_NEGATIVE_ZERO extends MAYBE_NEGATIVE, MAYBE_ZERO {}
// #endregion NegativeZero

// #region PositiveZero
export interface POSITIVE_ZERO extends POSITIVE, ZERO {}

export interface MAYBE_POSITIVE_ZERO extends MAYBE_POSITIVE, MAYBE_ZERO {}
// #endregion PositiveZero

// #region PositiveFinite
export interface POSITIVE_FINITE extends POSITIVE, FINITE {}

export interface MAYBE_POSITIVE_FINITE extends MAYBE_POSITIVE, MAYBE_FINITE {}
// #endregion PositiveFinite

// #region NegativeFinite
export interface NEGATIVE_FINITE extends NEGATIVE, FINITE {}

export interface MAYBE_NEGATIVE_FINITE extends MAYBE_NEGATIVE, MAYBE_FINITE {}
// #endregion NegativeFinite

// #region NonZeroFinite
export interface NON_ZERO_FINITE extends NON_ZERO, FINITE {}

export interface MAYBE_NON_ZERO_FINITE extends MAYBE_NON_ZERO, MAYBE_FINITE {}
// #endregion NonZeroFinite

// #region PositiveNonZeroFinite
export interface POSITIVE_NON_ZERO_FINITE extends POSITIVE, NON_ZERO, FINITE {}

export interface MAYBE_POSITIVE_NON_ZERO_FINITE
  extends MAYBE_POSITIVE, MAYBE_NON_ZERO, MAYBE_FINITE {}
// #endregion PositiveNonZeroFinite

// #region NegativeNonZeroFinite
export interface NEGATIVE_NON_ZERO_FINITE extends NEGATIVE, NON_ZERO, FINITE {}

export interface MAYBE_NEGATIVE_NON_ZERO_FINITE
  extends MAYBE_NEGATIVE, MAYBE_NON_ZERO, MAYBE_FINITE {}
// #endregion NegativeNonZeroFinite

// #region PositiveInfinity
export interface POSITIVE_INFINITY extends POSITIVE, INFINITE {}

export interface MAYBE_POSITIVE_INFINITY
  extends MAYBE_POSITIVE, MAYBE_INFINITE {}
// #endregion PositiveInfinity

// #region NegativeInfinity
export interface NEGATIVE_INFINITY extends NEGATIVE, INFINITE {}

export interface MAYBE_NEGATIVE_INFINITY
  extends MAYBE_NEGATIVE, MAYBE_INFINITE {}
// #endregion NegativeInfinity
