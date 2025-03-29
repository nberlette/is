/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/whitespace
 */
import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import type { IsExact } from "@nick/is/type/exact";
import { expectType } from "@nick/is/type/expect";
import {
  isWhitespace,
  isWhitespaceChar,
  isWhitespaceCode,
} from "./whitespace.ts";
import type {
  IsWhitespace,
  IsWhitespaceCode,
  Whitespace,
  WHITESPACE_CHARS,
  WhitespaceCode,
  WhitespaceString,
} from "./whitespace.ts";

describe("isWhitespace: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isWhitespace).toBe("function");
  });
  it("should be named 'isWhitespace'", () => {
    expect(isWhitespace.name).toBe("isWhitespace");
  });
  it("should have a length of 1", () => {
    expect(isWhitespace.length).toBe(1);
  });
  it("should have the correct type signature", () => {
    type Expected = {
      <S extends string>(it: string): it is IsWhitespace<S, S, never>;
      (it: unknown): it is WhitespaceString;
    };
    expectType<IsExact<Expected, typeof isWhitespace>>(true);
  });
});
describe("isWhitespace: behavior", () => {
  it("should return true for whitespace characters", () => {
    expect(
      isWhitespace("\u{9}"),
      "expected horizontal tab (\u0009) to return true",
    ).toBe(true);
  });
  it("should return true for line feed (\u000A)", () => {
    expect(isWhitespace("\u{A}"), "expected line feed (\u000A) to return true")
      .toBe(true);
  });
  it("should return true for vertical tab (\u000B)", () => {
    expect(
      isWhitespace("\u{B}"),
      "expected vertical tab (\u000B) to return true",
    ).toBe(true);
  });
  it("should return true for form feed (\u000C)", () => {
    expect(isWhitespace("\u{C}"), "expected form feed (\u000C) to return true")
      .toBe(true);
  });
  it("should return true for carriage return (\u000D)", () => {
    expect(
      isWhitespace("\u{D}"),
      "expected carriage return (\u000D) to return true",
    ).toBe(true);
  });
  it("should return true for ASCII space (\u0020)", () => {
    expect(
      isWhitespace("\u0020"),
      "expected ASCII space (\u0020) to return true",
    ).toBe(true);
  });
  it("should return true for non-breaking space (\u00A0)", () => {
    expect(
      isWhitespace("\u00A0"),
      "expected non-breaking space (\u00A0) to return true",
    ).toBe(true);
  });
  it("should return true for next line (\u0085)", () => {
    expect(isWhitespace("\u0085"), "expected next line (\u0085) to return true")
      .toBe(true);
  });
  it("should return true for ogham space mark (\u1680)", () => {
    expect(
      isWhitespace("\u1680"),
      "expected ogham space mark (\u1680) to return true",
    ).toBe(true);
  });
  it("should return true for en quad (\u2000)", () => {
    expect(isWhitespace("\u2000"), "expected en quad (\u2000) to return true")
      .toBe(true);
  });
  it("should return true for em quad (\u2001)", () => {
    expect(isWhitespace("\u2001"), "expected em quad (\u2001) to return true")
      .toBe(true);
  });
  it("should return true for en space (\u2002)", () => {
    expect(isWhitespace("\u2002"), "expected en space (\u2002) to return true")
      .toBe(true);
  });
  it("should return true for em space (\u2003)", () => {
    expect(isWhitespace("\u2003"), "expected em space (\u2003) to return true")
      .toBe(true);
  });
  it("should return true for three-per-em space (\u2004)", () => {
    expect(
      isWhitespace("\u2004"),
      "expected three-per-em space (\u2004) to return true",
    ).toBe(true);
  });
  it("should return true for four-per-em space (\u2005)", () => {
    expect(
      isWhitespace("\u2005"),
      "expected four-per-em space (\u2005) to return true",
    ).toBe(true);
  });
  it("should return true for six-per-em space (\u2006)", () => {
    expect(
      isWhitespace("\u2006"),
      "expected six-per-em space (\u2006) to return true",
    ).toBe(true);
  });
  it("should return true for figure space (\u2007)", () => {
    expect(
      isWhitespace("\u2007"),
      "expected figure space (\u2007) to return true",
    ).toBe(true);
  });
  it("should return true for punctuation space (\u2008)", () => {
    expect(
      isWhitespace("\u2008"),
      "expected punctuation space (\u2008) to return true",
    ).toBe(true);
  });
  it("should return true for thin space (\u2009)", () => {
    expect(
      isWhitespace("\u2009"),
      "expected thin space (\u2009) to return true",
    ).toBe(true);
  });
  it("should return true for hair space (\u200A)", () => {
    expect(
      isWhitespace("\u200A"),
      "expected hair space (\u200A) to return true",
    ).toBe(true);
  });
  it("should return true for narrow no-break space (\u202F)", () => {
    expect(
      isWhitespace("\u202F"),
      "expected narrow no-break space (\u202F) to return true",
    ).toBe(true);
  });
  it("should return true for medium mathematical space (\u205F)", () => {
    expect(
      isWhitespace("\u205F"),
      "expected medium mathematical space (\u205F) to return true",
    ).toBe(true);
  });
  it("should return true for ideographic space (\u3000)", () => {
    expect(
      isWhitespace("\u3000"),
      "expected ideographic space (\u3000) to return true",
    ).toBe(true);
  });
  it("should return true for line separator (\u2028)", () => {
    expect(
      isWhitespace("\u2028"),
      "expected line separator (\u2028) to return true",
    ).toBe(true);
  });
  it("should return true for paragraph separator (\u2029)", () => {
    expect(
      isWhitespace("\u2029"),
      "expected paragraph separator (\u2029) to return true",
    ).toBe(true);
  });
  it("should return true for zero-width no-break space (aka BOM, \uFEFF)", () => {
    expect(
      isWhitespace("\uFEFF"),
      "expected zero-width no-break space (aka BOM, \uFEFF) to return true",
    ).toBe(true);
  });
  it("should return true for zero-width space (\u200B)", () => {
    expect(
      isWhitespace("\u200B"),
      "expected zero-width space (\u200B) to return true",
    ).toBe(true);
  });
  it("should return true for word joiner (\u2060)", () => {
    expect(
      isWhitespace("\u2060"),
      "expected word joiner (\u2060) to return true",
    ).toBe(true);
  });

  it("should return false for non-whitespace characters", () => {
    expect(isWhitespace("a")).toBe(false);
    expect(isWhitespace("1")).toBe(false);
    expect(isWhitespace("!")).toBe(false);
    expect(isWhitespace("")).toBe(false);
  });
});

describe("isWhitespaceChar: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isWhitespaceChar).toBe("function");
  });
  it("should be named 'isWhitespaceChar'", () => {
    expect(isWhitespaceChar.name).toBe("isWhitespaceChar");
  });
  it("should have a length of 1", () => {
    expect(isWhitespaceChar.length).toBe(1);
  });
  it("should have the correct type signature", () => {
    type Expected = {
      (it: unknown): it is Whitespace;
    };
    expectType<IsExact<Expected, typeof isWhitespaceChar>>(true);
  });
});
describe("isWhitespaceChar: behavior", () => {
  it("should return true for whitespace characters", () => {
    expect(
      isWhitespaceChar("\u{9}"),
      "expected horizontal tab (\u0009) to return true",
    ).toBe(true);
  });
  it("should return true for line feed (\u000A)", () => {
    expect(
      isWhitespaceChar("\u{A}"),
      "expected line feed (\u000A) to return true",
    ).toBe(true);
  });
  it("should return true for vertical tab (\u000B)", () => {
    expect(
      isWhitespaceChar("\u{B}"),
      "expected vertical tab (\u000B) to return true",
    ).toBe(true);
  });
  it("should return true for form feed (\u000C)", () => {
    expect(
      isWhitespaceChar("\u{C}"),
      "expected form feed (\u000C) to return true",
    ).toBe(true);
  });
  it("should return true for carriage return (\u000D)", () => {
    expect(
      isWhitespaceChar("\u{D}"),
      "expected carriage return (\u000D) to return true",
    ).toBe(true);
  });
  it("should return true for ASCII space (\u0020)", () => {
    expect(
      isWhitespaceChar("\u0020"),
      "expected ASCII space (\u0020) to return true",
    ).toBe(true);
  });
  it("should return true for non-breaking space (\u00A0)", () => {
    expect(
      isWhitespaceChar("\u00A0"),
      "expected non-breaking space (\u00A0) to return true",
    ).toBe(true);
  });
  it("should return true for next line (\u0085)", () => {
    expect(
      isWhitespaceChar("\u0085"),
      "expected next line (\u0085) to return true",
    ).toBe(true);
  });
  it("should return true for ogham space mark (\u1680)", () => {
    expect(
      isWhitespaceChar("\u1680"),
      "expected ogham space mark (\u1680) to return true",
    ).toBe(true);
  });
  it("should return true for en quad (\u2000)", () => {
    expect(
      isWhitespaceChar("\u2000"),
      "expected en quad (\u2000) to return true",
    ).toBe(true);
  });
  it("should return true for em quad (\u2001)", () => {
    expect(
      isWhitespaceChar("\u2001"),
      "expected em quad (\u2001) to return true",
    ).toBe(true);
  });
  it("should return true for en space (\u2002)", () => {
    expect(
      isWhitespaceChar("\u2002"),
      "expected en space (\u2002) to return true",
    ).toBe(true);
  });
  it("should return true for em space (\u2003)", () => {
    expect(
      isWhitespaceChar("\u2003"),
      "expected em space (\u2003) to return true",
    ).toBe(true);
  });
  it("should return true for three-per-em space (\u2004)", () => {
    expect(
      isWhitespaceChar("\u2004"),
      "expected three-per-em space (\u2004) to return true",
    ).toBe(true);
  });
  it("should return true for four-per-em space (\u2005)", () => {
    expect(
      isWhitespaceChar("\u2005"),
      "expected four-per-em space (\u2005) to return true",
    ).toBe(true);
  });
  it("should return true for six-per-em space (\u2006)", () => {
    expect(
      isWhitespaceChar("\u2006"),
      "expected six-per-em space (\u2006) to return true",
    ).toBe(true);
  });
  it("should return true for figure space (\u2007)", () => {
    expect(
      isWhitespaceChar("\u2007"),
      "expected figure space (\u2007) to return true",
    ).toBe(true);
  });
  it("should return true for punctuation space (\u2008)", () => {
    expect(
      isWhitespaceChar("\u2008"),
      "expected punctuation space (\u2008) to return true",
    ).toBe(true);
  });
  it("should return true for thin space (\u2009)", () => {
    expect(
      isWhitespaceChar("\u2009"),
      "expected thin space (\u2009) to return true",
    ).toBe(true);
  });
  it("should return true for hair space (\u200A)", () => {
    expect(
      isWhitespaceChar("\u200A"),
      "expected hair space (\u200A) to return true",
    ).toBe(true);
  });
  it("should return true for narrow no-break space (\u202F)", () => {
    expect(
      isWhitespaceChar("\u202F"),
      "expected narrow no-break space (\u202F) to return true",
    ).toBe(true);
  });
  it("should return true for medium mathematical space (\u205F)", () => {
    expect(
      isWhitespaceChar("\u205F"),
      "expected medium mathematical space (\u205F) to return true",
    ).toBe(true);
  });
  it("should return true for ideographic space (\u3000)", () => {
    expect(
      isWhitespaceChar("\u3000"),
      "expected ideographic space (\u3000) to return true",
    ).toBe(true);
  });
  it("should return true for line separator (\u2028)", () => {
    expect(
      isWhitespaceChar("\u2028"),
      "expected line separator (\u2028) to return true",
    ).toBe(true);
  });
  it("should return true for paragraph separator (\u2029)", () => {
    expect(
      isWhitespaceChar("\u2029"),
      "expected paragraph separator (\u2029) to return true",
    ).toBe(true);
  });
  it("should return true for zero-width no-break space (aka BOM, \uFEFF)", () => {
    expect(
      isWhitespaceChar("\uFEFF"),
      "expected zero-width no-break space (aka BOM, \uFEFF) to return true",
    ).toBe(true);
  });
  it("should return true for zero-width space (\u200B)", () => {
    expect(
      isWhitespaceChar("\u200B"),
      "expected zero-width space (\u200B) to return true",
    ).toBe(true);
  });
  it("should return true for word joiner (\u2060)", () => {
    expect(
      isWhitespaceChar("\u2060"),
      "expected word joiner (\u2060) to return true",
    ).toBe(true);
  });
  it("should return false for non-whitespace characters", () => {
    expect(isWhitespaceChar("a")).toBe(false);
    expect(isWhitespaceChar("1")).toBe(false);
    expect(isWhitespaceChar("!")).toBe(false);
    expect(isWhitespaceChar("")).toBe(false);
  });
  it("should return false for strings with length > 1", () => {
    expect(isWhitespaceChar("  ")).toBe(false);
    expect(isWhitespaceChar("\u200B\u200B")).toBe(false);
  });
  it("should return false for strings with length < 1", () => {
    expect(isWhitespaceChar("")).toBe(false);
  });
});

describe("isWhitespaceCode: characteristics", () => {
  it("should be a function", () => {
    expect(typeof isWhitespaceCode).toBe("function");
  });
  it("should be named 'isWhitespaceCode'", () => {
    expect(isWhitespaceCode.name).toBe("isWhitespaceCode");
  });
  it("should have a length of 1", () => {
    expect(isWhitespaceCode.length).toBe(1);
  });
  it("should have the correct type signature", () => {
    type Expected = {
      (it: unknown): it is WhitespaceCode;
    };
    expectType<IsExact<Expected, typeof isWhitespaceCode>>(true);
  });
});

describe("isWhitespaceCode: behavior", () => {
  it("should return true for whitespace character codes", () => {
    expect(isWhitespaceCode(0x0009)).toBe(true);
    expect(isWhitespaceCode(0x000A)).toBe(true);
    expect(isWhitespaceCode(0x000B)).toBe(true);
    expect(isWhitespaceCode(0x000C)).toBe(true);
    expect(isWhitespaceCode(0x000D)).toBe(true);
    expect(isWhitespaceCode(0x0020)).toBe(true);
    expect(isWhitespaceCode(0x00A0)).toBe(true);
    expect(isWhitespaceCode(0x0085)).toBe(true);
    expect(isWhitespaceCode(0x1680)).toBe(true);
    expect(isWhitespaceCode(0x2000)).toBe(true);
    expect(isWhitespaceCode(0x2001)).toBe(true);
    expect(isWhitespaceCode(0x2002)).toBe(true);
    expect(isWhitespaceCode(0x2003)).toBe(true);
    expect(isWhitespaceCode(0x2004)).toBe(true);
    expect(isWhitespaceCode(0x2005)).toBe(true);
    expect(isWhitespaceCode(0x2006)).toBe(true);
    expect(isWhitespaceCode(0x2007)).toBe(true);
    expect(isWhitespaceCode(0x2008)).toBe(true);
    expect(isWhitespaceCode(0x2009)).toBe(true);
    expect(isWhitespaceCode(0x200A)).toBe(true);
    expect(isWhitespaceCode(0x202F)).toBe(true);
    expect(isWhitespaceCode(0x205F)).toBe(true);
    expect(isWhitespaceCode(0x3000)).toBe(true);
    expect(isWhitespaceCode(0x2028)).toBe(true);
    expect(isWhitespaceCode(0x2029)).toBe(true);
    expect(isWhitespaceCode(0xFEFF)).toBe(true);
    expect(isWhitespaceCode(0x200B)).toBe(true);
    expect(isWhitespaceCode(0x2060)).toBe(true);
  });
  it("should return false for non-whitespace character codes", () => {
    expect(isWhitespaceCode(0x0041)).toBe(false);
    expect(isWhitespaceCode(0x0031)).toBe(false);
    expect(isWhitespaceCode(0x0021)).toBe(false);
    expect(isWhitespaceCode(0x0000)).toBe(false);
  });
  it("should return false for negative character codes", () => {
    expect(isWhitespaceCode(-1)).toBe(false);
  });
  it("should return false for character codes greater than 0x10FFFF", () => {
    expect(isWhitespaceCode(0x110000)).toBe(false);
  });
});

describe("Whitespace: string literal union type", () => {
  it("should be a string literal type", () => {
    expectType<IsExact<Whitespace, typeof WHITESPACE_CHARS[number]>>(true);
  });
});

describe("WhitespaceString: nominal [branded] type", () => {
  it("should be distinct from a generic string type", () => {
    expectType<IsExact<WhitespaceString, string>>(false);

    const s: string = " ";
    if (isWhitespace(s)) {
      expectType<IsExact<typeof s, WhitespaceString<string>>>(true);
    }

    const s2: unknown = " ";
    if (isWhitespace(s2)) {
      expectType<IsExact<typeof s2, WhitespaceString<string>>>(true);
    }
  });
});

describe("IsWhitespaceCode: type-level predicate", () => {
  it("should resolve to true for whitespace character codes", () => {
    expectType<IsWhitespaceCode<0x0009>>(true);
    expectType<IsWhitespaceCode<0x000A>>(true);
    expectType<IsWhitespaceCode<0x000B>>(true);
    expectType<IsWhitespaceCode<0x000C>>(true);
    expectType<IsWhitespaceCode<0x000D>>(true);
    expectType<IsWhitespaceCode<0x0020>>(true);
    expectType<IsWhitespaceCode<0x00A0>>(true);
    expectType<IsWhitespaceCode<0x0085>>(true);
    expectType<IsWhitespaceCode<0x1680>>(true);
    expectType<IsWhitespaceCode<0x2000>>(true);
    expectType<IsWhitespaceCode<0x2001>>(true);
    expectType<IsWhitespaceCode<0x2002>>(true);
    expectType<IsWhitespaceCode<0x2003>>(true);
    expectType<IsWhitespaceCode<0x2004>>(true);
    expectType<IsWhitespaceCode<0x2005>>(true);
    expectType<IsWhitespaceCode<0x2006>>(true);
    expectType<IsWhitespaceCode<0x2007>>(true);
    expectType<IsWhitespaceCode<0x2008>>(true);
    expectType<IsWhitespaceCode<0x2009>>(true);
    expectType<IsWhitespaceCode<0x200A>>(true);
    expectType<IsWhitespaceCode<0x2028>>(true);
    expectType<IsWhitespaceCode<0x2029>>(true);
    expectType<IsWhitespaceCode<0x202F>>(true);
    expectType<IsWhitespaceCode<0x205F>>(true);
    expectType<IsWhitespaceCode<0x3000>>(true);
    expectType<IsWhitespaceCode<0xFEFF>>(true);
  });

  it("should resolve to false for non-whitespace character codes", () => {
    expectType<IsWhitespaceCode<0x0041>>(false);
    expectType<IsWhitespaceCode<0x0031>>(false);
    expectType<IsWhitespaceCode<0x0021>>(false);
    expectType<IsWhitespaceCode<0x0000>>(false);
  });

  it("should resolve to false for negative character codes", () => {
    expectType<IsWhitespaceCode<-1>>(false);
  });

  it("should resolve to false for character codes greater than 0x10FFFF", () => {
    expectType<IsWhitespaceCode<0x110000>>(false);
  });

  it("should raise an error for non-numeric values", () => {
    // @ts-expect-error -- this is intentional
    expectType<IsWhitespaceCode<"a">>(false);
  });

  it("should accept custom `True` and `False` return types", () => {
    type CustomTrue = { ok: true };
    type CustomFalse = { ok: false };

    expectType<IsWhitespaceCode<0x0009, CustomTrue, CustomFalse>>({ ok: true });
    expectType<IsWhitespaceCode<0x0041, CustomTrue, CustomFalse>>({
      ok: false,
    });
  });
});

describe("IsWhitespace: type-level predicate", () => {
});
