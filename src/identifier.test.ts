/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/identifier
 */

import { assertEquals } from "@std/assert";
import { isIdentifier } from "./identifier.ts";

Deno.test("isIdentifier should return true for valid identifiers", () => {
  assertEquals(isIdentifier("a"), true);
  assertEquals(isIdentifier("_a"), true);
  assertEquals(isIdentifier("_1a"), true);
  assertEquals(isIdentifier("_a1"), true);
});

Deno.test("isIdentifier should return false for invalid identifiers", () => {
  assertEquals(isIdentifier("1"), false);
  assertEquals(isIdentifier("-a"), false);
  assertEquals(isIdentifier("a-"), false);
  assertEquals(isIdentifier("😀"), false);
  assertEquals(isIdentifier("_😀"), false);
  assertEquals(isIdentifier("_😀_"), false);
});

Deno.test("isIdentifier should return false for reserved keywords", () => {
  assertEquals(isIdentifier("break"), false);
  assertEquals(isIdentifier("case"), false);
  assertEquals(isIdentifier("catch"), false);
  assertEquals(isIdentifier("continue"), false);
  assertEquals(isIdentifier("debugger"), false);
  assertEquals(isIdentifier("default"), false);
  assertEquals(isIdentifier("delete"), false);
  assertEquals(isIdentifier("do"), false);
  assertEquals(isIdentifier("else"), false);
  assertEquals(isIdentifier("finally"), false);
  assertEquals(isIdentifier("for"), false);
  assertEquals(isIdentifier("function"), false);
  assertEquals(isIdentifier("if"), false);
  assertEquals(isIdentifier("import"), false);
  assertEquals(isIdentifier("in"), false);
  assertEquals(isIdentifier("instanceof"), false);
  assertEquals(isIdentifier("new"), false);
  assertEquals(isIdentifier("return"), false);
  assertEquals(isIdentifier("super"), false);
  assertEquals(isIdentifier("switch"), false);
  assertEquals(isIdentifier("this"), false);
  assertEquals(isIdentifier("throw"), false);
  assertEquals(isIdentifier("try"), false);
  assertEquals(isIdentifier("typeof"), false);
  assertEquals(isIdentifier("var"), false);
  assertEquals(isIdentifier("void"), false);
  assertEquals(isIdentifier("while"), false);
  assertEquals(isIdentifier("with"), false);
  assertEquals(isIdentifier("yield"), false);
  assertEquals(isIdentifier("enum"), false);
  assertEquals(isIdentifier("await"), false);
  assertEquals(isIdentifier("implements"), false);
  assertEquals(isIdentifier("interface"), false);
  assertEquals(isIdentifier("package"), false);
  assertEquals(isIdentifier("private"), false);
  assertEquals(isIdentifier("protected"), false);
  assertEquals(isIdentifier("public"), false);
  assertEquals(isIdentifier("static"), false);
});
