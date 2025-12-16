---
layout: home

hero:
  name: "@nick/is"
  text: "Platform-agnostic, performant, and portable."
  tagline: 160+ dependency-free type guards for all
  actions:
    - theme: brand
      text: API
      link: /api
    - theme: alt
      text: Examples
      link: /examples

features:
  - title: "Portable"
    icon: <img src="https://api.iconify.design/simple-icons:jsr.svg" width="32" height="32" />
    description: |
      Compatible with Deno, Bun, Node, Cloudflare Workers, and modern browsers.
      Designed using standard ECMAScript APIs available on all major runtimes.

  - title: "Secure"
    icon: <img src="https://api.iconify.design/heroicons:mini-shield-check.svg?width=32&height=32" />
    description: |
      Zero dependencies. All predicates are hardened against prototype pollution
      and context issues commonly encountered with the `instanceof` operator.

  - title: "Tree-shakeable"
    icon: "heroicons:mini-trash"
    description: |
      Isolated submodules for each predicate, allowing your bundler to easily
      eliminate unused code paths, so you only ship the code you actually use.

  - title: "Thoroughly Tested"
    icon: "heroicons:mini-check-circle"
    description: |
      160+ predicates with close to 100% coverage, from over 500 unit tests.

  - title: "Fully Documented"
    icon: "heroicons:mini-book-open"
    description: |
      Each predicate is documented with examples and meaningful descriptions
      to help you grasp the exact purpose and usage of every single function.

  - title: "Really Fucking Fast"
    icon: "heroicons:mini-lightning-bolt"
    description: |
      Benchmarked against other libraries, like [lodash] and [underscore], to
      ensure that you're getting the best performance possible for your use case.

      [lodash]: https://lodash.com
      [underscore]: https://underscorejs.org
---
