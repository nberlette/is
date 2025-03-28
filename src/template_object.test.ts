/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/template-object
 */

import { assertEquals } from "@std/assert";
import { isTemplateObject } from "./template_object.ts";

Deno.test("isTemplateObject", function (): void {
  assertEquals(isTemplateObject({ raw: ["a", "b", "c"] }), true);
  assertEquals(
    isTemplateObject({ raw: ["a", "b", "c"], other: 1 }),
    true,
  );
  assertEquals(
    isTemplateObject(Object.assign(["\x01"], { raw: ["\\x01"] })),
    true,
  );
  assertEquals(isTemplateObject({ raw: 1 }), false);
});
