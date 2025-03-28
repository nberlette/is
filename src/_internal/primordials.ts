/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/primordials
 */
import { $globalThis } from "./global_this.ts";

export const Array = $globalThis.Array;
export const Object = $globalThis.Object;
export const Function = $globalThis.Function;
export const String = $globalThis.String;
export const Number = $globalThis.Number;
export const Boolean = $globalThis.Boolean;
export const Date = $globalThis.Date;
export const RegExp = $globalThis.RegExp;
export const Error = $globalThis.Error;
export const Symbol = $globalThis.Symbol;
export const SymbolFor: typeof Symbol.for = Symbol.for;
export const SymbolKeyFor: typeof Symbol.keyFor = Symbol.keyFor;
export const SymbolToStringTag: typeof Symbol.toStringTag = Symbol.toStringTag;
export const SymbolIterator: typeof Symbol.iterator = Symbol.iterator;
export const SymbolAsyncIterator: typeof Symbol.asyncIterator =
  Symbol.asyncIterator;
export const SymbolHasInstance: typeof Symbol.hasInstance = Symbol.hasInstance;
export const TypeError = $globalThis.TypeError;
export const ReferenceError = $globalThis.ReferenceError;
export const SyntaxError = $globalThis.SyntaxError;
export const RangeError = $globalThis.RangeError;
export const EvalError = $globalThis.EvalError;
export const URIError = $globalThis.URIError;
export const Proxy = $globalThis.Proxy;
export const Reflect = $globalThis.Reflect;
export const Set = $globalThis.Set;
export const Map = $globalThis.Map;
export const WeakMap = $globalThis.WeakMap;
export const WeakSet = $globalThis.WeakSet;
export const ArrayBuffer = $globalThis.ArrayBuffer;
export const DataView = $globalThis.DataView;
export const Int8Array = $globalThis.Int8Array;
export const Uint8Array = $globalThis.Uint8Array;
export const Uint8ClampedArray = $globalThis.Uint8ClampedArray;
export const Int16Array = $globalThis.Int16Array;
export const Uint16Array = $globalThis.Uint16Array;
export const Int32Array = $globalThis.Int32Array;
export const Uint32Array = $globalThis.Uint32Array;
export const Float16Array = $globalThis.Float16Array;
export const Float32Array = $globalThis.Float32Array;
export const Float64Array = $globalThis.Float64Array;
export const BigInt64Array = $globalThis.BigInt64Array;
export const BigUint64Array = $globalThis.BigUint64Array;
