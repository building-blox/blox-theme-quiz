# ThemerCMS Guide

## Table of Contents

1.  [Terminology](#terminology)
   - [Schema](#schema)
   - [Content](#content)

2. [Architecture](#architecture)
   - [Use-case based architecture](#use-case-based-architecture)
   - [Content management architecture](#content-management-architecture)

3. [Style guides](#style-guides)
   - [Templates Style Guide](#templates-style-guide)
   - [CSS / Sass Style Guide](#css-/-sass-style-guide)

4. [License](#license)

## Terminology

### Schema

A "Schemas" is used to represent what content types (or "models") in the CMS will look like, for example, an "Article" or an "Event" are common content types for posts, and "Home" and "Contact" are common for pages.

### Content

"Content" is represented by "items" for a particlur content type.

## Architecture

ThemerCMS uses a use-case based approach to building CMS websites, and within that a component-based approach.

### Use-case based architecture

In order to closely align the build with client and user requirements, all site pages and components must comply to particular use-cases.

The ThemerCMS use-case based architecture looks like this:

- use-case
    - page(s)
        - partial(s)
        - component(s)
    - component(s)

Only the pages and modules specific to a use-case will be built and used within a ThemerCMS site, and similarly with the CMS schemas and content.

### Content management architecture

In order to implement a component-based content management architecture, schemas and content must be specified at component level.

## Style guides

### Templates Style Guide

The Templates Style Guide is located [here](TEMPLATES.md). It outlines the best practices for using the [Blox](https://github.com/building-blox/blox) library templates in ThemerCMS projects.

### CSS / Sass Style Guide

The Themer CSS / Sass Style Guide is located [here](STYLES.md). It outlines the best practices for writing CSS and Sass in ThemerCMS projects.

## License

(The MIT License)

Copyright (c) 2015 Airbnb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**