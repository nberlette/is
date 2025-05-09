/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.5/doc/data-view
 */

/**
 * Checks if a given value is a `DataView`.
 *
 * @param it The value to check.
 * @returns `true` if the value is a `DataView`, `false` otherwise.
 * @example
 * ```ts
 * import { isDataView } from "jsr:@nick/is/data-view";
 *
 * const buffer = new ArrayBuffer(8);
 * const view = new DataView(buffer);
 * console.log(isDataView(view)); // true
 * console.log(isDataView(buffer)); // false
 * ```
 * @category Binary Data Structures
 * @module data-view
 */
export function isDataView(it: unknown): it is DataView {
  try {
    const DataViewPrototypeGetByteLength = globalThis.Object
      .getOwnPropertyDescriptor(
        globalThis.DataView.prototype ?? {
          get byteLength() {
            throw new ReferenceError("DataView is not supported");
          },
        },
        "byteLength",
      )?.get;

    DataViewPrototypeGetByteLength?.call(it);
    return true;
  } catch {
    return false;
  }
}

export default isDataView;
