/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/template-strings-array
 */

import { assertEquals } from "@std/assert";
import { isTemplateStringsArray } from "./template_strings_array.ts";

Deno.test("isTemplateStringsArray", function (): void {
  assertEquals(isTemplateStringsArray(["a", "b", "c"]), false);
  assertEquals(
    isTemplateStringsArray(Object.assign(["\x01"], { raw: ["\\x01"] })),
    true,
  );
  assertEquals(isTemplateStringsArray({ raw: ["a", "b", "c"] }), false);
  assertEquals(
    isTemplateStringsArray({ raw: ["a", "b", "c"], other: 1 }),
    false,
  );
  assertEquals(isTemplateStringsArray({ raw: 1 }), false);
});
