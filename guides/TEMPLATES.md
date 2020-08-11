# Blox Style Guide

## Table of Contents

1. [Terminology](#terminology)
   - [Module](#module)
   - [Partial](#partial)
   - [Component](#component)

2. [Architecture](#architecture)
   - [Component-based architecture](#component-based-architecture)
   - [Inversion of control](#inversion-of-control)

2. [License](#license)

## Terminology

### Template

A "template" is a Nunjucks (*.njk) file that is located in the "templates" directory.

### Module

A "module" is a reusable part of the ThemerCMS website. It could be a partial or a component.

### Partial

A "partial" is a part of a page that is used only once in the website, with the exception of a "layout partial" 
(located in the "layout" directory) such as a header and footer.

### Component

A "component" is a part of a website that is used multiple times.

**[⬆ back to top](#table-of-contents)**

## Architecture

### Component-based architecture

Using a reuse-based approach to defining, implementing and composing loosely coupled independent modules of a website
leads to a more cohesive, exensible and understandable code-base. Blox uses page partials and global components to implement a component-based architecture.

### Inversion of control

"Inversion of control" is a design pattern that allows for more extensibility. 

#### Components over partials

Prefer using components (Nunjucks macros) over partials because they allow you to pass values in and have more control over what the interface will look and behave.

**[⬆ back to top](#table-of-contents)**

## Modules

Every module should have its own Sass file with styles (and JS file if needed).

## Components

Aim to make a component highly configurable. At a minimum, components should allow for the following to be passed in:
    - ```blox``` object
    - background theme color name

**Bad**

```
{%- macro default() -%}
    // ...
{%- endmacro -%}

// call it
{{ bio.default() }}
```

**Good**

```
// background property is optional and defaults to "primary-contrast"
{%- macro default(
    blox, 
    background='primary-contrast'
    ) -%}
    // ...
{%- endmacro -%}

// call it
 {{ bio.default(blox) }}
```

**[⬆ back to top](#table-of-contents)**

## License

(The MIT License)

Copyright (c) 2015 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**