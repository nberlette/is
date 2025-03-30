/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/async-disposable
 */

import { assert } from "@std/assert/assert";
import { expectType } from "./_internal.ts";

const _Symbol = globalThis.Symbol;

Deno.test("isAsyncDisposable (imitating no symbol support)", async (t) => {
  // @ts-ignore this is intentional
  delete globalThis.Symbol;
  // @ts-ignore this is intentional
  globalThis.Symbol = undefined;
  // deno-lint-ignore no-unused-vars
  const Symbol = undefined;
  const { isAsyncDisposable } = await import("./async_disposable.ts");
  const SymbolAsyncDispose = "@@asyncDispose";
  try {
    await runTests(isAsyncDisposable, t, SymbolAsyncDispose as never);

    await t.step(
      "isAsyncDisposable: should return false for non-disposable objects",
      () => {
        assert(!isAsyncDisposable({}), "empty object is not disposable");
        assert(!isAsyncDisposable(() => {}), "function is not disposable");
        assert(!isAsyncDisposable(new Date()), "Date is not disposable");
        assert(!isAsyncDisposable(new Map()), "Map is not disposable");
        assert(!isAsyncDisposable(new Set()), "Set is not disposable");
      },
    );
  } finally {
    globalThis.Symbol = _Symbol;
  }
});

Deno.test("isAsyncDisposable (imitating no Symbol.asyncDispose support)", async (t) => {
  try {
    // @ts-ignore this is intentional
    globalThis.Symbol = new Proxy(function () {}, {
      apply: (_, thisArg, args) => Reflect.apply(_Symbol, thisArg, args),
      get: (_, p, r) => {
        if (p === "asyncDispose") return undefined;
        return Reflect.get(_Symbol, p, r);
      },
      has: (_, p) => Reflect.has(_Symbol, p),
      set: () => true,
      ownKeys: () =>
        Reflect.ownKeys(_Symbol).filter((x) => x !== "asyncDispose"),
      getPrototypeOf: () => Reflect.getPrototypeOf(_Symbol),
      getOwnPropertyDescriptor: (_, p) =>
        p === "dispose"
          ? undefined
          : Reflect.getOwnPropertyDescriptor(_Symbol, p),
    });
    const SymbolAsyncDispose = Symbol.for("Symbol.asyncDispose");
    const { isAsyncDisposable } = await import("./async_disposable.ts");
    await runTests(isAsyncDisposable, t, SymbolAsyncDispose as never);
  } finally {
    globalThis.Symbol = _Symbol;
  }
});

Deno.test("isAsyncDisposable (with full symbol support)", async (t) => {
  globalThis.Symbol = _Symbol;
  const { isAsyncDisposable } = await import("./async_disposable.ts");
  await runTests(isAsyncDisposable, t, _Symbol.asyncDispose);
});

async function runTests(
  isAsyncDisposable: (x: unknown) => x is AsyncDisposable,
  t: Deno.TestContext,
  SymbolAsyncDispose: typeof Symbol.asyncDispose,
) {
  await t.step(
    "isAsyncDisposable: should return true for disposable objects",
    () => {
      class DisposableClass implements AsyncDisposable {
        async [SymbolAsyncDispose]() {}
      }
      class NonDisposableClass {
        dispose() {}
      }
      assert(
        isAsyncDisposable(new DisposableClass()),
        "DisposableClass is disposable",
      );
      assert(
        !isAsyncDisposable(new NonDisposableClass()),
        "NonDisposableClass is not disposable",
      );
    },
  );

  await t.step(
    "isAsyncDisposable: should return false for non-objects and non-functions",
    () => {
      assert(!isAsyncDisposable(null), "null is not disposable");
      assert(!isAsyncDisposable(undefined), "undefined is not disposable");
      assert(!isAsyncDisposable(123), "number is not disposable");
      assert(!isAsyncDisposable("string"), "string is not disposable");
      assert(!isAsyncDisposable(true), "boolean is not disposable");
    },
  );

  await t.step(
    "isAsyncDisposable: should narrow type correctly",
    () => {
      let value: unknown;
      if (isAsyncDisposable(value)) expectType<AsyncDisposable>(value);
      expectType<unknown>(value);

      // mimics an assertion function
      expectType<AsyncDisposable>(isAsyncDisposable(value) ? value : null!);

      let value2: Disposable | AsyncDisposable | object | null | undefined;
      if (isAsyncDisposable(value2)) expectType<AsyncDisposable>(value2);
    },
  );
}
