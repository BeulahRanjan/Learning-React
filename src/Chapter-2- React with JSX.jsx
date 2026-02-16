/*
==================================================
REACT WITH JSX –
==================================================
This section introduces JSX as the syntax extension used by React to describe UI elements.
It explains how JSX maps to React elements, shares practical tips and best practices,
and shows how Babel transpiles JSX into browser-compatible JavaScript.
You’ll also learn the basics of Webpack, including loaders, and apply everything by
building and bundling a simple Recipes app using a Webpack build process.
==================================================
*/


/* React Elements as JSX

JSX was introduced by Facebook’s React team to provide a concise and readable syntax for creating complex DOM structures. 
JSX looks similar to HTML or XML, but it is actually a syntax extension for JavaScript that allows developers to write UI 
markup directly inside JavaScript code.

A React element can be created in two ways:
using React.createElement() or using JSX. JSX is simply a cleaner, more readable abstraction over React.createElement().

// React Element
React.createElement(IngredientsList, { list: [] }); 

The same element written with JSX:
<IngredientsList list={[]} />

Behind the scenes, JSX is transformed by Babel into React.createElement() calls before the code runs in the browser.
JSX allows developers to combine JavaScript logic and XML-like markup in one place. XML-style tags define the structure of the UI, 
while JavaScript expressions (wrapped in curly braces {}) allow dynamic data to be passed into components. This makes React code more expressive and 
easier to understand.

JSX supports:
- XML-like tags to describe UI structure
- JavaScript expressions inside {}
- Passing data, arrays, objects, and functions as component properties

By blending JavaScript and XML-style syntax, JSX enables developers to build reusable, component-based user interfaces in a clear and declarative way.
*/

/*
====================
 JSX Tips 
====================

- Nested components: JSX lets you place components inside other components.
- className: Use className instead of class (because class is reserved in JavaScript).
- JavaScript expressions: Use {} to evaluate variables, values, and expressions inside JSX.
- Evaluation: Expressions inside {} are executed (string concatenation, math, function calls).
- Mapping arrays: Use map() to convert arrays into JSX elements (each item needs a key).
- JSX compilation: Browsers don’t understand JSX directly—Babel converts JSX into createElement calls. */


/*
=========================
Babel 
========================

Babel is a JavaScript transpiler that converts modern JavaScript (ES6/ES7) and JSX into older JavaScript (ES5) that browsers can understand. 
Since browsers do not support JSX and may not support the latest JavaScript features, Babel is used to make the code compatible. Originally called 6to5, 
it was renamed Babel in 2015 and is widely used in production. Babel can transpile code in the browser using text/babel (for learning), but in production 
it is typically used with tools like webpack. */



/*
====================================
 Intro to Webpack 
 ===================================
What is Webpack?

Webpack is a module bundler used to prepare modern web applications (especially React apps) for production. It bundles, transforms, and optimizes application files so browsers can load them efficiently.

What is Production?

Production is the live version of an application that is deployed on a server and used by real users.

In production:

Code is optimized for speed and performance

Debugging tools and extra logs are removed

Files are minified and bundled

Stability and security are prioritized

Webpack is mainly used to prepare code for production, not just development.

Why Webpack is Needed

When working in production with React, developers must handle:

JSX and ES6+ transformation

Dependency management

Image and CSS optimization

Performance optimization

Webpack provides a single solution for all these needs.

What is a Module Bundler?

A module bundler takes multiple files such as:

JavaScript

JSX

ES6+

CSS / LESS

Images

and combines them into one or more optimized bundle files that the browser can load.

Benefits of Webpack
1. Modularity

Code is divided into small, reusable modules

Easier to maintain and collaborate on

Improves code organization

2. Network Performance

Each script tag creates an HTTP request

Multiple requests cause latency

Webpack bundles dependencies into a single file

Fewer requests = faster page load

Additional Features of Webpack
Transpiling

Uses Babel to convert ES6+ and JSX into browser-compatible JavaScript

Code Splitting

Breaks code into chunks loaded only when needed

Improves initial load time

Minification

Removes whitespace, comments, and unused code

Reduces file size

Feature Flagging

Enables code for specific environments or users

Useful for testing new features

Hot Module Replacement (HMR)

Updates only changed modules

No full page reload

Preserves application state */


/*
================
Webpack Loaders
================

Loaders in Webpack are functions that transform source code during the build process. 
They allow Webpack to handle files that browsers cannot read natively, such as ES6, JSX, and SCSS. Loaders like babel-loader transpile modern 
JavaScript and JSX into browser-compatible JavaScript, while styling loaders such as css-loader process CSS/SCSS files and bundle styles directly into JavaScript. 
This eliminates the need for separate <link> tags for stylesheets. */