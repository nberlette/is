/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/disposable
 */

import { assert } from "@std/assert/assert";
import { expectType } from "./_internal.ts";

const _Symbol = globalThis.Symbol;

Deno.test("isDisposable (imitating no symbol support)", async (t) => {
  // @ts-ignore this is intentional
  delete globalThis.Symbol;
  // @ts-ignore this is intentional
  globalThis.Symbol = undefined;
  // deno-lint-ignore no-unused-vars
  const Symbol = undefined;
  const { isDisposable } = await import("./disposable.ts");
  const SymbolDispose = "@@dispose";
  try {
    await runTests(isDisposable, t, SymbolDispose as never);

    await t.step(
      "isDisposable: should return false for non-disposable objects",
      () => {
        assert(!isDisposable({}), "empty object is not disposable");
        assert(!isDisposable(() => {}), "function is not disposable");
        assert(!isDisposable(new Date()), "Date is not disposable");
        assert(!isDisposable(new Map()), "Map is not disposable");
        assert(!isDisposable(new Set()), "Set is not disposable");
      },
    );
  } finally {
    globalThis.Symbol = _Symbol;
  }
});

Deno.test("isDisposable (imitating no Symbol.dispose support)", async (t) => {
  try {
    // @ts-ignore this is intentional
    globalThis.Symbol = new Proxy(function () {}, {
      apply: (_, thisArg, args) => Reflect.apply(_Symbol, thisArg, args),
      get: (_, p, r) => {
        if (p === "dispose") return undefined;
        return Reflect.get(_Symbol, p, r);
      },
      has: (_, p) => Reflect.has(_Symbol, p),
      set: () => true,
      ownKeys: () => Reflect.ownKeys(_Symbol).filter((x) => x !== "dispose"),
      getPrototypeOf: () => Reflect.getPrototypeOf(_Symbol),
      getOwnPropertyDescriptor: (_, p) =>
        p === "dispose"
          ? undefined
          : Reflect.getOwnPropertyDescriptor(_Symbol, p),
    });
    const SymbolDispose = Symbol.for("Symbol.dispose");
    const { isDisposable } = await import("./disposable.ts");
    await runTests(isDisposable, t, SymbolDispose as never);
  } finally {
    globalThis.Symbol = _Symbol;
  }
});

Deno.test("isDisposable (with full symbol support)", async (t) => {
  globalThis.Symbol = _Symbol;
  const { isDisposable } = await import("./disposable.ts");
  await runTests(isDisposable, t, _Symbol.dispose);
});

async function runTests(
  isDisposable: (x: unknown) => x is Disposable,
  t: Deno.TestContext,
  SymbolDispose: typeof Symbol.dispose,
) {
  await t.step(
    "isDisposable: should return true for disposable objects",
    () => {
      class DisposableClass implements Disposable {
        [SymbolDispose]() {}
      }
      class NonDisposableClass {
        dispose() {}
      }
      assert(
        isDisposable(new DisposableClass()),
        "DisposableClass is disposable",
      );
      assert(
        !isDisposable(new NonDisposableClass()),
        "NonDisposableClass is not disposable",
      );
    },
  );

  await t.step(
    "isDisposable: should return false for non-objects and non-functions",
    () => {
      assert(!isDisposable(null), "null is not disposable");
      assert(!isDisposable(undefined), "undefined is not disposable");
      assert(!isDisposable(123), "number is not disposable");
      assert(!isDisposable("string"), "string is not disposable");
      assert(!isDisposable(true), "boolean is not disposable");
    },
  );

  await t.step(
    "isDisposable: should narrow type correctly",
    () => {
      let value: unknown;
      if (isDisposable(value)) expectType<Disposable>(value);
      expectType<unknown>(value);

      // mimics an assertion function
      expectType<Disposable>(isDisposable(value) ? value : null!);

      let value2: Disposable | AsyncDisposable | object | null | undefined;
      if (isDisposable(value2)) expectType<Disposable>(value2);
    },
  );
}
