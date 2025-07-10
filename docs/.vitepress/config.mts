import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import {
  createFileSystemTypesCache,
} from "@shikijs/vitepress-twoslash/cache-fs";
import { defineConfig } from "vitepress";
// import { expandGlobSync } from "@std/fs/expand-glob";

// const allNamedExports = await Deno.readTextFile("../mod.ts").then((text) => {
//   const exports = text.match(/export\s+\{((?:(?!\})[\s\S])*?(?=\}))\}/);
//   if (!exports?.[1]) return [];
//   return exports[1].split(/[\s\n]*,[\s\n]*/).map((e) => e.trim()).map((e) => {
//     if (e.includes(" as ")) {
//       const [orig, alias] = e.split(/\s+as\s+/);
//       return (alias === "default" ? `${alias} as ${orig}` : alias).trim();
//     }
//     return e;
//   });
// });

// // const isNamespace = await Deno.readTextFile("../namespace.ts").then((text) => {
// //   const exports = text.match(/export\s+({[^}]+})/g)?.[1];
// //   if (!exports) return "{}";
// //   return exports;
// // });

// const allTypeExports = await Deno.readTextFile("../src/namespace_types.ts").then((text) => {
//   const exports = text.match(/export\s+type\s+\{((?:(?!\})[\s\S])*?(?=\}))\}/);
//   if (!exports?.[1]) return [];
//   return exports[1].split(/[\s\n]*,[\s\n]*/).map((e) => e.trim()).map((e) => {
//     if (e.includes(" as ")) {
//       const [orig, alias] = e.split(/\s+as\s+/);
//       return (alias === "default" ? `${alias} as ${orig}` : alias).trim();
//     }
//     return e;
//   });
// });

// const seen = new Set<string>();

// const extraFiles = {
//   // ensure "@nick/is" is always in the context for twoslash.
//   // since this is a deno module by default, we do some trickery to
//   // ensure the types are always available here.
//   "./mod.ts": Deno.readTextFileSync("../mod.ts"),
//   ...Iterator.from(expandGlobSync("../src/**/*.ts")).filter((
//     { isFile, path },
//   ) =>
//     isFile && !path.endsWith("test.ts") &&
//     !path.endsWith("bench.ts")
//   ).reduce(
//     (acc, { name, path }) => {
//       // const key = path.replace(Deno.cwd(), "./").replace(/^(\.{1,2}\/)+/, "./");
//       const base = name.replace(/\.ts$/, "").replace(/(?<=[a-z0-9])_/g, "-");
//       const key = "./" + path.slice(Deno.cwd().split(/[\\/]/g).slice(0, -1).join("/").length + 1);
//       const key2 = `@nick/is${base === "mod" ? "" : "/" + base}`;
//       const prepend = Deno.readTextFileSync(path);

//       acc[key] = { prepend };

//       const namedExports =
//         prepend.match(/export\s+\{((?:(?!\})[\s\S])*?(?=\}))\}/)?.[1]?.split(/[\s\n]*,[\s\n]*/).map(
//           (e) => e.trim(),
//         ).map((e) => {
//           if (e.includes(" as ")) {
//             const [orig, alias] = e.split(/\s+as\s+/);
//             return (alias === "default" ? `${alias} as ${orig}` : alias).trim();
//           }
//           return e;
//         }) ?? [];
//       const typeExports =
//         prepend.match(/export\s+type\s+\{((?:(?!\})[\s\S])*?(?=\}))\}/)?.[1]?.split(
//           /[\s\n]*,[\s\n]*/,
//         ).map((e) => e.trim()).map((e) => {
//           if (e.includes(" as ")) {
//             const [orig, alias] = e.split(/\s+as\s+/);
//             return (alias === "default" ? `${alias} as ${orig}` : alias).trim();
//           }
//           return e;
//         }) ?? [];

//       // for (const arr of [namedExports, typeExports] as const) {
//       //   for (let i = 0; i < arr.length; i++) {
//       //     const x = arr[i];
//       //     if (seen.has(x)) {
//       //       arr.splice(i, 1);
//       //     } else {
//       //       seen.add(x);
//       //     }
//       //   }
//       // }

//       acc["./is.d.ts"].prepend += `
//         declare module "${key2}" {
//           import {${namedExports}} from "${key}";
//           import type {${typeExports}} from "${key}";

//           export {${namedExports}};
//           export type {${typeExports}};
//         }
//         declare module "jsr:${key2}" {
//           export * from "${key2}";
//         }
//       `;
//       return acc;
//     },
//     {
//       "./deno.d.ts": Deno.readTextFileSync("./deno.d.ts"),
//       "./is.d.ts": {
//         prepend: `
//           import * as is from "./namespace.ts";

//           declare module "@nick/is" {
//             export {${allNamedExports}} from "./mod.ts";
//             export type {${allTypeExports}} from "./types.ts";
//             export { is, is as default };
//           }

//           declare module "jsr:@nick/is" {
//             export {${allNamedExports}} from "./mod.ts";
//             export type {${allTypeExports}} from "./types.ts";
//             export { is, is as default };
//           }
//         `,
//       },
//       // deno-lint-ignore no-explicit-any
//     } as any,
//   ),
// };
const extraFiles = {};

// await Deno.writeTextFile("./vfs.json", JSON.stringify(extraFiles, null, 2));

// console.log(Object.fromEntries(Object.entries(extraFiles).slice(0, 3)));

export default defineConfig({
  markdown: {
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache(),
        explicitTrigger: false,
        twoslashOptions: {
          extraFiles,
          vfsRoot: "../",
          handbookOptions: {
            noErrorsCutted: true,
            // noErrors: true,
          },
          compilerOptions: {
            strict: true,
            noEmit: true,
            skipLibCheck: true,
            noUncheckedIndexedAccess: true,
            noImplicitAny: true,
            noImplicitThis: true,
            noImplicitOverride: true,
            noImplicitReturns: true,
            noFallthroughCasesInSwitch: true,
            noUnusedLocals: true,
            noUnusedParameters: true,
            allowImportingTsExtensions: true,
            allowArbitraryExtensions: true,
            moduleResolution: 100,
            moduleSuffixes: [".js", ".ts"],
            target: 99,
            module: 99,
            baseUrl: "../",
            paths: {
              "@nick/is/*": ["./src/*"],
              "@nick/is": ["./src/mod.ts"],
              "jsr:@nick/is/*": ["./src/*"],
              "jsr:@nick/is": ["./src/mod.ts"],
            },
          },
        },
      }),
    ],
    languages: ["js", "jsx", "ts", "tsx"],
  },
  title: "@nick/is",
  description: "Platform-agnostic. Performant. Portable. Predicates.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Type Guards", link: "/#type-guards" },
      { text: "Examples", link: "/#examples" },
    ],
    sidebar: [
      {
        text: "Type Guards",
        items: [
          {
            text: "Primitives",
            items: [
              { text: "isPrimitive", link: "/primitive" },
              { text: "isNull", link: "/null" },
              { text: "isUndefined", link: "/undefined" },
              { text: "isMissing", link: "/missing" },
              { text: "isPresent", link: "/present" },
              { text: "isPrintable", link: "/printable" },
              { text: "isPropertyKey", link: "/property-key" },
              { text: "isString", link: "/string" },
              { text: "isNumber", link: "/number" },
              { text: "isBigInt", link: "/bigint" },
              { text: "isBoolean", link: "/boolean" },
              { text: "isSymbol", link: "/symbol" },
              { text: "isRegisteredSymbol", link: "/registered-symbol" },
              { text: "isWellKnownSymbol", link: "/well-known-symbol" },
              { text: "isUniqueSymbol", link: "/unique-symbol" },
              { text: "isURLString", link: "/url-string" },
              { text: "isDateString", link: "/date-string" },
              { text: "isSemVer", link: "/semver" },
              { text: "isBoxedPrimitive", link: "/boxed-primitive" },
              { text: "isStringObject", link: "/string-object" },
              { text: "isNumberObject", link: "/number-object" },
              { text: "isBigIntObject", link: "/bigint-object" },
              { text: "isBooleanObject", link: "/boolean-object" },
              { text: "isSymbolObject", link: "/symbol-object" },
              { text: "isIdentifier", link: "/identifier" },
              { text: "isDefined", link: "/defined" },
              { text: "isFalsy", link: "/falsy" },
              { text: "isTruthy", link: "/truthy" },
            ],
          },
          {
            text: "Numbers",
            link: "/number/number",
            items: [
              { text: "isEven", link: "/number/even" },
              { text: "isOdd", link: "/number/odd" },
              { text: "isFiniteInteger", link: "/number/finite-integer" },
              { text: "isFiniteNumber", link: "/number/finite" },
              { text: "isFloat", link: "/number/float" },
              { text: "isFloat16", link: "/number/float16" },
              { text: "isFloat32", link: "/number/float32" },
              { text: "isFloat64", link: "/number/float64" },
              { text: "isInRange", link: "/number/in-range" },
              { text: "isInteger", link: "/number/integer" },
              { text: "isInt8", link: "/number/int8" },
              { text: "isInt16", link: "/number/int16" },
              { text: "isInt32", link: "/number/int32" },
              { text: "isUint8", link: "/number/uint8" },
              { text: "isUint16", link: "/number/uint16" },
              { text: "isUint32", link: "/number/uint32" },
              { text: "isNaN", link: "/number/nan" },
              { text: "isNegative", link: "/number/negative" },
              { text: "isNegativeZero", link: "/number/negative-zero" },
              {
                text: "isNegativeFiniteInteger",
                link: "/number/negative-finite-integer",
              },
              {
                text: "isNegativeFiniteNumber",
                link: "/number/negative-finite",
              },
              { text: "isNegativeInteger", link: "/number/negative-integer" },
              {
                text: "isNegativeNonZeroFiniteInteger",
                link: "/number/negative-nonzero-finite-integer",
              },
              {
                text: "isNegativeNonZeroFiniteNumber",
                link: "/number/negative-nonzero-finite",
              },
              {
                text: "isNegativeNonZeroInteger",
                link: "/number/negative-nonzero-integer",
              },
              {
                text: "isNegativeNonZeroNumber",
                link: "/number/negative-nonzero",
              },
              {
                text: "isNonZeroFiniteInteger",
                link: "/number/nonzero-finite-integer",
              },
              { text: "isNonZeroFiniteNumber", link: "/number/nonzero-finite" },
              { text: "isNonZeroInteger", link: "/number/nonzero-integer" },
              { text: "isNonZeroNumber", link: "/number/nonzero" },
              { text: "isNumber", link: "/number/number" },
              { text: "isPositive", link: "/number/positive" },
              {
                text: "isPositiveFiniteInteger",
                link: "/number/positive-finite-integer",
              },
              {
                text: "isPositiveFiniteNumber",
                link: "/number/positive-finite",
              },
              { text: "isPositiveInteger", link: "/number/positive-integer" },
              {
                text: "isPositiveNonZeroFiniteInteger",
                link: "/number/positive-nonzero-finite-integer",
              },
              {
                text: "isPositiveNonZeroFiniteNumber",
                link: "/number/positive-nonzero-finite",
              },
              {
                text: "isPositiveNonZeroInteger",
                link: "/number/positive-nonzero-integer",
              },
              {
                text: "isPositiveNonZeroNumber",
                link: "/number/positive-nonzero",
              },
              { text: "isPositiveZero", link: "/number/positive-zero" },
              { text: "isZero", link: "/number/zero" },
            ],
          },
          {
            text: "Control Flow",
            items: [
              { text: "isAsyncFunction", link: "/async-function" },
              { text: "isAsyncGenerator", link: "/async-generator" },
              {
                text: "isAsyncGeneratorFunction",
                link: "/async-generator-function",
              },
              { text: "isAsyncIterable", link: "/async-iterable" },
              { text: "isAsyncIterator", link: "/async-iterator" },
              {
                text: "isAsyncIterableIterator",
                link: "/async-iterable-iterator",
              },
              { text: "isAsyncIterableObject", link: "/async-iterable-object" },
              { text: "isPromise", link: "/promise" },
              { text: "isPromiseLike", link: "/promise-like" },
            ],
          },
          {
            text: "Iteration",
            items: [
              { text: "isIterable", link: "/iterable" },
              { text: "isIterator", link: "/iterator" },
              { text: "isIterableIterator", link: "/iterable-iterator" },
              { text: "isIterableObject", link: "/iterable-object" },
              { text: "isArrayIterator", link: "/array-iterator" },
              { text: "isSetIterator", link: "/set-iterator" },
              { text: "isMapIterator", link: "/map-iterator" },
              { text: "isStringIterator", link: "/string-iterator" },
              { text: "isGenerator", link: "/generator" },
              { text: "isGeneratorFunction", link: "/generator-function" },
            ],
          },
          {
            text: "Indexed Collections",
            items: [
              { text: "isArray", link: "/array" },
              { text: "isArrayLike", link: "/array-like" },
              { text: "isArrayLikeObject", link: "/array-like-object" },
              { text: "isArguments", link: "/arguments" },
            ],
          },
          {
            text: "Keyed Collections",
            items: [
              { text: "isMap", link: "/map" },
              { text: "isMapLike", link: "/map-like" },
              { text: "isSet", link: "/set" },
              { text: "isSetLike", link: "/set-like" },
              { text: "isExtendedSetLike", link: "/extended-set-like" },
              { text: "isReadonlySetLike", link: "/readonly-set-like" },
              { text: "isReadonlyCollection", link: "/readonly-collection" },
            ],
          },
          {
            text: "Weak Collections",
            items: [
              { text: "isWeakMap", link: "/weak-map" },
              { text: "isWeakSet", link: "/weak-set" },
              { text: "isWeakRef", link: "/weak-ref" },
              { text: "isWeakKey", link: "/weak-key" },
            ],
          },
          {
            text: "Objects",
            items: [
              { text: "isClass", link: "/class" },
              { text: "isConstructor", link: "/constructor" },
              { text: "isFunction", link: "/function" },
              { text: "isKeyOf", link: "/keyof" },
              { text: "isInstance", link: "/instance" },
              { text: "isNonArrayObject", link: "/non-array-object" },
              { text: "isObject", link: "/object" },
              { text: "isObjectLike", link: "/object-like" },
              { text: "isPlainObject", link: "/plain-object" },
              { text: "isEmptyObject", link: "/empty-object" },
              { text: "isEnum", link: "/enum" },
              { text: "isEnumLike", link: "/enum" },
              { text: "isError", link: "/error" },
              { text: "isRegExp", link: "/regexp" },
              { text: "isDate", link: "/date" },
              { text: "isTagged", link: "/tagged" },
              { text: "isTemplateObject", link: "/template-object" },
              {
                text: "isTemplateStringsArray",
                link: "/template-strings-array",
              },
            ],
          },
          {
            text: "Structured Data",
            items: [
              { text: "isArrayBuffer", link: "/array-buffer" },
              { text: "isSharedArrayBuffer", link: "/shared-array-buffer" },
              { text: "isArrayBufferLike", link: "/array-buffer-like" },
              { text: "isArrayBufferView", link: "/array-buffer-view" },
              { text: "isBufferSource", link: "/buffer-source" },
              { text: "isDataView", link: "/data-view" },
              { text: "isTypedArray", link: "/typed-array" },
              { text: "isUint8Array", link: "/uint8-array" },
              { text: "isUint8ClampedArray", link: "/uint8-clamped-array" },
              { text: "isUint16Array", link: "/uint16-array" },
              { text: "isUint32Array", link: "/uint32-array" },
              { text: "isInt8Array", link: "/int8-array" },
              { text: "isInt16Array", link: "/int16-array" },
              { text: "isInt32Array", link: "/int32-array" },
              { text: "isFloat16Array", link: "/float16-array" },
              { text: "isFloat32Array", link: "/float32-array" },
              { text: "isFloat64Array", link: "/float64-array" },
              { text: "isBigInt64Array", link: "/bigint64-array" },
              { text: "isBigUint64Array", link: "/biguint64-array" },
            ],
          },
          {
            text: "Web APIs",
            items: [
              { text: "isReadableStream", link: "/readable-stream" },
              { text: "isWritableStream", link: "/writable-stream" },
              { text: "isURL", link: "/url" },
              { text: "isURLPattern", link: "/url-pattern" },
              { text: "isURLSearchParams", link: "/url-search-params" },
            ],
          },
          {
            text: "Explicit Resource Management",
            items: [
              { text: "isDisposable", link: "/disposable" },
              { text: "isAsyncDisposable", link: "/async-disposable" },
            ],
          },
          {
            text: "Deno I/O",
            items: [
              { text: "isCloser", link: "/closer" },
              { text: "isReader", link: "/reader" },
              { text: "isWriter", link: "/writer" },
              { text: "isReaderSync", link: "/reader-sync" },
              { text: "isWriterSync", link: "/writer-sync" },
              { text: "isSeeker", link: "/seeker" },
              { text: "isSeekerSync", link: "/seeker-sync" },
            ],
          },
          {
            text: "Composition",
            items: [
              { text: "both", link: "/both" },
              { text: "either", link: "/either" },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/nberlette/is#readme" },
      { icon: "jsr", link: "https://jsr.io/@nick/is/doc" },
      { icon: "npm", link: "https://www.npmjs.com/package/@nickb/is" },
    ],
  },
});
