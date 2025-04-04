// deno-lint-ignore-file no-explicit-any
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/primordials
 */
import { $globalThis } from "./global_this.ts";
import type * as T from "./types.ts";

export const Array: ArrayConstructor = $globalThis.Array;
export const String: StringConstructor = $globalThis.String;
export const Number: NumberConstructor = $globalThis.Number;
export const Boolean: BooleanConstructor = $globalThis.Boolean;
export const Date: DateConstructor = $globalThis.Date;
export const RegExp: RegExpConstructor = $globalThis.RegExp;

export const Object: ObjectConstructor = $globalThis.Object;
export const ObjectPrototype: Object = Object.prototype;
export const ObjectKeys: <O>(o: O) => T.ObjectKeys<O> = Object.keys;
export const ObjectValues: <O>(o: O) => T.ObjectValues<O> = Object.values;
export const ObjectEntries: <O>(o: O) => T.ObjectEntries<O> = Object.entries;
export const ObjectGetPrototypeOf: (o: any) => any = Object.getPrototypeOf;
export const ObjectGetOwnPropertyDescriptor: <O, K extends keyof any>(
  o: O,
  k: K,
) =>
  | (
    & TypedPropertyDescriptor<K extends keyof O ? O[K] : any>
    & ThisType<O>
  )
  | undefined = Object.getOwnPropertyDescriptor;

export const Symbol: SymbolConstructor = $globalThis.Symbol;
export const SymbolFor: typeof Symbol.for = Symbol.for;
export const SymbolKeyFor: typeof Symbol.keyFor = Symbol.keyFor;
export const SymbolToStringTag: SymbolToStringTag = Symbol.toStringTag;
export type SymbolToStringTag = typeof Symbol.toStringTag;
export const SymbolIterator: SymbolIterator = Symbol.iterator;
export type SymbolIterator = typeof Symbol.iterator;
export const SymbolAsyncIterator: SymbolAsyncIterator = Symbol.asyncIterator;
export type SymbolAsyncIterator = typeof Symbol.asyncIterator;
export const SymbolHasInstance: SymbolHasInstance = Symbol.hasInstance;
export type SymbolHasInstance = typeof Symbol.hasInstance;
export const SymbolDispose: SymbolDispose = Symbol.dispose;
export type SymbolDispose = typeof Symbol.dispose;
export const SymbolAsyncDispose: SymbolAsyncDispose = Symbol.asyncDispose;
export type SymbolAsyncDispose = typeof Symbol.asyncDispose;
export const SymbolMetadata: SymbolMetadata = Symbol.metadata;
export type SymbolMetadata = typeof Symbol.metadata;
export const SymbolIsConcatSpreadable: SymbolIsConcatSpreadable = Symbol
  .isConcatSpreadable;
export type SymbolIsConcatSpreadable = typeof Symbol.isConcatSpreadable;

export const Function: FunctionConstructor = $globalThis.Function;
export const FunctionPrototype: Function = Function.prototype;
export type FunctionPrototype = typeof Function.prototype;

export const {
  bind,
  call,
  apply,
  toString,
  [SymbolHasInstance]: hasInstance,
} = FunctionPrototype;

export const uncurryThis = bind.bind(call) as <
  T,
  const A extends readonly unknown[],
  R = unknown,
>(fn: (this: T, ...args: A) => R) => (target: T, ...args: A) => R;

export const FunctionPrototypeBind = uncurryThis(
  bind as CallableFunction["bind"],
);
export const FunctionPrototypeCall = uncurryThis(
  call as CallableFunction["call"],
);
export const FunctionPrototypeApply = uncurryThis(
  apply as CallableFunction["apply"],
);
export const FunctionPrototypeToString = uncurryThis(
  toString as CallableFunction["toString"],
);
export const FunctionPrototypeHasInstance = uncurryThis(
  hasInstance as CallableFunction[SymbolHasInstance],
);

export const Error: ErrorConstructor = $globalThis.Error;
export const ErrorCaptureStackTrace: typeof Error.captureStackTrace =
  Error.captureStackTrace;
export const TypeError: TypeErrorConstructor = $globalThis.TypeError;
export const ReferenceError: ReferenceErrorConstructor =
  $globalThis.ReferenceError;
export const SyntaxError: SyntaxErrorConstructor = $globalThis.SyntaxError;
export const RangeError: RangeErrorConstructor = $globalThis.RangeError;
export const EvalError: EvalErrorConstructor = $globalThis.EvalError;
export const URIError: URIErrorConstructor = $globalThis.URIError;

export const Reflect: typeof $globalThis.Reflect = $globalThis.Reflect;
export const Atomics: typeof $globalThis.Atomics = $globalThis.Atomics;

export const Proxy: ProxyConstructor = $globalThis.Proxy;
export const Set: SetConstructor = $globalThis.Set;
export const Map: MapConstructor = $globalThis.Map;
export const WeakMap: WeakMapConstructor = $globalThis.WeakMap;
export const WeakSet: WeakSetConstructor = $globalThis.WeakSet;
export const WeakRef: WeakRefConstructor = $globalThis.WeakRef;

export const ArrayBuffer: ArrayBufferConstructor = $globalThis.ArrayBuffer;
export const SharedArrayBuffer: SharedArrayBufferConstructor =
  $globalThis.SharedArrayBuffer;
export const DataView: DataViewConstructor = $globalThis.DataView;
export const Int8Array: Int8ArrayConstructor = $globalThis.Int8Array;
export const Int16Array: Int16ArrayConstructor = $globalThis.Int16Array;
export const Int32Array: Int32ArrayConstructor = $globalThis.Int32Array;
export const Uint8Array: Uint8ArrayConstructor = $globalThis.Uint8Array;
export const Uint8ClampedArray: Uint8ClampedArrayConstructor =
  $globalThis.Uint8ClampedArray;
export const Uint16Array: Uint16ArrayConstructor = $globalThis.Uint16Array;
export const Uint32Array: Uint32ArrayConstructor = $globalThis.Uint32Array;
export const Float16Array: Float16ArrayConstructor = $globalThis.Float16Array;
export const Float32Array: Float32ArrayConstructor = $globalThis.Float32Array;
export const Float64Array: Float64ArrayConstructor = $globalThis.Float64Array;
export const BigInt64Array: BigInt64ArrayConstructor =
  $globalThis.BigInt64Array;
export const BigUint64Array: BigUint64ArrayConstructor =
  $globalThis.BigUint64Array;
