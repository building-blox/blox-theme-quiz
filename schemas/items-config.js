let itemsConfig = {
  "contentTypes": [
    {
      "displayName": "Feature",
      "items": [
        {
          "fields": {
            "title": "Modular architecture",
            "body": "<p>Blox uses a combination of industry standard technologies to create modular, reusable components.</p><h2>Templating</h2><p>Through the use of template inheritance, we can create child HTML components. In addition to this, we can also include blocks of HTML into a scope, and this is used in this project for partial components.</p><h2>Modular CSS</h2><p>One of the benefits of CSS-in-JS is that it abstracts the CSS model to the component level, rather than the document level. In this project, modularity of styles is achieved by placing Sass files at component level. CSS won't be scoped to the page as is with CSS-in-JS, but BEM naming is used instead to enforce scoping.</p><h2>Modular Javascript</h2><p>You don't need to write any Javascript for the project to work, but if you do want to use it you can choose to use it globally or at a component level.</p>",
            "image": "https://appyay.s3.amazonaws.com/e/5eafcebd834092647ff71ff3/a/5ecf2d52240cdd5c6cd63edc/w2400"
          }
        },
        {
          "fields": {
            "title": "Easily customizable",
            "body": "<p>This project comes with a common set of tasks to run for development and optimize for production, but these tasks can be changed or removed to suit your needs and new tasks can be plugged in easily.</p><p>Blox is built on top of Gulp.js, a steaming build system popular for its simplicity and huge ecosystem of plugins. Here's an example of how Gulp task that gets images from the<em> src</em> directory and pipes them to the <em>public</em> directory:</p><pre class=\"ql-syntax\" spellcheck=\"false\">gulp.task('images', function() {\n  return gulp.src(['src/assets/images/**/*.{gif,jpg,png,svg}'])\n      .pipe(gulp.dest('public/images'));\n});\n</pre><p>The Blox library only requires two things: Gulp for the build system and Nunjucks for templating. The rest is up to the developer.</p>",
            "image": "https://appyay.s3.amazonaws.com/e/5eafcebd834092647ff71ff3/a/5ecf2d52240cdd5c6cd63edc/w2400"
          }
        },
        {
          "fields": {
            "title": "Built for rapid development",
            "body": "<p>Blox makes it simple to take an HTML template and convert it into a dynamic data-driven static website! In fact, it will work out of the box if you copy and paste the HTML, CSS and Javascript into the right places. There is no CC-in-JS to deal with</p>",
            "image": "https://appyay.s3.amazonaws.com/e/5eafcebd834092647ff71ff3/a/5ecf2d52240cdd5c6cd63edc/w2400"
          }
        }
      ]
    }
  ]
}

module.exports = itemsConfig;