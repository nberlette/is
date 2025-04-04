/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/registered-symbol
 */

import { assertEquals } from "@std/assert";
import {
  isRegisteredSymbol,
  type RegisteredSymbol,
} from "./registered_symbol.ts";
import { expectType } from "./_internal.ts";

Deno.test("isRegisteredSymbol: should return true for a registered symbol", () => {
  const symbol = Symbol.for("foo");
  assertEquals(
    isRegisteredSymbol(symbol),
    true,
    "it correctly identifies a registered symbol",
  );
});

Deno.test("isRegisteredSymbol: should return false for a non-registered symbol", () => {
  const symbol = Symbol("foo");
  assertEquals(
    isRegisteredSymbol(symbol),
    false,
    "it correctly identifies a non-reg symbol",
  );
});

Deno.test("RegisteredSymbol: should return false for a symbol from the well-known symbol registry", () => {
  const symbol = Symbol.iterator;
  assertEquals(
    isRegisteredSymbol(symbol),
    false,
    "it correctly identifies a symbol from the well-known symbol registry",
  );
});

Deno.test("isRegisteredSymbol: should return false for a string", () => {
  const value = "@@foo";
  assertEquals(
    isRegisteredSymbol(value),
    false,
    "it correctly identifies a string",
  );
});

Deno.test("isRegisteredSymbol: should return false for a number", () => {
  const value = 42;
  assertEquals(
    isRegisteredSymbol(value),
    false,
    "it correctly identifies a number",
  );
});

Deno.test("isteredSymbol: should return false for an object", () => {
  const value = {};
  assertEquals(
    isRegisteredSymbol(value),
    false,
    "it correctly identifies an object",
  );
});

Deno.test("isRegisteredSymbol: should false for an undefined value", () => {
  const value = undefined;
  assertEquals(
    isRegisteredSymbol(value),
    false,
    "it correctly identifies an undefined value",
  );
});

Deno.test("isRegisteredSymbol: should narrow types to RegisteredSymbol", () => {
  const symbol = Symbol.for("foo");
  if (isRegisteredSymbol(symbol)) {
    expectType<RegisteredSymbol>(symbol);
  }
});
