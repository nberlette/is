/*!
 * Copyright (c) 2024-2025 Nicholas Berlette. All rights reserved.
 * @license MIT (https://nick.mit-license.org/2024)
 * @see https://jsr.io/@nick/is@0.2.0-rc.4/doc/set-like
 */

import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";

import {
  type ExtendedSetLike,
  isExtendedSetLike,
  isExtendedSetLikeConstructor,
  isReadonlyCollection,
  isReadonlyCollectionConstructor,
  isSetLike,
  isSetLikeConstructor,
  type SetLike,
} from "./set_like.ts";

describe("isSetLike: fundamentals", () => {
  it("is a function", () => expect(isSetLike).toBeInstanceOf(Function));
  it("is named 'isSetLike'", () => expect(isSetLike.name).toBe("isSetLike"));
  it("has an arity of 1", () => expect(isSetLike).toHaveLength(1));
  it("returns a boolean", () => expect(isSetLike({})).toBe(false));
});

describe("isSetLike: behavior", () => {
  it("should return true for Set instances", () => {
    expect(isSetLike(new Set())).toBe(true);
  });

  it("should return true for ExtendedSetLike instances", () => {
    class ExtendedSet extends Set {}
    expect(isSetLike(new ExtendedSet())).toBe(true);
  });

  it("should return false for non-Set instances", () => {
    expect(isSetLike([])).toBe(false);
    expect(isSetLike(new WeakSet())).toBe(false);
    expect(isSetLike(new Map())).toBe(false);
  });

  it("should return false for non-object values", () => {
    expect(isSetLike(null)).toBe(false);
    expect(isSetLike(undefined)).toBe(false);
    expect(isSetLike(123)).toBe(false);
    expect(isSetLike("abc")).toBe(false);
    expect(isSetLike(true)).toBe(false);
  });
});

describe("isExtendedSetLike: fundamentals", () => {
  it("is a function", () => expect(isExtendedSetLike).toBeInstanceOf(Function));
  it("is named 'isExtendedSetLike'", () =>
    expect(isExtendedSetLike.name).toBe("isExtendedSetLike"));
  it("has an arity of 1", () => expect(isExtendedSetLike).toHaveLength(1));
  it("returns a boolean", () => expect(isExtendedSetLike({})).toBe(false));
});

describe("isExtendedSetLike: behavior", () => {
  it("should return true for Set instances", () => {
    expect(isExtendedSetLike(new Set())).toBe(true);
  });

  it("should return true for ExtendedSetLike instances", () => {
    // @ts-ignore bad types
    class ExtendedSet<T> extends Set implements ExtendedSetLike<T> {}
    expect(isExtendedSetLike(new ExtendedSet())).toBe(true);
    expect(isExtendedSetLike(
      new (class extends Set {
        constructor() {
          super();
        }
      })(),
    )).toBe(true);
  });

  it("should return false for non-Set instances", () => {
    expect(isExtendedSetLike([])).toBe(false);
    expect(isExtendedSetLike(new WeakSet())).toBe(false);
  });

  it("should return false for non-object values", () => {
    expect(isExtendedSetLike(null)).toBe(false);
    expect(isExtendedSetLike(undefined)).toBe(false);
    expect(isExtendedSetLike(123)).toBe(false);
    expect(isExtendedSetLike("abc")).toBe(false);
    expect(isExtendedSetLike(true)).toBe(false);
  });
});

describe("isSetLikeConstructor: fundamentals", () => {
  it("is a function", () =>
    expect(isSetLikeConstructor).toBeInstanceOf(Function));
  it("is named 'isSetLikeConstructor'", () =>
    expect(isSetLikeConstructor.name).toBe("isSetLikeConstructor"));
  it("has an arity of 1", () => expect(isSetLikeConstructor).toHaveLength(1));
  it("returns a boolean", () => expect(isSetLikeConstructor({})).toBe(false));
});

describe("isSetLikeConstructor: behavior", () => {
  it("should return true for Set constructors", () => {
    expect(isSetLikeConstructor(Set)).toBe(true);
  });

  it("should return true for ExtendedSetLike constructors", () => {
    // @ts-ignore bad types
    class SetLikeCtor<T> extends Set implements SetLike<T> {}
    expect(isSetLikeConstructor(SetLikeCtor)).toBe(true);
  });

  it("should return false for non-Set constructors", () => {
    expect(isSetLikeConstructor(Array)).toBe(false);
    expect(isSetLikeConstructor(Object)).toBe(false);
    expect(isSetLikeConstructor(Function)).toBe(false);
    expect(isSetLikeConstructor(Date)).toBe(false);
  });

  it("should return false for non-function values", () => {
    expect(isSetLikeConstructor(null)).toBe(false);
    expect(isSetLikeConstructor(undefined)).toBe(false);
    expect(isSetLikeConstructor(123)).toBe(false);
    expect(isSetLikeConstructor("abc")).toBe(false);
    expect(isSetLikeConstructor(true)).toBe(false);
  });
});

describe("isExtendedSetLikeConstructor: fundamentals", () => {
  it(
    "is a function",
    () => expect(isExtendedSetLikeConstructor).toBeInstanceOf(Function),
  );
  it("is named 'isExtendedSetLikeConstructor'", () =>
    expect(isExtendedSetLikeConstructor.name).toBe(
      "isExtendedSetLikeConstructor",
    ));
  it("has an arity of 1", () =>
    expect(isExtendedSetLikeConstructor).toHaveLength(1));
  it("returns a boolean", () =>
    expect(isExtendedSetLikeConstructor({})).toBe(false));
});

describe("isExtendedSetLikeConstructor: behavior", () => {
  it("should return true for Set constructors", () => {
    expect(isExtendedSetLikeConstructor(Set)).toBe(true);
  });

  it("should return true for ExtendedSetLike constructors", () => {
    // @ts-ignore bad types
    class ExtendedSet<T> extends Set implements ExtendedSetLike<T> {}
    expect(isExtendedSetLikeConstructor(ExtendedSet)).toBe(true);
  });

  it("should return false for non-Set constructors", () => {
    expect(isExtendedSetLikeConstructor(Array)).toBe(false);
    expect(isExtendedSetLikeConstructor(Object)).toBe(false);
    expect(isExtendedSetLikeConstructor(Function)).toBe(false);
    expect(isExtendedSetLikeConstructor(Date)).toBe(false);
  });

  it("should return false for non-function values", () => {
    expect(isExtendedSetLikeConstructor(null)).toBe(false);
    expect(isExtendedSetLikeConstructor(undefined)).toBe(false);
    expect(isExtendedSetLikeConstructor(123)).toBe(false);
    expect(isExtendedSetLikeConstructor("abc")).toBe(false);
    expect(isExtendedSetLikeConstructor(true)).toBe(false);
  });
  it("should return false for constructors that do not extend Set", () => {
    class NotSet {}
    expect(isExtendedSetLikeConstructor(NotSet)).toBe(false);
  });
  it("should return true for constructors that extend Set", () => {
    class ExtendedSet extends Set {}
    expect(isExtendedSetLikeConstructor(ExtendedSet)).toBe(true);
  });
  it("should return true for constructors that extend Set with generics", () => {
    // @ts-ignore bad types
    class ExtendedSet<T> extends Set<T> implements ExtendedSetLike<T> {}
    expect(isExtendedSetLikeConstructor(ExtendedSet)).toBe(true);
  });
});

describe("isReadonlyCollection: fundamentals", () => {
  it("is a function", () =>
    expect(isReadonlyCollection).toBeInstanceOf(Function));
  it("is named 'isReadonlyCollection'", () =>
    expect(isReadonlyCollection.name).toBe("isReadonlyCollection"));
  it("has an arity of 1", () => expect(isReadonlyCollection).toHaveLength(1));
  it("returns a boolean", () => expect(isReadonlyCollection({})).toBe(false));
});

describe("isReadonlyCollection: behavior", () => {
  it("should return true for Set instances", () => {
    expect(isReadonlyCollection(new Set())).toBe(true);
  });

  it("should return true for Map instances", () => {
    expect(isReadonlyCollection(new Map())).toBe(true);
  });

  it("should return false for non-Set instances", () => {
    expect(isReadonlyCollection([])).toBe(false);
    expect(isReadonlyCollection(new WeakSet())).toBe(false);
  });

  it("should return false for non-object values", () => {
    expect(isReadonlyCollection(null)).toBe(false);
    expect(isReadonlyCollection(undefined)).toBe(false);
    expect(isReadonlyCollection(123)).toBe(false);
    expect(isReadonlyCollection("abc")).toBe(false);
    expect(isReadonlyCollection(true)).toBe(false);
  });
});

describe("isReadonlyCollectionConstructor: fundamentals", () => {
  it("is a function", () =>
    expect(isReadonlyCollectionConstructor).toBeInstanceOf(Function));
  it("is named 'isReadonlyCollectionConstructor'", () =>
    expect(isReadonlyCollectionConstructor.name).toBe(
      "isReadonlyCollectionConstructor",
    ));
  it("has an arity of 1", () =>
    expect(isReadonlyCollectionConstructor).toHaveLength(1));
  it("returns a boolean", () =>
    expect(isReadonlyCollectionConstructor({})).toBe(false));
});

describe("isReadonlyCollectionConstructor: behavior", () => {
  it("should return true for Set constructors", () => {
    expect(isReadonlyCollectionConstructor(Set)).toBe(true);
  });

  it("should return true for Map constructors", () => {
    expect(isReadonlyCollectionConstructor(Map)).toBe(true);
  });

  it("should return false for non-Set constructors", () => {
    expect(isReadonlyCollectionConstructor(Array)).toBe(false);
    expect(isReadonlyCollectionConstructor(Object)).toBe(false);
    expect(isReadonlyCollectionConstructor(Function)).toBe(false);
    expect(isReadonlyCollectionConstructor(Date)).toBe(false);
  });

  it("should return false for non-function values", () => {
    expect(isReadonlyCollectionConstructor(null)).toBe(false);
    expect(isReadonlyCollectionConstructor(undefined)).toBe(false);
    expect(isReadonlyCollectionConstructor(123)).toBe(false);
    expect(isReadonlyCollectionConstructor("abc")).toBe(false);
    expect(isReadonlyCollectionConstructor(true)).toBe(false);
  });
});
