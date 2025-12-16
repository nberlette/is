// deno-lint-ignore-file no-explicit-any no-var
/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is/doc/internal/primordials
 */

import { $globalThis } from "./global_this.ts";
import { fail } from "./fail.ts";
import type * as T from "./types.ts";
import { uncurryGetter } from "./uncurry_getter.ts";
import { uncurrySetter } from "./uncurry_setter.ts";

// #region Symbol
/**
 * Represents the `Symbol` constructor type.
 *
 * **Important**: Thanks to TypeScript's ridiculously strict rules surrounding
 * the `Symbol` construct, it is impossible to create a `unique symbol` from
 * this alias, despite the fact it is a direct alias to the global `Symbol`,
 * sharing the same exact name, type, and properties. Therefore, to create a
 * `unique symbol`, you'll have to do something like this:
 *
 * ```ts
 * import { Symbol } from "./primordials.ts";
 *
 * // you can also use `as any`, but I prefer `as never` to avoid lint errors.
 * const kUser: unique symbol = Symbol("user") as never;
 * ```
 */
export var Symbol: SymbolConstructor = $globalThis.Symbol;

/**
 * @see {@linkcode Symbol} for notes on creating `unique symbol` types.
 */
export var SymbolFor: typeof Symbol.for = Symbol.for;
export var SymbolKeyFor: typeof Symbol.keyFor = Symbol.keyFor;

export var SymbolToStringTag: SymbolToStringTag = Symbol.toStringTag;
export type SymbolToStringTag = typeof Symbol.toStringTag;

export var SymbolIterator: SymbolIterator = Symbol.iterator;
export type SymbolIterator = typeof Symbol.iterator;

export var SymbolAsyncIterator: SymbolAsyncIterator = Symbol.asyncIterator;
export type SymbolAsyncIterator = typeof Symbol.asyncIterator;

export var SymbolHasInstance: SymbolHasInstance = Symbol.hasInstance;
export type SymbolHasInstance = typeof Symbol.hasInstance;

export var SymbolDispose: SymbolDispose = Symbol.dispose;
export type SymbolDispose = typeof Symbol.dispose;

export var SymbolAsyncDispose: SymbolAsyncDispose = Symbol.asyncDispose;
export type SymbolAsyncDispose = typeof Symbol.asyncDispose;

export var SymbolMetadata: SymbolMetadata = Symbol.metadata;
export type SymbolMetadata = typeof Symbol.metadata;

export var SymbolIsConcatSpreadable: SymbolIsConcatSpreadable = Symbol
  .isConcatSpreadable;
export type SymbolIsConcatSpreadable = typeof Symbol.isConcatSpreadable;
// #endregion Symbol

// #region Function
export var Function: FunctionConstructor = $globalThis.Function;
export var FunctionPrototype = Function.prototype;

export var {
  bind,
  call,
  apply,
  toString: fnToString,
  [SymbolHasInstance]: hasInstance,
} = FunctionPrototype;

export type Uncurry<T, This = void> = T extends
  (this: infer ThisArg, ...args: infer A) => infer R
  ? [[This], [void]] extends [[void], [This]]
    ? (thisArg: ThisArg, ...args: A) => R
  : (thisArg: This, ...args: A) => R
  : T extends (...args: infer A) => infer R
    ? (thisArg: [This] extends [void] ? unknown : This, ...args: A) => R
  : never;

export var uncurryThis: <T, A extends readonly unknown[], R>(
  fn: (this: T, ...args: A) => R,
  _thisArg?: T,
) => (self: T, ...args: A) => R = bind.bind(call);

export var FunctionPrototypeBind: <
  T,
  A extends readonly any[],
  B extends readonly any[],
  R,
>(
  self: (this: T, ...args: [...A, ...B]) => R,
  thisArg: T,
  ...args: A
) => (...args: B) => R = uncurryThis(bind);

export var FunctionPrototypeCall: <T, A extends any[], R>(
  self: (this: T, ...args: A) => R,
  thisArg: T,
  ...args: A
) => R = uncurryThis(call as CallableFunction["call"]);

export var FunctionPrototypeApply: <T, A extends readonly unknown[], R>(
  self: (this: T, ...args: A) => R,
  thisArg: T,
  args: A,
) => R = uncurryThis(apply);

export var FunctionPrototypeToString = uncurryThis(
  fnToString as CallableFunction["toString"],
);
export var FunctionPrototypeHasInstance = uncurryThis(
  hasInstance as CallableFunction[SymbolHasInstance],
);
// #endregion Function

// #region Object

export var Object: ObjectConstructor = $globalThis.Object;
export type Object = globalThis.Object;
export var ObjectPrototype: Object = Object.prototype;
export var { toString } = ObjectPrototype;
export var ObjectKeys: <O>(o: O) => T.ObjectKeys<O> = Object.keys;
export type ObjectKeys<O> = T.ObjectKeys<O>;
export var ObjectValues: <O>(o: O) => T.ObjectValues<O> = Object.values;
export type ObjectValues<O> = T.ObjectValues<O>;
export var ObjectEntries: <O>(o: O) => T.ObjectEntries<O> = Object.entries;
export type ObjectEntries<O> = T.ObjectEntries<O>;
export var ObjectFromEntries: <
  const E extends readonly (readonly [PropertyKey, any])[],
>(entries: E) => T.ObjectFromEntries<E> = Object.fromEntries;
export var ObjectGetPrototypeOf: (o: any) => any = Object.getPrototypeOf;
export var ObjectGetOwnPropertyDescriptor: <O, K extends keyof any>(
  o: O,
  k: K,
) =>
  | (
    & TypedPropertyDescriptor<K extends keyof O ? O[K] : any>
    & ThisType<O>
  )
  | undefined = Object.getOwnPropertyDescriptor;

export var ObjectFreeze: typeof Object.freeze = Object.freeze;
export var ObjectPrototypeToString: (o: any) => string = uncurryThis(toString);
export var ObjectCreate: typeof Object.create = Object.create;
export var ObjectDefineProperty: typeof Object.defineProperty =
  Object.defineProperty;
export var ObjectGetOwnPropertyDescriptors:
  typeof Object.getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
export var ObjectGetOwnPropertyNames: typeof Object.getOwnPropertyNames =
  Object.getOwnPropertyNames;
export var ObjectGetOwnPropertySymbols: typeof Object.getOwnPropertySymbols =
  Object.getOwnPropertySymbols;
export var ObjectSetPrototypeOf: typeof Object.setPrototypeOf =
  Object.setPrototypeOf;
export var ObjectDefineProperties = Object.defineProperties || function (o, p) {
  for (const k in p) {
    if (ObjectHasOwn(p, k)) ObjectDefineProperty(o, k, p[k]);
  }
  return o;
};
export var ObjectIs: typeof Object.is = Object.is || function (a, b) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  return a !== a && b !== b;
};

export type ObjectHasOwn = {
  <T extends object, K extends PropertyKey = keyof T>(
    o: T,
    p: K,
  ): o is T & Record<K, K extends keyof T ? T[K] : unknown>;
  (o: object, p: PropertyKey): boolean;
};
export var ObjectPrototypeHasOwnProperty: ObjectHasOwn = uncurryThis(
  ObjectPrototype.hasOwnProperty,
) as ObjectHasOwn;

export var ObjectHasOwn: ObjectHasOwn = (() => {
  if (typeof Object.hasOwn === "function") return Object.hasOwn as ObjectHasOwn;
  return ObjectPrototypeHasOwnProperty;
})();

// #endregion Object

// #region Array

export var Array: ArrayConstructor = $globalThis.Array;
export type Array<T> = T[];
// Array.from requires a `this` context, despite being a static method
export var ArrayFrom: typeof Array.from = FunctionPrototypeBind(
  Array.from,
  Array,
) as typeof Array.from;
export var ArrayFromAsync: typeof Array.fromAsync = FunctionPrototypeBind(
  Array.fromAsync,
  Array,
) as typeof Array.fromAsync;
export var ArrayIsArray: typeof Array.isArray = Array.isArray;
export var ArrayOf: <T>(...items: T[]) => T[] = Array.of;
export var ArrayPrototype: Array<any> = Array.prototype;
export var ArrayPrototypeToString = uncurryThis(
  ArrayPrototype.toString,
  ArrayPrototype,
);
export var ArrayPrototypeJoin = uncurryThis(
  ArrayPrototype.join,
  ArrayPrototype,
);
export var ArrayPrototypePop = uncurryThis(
  ArrayPrototype.pop,
  ArrayPrototype,
);
export var ArrayPrototypePush = uncurryThis(
  ArrayPrototype.push,
  ArrayPrototype,
);
export var ArrayPrototypeShift = uncurryThis(
  ArrayPrototype.shift,
  ArrayPrototype,
);
export var ArrayPrototypeUnshift = uncurryThis(
  ArrayPrototype.unshift,
  ArrayPrototype,
);
// #endregion Array

// #region Date

export var Date: DateConstructor = $globalThis.Date;
export var DateNow: typeof Date.now = Date.now;
export var DateParse: typeof Date.parse = Date.parse;
export var DateUTC: typeof Date.UTC = Date.UTC;
export var DatePrototype: Date = Date.prototype;
export var DatePrototypeGetTime: Uncurry<Date["getTime"], Date> = uncurryThis(
  DatePrototype.getTime,
);
export var DatePrototypeToString: Uncurry<Date["toString"], Date> = uncurryThis(
  DatePrototype.toString,
);
export var DatePrototypeToISOString: Uncurry<Date["toISOString"], Date> =
  uncurryThis(
    DatePrototype.toISOString,
  );
export var DatePrototypeToDateString: Uncurry<Date["toDateString"], Date> =
  uncurryThis(
    DatePrototype.toDateString,
  );
export var DatePrototypeToTimeString: Uncurry<Date["toTimeString"], Date> =
  uncurryThis(
    DatePrototype.toTimeString,
  );
export var DatePrototypeToLocaleString: Uncurry<Date["toLocaleString"], Date> =
  uncurryThis(
    DatePrototype.toLocaleString,
  );

// #endregion Date

// #region RegExp
export var RegExp: RegExpConstructor = $globalThis.RegExp;
export var RegExpPrototype: RegExp = RegExp.prototype;
export var RegExpPrototypeCompile: Uncurry<RegExp["compile"], RegExp> =
  uncurryThis(
    RegExpPrototype.compile,
  );
export var RegExpPrototypeGetHasIndices: (self: RegExp) => boolean =
  uncurryGetter(
    RegExpPrototype,
    "hasIndices",
    "stub",
  );
export var RegExpPrototypeGetGlobal: (self: RegExp) => boolean = uncurryGetter(
  RegExpPrototype,
  "global",
  "stub",
);
export var RegExpPrototypeGetMultiline: (self: RegExp) => boolean =
  uncurryGetter(
    RegExpPrototype,
    "multiline",
    "stub",
  );
export var RegExpPrototypeGetIgnoreCase: (self: RegExp) => boolean =
  uncurryGetter(
    RegExpPrototype,
    "ignoreCase",
    "stub",
  );
export var RegExpPrototypeGetDotAll: (self: RegExp) => boolean = uncurryGetter(
  RegExpPrototype,
  "dotAll",
  "stub",
);
export var RegExpPrototypeGetUnicode: (self: RegExp) => boolean = uncurryGetter(
  RegExpPrototype,
  "unicode",
  "stub",
);
export var RegExpPrototypeGetUnicodeSets: (self: RegExp) => boolean =
  uncurryGetter(
    RegExpPrototype,
    "unicodeSets",
    "stub",
  );
export var RegExpPrototypeGetSticky: (self: RegExp) => boolean = uncurryGetter(
  RegExpPrototype,
  "sticky",
  "stub",
);
export var RegExpPrototypeGetSource: (self: RegExp) => string = uncurryGetter(
  RegExpPrototype,
  "source",
  "stub",
);
export var RegExpPrototypeGetFlags: (self: RegExp) => string = uncurryGetter(
  RegExpPrototype,
  "flags",
  "stub",
);

export var RegExpPrototypeTest: Uncurry<RegExp["test"], RegExp> = uncurryThis(
  RegExpPrototype.test,
);
export var RegExpPrototypeExec: Uncurry<RegExp["exec"], RegExp> = uncurryThis(
  RegExpPrototype.exec,
);
export var RegExpPrototypeToString: Uncurry<RegExp["toString"], RegExp> =
  uncurryThis(
    RegExpPrototype.toString,
  );
// #endregion RegExp

// #region String
export var String: StringConstructor = $globalThis.String;
var { raw, fromCharCode, fromCodePoint } = String;

export var StringRaw: typeof String.raw = raw;
export var StringFromCharCode: typeof String.fromCharCode = fromCharCode;
export var StringFromCodePoint: typeof String.fromCodePoint = fromCodePoint;

export var StringPrototype: String = String.prototype;
export var StringPrototypeAt: Uncurry<String["at"], string> = uncurryThis(
  StringPrototype.at,
);
export var StringPrototypeCharAt: Uncurry<String["charAt"], string> =
  uncurryThis(StringPrototype.charAt);
export var StringPrototypeCharCodeAt: Uncurry<String["charCodeAt"], string> =
  uncurryThis(StringPrototype.charCodeAt);
export var StringPrototypeCodePointAt: Uncurry<String["codePointAt"], string> =
  uncurryThis(StringPrototype.codePointAt);
export var StringPrototypeConcat: Uncurry<String["concat"], string> =
  uncurryThis(StringPrototype.concat);
export var StringPrototypeEndsWith: Uncurry<String["endsWith"], string> =
  uncurryThis(StringPrototype.endsWith);
export var StringPrototypeIncludes: Uncurry<String["includes"], string> =
  uncurryThis(StringPrototype.includes);
export var StringPrototypeIndexOf: Uncurry<String["indexOf"], string> =
  uncurryThis(StringPrototype.indexOf);
export var StringPrototypeIsWellFormed: Uncurry<
  String["isWellFormed"],
  string
> = uncurryThis(StringPrototype.isWellFormed);
export var StringPrototypeLastIndexOf: Uncurry<String["lastIndexOf"], string> =
  uncurryThis(StringPrototype.lastIndexOf);
export var StringPrototypeLocaleCompare: Uncurry<
  String["localeCompare"],
  string
> = uncurryThis(StringPrototype.localeCompare);
export var StringPrototypeMatch: Uncurry<String["match"], string> = uncurryThis(
  StringPrototype.match,
);
export var StringPrototypeMatchAll: Uncurry<String["matchAll"], string> =
  uncurryThis(StringPrototype.matchAll);
export var StringPrototypeNormalize: Uncurry<String["normalize"], string> =
  uncurryThis(StringPrototype.normalize);
export var StringPrototypePadEnd: Uncurry<String["padEnd"], string> =
  uncurryThis(StringPrototype.padEnd);
export var StringPrototypePadStart: Uncurry<String["padStart"], string> =
  uncurryThis(StringPrototype.padStart);
export var StringPrototypeRepeat: Uncurry<String["repeat"], string> =
  uncurryThis(StringPrototype.repeat);
export var StringPrototypeReplace: Uncurry<String["replace"], string> =
  uncurryThis(StringPrototype.replace);
export var StringPrototypeReplaceAll: Uncurry<String["replaceAll"], string> =
  uncurryThis(StringPrototype.replaceAll);
export var StringPrototypeSearch: Uncurry<String["search"], string> =
  uncurryThis(StringPrototype.search);
export var StringPrototypeSlice: Uncurry<String["slice"], string> = uncurryThis(
  StringPrototype.slice,
);
export var StringPrototypeSplit: Uncurry<String["split"], string> = uncurryThis(
  StringPrototype.split,
);
export var StringPrototypeStartsWith: Uncurry<String["startsWith"], string> =
  uncurryThis(StringPrototype.startsWith);
export var StringPrototypeSubstring: Uncurry<String["substring"], string> =
  uncurryThis(StringPrototype.substring);
export var StringPrototypeToLowerCase: Uncurry<String["toLowerCase"], string> =
  uncurryThis(StringPrototype.toLowerCase);
export var StringPrototypeToUpperCase: Uncurry<String["toUpperCase"], string> =
  uncurryThis(StringPrototype.toUpperCase);
export var StringPrototypeToLocaleLowerCase: Uncurry<
  String["toLocaleLowerCase"],
  string
> = uncurryThis(StringPrototype.toLocaleLowerCase);
export var StringPrototypeToLocaleUpperCase: Uncurry<
  String["toLocaleUpperCase"],
  string
> = uncurryThis(StringPrototype.toLocaleUpperCase);
export var StringPrototypeToLocaleString: Uncurry<
  String["toLocaleString"],
  string
> = uncurryThis(StringPrototype.toLocaleString);
export var StringPrototypeToString: Uncurry<String["toString"], string> =
  uncurryThis(StringPrototype.toString);
export var StringPrototypeToWellFormed: Uncurry<
  String["toWellFormed"],
  string
> = uncurryThis(StringPrototype.toWellFormed);
export var StringPrototypeTrim: Uncurry<String["trim"], string> = uncurryThis(
  StringPrototype.trim,
);
export var StringPrototypeTrimStart: Uncurry<String["trimStart"], string> =
  uncurryThis(StringPrototype.trimStart);
export var StringPrototypeTrimEnd: Uncurry<String["trimEnd"], string> =
  uncurryThis(StringPrototype.trimEnd);
export var StringPrototypeValueOf: Uncurry<String["valueOf"], string> =
  uncurryThis(StringPrototype.valueOf);
export var StringPrototypeGetLength: (string: string) => number = uncurryGetter(
  StringPrototype,
  "length",
  "wrap",
);
export var StringPrototypeSymbolIterator: Uncurry<
  String[SymbolIterator],
  string
> = uncurryThis(StringPrototype[SymbolIterator]);

export var StringIteratorPrototype: StringIterator<string> =
  ObjectGetPrototypeOf(
    StringPrototypeSymbolIterator(""),
  );
export var StringIteratorPrototypeNext: Uncurry<
  StringIterator<string>["next"],
  StringIterator<string>
> = uncurryThis(StringIteratorPrototype.next);
export var StringIteratorPrototypeReturn: Uncurry<
  StringIterator<string>["return"],
  StringIterator<string>
> = uncurryThis(StringIteratorPrototype.return ?? (() => undefined!));
export var StringIteratorPrototypeThrow: Uncurry<
  StringIterator<string>["throw"],
  StringIterator<string>
> = uncurryThis(
  StringIteratorPrototype.throw ?? ((e) => {
    throw Error.isError(e) ? e : new Error(e);
  }),
);
// #endregion String

// #region Number
export var Number: NumberConstructor = $globalThis.Number;
export var NumberNaN: typeof Number.NaN = Number.NaN;
export var NumberIsNaN: typeof Number.isNaN = Number.isNaN;
export var NumberIsFinite: typeof Number.isFinite = Number.isFinite;
export var NumberIsInteger: typeof Number.isInteger = Number.isInteger;
export var NumberIsSafeInteger: typeof Number.isSafeInteger =
  Number.isSafeInteger;
export var NumberParseFloat: typeof Number.parseFloat = Number.parseFloat;
export var NumberParseInt: typeof Number.parseInt = Number.parseInt;
export var NumberEPSILON: typeof Number.EPSILON = Number.EPSILON;
export var NumberMAX_SAFE_INTEGER: typeof Number.MAX_SAFE_INTEGER =
  Number.MAX_SAFE_INTEGER;
export var NumberMIN_SAFE_INTEGER: typeof Number.MIN_SAFE_INTEGER =
  Number.MIN_SAFE_INTEGER;
export var NumberMAX_VALUE: typeof Number.MAX_VALUE = Number.MAX_VALUE;
export var NumberMIN_VALUE: typeof Number.MIN_VALUE = Number.MIN_VALUE;
export var NumberPOSITIVE_INFINITY: typeof Number.POSITIVE_INFINITY =
  Number.POSITIVE_INFINITY;
export var NumberNEGATIVE_INFINITY: typeof Number.NEGATIVE_INFINITY =
  Number.NEGATIVE_INFINITY;
export var NumberPrototype: Number = Number.prototype;
export var NumberPrototypeToString: Uncurry<Number["toString"], number> =
  uncurryThis(
    NumberPrototype.toString,
  );
export var NumberPrototypeToFixed: Uncurry<Number["toFixed"], number> =
  uncurryThis(
    NumberPrototype.toFixed,
  );
export var NumberPrototypeToExponential: Uncurry<
  Number["toExponential"],
  number
> = uncurryThis(
  NumberPrototype.toExponential,
);
export var NumberPrototypeToPrecision: Uncurry<Number["toPrecision"], number> =
  uncurryThis(
    NumberPrototype.toPrecision,
  );
// #endregion Number

// #region BigInt
export var BigInt: BigIntConstructor = $globalThis.BigInt;
export var BigIntPrototype: BigInt = BigInt.prototype;
export var BigIntPrototypeToString: Uncurry<BigInt["toString"], bigint> =
  uncurryThis(
    BigIntPrototype.toString,
  );
export var BigIntPrototypeValueOf: Uncurry<BigInt["valueOf"], bigint> =
  uncurryThis(
    BigIntPrototype.valueOf,
  );
export var BigIntAsIntN: typeof BigInt.asIntN = BigInt.asIntN;
export var BigIntAsUintN: typeof BigInt.asUintN = BigInt.asUintN;
// #endregion BigInt

// #region Boolean
export var Boolean: BooleanConstructor = $globalThis.Boolean;
export var BooleanPrototype: Boolean = Boolean.prototype;
export var BooleanPrototypeToString: Uncurry<Boolean["toString"], boolean> =
  uncurryThis(
    BooleanPrototype.toString,
  );
export var BooleanPrototypeValueOf: Uncurry<Boolean["valueOf"], boolean> =
  uncurryThis(
    BooleanPrototype.valueOf,
  );
// #endregion Boolean

// #region Atomics
export var Atomics: globalThis.Atomics = $globalThis.Atomics;
export var AtomicsAdd: typeof Atomics.add = Atomics.add;
export var AtomicsAnd: typeof Atomics.and = Atomics.and;
// deno-fmt-ignore
export var AtomicsCompareExchange: typeof Atomics.compareExchange = Atomics.compareExchange;
export var AtomicsExchange: typeof Atomics.exchange = Atomics.exchange;
export var AtomicsIsLockFree: typeof Atomics.isLockFree = Atomics.isLockFree;
export var AtomicsLoad: typeof Atomics.load = Atomics.load;
export var AtomicsNotify: typeof Atomics.notify = Atomics.notify;
export var AtomicsOr: typeof Atomics.or = Atomics.or;
export var AtomicsPause: typeof Atomics.pause = Atomics.pause;
export var AtomicsStore: typeof Atomics.store = Atomics.store;
export var AtomicsSub: typeof Atomics.sub = Atomics.sub;
export var AtomicsWait: typeof Atomics.wait = Atomics.wait;
export var AtomicsWaitAsync: typeof Atomics.waitAsync = Atomics.waitAsync;
export var AtomicsXor: typeof Atomics.xor = Atomics.xor;
// #endregion Atomics

// #region Proxy and Reflection
export var Proxy: ProxyConstructor = $globalThis.Proxy;
export type Proxy<T extends object> = T & { [K in keyof T]: T[K] };
export var ProxyRevocable: typeof Proxy.revocable = Proxy.revocable;
export type ProxyHandler<T extends object> = globalThis.ProxyHandler<T>;

export var Reflect: typeof $globalThis.Reflect = $globalThis.Reflect;
export var ReflectApply: typeof Reflect.apply = Reflect.apply;
export var ReflectConstruct: typeof Reflect.construct = Reflect.construct;
export var ReflectDefineProperty: typeof Reflect.defineProperty =
  Reflect.defineProperty;
export var ReflectDeleteProperty: typeof Reflect.deleteProperty =
  Reflect.deleteProperty;
export var ReflectGet: typeof Reflect.get = Reflect.get;
export var ReflectGetOwnPropertyDescriptor:
  typeof Reflect.getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
export var ReflectGetPrototypeOf: typeof Reflect.getPrototypeOf =
  Reflect.getPrototypeOf;
export var ReflectHas: typeof Reflect.has = Reflect.has;
export var ReflectIsExtensible: typeof Reflect.isExtensible =
  Reflect.isExtensible;
export var ReflectOwnKeys: typeof Reflect.ownKeys = Reflect.ownKeys;
export var ReflectPreventExtensions: typeof Reflect.preventExtensions =
  Reflect.preventExtensions;
export var ReflectSet: typeof Reflect.set = Reflect.set;
export var ReflectSetPrototypeOf: typeof Reflect.setPrototypeOf =
  Reflect.setPrototypeOf;
// #endregion Proxy and Reflection

// #region Keyed Collections
export var Set: SetConstructor = $globalThis.Set;
export var SetPrototype: Set<any> = Set?.prototype;
export var SetPrototypeHas: Uncurry<Set<any>["has"], Set<any>> = uncurryThis(
  SetPrototype?.has ??
    (() => fail("Set is not supported in this environment.")),
  SetPrototype,
);

export var Map: MapConstructor = $globalThis.Map;
export var MapGroupBy: typeof Map.groupBy = Map.groupBy;
export var MapPrototype: Map<any, any> = Map?.prototype;
export var MapPrototypeHas: Uncurry<Map<any, any>["has"], Map<any, any>> =
  uncurryThis(
    MapPrototype?.has ??
      (() => fail("Map is not supported in this environment.")),
    MapPrototype,
  );
// #endregion Keyed Collections

// #region Weak Keyed Collections
interface WeakKeyTypes {
  object: object;
}
interface WeakKeyTypes {
  symbol: symbol;
}

export type WeakKey = WeakKeyTypes[keyof WeakKeyTypes];

export var WeakMap: WeakMapConstructor = $globalThis.WeakMap;
export var WeakMapPrototype: WeakMap<WeakKey, any> = WeakMap?.prototype;
export var WeakMapPrototypeHas: Uncurry<
  WeakMap<WeakKey, any>["has"],
  WeakMap<WeakKey, any>
> = uncurryThis(
  WeakMapPrototype?.has ??
    (() => fail("WeakMap is not supported in this environment.")),
);

export var WeakSet: WeakSetConstructor = $globalThis.WeakSet;
export var WeakSetPrototype: WeakSet<WeakKey> = WeakSet?.prototype;
export var WeakSetPrototypeHas: Uncurry<
  WeakSet<WeakKey>["has"],
  WeakSet<WeakKey>
> = uncurryThis(
  WeakSetPrototype?.has ??
    (() => fail("WeakSet is not supported in this environment.")),
);

export var WeakRef: WeakRefConstructor = $globalThis.WeakRef;
export var WeakRefPrototype: WeakRef<WeakKey> = WeakRef?.prototype;
export var WeakRefPrototypeDeref: Uncurry<
  WeakRef<WeakKey>["deref"],
  WeakRef<WeakKey>
> = uncurryThis(
  WeakRefPrototype?.deref ??
    (() => fail("WeakRef is not supported in this environment.")),
);

export var FinalizationRegistry: FinalizationRegistryConstructor =
  $globalThis.FinalizationRegistry;
export var FinalizationRegistryPrototype: FinalizationRegistry<any> =
  FinalizationRegistry?.prototype;
export var FinalizationRegistryPrototypeRegister: <T>(
  registry: FinalizationRegistry<T>,
  target: WeakKey,
  heldValue: T,
  unregisterToken?: WeakKey,
) => void = uncurryThis(
  FinalizationRegistryPrototype?.register ??
    (() => fail("FinalizationRegistry is not supported in this environment.")),
);
export var FinalizationRegistryPrototypeUnregister: <T>(
  registry: FinalizationRegistry<T>,
  unregisterToken: WeakKey,
) => boolean = uncurryThis(
  FinalizationRegistryPrototype?.unregister ??
    (() => fail("FinalizationRegistry is not supported in this environment.")),
);

export var FinalizationRegistryPrototypeCleanupSome: <T>(
  registry: FinalizationRegistry<T>,
) => boolean = uncurryThis(
  (FinalizationRegistryPrototype as any)?.cleanupSome ??
    (() => fail("FinalizationRegistry is not supported in this environment.")),
);
// #endregion Weak Keyed Collections

// #region Errors
export var Error: ErrorConstructor = $globalThis.Error;
export var ErrorCaptureStackTrace: typeof Error.captureStackTrace =
  Error.captureStackTrace;
export var TypeError: TypeErrorConstructor = $globalThis.TypeError;
export var ReferenceError: ReferenceErrorConstructor =
  $globalThis.ReferenceError;
export var SyntaxError: SyntaxErrorConstructor = $globalThis.SyntaxError;
export var RangeError: RangeErrorConstructor = $globalThis.RangeError;
export var EvalError: EvalErrorConstructor = $globalThis.EvalError;
export var URIError: URIErrorConstructor = $globalThis.URIError;
// #endregion Errors

// #region Structured Data
export var ArrayBuffer: ArrayBufferConstructor = $globalThis.ArrayBuffer;
// deno-fmt-ignore
export var SharedArrayBuffer: SharedArrayBufferConstructor = $globalThis.SharedArrayBuffer;
export var DataView: typeof $globalThis.DataView = $globalThis.DataView;
export type DataView<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.DataView<T>;

export var Int8Array: typeof $globalThis.Int8Array = $globalThis.Int8Array;
export type Int8Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Int8Array<T>;

export var Int16Array: typeof $globalThis.Int16Array = $globalThis.Int16Array;
export type Int16Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Int16Array<T>;

export var Int32Array: typeof $globalThis.Int32Array = $globalThis.Int32Array;
export type Int32Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Int32Array<T>;

export var Uint8Array: typeof $globalThis.Uint8Array = $globalThis.Uint8Array;
export type Uint8Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Uint8Array<T>;

// deno-fmt-ignore
export var Uint8ClampedArray: typeof $globalThis.Uint8ClampedArray = $globalThis.Uint8ClampedArray;
export type Uint8ClampedArray<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Uint8ClampedArray<T>;

export var Uint16Array: typeof $globalThis.Uint16Array =
  $globalThis.Uint16Array;
export type Uint16Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Uint16Array<T>;

export var Uint32Array: typeof $globalThis.Uint32Array =
  $globalThis.Uint32Array;
export type Uint32Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Uint32Array<T>;

export var Float16Array: typeof $globalThis.Float16Array =
  $globalThis.Float16Array;
export type Float16Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Float16Array<T>;

export var Float32Array: typeof $globalThis.Float32Array =
  $globalThis.Float32Array;
export type Float32Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Float32Array<T>;

export var Float64Array: typeof $globalThis.Float64Array =
  $globalThis.Float64Array;
export type Float64Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.Float64Array<T>;

export var BigInt64Array: typeof $globalThis.BigInt64Array =
  $globalThis.BigInt64Array;
export type BigInt64Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.BigInt64Array<T>;

// deno-fmt-ignore
export var BigUint64Array: typeof $globalThis.BigUint64Array = $globalThis.BigUint64Array;
export type BigUint64Array<T extends ArrayBufferLike = ArrayBufferLike> =
  globalThis.BigUint64Array<T>;
// #endregion Structured Data

// #region Event
export type ElementConstructor = typeof $globalThis extends { Element: infer E }
  ? E
  : { new (): never; prototype: Element };
export type Element = typeof $globalThis extends
  { Element: infer E extends abstract new (...args: any) => any }
  ? InstanceType<E>
  : any;

export type EventConstructor = typeof $globalThis extends { Event: infer E } ? E
  : { new (type: string, init?: EventInit): Event; prototype: Event };
export var Event: EventConstructor = $globalThis.Event;
export type Event = globalThis.Event;
export var EventPrototype: Event = Event.prototype;
export var EventPrototypeStopPropagation: Uncurry<
  Event["stopPropagation"],
  Event
> = uncurryThis(
  EventPrototype.stopPropagation,
);
export var EventPrototypePreventDefault: Uncurry<
  Event["preventDefault"],
  Event
> = uncurryThis(
  EventPrototype.preventDefault,
);
export var EventPrototypeStopImmediatePropagation: Uncurry<
  Event["stopImmediatePropagation"],
  Event
> = uncurryThis(
  EventPrototype.stopImmediatePropagation,
);
export var EventPrototypeGetType: (event: Event) => string = uncurryGetter(
  EventPrototype,
  "type",
  "stub",
);
export var EventPrototypeGetTarget: (event: Event) => EventTarget | null =
  uncurryGetter(
    EventPrototype,
    "target",
    "stub",
  );
export var EventPrototypeGetCurrentTarget: (
  event: Event,
) => EventTarget | null = uncurryGetter(
  EventPrototype,
  "currentTarget",
  "stub",
);
export var EventPrototypeGetBubbles: (event: Event) => boolean = uncurryGetter(
  EventPrototype,
  "bubbles",
  "stub",
);
export var EventPrototypeGetCancelable: (event: Event) => boolean =
  uncurryGetter(
    EventPrototype,
    "cancelable",
    "stub",
  );
export var EventPrototypeGetDefaultPrevented: (event: Event) => boolean =
  uncurryGetter(
    EventPrototype,
    "defaultPrevented",
    "stub",
  );
export var EventPrototypeGetComposed: (event: Event) => boolean = uncurryGetter(
  EventPrototype,
  "composed",
  "stub",
);
export var EventPrototypeGetTimeStamp: (event: Event) => number = uncurryGetter(
  EventPrototype,
  "timeStamp",
  "stub",
);
export var EventPrototypeGetEventPhase: (event: Event) => number =
  uncurryGetter(
    EventPrototype,
    "eventPhase",
    "stub",
  );
export var EventPrototypeGetIsTrusted: (event: Event) => boolean =
  uncurryGetter(
    EventPrototype,
    "isTrusted",
    "stub",
  );
export var EventPrototypeGetInitialized: (event: Event) => boolean =
  uncurryGetter(
    EventPrototype,
    "initialized",
    "stub",
  );
export var EventPrototypeComposedPath: (event: Event) => EventTarget[] =
  uncurryThis(
    EventPrototype.composedPath,
  );
export var EventPrototypeGetNONE: (event: Event) => 0 = uncurryGetter(
  EventPrototype,
  "NONE",
  "stub",
);
export var EventPrototypeGetCAPTURING_PHASE: (event: Event) => 1 =
  uncurryGetter(
    EventPrototype,
    "CAPTURING_PHASE",
    "stub",
  );
export var EventPrototypeGetAT_TARGET: (event: Event) => 2 = uncurryGetter(
  EventPrototype,
  "AT_TARGET",
  "stub",
);
export var EventPrototypeGetBUBBLING_PHASE: (event: Event) => 3 = uncurryGetter(
  EventPrototype,
  "BUBBLING_PHASE",
  "stub",
);
export var EventPrototypeGetReturnValue: (event: Event) => any = uncurryGetter(
  EventPrototype,
  "returnValue",
  "stub",
);
export var EventPrototypeSetReturnValue: (event: Event, value: any) => void =
  uncurrySetter(
    EventPrototype,
    "returnValue",
    "stub",
  );
export var EventPrototypeGetCancelBubble: (event: Event) => boolean =
  uncurryGetter(
    EventPrototype,
    "cancelBubble",
    "stub",
  );
export var EventPrototypeSetCancelBubble: (
  event: Event,
  cancelBubble: boolean,
) => void = uncurrySetter(
  EventPrototype,
  "cancelBubble",
  "stub",
);
// #endregion Event

// #region EventTarget
export type EventTargetConstructor = typeof $globalThis extends
  { EventTarget: infer E } ? E
  : { new (): EventTarget; readonly prototype: EventTarget };
export var EventTarget: EventTargetConstructor = $globalThis.EventTarget;
export type EventTarget = globalThis.EventTarget;

export var EventTargetPrototype: EventTarget = EventTarget.prototype;
export var EventTargetPrototypeAddEventListener: Uncurry<
  EventTarget["addEventListener"],
  EventTarget
> = uncurryThis(EventTargetPrototype.addEventListener);
export var EventTargetPrototypeRemoveEventListener: Uncurry<
  EventTarget["removeEventListener"],
  EventTarget
> = uncurryThis(EventTargetPrototype.removeEventListener);
export var EventTargetPrototypeDispatchEvent: Uncurry<
  EventTarget["dispatchEvent"],
  EventTarget
> = uncurryThis(EventTargetPrototype.dispatchEvent);
// #endregion Event
