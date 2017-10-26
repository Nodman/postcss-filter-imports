# PostCSS Filter Imports [![Build Status][ci-img]][ci]

[PostCSS] plugin to remove imports that matches regexp.

[//]: #[PostCSS]: https://github.com/postcss/postcss
[//]: #[ci-img]:  https://travis-ci.org/Nodman/postcss-filter-imports.svg
[//]: #[ci]:      https://travis-ci.org/Nodman/postcss-filter-imports

For example with /\/dev/ regexp

```css
.foo {
  @import './dev-vars.scss';
  @import './vars.scss';
}
```

```css
.foo {
  @import './vars.scss';
}
```

## Usage

```js
postcss([ require('postcss-filter-imports') ])
```

See [PostCSS] docs for examples for your environment.
