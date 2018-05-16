# PostCSS Filter Imports

[PostCSS] plugin to remove imports that matches regexp.

For example with ```/\/dev/``` regexp

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
