/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.3/doc/date-string
 */

import { assert, assertEquals } from "@std/assert";
import { expectType } from "./_internal.ts";
import { type DateString, isDateString } from "./date_string.ts";

Deno.test("isDateString: basic tests", () => {
  assertEquals(typeof isDateString, "function", "isDateString is a function");
  assertEquals(
    isDateString.name,
    "isDateString",
    "isDateString has the correct name",
  );
  assertEquals(isDateString.length, 1, "isDateString has the correct arity");
});

Deno.test("isDateString: behavior", () => {
  assert(
    isDateString("2023-10-01"),
    "isDateString recognizes valid date strings",
  );
  assertEquals(
    isDateString("2023-10-32"),
    false,
    "isDateString rejects invalid date strings",
  );
  assert(
    isDateString("2023-10-01T12:00:00Z"),
    "isDateString recognizes valid date-time strings",
  );
  assert(
    isDateString("2023-10-01T12:00:00"),
    "isDateString recognizes valid date-time strings",
  );
  assert(
    isDateString("2023-10-01T12:00:00+00:00"),
    "isDateString recognizes valid date-time strings with timezone",
  );
});

Deno.test("isDateString: exotic edge cases", () => {
  assert(
    isDateString("10.1-2023"),
    "isDateString recognizes valid date strings with unusual formats",
  );
  assert(
    isDateString("2023/01/01"),
    "isDateString recognizes valid date strings with unusual formats",
  );
  assert(
    isDateString("2023.01.01"),
    "isDateString recognizes valid date strings with unusual formats",
  );
  assert(
    isDateString("1.1.2023"),
    "isDateString recognizes valid date strings with unusual formats",
  );
  assertEquals(
    isDateString("01_10_2023"),
    false,
    "isDateString rejects invalid date strings with unusual formats",
  );
});

Deno.test("isDateString: type narrowing", () => {
  let value: unknown;
  if (isDateString(value)) expectType<DateString>(value);
  expectType<unknown>(value);

  // mimics an assertion function
  expectType<DateString>(isDateString(value) ? value : null!);

  let value2: DateString | object | null | undefined;
  if (isDateString(value2)) expectType<DateString>(value2);
});
