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