export const { bind, call } = Function.prototype;

export const uncurryThis = bind.bind(call) as <
  T,
  // deno-lint-ignore no-explicit-any
  const A extends readonly unknown[] = any[],
  R = unknown,
>(
  fn: (this: T, ...args: A) => R,
) => (target: T, ...args: Parameters<typeof fn>) => ReturnType<typeof fn>;
