/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.2/doc/map-like
 */

import { assert, assertFalse } from "@std/assert";
import { isMapLike, isMapLikeConstructor } from "./map_like.ts";

/**
 * Multiple valid MapLike fixtures.
 */
const validMapLikeDummy1 = {
  size: 0,
  has(_key: unknown) {
    return false;
  },
  get(_key: unknown) {
    return undefined;
  },
  set(_key: unknown, _value: unknown) {
    return this;
  },
  clear() {},
  delete(_key: unknown) {
    return false;
  },
  keys() {
    return [].values();
  },
  values() {
    return [].values();
  },
  entries() {
    return [].values();
  },
  forEach() {},
  [Symbol.iterator]() {
    return this.entries();
  },
  [Symbol.toStringTag]: "Map",
};

const validMapLikeDummy2 = {
  size: 2,
  has(key: unknown) {
    return key === "foo";
  },
  get(_key: unknown) {
    return undefined;
  },
  set(_key: unknown, _value: unknown) {
    return this;
  },
  clear() {},
  delete(_key: unknown) {
    return false;
  },
  keys() {
    return ["foo", "bar"].values();
  },
  values() {
    return [1, 2].values();
  },
  entries() {
    return [["foo", 1], ["bar", 2]].values();
  },
  forEach() {},
  [Symbol.iterator]() {
    return this.entries();
  },
  [Symbol.toStringTag]: "Map",
};

class CustomMap<K, V> extends Map<K, V> {
  constructor(iterable?: Iterable<[K, V]>) {
    super(iterable);
  }
}

const invalidMapLike1 = { size: 0, has: () => false };
const invalidMapLike2 = {
  size: 0,
  has(_key: unknown) {
    return false;
  },
};

Deno.test("isMapLike with valid fixtures", () => {
  assert(isMapLike(validMapLikeDummy1));
  assert(isMapLike(validMapLikeDummy2));
  assert(isMapLike(new Map()));
  assert(isMapLike(new CustomMap()));
});

Deno.test("isMapLike with invalid fixtures", () => {
  assertFalse(isMapLike(invalidMapLike1));
  assertFalse(isMapLike(invalidMapLike2));
  assertFalse(isMapLike({}));
  assertFalse(isMapLike(null));
});

Deno.test.ignore("isMapLikeConstructor with valid constructors", () => {
  function DummyMap(this: unknown, iterable?: Iterable<[unknown, unknown]>) {
    if (!(this instanceof DummyMap)) {
      // deno-lint-ignore no-explicit-any
      return new (DummyMap as any)(iterable);
    }
    (this as { size: number }).size = 0;
  }
  DummyMap.prototype = validMapLikeDummy1;
  assert(isMapLikeConstructor(DummyMap));
  assert(isMapLikeConstructor(CustomMap));
  assert(isMapLikeConstructor(Map));
});

Deno.test("isMapLikeConstructor with invalid constructors", () => {
  const nonConstructor = () => {};
  nonConstructor.prototype = validMapLikeDummy1;
  assertFalse(isMapLikeConstructor(nonConstructor));

  function InvalidMap(this: unknown) {
    (this as { size: number }).size = 0;
  }
  InvalidMap.prototype = {};
  assertFalse(isMapLikeConstructor(InvalidMap));
  assertFalse(isMapLikeConstructor({}));
});
