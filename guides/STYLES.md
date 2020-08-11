# ThemerCMS CSS / Sass Style Guide

## Table of Contents

1. [Terminology](#terminology)
   - [Rule Declaration](#rule-declaration)
   - [Selectors](#selectors)
   - [Properties](#properties)
2. [Architecture](#architecture)
3. [CSS](#css)
   - [Formatting](#formatting)
   - [Comments](#comments)
   - [OOCSS](#oocss)
   - [ID Selectors](#id-selectors)
   - [JavaScript hooks](#javascript-hooks)
   - [Border](#border)
4. [Sass](#sass)
   - [Syntax](#syntax)
   - [Ordering](#ordering-of-property-declarations)
   - [Variables](#variables)
   - [Mixins](#mixins)
   - [Extend directive](#extend-directive)
   - [Nested selectors](#nested-selectors)
5. [License](#license)

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.listing {
  font-size: 18px;
  line-height: 1.2;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */
 {
  background: #f1f1f1;
  color: #333;
}
```

**[⬆ back to top](#table-of-contents)**

## Architecture

### Theme

Wherever possible, use colors and fonts that are injected through ```Blox```. The available theme CSS variables can be found in [assets/scss/dist/_theme.scss](../src/assets/scss/dist/_theme.scss). 

Note: **Don't write anything in the ```assets/scss/dist``` directory as it will get over-written by ```Blox```!**

#### Colors

There are four ThemerCMS colors:
- ```primary```: This is generally used for main blocks of color (it has nothing to do with primary colors on the color wheel)
- ```secondary```: The main accent color (used for calls to action)
- ```variant``` (optional): This is a variant of the secondary color, or a supplimentary color
- ```dark```: Generally used for body text for light themes and background color for dark themes

There are also nine shades of lighter variants for each theme color.

### Sass

Write Sass in components where possible. Ideally, a component should be able to retain all styles in isolation.

Similarly, custom styles written in the ```assets/scss``` directory should only specify global, not component-based styles.

**[⬆ back to top](#table-of-contents)**

## CSS

### Formatting

- Use soft tabs (2 spaces) for indentation.
- Prefer dashes over camelCasing in class names.
- Do not use ID selectors.
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put a space before the opening brace `{` in rule declarations.
- In properties, put a space after, but not before, the `:` character.
- Put closing braces `}` of rule declarations on a new line.
- Put blank lines between rule declarations.

**Bad**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}
.no,
.nope,
.not_good {
  // ...
}
#lol-no {
  // ...
}
```

**Good**

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

### Comments

- Prefer line comments (`//` in Sass) to block comments.
- Prefer comments on their own line. Avoid end-of-line comments.
- Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### OOCSS without BEM

We encourage the use of OOCSS without BEM for these reasons:

- BEM adds verbosity
- BEM is not a commonly used methodology
- The component-based architecture of sites built with [Blox](https://github.com/building-blox/blox) negates the need to use BEM for creating composable components

**OOCSS**, or “Object Oriented CSS”, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of “objects”: reusable, repeatable snippets that can be used independently throughout a website.

- Nicole Sullivan's [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
- Smashing Magazine's [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**Example**

```html
<article class="listing-card is-featured">
  <h1>Adorable 2BR in the sunny Mission</h1>

  <div class="content">
    <p>Vestibulum id ligula porta felis euismod semper.</p>
  </div>
</article>
```

```scss
/* listing-card.sass */
.listing-card {
  h1 {
  }
  .content {
  }
}
.listing-card.is-featured {
}
```

- `.listing-card` represents the higher-level module (a page, partial or component)
- `h1` and `.component` represent descendants of `.listing-card`
- `.listing-card.is-featured` is a “modifier” and represents a different state or variation on the `.listing-card` module

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### JavaScript hooks

Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.js-`:

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

### Border

Use `0` instead of `none` to specify that a style has no border.

**Bad**

```css
.foo {
  border: none;
}
```

**Good**

```css
.foo {
  border: 0;
}
```

**[⬆ back to top](#table-of-contents)**

## Sass

### Syntax

- Use the `.scss` syntax, never the original `.sass` syntax
- Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. Property declarations

   List all standard property declarations, anything that isn't an `@include` or a nested selector.

   ```scss
   .btn-green {
     background: green;
     font-weight: bold;
     // ...
   }
   ```

2. `@include` declarations

   Grouping `@include`s at the end makes it easier to read the entire selector.

   ```scss
   .btn-green {
     background: green;
     font-weight: bold;
     @include transition(background 0.5s ease);
     // ...
   }
   ```

3. Nested selectors

   Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

   ```scss
   .btn {
     background: green;
     font-weight: bold;
     @include transition(background 0.5s ease);

     .icon {
       margin-right: 10px;
     }
   }
   ```

### Variables

Prefer CSS variables over Sass variables where possible. Unlike SASS variables, CSS variables 1) are scoped to the element they are declared on, 2) cascade and 3) can be manipulated in JavaScript.

Prefer dash-cased variable names (e.g. `$my-variable`) over camelCased or snake_cased variable names.

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Nested selectors

**Do not nest selectors more than three levels deep!**

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

- Strongly coupled to the HTML (fragile) _—OR—_
- Overly specific (powerful) _—OR—_
- Not reusable

Again: **never nest ID selectors!**

**[⬆ back to top](#table-of-contents)**

## License

(The MIT License)

Copyright (c) 2015 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**
